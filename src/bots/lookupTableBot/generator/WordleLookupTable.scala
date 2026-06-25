package dev.vrba.wordle.lookuptable

import io.circe.{Encoder, Json}

import scala.io.Source
import scala.math.log
import io.circe.syntax.EncoderOps

import java.io.{File, PrintWriter}

enum LetterEvaluation(val letter: Char) {
  case Correct extends LetterEvaluation('c')
  case Present extends LetterEvaluation('p')
  case Absent extends LetterEvaluation('a')
}

type EvaluationPattern = String

case class GuessEvaluation(letters: Seq[LetterEvaluation]) {
  def toPattern: EvaluationPattern =
    letters.map {
        case LetterEvaluation.Correct => "c"
        case LetterEvaluation.Present => "p"
        case LetterEvaluation.Absent => "a"
      }
      .mkString("")
}

type EvaluationCache = Map[(String, String), GuessEvaluation]

def evaluate(guess: String, answer: String): GuessEvaluation = {
  val correctLetters = guess
    .zip(answer)
    .map(_ == _)

  val remainingLetters = answer
    .zip(correctLetters)
    .map { case (letter, correct) => if correct then letter else null }
    .filterNot(_ == null)

  val (_, letters) = guess
    .zip(correctLetters)
    .foldLeft(remainingLetters -> List.empty[LetterEvaluation]) {
      case ((remaining, evaluation), (letter, correct)) =>
        if correct then remaining -> (evaluation :+ LetterEvaluation.Correct)
        else if remainingLetters.contains(letter) then remainingLetters.diff(List(letter)) -> (evaluation :+ LetterEvaluation.Present)
        else remainingLetters -> (evaluation :+ LetterEvaluation.Absent)
    }

  GuessEvaluation(letters)
}

def cachedEvaluate(guess: String, answer: String)(using cache: EvaluationCache): GuessEvaluation = {
  cache((guess, answer))
}

def buildEvaluationCache(wordlist: Seq[String]): EvaluationCache = {
  val pairs = for (
    guess <- wordlist;
    answer <- wordlist
  ) yield (guess, answer)

  pairs
    .map((guess, answer) => (guess, answer) -> evaluate(guess, answer))
    .toMap
}

def calculateEntropy(word: String, possibleAnswers: Seq[String])(using cache: EvaluationCache): Double = {
  val total = possibleAnswers.size

  possibleAnswers.size match {
    case 0 => 0.0
    case 1 => 0.0
    case n =>
      possibleAnswers
        .groupBy(answer => cachedEvaluate(word, answer))
        .values
        .foldLeft(0.0) { (sum, group) =>
          val p = group.size.toDouble / n.toDouble
          sum - p * (log(p) / log(2))
        }
  }
}

case class PatternTree(
                        word: String,
                        subtree: Option[Map[EvaluationPattern, Option[PatternTree]]] = None
                      ) {
  def toJson: String = this.asJson.spaces2
  def toDot(path: String = ""): String = {
    val subtreeDot =
      subtree match {
        case None => ""
        case Some(transitions) => transitions.map {
          case (pattern, None) => ""
          case (pattern, Some(subtree)) => {
            val color = pattern.map {
              case 'c' => "chartreuse4;0.20"
              case 'p' => "darkgoldenrod1;0.20"
              case 'a' => "gray23;0.20"
            }.mkString(":")

            s"""
               | node_${path + word} -> node_${path + word}_${subtree.word} [color="$color"]
               | ${subtree.toDot(s"${path + word}_")}
               |""".stripMargin
          }
        }.mkString("\n")
      }

    if path.isBlank then
      s"""
      |digraph WordleLookupTable {
      |  rankdir=TB;
      |  node [shape=circle, color=white];
      |  edge [penwidth=5.0, arrowshape=none];
      |
      |  node_${path + word} [label=${word.toUpperCase()}]
      |  $subtreeDot
      |}
      |""".stripMargin
    else
      s"""
         |  node_${path + word} [label=${word.toUpperCase()}]
         |  $subtreeDot
         |""".stripMargin
  }
}

object PatternTree {
  given Encoder[PatternTree] = Encoder.instance { tree =>
    val fields =
      List("w" -> tree.word.asJson) ++
        List("g" -> tree.subtree.map(_.asJson).asJson.dropNullValues)

    Json.obj(fields *).dropNullValues
  }
}

def computeLookupTableTree(
  currentWord: String,
  lookupPath: Seq[String],
  remainingCandidates: Seq[String],
  wordlist: Seq[String],
  depth: Int = 1
)(using cache: EvaluationCache): Option[PatternTree] = {
  if depth >= 6 then None
  else {
    val excluded = lookupPath ++ List(currentWord)
    val subtrees = remainingCandidates
      .diff(excluded)
      .groupBy(answer => cachedEvaluate(currentWord, answer))
      .map { (evaluation, candidates) =>
        if candidates.isEmpty then evaluation.toPattern -> None
        else if candidates.size == 1 then evaluation.toPattern -> Some(PatternTree(candidates.head))
        else {
          val bestWord = wordlist
            .diff(excluded)
            .maxBy(word => calculateEntropy(word, candidates))

          evaluation.toPattern -> computeLookupTableTree(bestWord, excluded, candidates, wordlist, depth + 1)
        }
      }

    Some(
      PatternTree(
        currentWord,
        if subtrees.isEmpty then None else Some(subtrees)
      )
    )
  }
}

@main
def main(): Unit = {
  val wordlist = Source
    .fromResource("wordlist.txt")
    .getLines()
    .map(_.trim)
    .filter(_.nonEmpty)
    .toSeq

  given cache: EvaluationCache = buildEvaluationCache(wordlist)

  val startingWord = wordlist.maxBy(word => calculateEntropy(word, wordlist))
  val lookupTableOption = computeLookupTableTree(startingWord, Seq.empty, wordlist, wordlist)

  lookupTableOption match {
    case None => throw new RuntimeException("Cannot write lookup table output, the constructed table is None.")
    case Some(lookupTable) => {
      {
        val writer = PrintWriter(File("./lookup-table.json"))
        try writer.write(lookupTable.toJson) finally writer.close()
      }
      {
        val writer = PrintWriter(File("./lookup-table.dot"))
        try writer.write(lookupTable.toDot()) finally writer.close()
      }
    }
  }

  println("We ball :)")
}
