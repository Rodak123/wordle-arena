import type { LetterStatus } from '../allowedContext.ts';
import { ASolverBot, type Guess, type BotMeta } from '../allowedContext.ts';

type Clue = 'c' | 'p' | 'a';
type Evaluation = `${Clue}${Clue}${Clue}${Clue}${Clue}`;

type LookupTableSubtree = {
  w: string;
  g?: Partial<Record<Evaluation, LookupTableSubtree>>;
};

export class LookupTableBot extends ASolverBot {
  private lookupTable: LookupTableSubtree = {
    w: 'raise',
    g: {
      apaaa: {
        w: 'float',
        g: {
          aaapa: {
            w: 'aback',
            g: {
              aacpa: {
                w: 'champ',
              },
              pacaa: {
                w: 'guava',
              },
              aaccc: {
                w: 'knack',
                g: {
                  aaccc: {
                    w: 'quack',
                    g: {
                      aaccc: {
                        w: 'whack',
                      },
                    },
                  },
                },
              },
            },
          },
          aappc: {
            w: 'abbot',
          },
          aacpc: {
            w: 'about',
            g: {
              cacac: {
                w: 'adopt',
              },
            },
          },
          aaapc: {
            w: 'adapt',
            g: {
              aacac: {
                w: 'chant',
              },
            },
          },
          apapc: {
            w: 'adult',
          },
          pacpc: {
            w: 'afoot',
          },
          ppcpa: {
            w: 'afoul',
          },
          apppa: {
            w: 'koala',
            g: {
              apppa: {
                w: 'aglow',
              },
              accpa: {
                w: 'loamy',
              },
              pcapc: {
                w: 'polka',
              },
            },
          },
          aacpa: {
            w: 'agony',
            g: {
              cpcca: {
                w: 'among',
              },
            },
          },
          acapa: {
            w: 'black',
            g: {
              pcpaa: {
                w: 'album',
              },
              acpaa: {
                w: 'alpha',
              },
              cccaa: {
                w: 'bland',
              },
              cccac: {
                w: 'blank',
              },
              acccc: {
                w: 'clack',
              },
              accpa: {
                w: 'clamp',
                g: {
                  cccaa: {
                    w: 'clang',
                  },
                },
              },
              accpc: {
                w: 'clank',
              },
              accaa: {
                w: 'llama',
                g: {
                  accaa: {
                    w: 'gland',
                  },
                  accac: {
                    w: 'plaza',
                  },
                },
              },
              accac: {
                w: 'plank',
              },
            },
          },
          acaca: {
            w: 'allay',
          },
          acppc: {
            w: 'allot',
          },
          acppa: {
            w: 'allow',
            g: {
              cccca: {
                w: 'alloy',
              },
            },
          },
          pccpc: {
            w: 'aloft',
          },
          accpa: {
            w: 'along',
            g: {
              cccaa: {
                w: 'aloud',
              },
            },
          },
          pccpa: {
            w: 'aloof',
          },
          apapa: {
            w: 'amply',
            g: {
              caapa: {
                w: 'annul',
              },
              caccc: {
                w: 'apply',
              },
              paaca: {
                w: 'chalk',
              },
              ppaca: {
                w: 'qualm',
              },
            },
          },
          aappa: {
            w: 'comma',
            g: {
              apaap: {
                w: 'annoy',
              },
              ccaap: {
                w: 'coach',
              },
              ccaac: {
                w: 'cocoa',
              },
              acacc: {
                w: 'dogma',
              },
              pcpac: {
                w: 'mocha',
              },
              acaac: {
                w: 'vodka',
              },
            },
          },
          apapp: {
            w: 'aptly',
          },
          apcpp: {
            w: 'atoll',
          },
          aaapp: {
            w: 'aunty',
            g: {
              pccca: {
                w: 'junta',
              },
              pappa: {
                w: 'thank',
                g: {
                  cacca: {
                    w: 'twang',
                  },
                },
              },
            },
          },
          ppapa: {
            w: 'awful',
          },
          acccc: {
            w: 'bloat',
            g: {
              acccc: {
                w: 'gloat',
              },
            },
          },
          apaca: {
            w: 'bylaw',
          },
          paapa: {
            w: 'chaff',
          },
          accca: {
            w: 'cloak',
          },
          ccapa: {
            w: 'flack',
            g: {
              cccap: {
                w: 'flaky',
              },
              cccac: {
                w: 'flank',
              },
            },
          },
          cappa: {
            w: 'foamy',
          },
          cppca: {
            w: 'focal',
          },
          aapca: {
            w: 'gonad',
            g: {
              acpcc: {
                w: 'nomad',
              },
              acpca: {
                w: 'woman',
              },
            },
          },
          aaaca: {
            w: 'human',
          },
          apppp: {
            w: 'loath',
          },
          appca: {
            w: 'local',
            g: {
              ccacc: {
                w: 'loyal',
              },
              acacc: {
                w: 'modal',
                g: {
                  acacc: {
                    w: 'zonal',
                  },
                },
              },
              acccc: {
                w: 'vocal',
              },
            },
          },
          appcp: {
            w: 'octal',
            g: {
              papcc: {
                w: 'tonal',
              },
              paccc: {
                w: 'total',
              },
            },
          },
          pppca: {
            w: 'offal',
          },
          acapc: {
            w: 'plant',
          },
          aacpp: {
            w: 'quota',
          },
          aapcp: {
            w: 'today',
            g: {
              ccaca: {
                w: 'topaz',
              },
            },
          },
          aappp: {
            w: 'tonga',
          },
          apacp: {
            w: 'tubal',
          },
        },
      },
      apacc: {
        w: 'cease',
        g: {
          aaccc: {
            w: 'abase',
            g: {
              aaccc: {
                w: 'phase',
              },
            },
          },
          aapcc: {
            w: 'abuse',
            g: {
              caccc: {
                w: 'amuse',
              },
            },
          },
          caccc: {
            w: 'chase',
          },
          acccc: {
            w: 'lease',
            g: {
              acccc: {
                w: 'tease',
              },
            },
          },
        },
      },
      apaac: {
        w: 'blade',
        g: {
          pacac: {
            w: 'abate',
          },
          papcc: {
            w: 'abode',
          },
          papac: {
            w: 'above',
          },
          aapac: {
            w: 'acute',
            g: {
              caapc: {
                w: 'atone',
              },
              caaac: {
                w: 'awoke',
              },
            },
          },
          aacpc: {
            w: 'adage',
          },
          pappc: {
            w: 'adobe',
          },
          aacac: {
            w: 'heave',
            g: {
              aacac: {
                w: 'agape',
                g: {
                  cccac: {
                    w: 'agate',
                  },
                  cacac: {
                    w: 'amaze',
                    g: {
                      cacac: {
                        w: 'awake',
                      },
                    },
                  },
                  aacac: {
                    w: 'quake',
                  },
                },
              },
              pacac: {
                w: 'chafe',
              },
              aaccc: {
                w: 'knave',
              },
              aacpc: {
                w: 'ovate',
              },
              accac: {
                w: 'peace',
              },
              acccc: {
                w: 'weave',
              },
            },
          },
          acpac: {
            w: 'algae',
            g: {
              ccaac: {
                w: 'alone',
              },
            },
          },
          pppac: {
            w: 'amble',
          },
          appac: {
            w: 'ample',
            g: {
              caacc: {
                w: 'angle',
                g: {
                  ccacc: {
                    w: 'ankle',
                  },
                },
              },
              caccc: {
                w: 'apple',
              },
            },
          },
          aapcc: {
            w: 'anode',
          },
          cccac: {
            w: 'blame',
            g: {
              cccac: {
                w: 'blaze',
              },
            },
          },
          accac: {
            w: 'plate',
            g: {
              acccc: {
                w: 'elate',
              },
              accac: {
                w: 'flake',
                g: {
                  cccac: {
                    w: 'flame',
                  },
                  accac: {
                    w: 'glaze',
                  },
                },
              },
              cccac: {
                w: 'place',
                g: {
                  cccac: {
                    w: 'plane',
                  },
                },
              },
            },
          },
          aaccc: {
            w: 'evade',
          },
          acccc: {
            w: 'glade',
          },
          apcac: {
            w: 'leave',
            g: {
              pacac: {
                w: 'whale',
              },
            },
          },
        },
      },
      apaap: {
        w: 'cleat',
        g: {
          aappa: {
            w: 'beady',
            g: {
              pppac: {
                w: 'abbey',
              },
              appaa: {
                w: 'annex',
                g: {
                  cacca: {
                    w: 'apnea',
                  },
                },
              },
              acccc: {
                w: 'heady',
              },
              accac: {
                w: 'heavy',
              },
            },
          },
          apppa: {
            w: 'fella',
            g: {
              apcap: {
                w: 'abled',
              },
              appap: {
                w: 'angel',
              },
              pcpap: {
                w: 'leafy',
              },
              acpap: {
                w: 'leaky',
              },
              acacp: {
                w: 'mealy',
              },
            },
          },
          aacpc: {
            w: 'adept',
            g: {
              cacac: {
                w: 'agent',
              },
            },
          },
          aacca: {
            w: 'ahead',
            g: {
              aaccc: {
                w: 'knead',
              },
            },
          },
          acppa: {
            w: 'alley',
          },
          aacpa: {
            w: 'amend',
            g: {
              ppcpa: {
                w: 'enema',
              },
              pacca: {
                w: 'hyena',
              },
              pccaa: {
                w: 'omega',
              },
            },
          },
          pappa: {
            w: 'beach',
            g: {
              acpca: {
                w: 'mecca',
              },
              acccc: {
                w: 'peach',
              },
            },
          },
          aapca: {
            w: 'began',
            g: {
              pcaca: {
                w: 'kebab',
              },
              acccc: {
                w: 'vegan',
              },
            },
          },
          aapcc: {
            w: 'begat',
          },
          accca: {
            w: 'gleam',
            g: {
              accca: {
                w: 'bleak',
                g: {
                  accca: {
                    w: 'plead',
                  },
                },
              },
              cccca: {
                w: 'glean',
              },
            },
          },
          acccc: {
            w: 'bleat',
            g: {
              acccc: {
                w: 'pleat',
              },
            },
          },
          cacca: {
            w: 'cheap',
          },
          caccc: {
            w: 'cheat',
          },
          cccca: {
            w: 'clean',
          },
          apppc: {
            w: 'leant',
            g: {
              pccac: {
                w: 'dealt',
              },
              ppcac: {
                w: 'exalt',
              },
              cccac: {
                w: 'leapt',
              },
            },
          },
          aappp: {
            w: 'death',
            g: {
              acccc: {
                w: 'heath',
              },
              accca: {
                w: 'meaty',
              },
            },
          },
          pppca: {
            w: 'decal',
            g: {
              acccc: {
                w: 'fecal',
              },
            },
          },
          papca: {
            w: 'decay',
            g: {
              accca: {
                w: 'pecan',
              },
            },
          },
          appca: {
            w: 'pedal',
            g: {
              acpcp: {
                w: 'delay',
              },
              apacc: {
                w: 'equal',
              },
              acacc: {
                w: 'legal',
              },
              acccc: {
                w: 'medal',
              },
              ccacc: {
                w: 'penal',
              },
            },
          },
          apppp: {
            w: 'delta',
          },
          pppcc: {
            w: 'eclat',
          },
          pappc: {
            w: 'enact',
            g: {
              caccc: {
                w: 'exact',
              },
            },
          },
          appcp: {
            w: 'fetal',
            g: {
              acccc: {
                w: 'metal',
                g: {
                  acccc: {
                    w: 'petal',
                  },
                },
              },
            },
          },
          ppppa: {
            w: 'leach',
          },
          aappc: {
            w: 'meant',
          },
          pacca: {
            w: 'ocean',
          },
          pappp: {
            w: 'teach',
          },
          aacpp: {
            w: 'theta',
          },
          aaccp: {
            w: 'tweak',
          },
          aaccc: {
            w: 'wheat',
          },
        },
      },
      ppaaa: {
        w: 'adorn',
        g: {
          cappa: {
            w: 'arbor',
            g: {
              capcc: {
                w: 'abhor',
              },
              caacc: {
                w: 'actor',
              },
              cpapa: {
                w: 'aorta',
              },
              ccacc: {
                w: 'armor',
              },
              ccacp: {
                w: 'arrow',
              },
            },
          },
          cacca: {
            w: 'abort',
          },
          caccc: {
            w: 'acorn',
          },
          caaca: {
            w: 'alarm',
            g: {
              cacca: {
                w: 'apart',
              },
            },
          },
          caapa: {
            w: 'altar',
            g: {
              caacp: {
                w: 'array',
              },
              caaac: {
                w: 'augur',
              },
            },
          },
          caacp: {
            w: 'angry',
          },
          cappc: {
            w: 'apron',
          },
          cpppa: {
            w: 'ardor',
          },
          cacpa: {
            w: 'aroma',
          },
          cpaca: {
            w: 'award',
          },
          pppca: {
            w: 'board',
            g: {
              acccc: {
                w: 'hoard',
              },
            },
          },
          pappa: {
            w: 'molar',
            g: {
              acacp: {
                w: 'borax',
                g: {
                  accca: {
                    w: 'foray',
                  },
                },
              },
              apapp: {
                w: 'bravo',
              },
              acpcp: {
                w: 'coral',
              },
              ccpcp: {
                w: 'moral',
              },
              acccc: {
                w: 'polar',
              },
            },
          },
          ppapp: {
            w: 'brand',
            g: {
              acccp: {
                w: 'drank',
              },
              acccc: {
                w: 'grand',
              },
            },
          },
          paapa: {
            w: 'tract',
            g: {
              accaa: {
                w: 'graph',
                g: {
                  accaa: {
                    w: 'brawl',
                  },
                  cccaa: {
                    w: 'gravy',
                  },
                },
              },
              accca: {
                w: 'crack',
                g: {
                  acccc: {
                    w: 'wrack',
                  },
                },
              },
              accpc: {
                w: 'craft',
              },
              accpa: {
                w: 'cramp',
                g: {
                  cccaa: {
                    w: 'crawl',
                    g: {
                      cccaa: {
                        w: 'crazy',
                      },
                    },
                  },
                },
              },
              accac: {
                w: 'graft',
              },
              appaa: {
                w: 'mural',
              },
              cccca: {
                w: 'track',
              },
              cccaa: {
                w: 'tramp',
                g: {
                  cccaa: {
                    w: 'trawl',
                  },
                },
              },
              pccaa: {
                w: 'wrath',
              },
            },
          },
          paapc: {
            w: 'brawn',
            g: {
              acccc: {
                w: 'prawn',
              },
              pcpac: {
                w: 'urban',
              },
            },
          },
          ppcpa: {
            w: 'broad',
          },
          ppaca: {
            w: 'chard',
            g: {
              aaccp: {
                w: 'dwarf',
              },
              aaccc: {
                w: 'guard',
              },
            },
          },
          paaca: {
            w: 'chart',
            g: {
              cccca: {
                w: 'charm',
              },
              aacca: {
                w: 'quark',
              },
              aaccc: {
                w: 'quart',
              },
              aapcp: {
                w: 'ultra',
              },
              aapca: {
                w: 'umbra',
              },
              accca: {
                w: 'wharf',
              },
            },
          },
          papca: {
            w: 'cobra',
            g: {
              apacp: {
                w: 'ovary',
              },
            },
          },
          paapp: {
            w: 'crank',
            g: {
              acccc: {
                w: 'frank',
                g: {
                  acccc: {
                    w: 'prank',
                  },
                },
              },
              accca: {
                w: 'grant',
              },
              apppa: {
                w: 'lunar',
              },
            },
          },
          pacpa: {
            w: 'croak',
          },
          ppapa: {
            w: 'draft',
            g: {
              cccaa: {
                w: 'drama',
                g: {
                  cccaa: {
                    w: 'drawl',
                  },
                },
              },
              pccpa: {
                w: 'fraud',
              },
            },
          },
          ppapc: {
            w: 'drawn',
          },
          pacca: {
            w: 'flora',
          },
          pacpc: {
            w: 'groan',
          },
          pappc: {
            w: 'organ',
          },
        },
      },
      apcac: {
        w: 'alike',
        g: {
          cacac: {
            w: 'abide',
            g: {
              cacac: {
                w: 'anime',
              },
            },
          },
          cpcac: {
            w: 'agile',
          },
          cccac: {
            w: 'alive',
          },
        },
      },
      apaca: {
        w: 'slash',
        g: {
          papca: {
            w: 'abyss',
          },
          pacca: {
            w: 'amass',
          },
          aapca: {
            w: 'angst',
          },
          aaccc: {
            w: 'awash',
            g: {
              aaccc: {
                w: 'gnash',
                g: {
                  aaccc: {
                    w: 'quash',
                  },
                },
              },
            },
          },
          accca: {
            w: 'blast',
            g: {
              accca: {
                w: 'clasp',
                g: {
                  accca: {
                    w: 'flask',
                  },
                },
              },
            },
          },
          aacca: {
            w: 'boast',
            g: {
              acccc: {
                w: 'coast',
                g: {
                  acccc: {
                    w: 'toast',
                  },
                },
              },
            },
          },
          aaccp: {
            w: 'chasm',
          },
          acccc: {
            w: 'clash',
            g: {
              acccc: {
                w: 'flash',
              },
            },
          },
          pccca: {
            w: 'class',
            g: {
              acccc: {
                w: 'glass',
              },
            },
          },
          caccc: {
            w: 'smash',
            g: {
              caccc: {
                w: 'stash',
                g: {
                  caccc: {
                    w: 'swash',
                  },
                },
              },
            },
          },
          cacca: {
            w: 'spasm',
          },
        },
      },
      pppaa: {
        w: 'trail',
        g: {
          appca: {
            w: 'acrid',
          },
          accca: {
            w: 'braid',
            g: {
              cccca: {
                w: 'brain',
              },
              acccp: {
                w: 'drain',
              },
              accca: {
                w: 'grain',
              },
            },
          },
          apcca: {
            w: 'chair',
          },
          apppa: {
            w: 'cigar',
            g: {
              ccapp: {
                w: 'circa',
              },
              pcacc: {
                w: 'vicar',
              },
            },
          },
          apcpa: {
            w: 'diary',
          },
          apccp: {
            w: 'flair',
          },
          acccc: {
            w: 'frail',
            g: {
              acccc: {
                w: 'grail',
              },
            },
          },
          cpcpa: {
            w: 'tiara',
          },
          cccca: {
            w: 'train',
            g: {
              cccca: {
                w: 'trait',
              },
            },
          },
          apppc: {
            w: 'viral',
          },
        },
      },
      appaa: {
        w: 'tidal',
        g: {
          apppa: {
            w: 'aphid',
            g: {
              caacp: {
                w: 'admin',
              },
              caacc: {
                w: 'avoid',
              },
            },
          },
          ppppa: {
            w: 'admit',
          },
          apapa: {
            w: 'affix',
            g: {
              caaca: {
                w: 'again',
              },
              paaca: {
                w: 'chain',
              },
              paapa: {
                w: 'khaki',
              },
            },
          },
          ppapa: {
            w: 'antic',
            g: {
              caccc: {
                w: 'attic',
              },
              capca: {
                w: 'await',
              },
            },
          },
          apapc: {
            w: 'anvil',
            g: {
              capcc: {
                w: 'avail',
              },
              paacc: {
                w: 'flail',
                g: {
                  aaccc: {
                    w: 'quail',
                  },
                },
              },
            },
          },
          apcpa: {
            w: 'audio',
          },
          ppcpa: {
            w: 'audit',
          },
          apapp: {
            w: 'claim',
            g: {
              accca: {
                w: 'plain',
              },
            },
          },
          acacc: {
            w: 'final',
          },
          pcapa: {
            w: 'giant',
          },
          apacp: {
            w: 'inlay',
          },
          acacp: {
            w: 'lilac',
          },
          acapa: {
            w: 'ninja',
            g: {
              pcaap: {
                w: 'piano',
              },
              acaac: {
                w: 'pizza',
              },
            },
          },
          apppp: {
            w: 'plaid',
          },
          ppapp: {
            w: 'plait',
          },
          ccapa: {
            w: 'tibia',
          },
          ccaca: {
            w: 'titan',
          },
          acapp: {
            w: 'villa',
            g: {
              ccacc: {
                w: 'viola',
              },
            },
          },
          pcacc: {
            w: 'vital',
          },
        },
      },
      ppaac: {
        w: 'grace',
        g: {
          appac: {
            w: 'adore',
            g: {
              caacc: {
                w: 'azure',
              },
            },
          },
          pppac: {
            w: 'agree',
          },
          pcpac: {
            w: 'argue',
          },
          apcac: {
            w: 'blare',
            g: {
              aaccc: {
                w: 'aware',
              },
              acccc: {
                w: 'flare',
              },
            },
          },
          acccc: {
            w: 'brace',
            g: {
              acccc: {
                w: 'trace',
              },
            },
          },
          accac: {
            w: 'drake',
            g: {
              acccc: {
                w: 'brake',
              },
              accac: {
                w: 'brave',
                g: {
                  accac: {
                    w: 'frame',
                  },
                },
              },
              cccac: {
                w: 'drape',
              },
              pccac: {
                w: 'trade',
              },
            },
          },
          accpc: {
            w: 'crane',
            g: {
              cccac: {
                w: 'crate',
                g: {
                  cccac: {
                    w: 'crave',
                    g: {
                      cccac: {
                        w: 'craze',
                      },
                    },
                  },
                },
              },
            },
          },
          cpcac: {
            w: 'glare',
          },
          cccac: {
            w: 'grade',
            g: {
              cccac: {
                w: 'grape',
                g: {
                  cccac: {
                    w: 'grate',
                    g: {
                      cccac: {
                        w: 'grave',
                        g: {
                          cccac: {
                            w: 'graze',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      ppcac: {
        w: 'afire',
      },
      ppaap: {
        w: 'alert',
        g: {
          cappp: {
            w: 'after',
          },
          ccppp: {
            w: 'alter',
          },
          cappa: {
            w: 'amber',
            g: {
              caacc: {
                w: 'anger',
              },
            },
          },
          cacpa: {
            w: 'arena',
          },
          caccc: {
            w: 'avert',
          },
          papca: {
            w: 'beard',
            g: {
              acccc: {
                w: 'heard',
              },
              accca: {
                w: 'weary',
                g: {
                  acccp: {
                    w: 'yearn',
                  },
                },
              },
              pcpca: {
                w: 'zebra',
              },
            },
          },
          pacpa: {
            w: 'bread',
            g: {
              cccca: {
                w: 'break',
              },
              accca: {
                w: 'creak',
                g: {
                  cccca: {
                    w: 'cream',
                  },
                  acccc: {
                    w: 'freak',
                    g: {
                      acccc: {
                        w: 'wreak',
                      },
                    },
                  },
                },
              },
              acccc: {
                w: 'dread',
              },
              acccp: {
                w: 'dream',
              },
            },
          },
          pappa: {
            w: 'cedar',
            g: {
              acpcc: {
                w: 'debar',
              },
            },
          },
          pccpa: {
            w: 'clear',
          },
          papcp: {
            w: 'extra',
            g: {
              papcp: {
                w: 'teary',
              },
              papcc: {
                w: 'terra',
              },
            },
          },
          ppppa: {
            w: 'feral',
          },
          pacpc: {
            w: 'great',
            g: {
              acccc: {
                w: 'treat',
              },
            },
          },
          papcc: {
            w: 'heart',
          },
          pppca: {
            w: 'learn',
            g: {
              pccca: {
                w: 'pearl',
              },
            },
          },
          pacca: {
            w: 'opera',
          },
          pacpp: {
            w: 'tread',
          },
        },
      },
      apcaa: {
        w: 'axion',
        g: {
          cacap: {
            w: 'aging',
            g: {
              caccc: {
                w: 'aping',
              },
            },
          },
          cacaa: {
            w: 'alibi',
            g: {
              cacaa: {
                w: 'amity',
              },
            },
          },
          cacac: {
            w: 'align',
            g: {
              cacac: {
                w: 'avian',
              },
            },
          },
          cccaa: {
            w: 'axial',
          },
          cccca: {
            w: 'axiom',
          },
          pacap: {
            w: 'china',
          },
          pacaa: {
            w: 'iliac',
          },
          pacpa: {
            w: 'voila',
          },
        },
      },
      pppap: {
        w: 'aider',
      },
      apppc: {
        w: 'aisle',
      },
      apcap: {
        w: 'alien',
      },
      apcca: {
        w: 'amiss',
      },
      ppccc: {
        w: 'arise',
      },
      ppacc: {
        w: 'arose',
        g: {
          pcacc: {
            w: 'erase',
          },
        },
      },
      ppapa: {
        w: 'strap',
        g: {
          pappa: {
            w: 'arson',
          },
          cappa: {
            w: 'scarf',
            g: {
              cccca: {
                w: 'scary',
              },
              cacca: {
                w: 'shard',
                g: {
                  cccca: {
                    w: 'shark',
                  },
                  cacca: {
                    w: 'snarl',
                    g: {
                      cacca: {
                        w: 'swarm',
                      },
                    },
                  },
                },
              },
            },
          },
          cacca: {
            w: 'scram',
          },
          caccc: {
            w: 'scrap',
          },
          cappc: {
            w: 'sharp',
          },
          cpppa: {
            w: 'smart',
          },
          capca: {
            w: 'solar',
            g: {
              ccacc: {
                w: 'sonar',
              },
              caacc: {
                w: 'sugar',
              },
            },
          },
          cappp: {
            w: 'spark',
          },
          caccp: {
            w: 'spray',
          },
          ccppa: {
            w: 'stark',
            g: {
              cccca: {
                w: 'start',
              },
            },
          },
          cccca: {
            w: 'straw',
            g: {
              cccca: {
                w: 'stray',
              },
            },
          },
        },
      },
      ppaca: {
        w: 'brash',
        g: {
          acpca: {
            w: 'artsy',
          },
          cccca: {
            w: 'brass',
          },
          acccc: {
            w: 'crash',
            g: {
              acccc: {
                w: 'trash',
              },
            },
          },
          accca: {
            w: 'crass',
            g: {
              accca: {
                w: 'grasp',
              },
              acccc: {
                w: 'grass',
              },
            },
          },
        },
      },
      apapa: {
        w: 'stalk',
        g: {
          pppaa: {
            w: 'ascot',
          },
          papaa: {
            w: 'assay',
          },
          pacaa: {
            w: 'chaos',
          },
          pacca: {
            w: 'psalm',
          },
          cacca: {
            w: 'scald',
            g: {
              cccca: {
                w: 'scalp',
                g: {
                  cccca: {
                    w: 'scaly',
                  },
                },
              },
              cacca: {
                w: 'shall',
                g: {
                  caccc: {
                    w: 'small',
                  },
                },
              },
            },
          },
          cacaa: {
            w: 'swamp',
            g: {
              caccc: {
                w: 'scamp',
              },
              cacaa: {
                w: 'shady',
              },
              cacap: {
                w: 'soapy',
              },
              cpcap: {
                w: 'spawn',
              },
            },
          },
          cpcaa: {
            w: 'scant',
            g: {
              cacac: {
                w: 'shaft',
              },
              cacap: {
                w: 'swath',
              },
            },
          },
          capaa: {
            w: 'scuba',
            g: {
              cacap: {
                w: 'squad',
              },
              cppap: {
                w: 'sumac',
              },
            },
          },
          cacac: {
            w: 'shank',
            g: {
              cccac: {
                w: 'shack',
              },
              cacac: {
                w: 'smack',
              },
              cacpc: {
                w: 'snack',
              },
              caccc: {
                w: 'spank',
              },
            },
          },
          cacap: {
            w: 'shaky',
            g: {
              caccc: {
                w: 'snaky',
              },
            },
          },
          cpcca: {
            w: 'shalt',
          },
          cacpa: {
            w: 'shawl',
            g: {
              cacap: {
                w: 'slang',
              },
            },
          },
          cappa: {
            w: 'shoal',
          },
          cacpc: {
            w: 'slack',
          },
          cpcpa: {
            w: 'slant',
          },
          cpppa: {
            w: 'splat',
          },
          cppaa: {
            w: 'squat',
          },
          cccac: {
            w: 'stack',
            g: {
              cccac: {
                w: 'stank',
              },
            },
          },
          cccaa: {
            w: 'staff',
            g: {
              cccaa: {
                w: 'stamp',
                g: {
                  cccaa: {
                    w: 'stand',
                  },
                },
              },
            },
          },
          cccca: {
            w: 'stall',
          },
          pappa: {
            w: 'usual',
          },
        },
      },
      apapp: {
        w: 'steak',
        g: {
          pappa: {
            w: 'ashen',
          },
          pappp: {
            w: 'askew',
          },
          ppppa: {
            w: 'asset',
          },
          papca: {
            w: 'essay',
          },
          capca: {
            w: 'sedan',
          },
          caccc: {
            w: 'sneak',
            g: {
              caccc: {
                w: 'speak',
              },
            },
          },
          cccca: {
            w: 'stead',
            g: {
              cccca: {
                w: 'steal',
                g: {
                  cccca: {
                    w: 'steam',
                  },
                },
              },
            },
          },
          cpcca: {
            w: 'sweat',
          },
        },
      },
      apcpc: {
        w: 'aside',
      },
      acaaa: {
        w: 'tangy',
        g: {
          acpaa: {
            w: 'fauna',
            g: {
              acapa: {
                w: 'bacon',
              },
              acapp: {
                w: 'naval',
              },
            },
          },
          acaac: {
            w: 'bawdy',
            g: {
              ccapc: {
                w: 'badly',
              },
              ccaac: {
                w: 'balmy',
              },
              pcaac: {
                w: 'cabby',
              },
              acacc: {
                w: 'caddy',
                g: {
                  acccc: {
                    w: 'daddy',
                    g: {
                      acccc: {
                        w: 'paddy',
                      },
                    },
                  },
                },
              },
              acapc: {
                w: 'dally',
                g: {
                  pcacc: {
                    w: 'madly',
                  },
                },
              },
              acaac: {
                w: 'happy',
                g: {
                  acaac: {
                    w: 'jazzy',
                    g: {
                      acaac: {
                        w: 'mammy',
                      },
                    },
                  },
                },
              },
              acpac: {
                w: 'wacky',
              },
            },
          },
          acacc: {
            w: 'baggy',
          },
          accaa: {
            w: 'banal',
            g: {
              cccaa: {
                w: 'banjo',
              },
              acccc: {
                w: 'canal',
              },
              accaa: {
                w: 'canon',
              },
            },
          },
          pcaaa: {
            w: 'caput',
            g: {
              pcaap: {
                w: 'batch',
                g: {
                  acccc: {
                    w: 'hatch',
                    g: {
                      acccc: {
                        w: 'latch',
                        g: {
                          acccc: {
                            w: 'match',
                            g: {
                              acccc: {
                                w: 'watch',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              ccaap: {
                w: 'catch',
              },
              acacp: {
                w: 'datum',
              },
              acaap: {
                w: 'fatal',
                g: {
                  acpap: {
                    w: 'waltz',
                  },
                },
              },
              acapc: {
                w: 'fault',
                g: {
                  acccc: {
                    w: 'vault',
                  },
                },
              },
              pcpap: {
                w: 'patch',
              },
            },
          },
          pcpaa: {
            w: 'daunt',
            g: {
              acapp: {
                w: 'baton',
                g: {
                  accap: {
                    w: 'natal',
                  },
                },
              },
              acccc: {
                w: 'haunt',
                g: {
                  acccc: {
                    w: 'jaunt',
                    g: {
                      acccc: {
                        w: 'vaunt',
                      },
                    },
                  },
                },
              },
            },
          },
          pcaac: {
            w: 'batty',
            g: {
              acccc: {
                w: 'catty',
                g: {
                  acccc: {
                    w: 'fatty',
                    g: {
                      acccc: {
                        w: 'patty',
                      },
                    },
                  },
                },
              },
            },
          },
          acaap: {
            w: 'bayou',
            g: {
              accaa: {
                w: 'kayak',
              },
            },
          },
          acaaa: {
            w: 'macaw',
            g: {
              acpca: {
                w: 'cabal',
              },
              accca: {
                w: 'cacao',
              },
              acpaa: {
                w: 'caulk',
                g: {
                  pcaaa: {
                    w: 'havoc',
                  },
                },
              },
              acapa: {
                w: 'kappa',
              },
              cccaa: {
                w: 'macho',
              },
              ccaca: {
                w: 'madam',
              },
              ccaaa: {
                w: 'mambo',
              },
              ccapa: {
                w: 'mamma',
              },
              acaca: {
                w: 'papal',
              },
            },
          },
          accac: {
            w: 'candy',
            g: {
              cccac: {
                w: 'canny',
              },
              acccc: {
                w: 'dandy',
                g: {
                  acccc: {
                    w: 'handy',
                  },
                },
              },
              pccac: {
                w: 'fancy',
              },
              accac: {
                w: 'fanny',
                g: {
                  accac: {
                    w: 'lanky',
                    g: {
                      pccac: {
                        w: 'manly',
                      },
                    },
                  },
                  acccc: {
                    w: 'nanny',
                  },
                },
              },
            },
          },
          acapa: {
            w: 'gamma',
            g: {
              pcpcc: {
                w: 'magma',
              },
            },
          },
          pcapa: {
            w: 'gamut',
          },
          acapc: {
            w: 'gaudy',
            g: {
              ccaac: {
                w: 'gawky',
                g: {
                  ccaac: {
                    w: 'gayly',
                  },
                },
              },
            },
          },
          pcppa: {
            w: 'gaunt',
          },
          acaca: {
            w: 'laugh',
          },
          accca: {
            w: 'manga',
            g: {
              cccca: {
                w: 'mango',
              },
            },
          },
          acccc: {
            w: 'mangy',
          },
          acppa: {
            w: 'pagan',
            g: {
              accac: {
                w: 'wagon',
              },
            },
          },
          ccaac: {
            w: 'tabby',
            g: {
              ccaac: {
                w: 'tacky',
                g: {
                  ccaac: {
                    w: 'taffy',
                    g: {
                      ccaac: {
                        w: 'tally',
                        g: {
                          ccaac: {
                            w: 'tatty',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          ccaaa: {
            w: 'taboo',
          },
          ccpaa: {
            w: 'talon',
            g: {
              ccaap: {
                w: 'taunt',
              },
            },
          },
          cccca: {
            w: 'tango',
          },
          ccpac: {
            w: 'tawny',
          },
          pcaap: {
            w: 'yacht',
          },
        },
      },
      acaac: {
        w: 'cable',
        g: {
          acpac: {
            w: 'badge',
            g: {
              ccaac: {
                w: 'bathe',
              },
              pcaac: {
                w: 'maybe',
              },
            },
          },
          ccaac: {
            w: 'cache',
            g: {
              ccaac: {
                w: 'canoe',
              },
            },
          },
          pcaac: {
            w: 'dance',
          },
          acacc: {
            w: 'eagle',
            g: {
              acacc: {
                w: 'ladle',
                g: {
                  acacc: {
                    w: 'maple',
                  },
                },
              },
            },
          },
          acccc: {
            w: 'fable',
            g: {
              acccc: {
                w: 'table',
              },
            },
          },
          acaac: {
            w: 'gauge',
            g: {
              ccaac: {
                w: 'gaffe',
              },
              cccac: {
                w: 'gauze',
              },
              accac: {
                w: 'haute',
                g: {
                  accac: {
                    w: 'mauve',
                  },
                },
              },
              acacc: {
                w: 'mange',
              },
              acaac: {
                w: 'payee',
              },
              pcpac: {
                w: 'vague',
              },
            },
          },
          acapc: {
            w: 'halve',
            g: {
              pcpac: {
                w: 'lathe',
              },
              acpac: {
                w: 'latte',
              },
              accpc: {
                w: 'value',
              },
              acccc: {
                w: 'valve',
              },
            },
          },
          pcapc: {
            w: 'lance',
          },
        },
      },
      acaap: {
        w: 'navel',
        g: {
          acacc: {
            w: 'label',
            g: {
              acpcc: {
                w: 'bagel',
              },
              acacc: {
                w: 'camel',
                g: {
                  acacc: {
                    w: 'hazel',
                  },
                },
              },
              ccacc: {
                w: 'lapel',
              },
            },
          },
          acaca: {
            w: 'cadet',
            g: {
              ccaca: {
                w: 'cagey',
                g: {
                  ccaca: {
                    w: 'cameo',
                  },
                },
              },
              pcacc: {
                w: 'facet',
              },
              acacp: {
                w: 'matey',
              },
            },
          },
          pcaca: {
            w: 'taken',
            g: {
              pcacc: {
                w: 'eaten',
              },
              acccc: {
                w: 'oaken',
              },
              acacc: {
                w: 'waxen',
              },
            },
          },
          acccc: {
            w: 'gavel',
          },
          pccca: {
            w: 'haven',
          },
          pcacp: {
            w: 'laden',
          },
          pcacc: {
            w: 'panel',
          },
          acpcp: {
            w: 'valet',
          },
        },
      },
      pcaap: {
        w: 'taper',
        g: {
          acacc: {
            w: 'lager',
            g: {
              acacc: {
                w: 'baker',
                g: {
                  acccc: {
                    w: 'maker',
                  },
                  acacc: {
                    w: 'wafer',
                    g: {
                      ccacc: {
                        w: 'waver',
                      },
                    },
                  },
                },
              },
              pcacc: {
                w: 'baler',
              },
              acccc: {
                w: 'eager',
                g: {
                  acccc: {
                    w: 'wager',
                  },
                },
              },
              acpcc: {
                w: 'gamer',
                g: {
                  ccacc: {
                    w: 'gayer',
                    g: {
                      ccacc: {
                        w: 'gazer',
                      },
                    },
                  },
                },
              },
              ccacc: {
                w: 'layer',
              },
            },
          },
          acccc: {
            w: 'caper',
            g: {
              acccc: {
                w: 'paper',
              },
            },
          },
          pcacc: {
            w: 'cater',
            g: {
              acccc: {
                w: 'eater',
                g: {
                  acccc: {
                    w: 'hater',
                    g: {
                      acccc: {
                        w: 'later',
                        g: {
                          acccc: {
                            w: 'water',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          acapp: {
            w: 'early',
          },
          pcapp: {
            w: 'earth',
          },
          acacp: {
            w: 'harem',
          },
          acpcc: {
            w: 'paler',
            g: {
              ccacc: {
                w: 'parer',
                g: {
                  ccacc: {
                    w: 'payer',
                  },
                },
              },
            },
          },
          ccacc: {
            w: 'taker',
            g: {
              ccacc: {
                w: 'tamer',
              },
            },
          },
        },
      },
      pcaac: {
        w: 'barge',
        g: {
          accac: {
            w: 'carve',
            g: {
              pccac: {
                w: 'farce',
              },
            },
          },
          acccc: {
            w: 'large',
          },
        },
      },
      pcaaa: {
        w: 'party',
        g: {
          accaa: {
            w: 'carol',
            g: {
              accca: {
                w: 'baron',
              },
              cccpa: {
                w: 'cargo',
              },
              accaa: {
                w: 'karma',
              },
              accap: {
                w: 'larva',
              },
              pccaa: {
                w: 'march',
              },
            },
          },
          accpa: {
            w: 'carat',
            g: {
              accac: {
                w: 'tarot',
              },
            },
          },
          accac: {
            w: 'carry',
            g: {
              accac: {
                w: 'hardy',
              },
              acccc: {
                w: 'harry',
                g: {
                  acccc: {
                    w: 'marry',
                  },
                },
              },
            },
          },
          acpaa: {
            w: 'valor',
            g: {
              pcacc: {
                w: 'favor',
              },
              acpcc: {
                w: 'labor',
              },
              acapp: {
                w: 'macro',
              },
              acacc: {
                w: 'major',
                g: {
                  ccacc: {
                    w: 'manor',
                  },
                },
              },
            },
          },
          pccac: {
            w: 'harpy',
          },
          acpap: {
            w: 'mayor',
          },
          cccaa: {
            w: 'parka',
          },
          cccac: {
            w: 'parry',
          },
          accpc: {
            w: 'tardy',
          },
          pcpaa: {
            w: 'vapor',
          },
          acccc: {
            w: 'warty',
          },
        },
      },
      acapa: {
        w: 'salon',
        g: {
          pcpaa: {
            w: 'basal',
          },
          pcaaa: {
            w: 'hasty',
            g: {
              accca: {
                w: 'pasta',
              },
              acccc: {
                w: 'pasty',
                g: {
                  acccc: {
                    w: 'tasty',
                  },
                },
              },
            },
          },
          pcacc: {
            w: 'mason',
          },
          pcpap: {
            w: 'nasal',
          },
          pcaap: {
            w: 'nasty',
          },
          ccpaa: {
            w: 'sadly',
          },
          cccaa: {
            w: 'sally',
            g: {
              cccaa: {
                w: 'salad',
              },
              cccac: {
                w: 'salty',
              },
            },
          },
          cccpa: {
            w: 'salvo',
          },
          ccaap: {
            w: 'sandy',
            g: {
              ccpaa: {
                w: 'sauna',
              },
            },
          },
          ccaaa: {
            w: 'sappy',
            g: {
              ccaac: {
                w: 'saucy',
                g: {
                  ccaac: {
                    w: 'savvy',
                  },
                },
              },
            },
          },
          ccaca: {
            w: 'savoy',
          },
        },
      },
      acppa: {
        w: 'basic',
        g: {
          cccca: {
            w: 'basil',
            g: {
              cccca: {
                w: 'basin',
                g: {
                  cccca: {
                    w: 'basis',
                  },
                },
              },
            },
          },
          acpca: {
            w: 'satin',
          },
        },
      },
      acapc: {
        w: 'caste',
        g: {
          acccc: {
            w: 'baste',
            g: {
              acccc: {
                w: 'haste',
                g: {
                  acccc: {
                    w: 'paste',
                    g: {
                      acccc: {
                        w: 'taste',
                        g: {
                          acccc: {
                            w: 'waste',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          acpac: {
            w: 'salve',
          },
          pcpac: {
            w: 'sauce',
          },
          acpcc: {
            w: 'saute',
          },
        },
      },
      apacp: {
        w: 'beast',
        g: {
          acccc: {
            w: 'feast',
            g: {
              acccc: {
                w: 'least',
                g: {
                  acccc: {
                    w: 'yeast',
                  },
                },
              },
            },
          },
          accca: {
            w: 'leash',
          },
        },
      },
      aaaap: {
        w: 'betel',
        g: {
          ccapa: {
            w: 'beech',
            g: {
              cccaa: {
                w: 'beefy',
              },
            },
          },
          ccpca: {
            w: 'beget',
          },
          ccaaa: {
            w: 'begun',
            g: {
              ccaap: {
                w: 'bench',
              },
            },
          },
          ccaap: {
            w: 'belch',
            g: {
              cccaa: {
                w: 'belly',
                g: {
                  cccaa: {
                    w: 'below',
                  },
                },
              },
            },
          },
          ccacc: {
            w: 'bevel',
            g: {
              ccacc: {
                w: 'bezel',
              },
            },
          },
          cpacp: {
            w: 'bleed',
            g: {
              cccca: {
                w: 'bleep',
              },
            },
          },
          cpaap: {
            w: 'blend',
          },
          caaca: {
            w: 'boney',
          },
          caacc: {
            w: 'bowel',
          },
          acaap: {
            w: 'cello',
            g: {
              accap: {
                w: 'felon',
                g: {
                  acccc: {
                    w: 'melon',
                  },
                },
              },
              acccc: {
                w: 'hello',
              },
              accca: {
                w: 'jelly',
              },
              acpaa: {
                w: 'leggy',
              },
              acpap: {
                w: 'lemon',
              },
              acaca: {
                w: 'newly',
              },
              pccaa: {
                w: 'welch',
              },
            },
          },
          apaaa: {
            w: 'enjoy',
            g: {
              paaaa: {
                w: 'check',
              },
              ccaca: {
                w: 'endow',
              },
              ccacc: {
                w: 'envoy',
              },
              caapa: {
                w: 'epoch',
              },
              caapc: {
                w: 'epoxy',
              },
            },
          },
          apaca: {
            w: 'cheek',
            g: {
              aaccp: {
                w: 'kneed',
              },
              aacca: {
                w: 'queen',
              },
            },
          },
          appap: {
            w: 'dwelt',
            g: {
              aacpc: {
                w: 'cleft',
              },
              aapcc: {
                w: 'exult',
              },
              aaccc: {
                w: 'knelt',
              },
            },
          },
          aaacp: {
            w: 'clued',
            g: {
              apaca: {
                w: 'golem',
              },
              appca: {
                w: 'lumen',
              },
              acacp: {
                w: 'olden',
              },
            },
          },
          aapca: {
            w: 'comet',
            g: {
              ccacc: {
                w: 'covet',
              },
              aaacc: {
                w: 'duvet',
              },
              acacp: {
                w: 'token',
              },
              aaccc: {
                w: 'unmet',
              },
            },
          },
          aaaca: {
            w: 'women',
            g: {
              acacc: {
                w: 'coven',
                g: {
                  acacc: {
                    w: 'dozen',
                  },
                },
              },
              acaca: {
                w: 'covey',
                g: {
                  acacc: {
                    w: 'dopey',
                    g: {
                      acacc: {
                        w: 'gooey',
                      },
                    },
                  },
                },
              },
              acacp: {
                w: 'honey',
              },
              aaccc: {
                w: 'hymen',
              },
              acpca: {
                w: 'modem',
              },
              acpcp: {
                w: 'money',
              },
              aaacp: {
                w: 'unfed',
              },
              paacp: {
                w: 'unwed',
              },
              ccacc: {
                w: 'woken',
                g: {
                  ccacc: {
                    w: 'woven',
                  },
                },
              },
            },
          },
          pcaaa: {
            w: 'debug',
          },
          pcpaa: {
            w: 'debut',
          },
          acaaa: {
            w: 'decoy',
            g: {
              ccaca: {
                w: 'demon',
              },
              accpa: {
                w: 'gecko',
              },
              acaac: {
                w: 'penny',
              },
              acaca: {
                w: 'venom',
              },
            },
          },
          acpaa: {
            w: 'depth',
            g: {
              cccpa: {
                w: 'depot',
              },
              acacp: {
                w: 'hefty',
              },
              pcapa: {
                w: 'teddy',
              },
              acppa: {
                w: 'tempo',
              },
              acacc: {
                w: 'tenth',
              },
            },
          },
          accaa: {
            w: 'jetty',
            g: {
              accaa: {
                w: 'detox',
                g: {
                  accaa: {
                    w: 'fetch',
                  },
                },
              },
              acccc: {
                w: 'petty',
              },
            },
          },
          aaacc: {
            w: 'dowel',
            g: {
              acacc: {
                w: 'hovel',
                g: {
                  acccc: {
                    w: 'novel',
                  },
                },
              },
              pcacc: {
                w: 'model',
              },
              acccc: {
                w: 'vowel',
              },
            },
          },
          apaac: {
            w: 'dwell',
            g: {
              aaccc: {
                w: 'quell',
              },
            },
          },
          ppaaa: {
            w: 'ebony',
          },
          apppa: {
            w: 'eject',
            g: {
              cacac: {
                w: 'event',
              },
            },
          },
          ppaap: {
            w: 'elbow',
          },
          apppp: {
            w: 'elect',
          },
          apapp: {
            w: 'elegy',
          },
          ppaca: {
            w: 'embed',
          },
          appaa: {
            w: 'empty',
            g: {
              paapa: {
                w: 'theft',
              },
            },
          },
          apapa: {
            w: 'enemy',
          },
          apacc: {
            w: 'excel',
            g: {
              ccacc: {
                w: 'expel',
              },
              paacc: {
                w: 'kneel',
                g: {
                  aaccc: {
                    w: 'wheel',
                  },
                },
              },
            },
          },
          apcac: {
            w: 'extol',
          },
          apaap: {
            w: 'fleck',
            g: {
              apcaa: {
                w: 'whelp',
              },
            },
          },
          appcp: {
            w: 'fleet',
          },
          acapa: {
            w: 'needy',
            g: {
              accac: {
                w: 'geeky',
              },
              acccc: {
                w: 'weedy',
              },
            },
          },
          aaccc: {
            w: 'hotel',
            g: {
              acccc: {
                w: 'motel',
              },
            },
          },
          acacc: {
            w: 'jewel',
            g: {
              acacc: {
                w: 'level',
              },
            },
          },
          acapp: {
            w: 'leech',
          },
          acpap: {
            w: 'lefty',
          },
          aacca: {
            w: 'octet',
            g: {
              cacca: {
                w: 'often',
              },
              paccp: {
                w: 'totem',
              },
            },
          },
          acppa: {
            w: 'teeth',
          },
          acpca: {
            w: 'tenet',
          },
          aapcc: {
            w: 'towel',
          },
          appca: {
            w: 'tweed',
            g: {
              cccca: {
                w: 'tweet',
              },
            },
          },
        },
      },
      aapap: {
        w: 'linen',
        g: {
          apapa: {
            w: 'befit',
            g: {
              pcacc: {
                w: 'debit',
              },
              apaca: {
                w: 'equip',
              },
              apacp: {
                w: 'ethic',
              },
              acpcp: {
                w: 'fetid',
              },
              acaca: {
                w: 'medic',
              },
              acacp: {
                w: 'tepid',
              },
            },
          },
          apapc: {
            w: 'begin',
          },
          acaca: {
            w: 'bicep',
            g: {
              accca: {
                w: 'dicey',
              },
              acaca: {
                w: 'video',
              },
            },
          },
          apcpa: {
            w: 'denim',
          },
          ppapa: {
            w: 'devil',
            g: {
              acacp: {
                w: 'helix',
              },
            },
          },
          acapa: {
            w: 'eight',
            g: {
              pcaap: {
                w: 'piety',
              },
            },
          },
          ppapc: {
            w: 'elfin',
          },
          apcpp: {
            w: 'ennui',
          },
          pcapa: {
            w: 'field',
            g: {
              acccc: {
                w: 'wield',
                g: {
                  acccc: {
                    w: 'yield',
                  },
                },
              },
            },
          },
          acppa: {
            w: 'fiend',
          },
          pcaca: {
            w: 'filet',
            g: {
              acpca: {
                w: 'pixel',
              },
            },
          },
          acacc: {
            w: 'given',
            g: {
              acpcc: {
                w: 'vixen',
              },
              acacc: {
                w: 'widen',
              },
            },
          },
          ppaca: {
            w: 'impel',
          },
          appca: {
            w: 'index',
          },
          apppa: {
            w: 'inept',
          },
          pppca: {
            w: 'inlet',
          },
          ccaca: {
            w: 'libel',
          },
          ccacc: {
            w: 'liken',
          },
          accca: {
            w: 'piney',
          },
        },
      },
      aacap: {
        w: 'edict',
        g: {
          pacaa: {
            w: 'feign',
            g: {
              accpp: {
                w: 'being',
              },
              acccp: {
                w: 'neigh',
              },
              accca: {
                w: 'weigh',
              },
            },
          },
          pacpa: {
            w: 'chief',
          },
          ppcaa: {
            w: 'deign',
            g: {
              ppcaa: {
                w: 'plied',
              },
            },
          },
          ppcap: {
            w: 'deity',
          },
          cccaa: {
            w: 'edify',
          },
          cacaa: {
            w: 'eking',
            g: {
              caccc: {
                w: 'eying',
              },
            },
          },
          caccc: {
            w: 'evict',
          },
          pacac: {
            w: 'quiet',
          },
          pacap: {
            w: 'thief',
          },
        },
      },
      aapac: {
        w: 'binge',
        g: {
          cpaac: {
            w: 'belie',
          },
          ccaac: {
            w: 'bible',
            g: {
              ccaac: {
                w: 'biome',
              },
            },
          },
          ccacc: {
            w: 'bilge',
          },
          apaac: {
            w: 'cutie',
            g: {
              aaacc: {
                w: 'movie',
              },
            },
          },
          acaac: {
            w: 'tilde',
            g: {
              acacc: {
                w: 'diode',
              },
              pcpac: {
                w: 'lithe',
              },
              acaac: {
                w: 'piece',
                g: {
                  ccaac: {
                    w: 'pique',
                    g: {
                      ccaac: {
                        w: 'pixie',
                      },
                    },
                  },
                },
              },
              ccaac: {
                w: 'tithe',
              },
              ccpac: {
                w: 'title',
              },
            },
          },
          apcpc: {
            w: 'genie',
          },
          acccc: {
            w: 'hinge',
          },
          ppaac: {
            w: 'imbue',
          },
          acacc: {
            w: 'liege',
            g: {
              acacc: {
                w: 'midge',
              },
            },
          },
          accac: {
            w: 'mince',
            g: {
              acccc: {
                w: 'wince',
              },
            },
          },
          acpac: {
            w: 'niche',
            g: {
              ccpac: {
                w: 'niece',
              },
            },
          },
          appac: {
            w: 'untie',
          },
        },
      },
      aaaac: {
        w: 'lunge',
        g: {
          paaac: {
            w: 'belle',
            g: {
              capac: {
                w: 'bloke',
              },
              aapac: {
                w: 'clove',
              },
              aaacc: {
                w: 'cycle',
                g: {
                  aaacc: {
                    w: 'whole',
                  },
                },
              },
              accac: {
                w: 'delve',
                g: {
                  accac: {
                    w: 'melee',
                  },
                },
              },
              appac: {
                w: 'elope',
              },
            },
          },
          aaaac: {
            w: 'theme',
            g: {
              aaaac: {
                w: 'booze',
              },
              acaac: {
                w: 'choke',
              },
              aappc: {
                w: 'emcee',
              },
              aapac: {
                w: 'evoke',
              },
              aapcc: {
                w: 'femme',
              },
              capac: {
                w: 'tepee',
              },
              ccacc: {
                w: 'thyme',
              },
            },
          },
          ppaac: {
            w: 'flume',
            g: {
              apcac: {
                w: 'boule',
              },
              accac: {
                w: 'elude',
              },
              cccac: {
                w: 'fluke',
                g: {
                  cccac: {
                    w: 'flute',
                  },
                },
              },
              acccc: {
                w: 'plume',
              },
            },
          },
          acacc: {
            w: 'budge',
            g: {
              acccc: {
                w: 'fudge',
                g: {
                  acccc: {
                    w: 'judge',
                  },
                },
              },
            },
          },
          pcapc: {
            w: 'bugle',
          },
          pcacc: {
            w: 'bulge',
          },
          acaac: {
            w: 'butte',
            g: {
              acaac: {
                w: 'queue',
              },
              acacc: {
                w: 'quote',
              },
            },
          },
          apaac: {
            w: 'chute',
            g: {
              cacac: {
                w: 'coupe',
              },
              pacac: {
                w: 'deuce',
              },
              aacpc: {
                w: 'etude',
              },
            },
          },
          papac: {
            w: 'clone',
            g: {
              apppc: {
                w: 'noble',
              },
            },
          },
          aaacc: {
            w: 'hedge',
            g: {
              aaccc: {
                w: 'dodge',
              },
              acccc: {
                w: 'wedge',
              },
            },
          },
          accac: {
            w: 'dunce',
            g: {
              acccc: {
                w: 'ounce',
              },
            },
          },
          aacac: {
            w: 'fence',
            g: {
              acccc: {
                w: 'hence',
                g: {
                  acccc: {
                    w: 'pence',
                  },
                },
              },
              accac: {
                w: 'penne',
              },
            },
          },
          acapc: {
            w: 'fugue',
          },
          paapc: {
            w: 'globe',
            g: {
              cccac: {
                w: 'glove',
              },
            },
          },
          aappc: {
            w: 'gnome',
          },
          apacc: {
            w: 'gouge',
          },
          caacc: {
            w: 'ledge',
            g: {
              caccc: {
                w: 'lodge',
              },
            },
          },
          acpcc: {
            w: 'nudge',
          },
          aapac: {
            w: 'ozone',
            g: {
              aaccc: {
                w: 'phone',
              },
            },
          },
          pcaac: {
            w: 'tulle',
          },
          pppac: {
            w: 'uncle',
          },
          appac: {
            w: 'undue',
          },
          apcac: {
            w: 'venue',
          },
          apapc: {
            w: 'vogue',
          },
        },
      },
      paaap: {
        w: 'deter',
        g: {
          acpcp: {
            w: 'beret',
          },
          acaap: {
            w: 'merry',
            g: {
              acccc: {
                w: 'berry',
                g: {
                  acccc: {
                    w: 'ferry',
                  },
                },
              },
              accaa: {
                w: 'heron',
                g: {
                  pccaa: {
                    w: 'perch',
                  },
                },
              },
              accac: {
                w: 'jerky',
                g: {
                  acccc: {
                    w: 'perky',
                  },
                },
              },
              cccac: {
                w: 'mercy',
              },
            },
          },
          acpap: {
            w: 'berth',
          },
          aaacc: {
            w: 'cower',
            g: {
              aaacc: {
                w: 'buyer',
                g: {
                  cpacc: {
                    w: 'bluer',
                  },
                  aaccc: {
                    w: 'flyer',
                  },
                  aapcc: {
                    w: 'hyper',
                  },
                  acacc: {
                    w: 'purer',
                  },
                  apacc: {
                    w: 'upper',
                  },
                },
              },
              acacc: {
                w: 'hover',
                g: {
                  acacc: {
                    w: 'joker',
                    g: {
                      acacc: {
                        w: 'boxer',
                        g: {
                          acacc: {
                            w: 'foyer',
                            g: {
                              acacc: {
                                w: 'goner',
                              },
                            },
                          },
                        },
                      },
                      acccc: {
                        w: 'poker',
                      },
                    },
                  },
                  ccacc: {
                    w: 'homer',
                  },
                  acccc: {
                    w: 'lover',
                    g: {
                      acccc: {
                        w: 'mover',
                      },
                    },
                  },
                },
              },
              ccacc: {
                w: 'corer',
                g: {
                  ccacc: {
                    w: 'cover',
                  },
                },
              },
              caacc: {
                w: 'cyber',
              },
              acccc: {
                w: 'lower',
                g: {
                  acccc: {
                    w: 'mower',
                    g: {
                      acccc: {
                        w: 'power',
                      },
                    },
                  },
                },
              },
              apacc: {
                w: 'offer',
              },
              appcc: {
                w: 'owner',
              },
              paacc: {
                w: 'ulcer',
              },
              acpcc: {
                w: 'wooer',
              },
            },
          },
          ppacp: {
            w: 'breed',
            g: {
              acccc: {
                w: 'creed',
                g: {
                  acccc: {
                    w: 'freed',
                    g: {
                      acccc: {
                        w: 'greed',
                      },
                    },
                  },
                },
              },
            },
          },
          apacc: {
            w: 'cheer',
            g: {
              aapcc: {
                w: 'ember',
              },
              aaccc: {
                w: 'freer',
                g: {
                  aaccc: {
                    w: 'queer',
                  },
                },
              },
            },
          },
          apaap: {
            w: 'clerk',
            g: {
              aacca: {
                w: 'query',
              },
              pacpc: {
                w: 'wreck',
              },
            },
          },
          ppaap: {
            w: 'credo',
          },
          apacp: {
            w: 'creep',
            g: {
              cccca: {
                w: 'creek',
              },
              accca: {
                w: 'green',
              },
              acccp: {
                w: 'preen',
              },
            },
          },
          appap: {
            w: 'crept',
            g: {
              acpcc: {
                w: 'erupt',
              },
              apcac: {
                w: 'overt',
              },
            },
          },
          aaacp: {
            w: 'cruel',
            g: {
              acccc: {
                w: 'gruel',
              },
            },
          },
          ccaac: {
            w: 'decor',
            g: {
              ccaac: {
                w: 'demur',
              },
            },
          },
          ccaap: {
            w: 'decry',
            g: {
              ccapc: {
                w: 'derby',
              },
            },
          },
          ccacc: {
            w: 'defer',
          },
          caacc: {
            w: 'dryer',
          },
          appcp: {
            w: 'egret',
            g: {
              pppcc: {
                w: 'greet',
              },
            },
          },
          ppacc: {
            w: 'elder',
          },
          apccc: {
            w: 'enter',
          },
          apcap: {
            w: 'entry',
          },
          apppp: {
            w: 'erect',
            g: {
              cpcac: {
                w: 'exert',
              },
            },
          },
          apaac: {
            w: 'error',
          },
          appcc: {
            w: 'ether',
          },
          apapp: {
            w: 'every',
          },
          acaac: {
            w: 'femur',
            g: {
              acccc: {
                w: 'lemur',
              },
            },
          },
          acacc: {
            w: 'fever',
            g: {
              ccacc: {
                w: 'fewer',
              },
              acacc: {
                w: 'leper',
                g: {
                  acacc: {
                    w: 'newer',
                  },
                },
              },
              acccc: {
                w: 'lever',
                g: {
                  acccc: {
                    w: 'never',
                  },
                },
              },
            },
          },
          acapp: {
            w: 'leery',
          },
          acccc: {
            w: 'meter',
          },
          accap: {
            w: 'metro',
          },
          pcaap: {
            w: 'nerdy',
          },
          paacc: {
            w: 'odder',
            g: {
              caccc: {
                w: 'older',
                g: {
                  caccc: {
                    w: 'order',
                  },
                },
              },
              acccc: {
                w: 'udder',
              },
              aaccc: {
                w: 'under',
              },
            },
          },
          aapcc: {
            w: 'truer',
            g: {
              paacc: {
                w: 'other',
              },
              caacc: {
                w: 'tower',
              },
              capcc: {
                w: 'tuber',
              },
            },
          },
          aaccc: {
            w: 'otter',
            g: {
              caccc: {
                w: 'outer',
              },
              acccc: {
                w: 'utter',
              },
              paccc: {
                w: 'voter',
              },
            },
          },
          acpac: {
            w: 'tenor',
          },
          aapcp: {
            w: 'threw',
          },
          pppap: {
            w: 'trend',
          },
        },
      },
      aaapp: {
        w: 'spelt',
        g: {
          papac: {
            w: 'onset',
            g: {
              aaccc: {
                w: 'beset',
              },
              acccc: {
                w: 'unset',
              },
            },
          },
          papaa: {
            w: 'bused',
            g: {
              aacca: {
                w: 'nosey',
              },
            },
          },
          papap: {
            w: 'testy',
            g: {
              pppaa: {
                w: 'ethos',
              },
              pcpaa: {
                w: 'fetus',
              },
              acccc: {
                w: 'zesty',
              },
            },
          },
          pppaa: {
            w: 'pesky',
          },
          pppap: {
            w: 'pesto',
          },
          cacac: {
            w: 'sheet',
            g: {
              cacac: {
                w: 'scent',
              },
              caccc: {
                w: 'sweet',
              },
            },
          },
          cacaa: {
            w: 'seedy',
            g: {
              cpcaa: {
                w: 'sheen',
              },
            },
          },
          capaa: {
            w: 'semen',
            g: {
              ccacc: {
                w: 'seven',
              },
            },
          },
          cppap: {
            w: 'setup',
          },
          cpcaa: {
            w: 'sheep',
            g: {
              caccc: {
                w: 'sweep',
              },
            },
          },
          cacca: {
            w: 'shelf',
            g: {
              cccca: {
                w: 'shell',
              },
              cacca: {
                w: 'smell',
                g: {
                  caccc: {
                    w: 'swell',
                  },
                },
              },
            },
          },
          cacpa: {
            w: 'sleek',
          },
          cpcpa: {
            w: 'sleep',
          },
          cacpc: {
            w: 'sleet',
          },
          cpcpc: {
            w: 'slept',
          },
          caccc: {
            w: 'smelt',
          },
          cccaa: {
            w: 'speed',
            g: {
              cccaa: {
                w: 'speck',
              },
              cccac: {
                w: 'spend',
              },
            },
          },
          cccca: {
            w: 'spell',
          },
          cccac: {
            w: 'spent',
          },
          cacap: {
            w: 'steed',
          },
          cacpp: {
            w: 'steel',
          },
          cpcap: {
            w: 'steep',
          },
          cpcac: {
            w: 'swept',
          },
          pcpac: {
            w: 'upset',
          },
        },
      },
      aapaa: {
        w: 'pilot',
        g: {
          acaaa: {
            w: 'windy',
            g: {
              acacc: {
                w: 'biddy',
                g: {
                  acccc: {
                    w: 'giddy',
                  },
                },
              },
              accaa: {
                w: 'cinch',
                g: {
                  acccc: {
                    w: 'finch',
                  },
                  accaa: {
                    w: 'minim',
                  },
                },
              },
              acaaa: {
                w: 'civic',
                g: {
                  acacc: {
                    w: 'mimic',
                  },
                },
              },
              accpc: {
                w: 'dingy',
              },
              acapc: {
                w: 'dizzy',
              },
              acaac: {
                w: 'fizzy',
                g: {
                  pcaac: {
                    w: 'jiffy',
                  },
                },
              },
              accac: {
                w: 'kinky',
                g: {
                  accac: {
                    w: 'ninny',
                  },
                },
              },
              acapa: {
                w: 'vivid',
              },
              cccaa: {
                w: 'winch',
              },
            },
          },
          acacc: {
            w: 'bigot',
          },
          accaa: {
            w: 'filly',
            g: {
              acccc: {
                w: 'billy',
                g: {
                  acccc: {
                    w: 'dilly',
                    g: {
                      acccc: {
                        w: 'hilly',
                        g: {
                          acccc: {
                            w: 'willy',
                          },
                        },
                      },
                    },
                  },
                },
              },
              cccac: {
                w: 'filmy',
              },
              accac: {
                w: 'milky',
              },
            },
          },
          acapa: {
            w: 'bingo',
            g: {
              acccc: {
                w: 'dingo',
              },
            },
          },
          acaap: {
            w: 'width',
            g: {
              acaca: {
                w: 'bitty',
                g: {
                  acacc: {
                    w: 'fifty',
                    g: {
                      acacc: {
                        w: 'minty',
                      },
                    },
                  },
                  acccc: {
                    w: 'kitty',
                  },
                },
              },
              acppc: {
                w: 'ditch',
              },
              acpca: {
                w: 'ditty',
              },
              acacc: {
                w: 'fifth',
                g: {
                  acacc: {
                    w: 'ninth',
                  },
                },
              },
              acapc: {
                w: 'hitch',
              },
              acppa: {
                w: 'timid',
              },
              ccapc: {
                w: 'witch',
              },
              ccaca: {
                w: 'witty',
              },
            },
          },
          acpaa: {
            w: 'civil',
            g: {
              acaap: {
                w: 'dimly',
              },
              acccp: {
                w: 'livid',
              },
              acpcc: {
                w: 'vigil',
              },
              acpac: {
                w: 'vinyl',
              },
            },
          },
          apapa: {
            w: 'comic',
            g: {
              ccacc: {
                w: 'conic',
              },
              acacc: {
                w: 'ionic',
              },
              apaca: {
                w: 'ovoid',
              },
            },
          },
          apaaa: {
            w: 'cubic',
            g: {
              ccaca: {
                w: 'cumin',
              },
              caacc: {
                w: 'cynic',
              },
              acapa: {
                w: 'fungi',
              },
              acaca: {
                w: 'humid',
              },
              apaca: {
                w: 'undid',
              },
            },
          },
          acaac: {
            w: 'fight',
            g: {
              accac: {
                w: 'digit',
              },
              acccc: {
                w: 'might',
                g: {
                  acccc: {
                    w: 'night',
                    g: {
                      acccc: {
                        w: 'tight',
                        g: {
                          acccc: {
                            w: 'wight',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          acapp: {
            w: 'ditto',
          },
          accap: {
            w: 'filth',
          },
          appaa: {
            w: 'fluid',
            g: {
              apapp: {
                w: 'idyll',
              },
              appcc: {
                w: 'lucid',
              },
            },
          },
          apcpa: {
            w: 'folio',
          },
          pcapa: {
            w: 'hippo',
          },
          pcaaa: {
            w: 'hippy',
            g: {
              acacc: {
                w: 'wimpy',
              },
            },
          },
          apcca: {
            w: 'igloo',
          },
          pppaa: {
            w: 'imply',
          },
          apaca: {
            w: 'inbox',
          },
          apacc: {
            w: 'ingot',
          },
          ppaac: {
            w: 'input',
          },
          apaap: {
            w: 'itchy',
            g: {
              pppaa: {
                w: 'tunic',
              },
            },
          },
          acpac: {
            w: 'light',
            g: {
              ccaac: {
                w: 'limit',
              },
            },
          },
          acppa: {
            w: 'limbo',
            g: {
              ccaac: {
                w: 'lingo',
              },
            },
          },
          pcpaa: {
            w: 'lipid',
          },
          apppa: {
            w: 'logic',
            g: {
              cccca: {
                w: 'login',
              },
            },
          },
          apapp: {
            w: 'tonic',
            g: {
              pcaca: {
                w: 'motif',
              },
              ccacc: {
                w: 'toxic',
              },
              ccpca: {
                w: 'toxin',
              },
            },
          },
          ppapp: {
            w: 'optic',
            g: {
              pppcc: {
                w: 'topic',
              },
            },
          },
          ccaaa: {
            w: 'picky',
            g: {
              ccaac: {
                w: 'piggy',
              },
              ccpaa: {
                w: 'pinch',
              },
              ccacc: {
                w: 'pinky',
              },
            },
          },
          ccapp: {
            w: 'pinto',
          },
          ccaap: {
            w: 'pitch',
            g: {
              cccap: {
                w: 'pithy',
              },
            },
          },
          ccacc: {
            w: 'pivot',
          },
          cpaaa: {
            w: 'pubic',
          },
          cppaa: {
            w: 'pupil',
          },
          ppcap: {
            w: 'tulip',
          },
          apaac: {
            w: 'unfit',
          },
          apcac: {
            w: 'unlit',
          },
          appap: {
            w: 'until',
          },
          ppaaa: {
            w: 'unzip',
          },
          apapc: {
            w: 'vomit',
          },
          acaca: {
            w: 'widow',
          },
        },
      },
      papaa: {
        w: 'droit',
        g: {
          apapa: {
            w: 'birch',
            g: {
              accaa: {
                w: 'girly',
              },
              apppa: {
                w: 'incur',
              },
            },
          },
          apapp: {
            w: 'birth',
            g: {
              acccc: {
                w: 'girth',
                g: {
                  acccc: {
                    w: 'mirth',
                  },
                },
              },
            },
          },
          accca: {
            w: 'broil',
            g: {
              accca: {
                w: 'groin',
              },
            },
          },
          apcca: {
            w: 'choir',
          },
          appca: {
            w: 'curio',
          },
          cpapp: {
            w: 'dirty',
          },
          ccaca: {
            w: 'druid',
          },
          acacc: {
            w: 'fruit',
          },
          apppp: {
            w: 'intro',
          },
          accpa: {
            w: 'irony',
          },
          apcpa: {
            w: 'ivory',
          },
          ppaca: {
            w: 'lurid',
          },
          apaca: {
            w: 'lyric',
          },
          apppa: {
            w: 'micro',
            g: {
              ccapp: {
                w: 'minor',
              },
              acapp: {
                w: 'vigor',
              },
            },
          },
          acpcc: {
            w: 'orbit',
          },
        },
      },
      aappa: {
        w: 'stoic',
        g: {
          pappa: {
            w: 'bison',
          },
          pappp: {
            w: 'disco',
          },
          paapp: {
            w: 'ficus',
          },
          paapa: {
            w: 'fishy',
            g: {
              acpaa: {
                w: 'minus',
              },
              accac: {
                w: 'wispy',
              },
            },
          },
          paacc: {
            w: 'music',
          },
          pppca: {
            w: 'posit',
          },
          cpapa: {
            w: 'sight',
            g: {
              ccapp: {
                w: 'sixth',
              },
              ccaap: {
                w: 'sixty',
              },
            },
          },
          caapa: {
            w: 'silky',
            g: {
              cccac: {
                w: 'silly',
              },
              cpaaa: {
                w: 'sushi',
              },
            },
          },
          capca: {
            w: 'solid',
          },
          capcc: {
            w: 'sonic',
          },
          cpaca: {
            w: 'split',
          },
          cacca: {
            w: 'spoil',
          },
          caaca: {
            w: 'squib',
          },
          ppaca: {
            w: 'visit',
          },
        },
      },
      aaacp: {
        w: 'chess',
        g: {
          aaccc: {
            w: 'bless',
            g: {
              aaccc: {
                w: 'guess',
              },
            },
          },
          cccca: {
            w: 'chest',
          },
          apcca: {
            w: 'flesh',
          },
          aacca: {
            w: 'guest',
            g: {
              aacca: {
                w: 'poesy',
              },
              acccc: {
                w: 'quest',
              },
            },
          },
          appca: {
            w: 'welsh',
          },
        },
      },
      aacaa: {
        w: 'glint',
        g: {
          accaa: {
            w: 'flick',
            g: {
              accaa: {
                w: 'blimp',
              },
              acccc: {
                w: 'click',
              },
              pccpa: {
                w: 'cliff',
              },
              accpa: {
                w: 'climb',
              },
            },
          },
          accca: {
            w: 'blind',
            g: {
              cccca: {
                w: 'blink',
              },
              accca: {
                w: 'clink',
              },
            },
          },
          accap: {
            w: 'blitz',
          },
          apcaa: {
            w: 'child',
            g: {
              aaccc: {
                w: 'build',
              },
              cccca: {
                w: 'chili',
                g: {
                  cccca: {
                    w: 'chill',
                  },
                },
              },
              pacca: {
                w: 'icily',
              },
              aacca: {
                w: 'quill',
              },
            },
          },
          apcac: {
            w: 'built',
            g: {
              acccc: {
                w: 'quilt',
              },
            },
          },
          aacaa: {
            w: 'chick',
            g: {
              aacaa: {
                w: 'idiom',
                g: {
                  aacpc: {
                    w: 'opium',
                  },
                },
              },
              aacca: {
                w: 'juicy',
              },
              aaccc: {
                w: 'quick',
              },
              accca: {
                w: 'which',
              },
              accaa: {
                w: 'whiff',
              },
            },
          },
          pccca: {
            w: 'cling',
            g: {
              acccc: {
                w: 'fling',
              },
            },
          },
          pacca: {
            w: 'doing',
            g: {
              caccc: {
                w: 'dying',
              },
              aaccc: {
                w: 'icing',
                g: {
                  aaccc: {
                    w: 'vying',
                  },
                },
              },
              apccc: {
                w: 'owing',
              },
            },
          },
          acccc: {
            w: 'flint',
          },
          cacca: {
            w: 'going',
          },
          cpcaa: {
            w: 'guild',
          },
          cpcac: {
            w: 'guilt',
          },
          aacac: {
            w: 'idiot',
            g: {
              aacac: {
                w: 'twixt',
              },
            },
          },
          aaccc: {
            w: 'joint',
            g: {
              acccc: {
                w: 'point',
              },
            },
          },
          ppcca: {
            w: 'lying',
          },
          aacpa: {
            w: 'onion',
            g: {
              accaa: {
                w: 'unify',
              },
              acccc: {
                w: 'union',
              },
            },
          },
          aacap: {
            w: 'thick',
          },
          pacap: {
            w: 'thigh',
          },
          paccp: {
            w: 'thing',
            g: {
              caccc: {
                w: 'tying',
              },
            },
          },
          aaccp: {
            w: 'think',
          },
          aacpp: {
            w: 'unity',
          },
          aacca: {
            w: 'whiny',
          },
        },
      },
      aacca: {
        w: 'hoist',
        g: {
          aacca: {
            w: 'bliss',
          },
          acccc: {
            w: 'foist',
            g: {
              acccc: {
                w: 'joist',
                g: {
                  acccc: {
                    w: 'moist',
                  },
                },
              },
            },
          },
          accca: {
            w: 'noisy',
          },
          pacca: {
            w: 'swish',
            g: {
              apccp: {
                w: 'whisk',
              },
            },
          },
          aaccc: {
            w: 'twist',
          },
        },
      },
      aaaaa: {
        w: 'mulch',
        g: {
          aapca: {
            w: 'block',
            g: {
              acccc: {
                w: 'clock',
                g: {
                  acccc: {
                    w: 'flock',
                  },
                },
              },
            },
          },
          aapaa: {
            w: 'blown',
            g: {
              cccap: {
                w: 'blond',
              },
              cccaa: {
                w: 'blood',
              },
              accaa: {
                w: 'flood',
              },
              acccc: {
                w: 'flown',
              },
              appaa: {
                w: 'godly',
                g: {
                  acapc: {
                    w: 'lofty',
                  },
                  apccc: {
                    w: 'oddly',
                  },
                },
              },
              apcap: {
                w: 'knoll',
              },
              pppaa: {
                w: 'lobby',
              },
              apcaa: {
                w: 'loopy',
              },
              apppa: {
                w: 'lowly',
              },
              pppap: {
                w: 'nobly',
              },
              apcpa: {
                w: 'wooly',
              },
            },
          },
          papaa: {
            w: 'bloom',
            g: {
              acccc: {
                w: 'gloom',
              },
            },
          },
          appaa: {
            w: 'flunk',
            g: {
              pccaa: {
                w: 'bluff',
              },
              accca: {
                w: 'blunt',
              },
              ccpaa: {
                w: 'flout',
              },
              cccaa: {
                w: 'fluff',
              },
              cccca: {
                w: 'flung',
              },
              acccc: {
                w: 'plunk',
              },
              apcaa: {
                w: 'would',
              },
            },
          },
          aaaaa: {
            w: 'goody',
            g: {
              acaac: {
                w: 'bobby',
                g: {
                  acaac: {
                    w: 'poppy',
                  },
                },
              },
              pcpaa: {
                w: 'bongo',
              },
              accac: {
                w: 'booby',
                g: {
                  cccac: {
                    w: 'booty',
                    g: {
                      cccac: {
                        w: 'boozy',
                      },
                    },
                  },
                  accac: {
                    w: 'woozy',
                  },
                },
              },
              pcapc: {
                w: 'dodgy',
              },
              acacc: {
                w: 'dowdy',
                g: {
                  pcacc: {
                    w: 'toddy',
                  },
                },
              },
              acapc: {
                w: 'downy',
              },
              pcaac: {
                w: 'foggy',
              },
              cccac: {
                w: 'goofy',
              },
              aacaa: {
                w: 'known',
              },
              acccc: {
                w: 'woody',
              },
            },
          },
          aaaac: {
            w: 'booth',
            g: {
              acccc: {
                w: 'tooth',
              },
            },
          },
          aaacc: {
            w: 'notch',
            g: {
              acccc: {
                w: 'botch',
              },
              pcacc: {
                w: 'conch',
              },
              acacc: {
                w: 'pooch',
              },
            },
          },
          apaac: {
            w: 'bough',
            g: {
              acccc: {
                w: 'dough',
                g: {
                  acccc: {
                    w: 'tough',
                  },
                },
              },
              accac: {
                w: 'youth',
              },
            },
          },
          apaaa: {
            w: 'bound',
            g: {
              acppp: {
                w: 'donut',
              },
              pccap: {
                w: 'doubt',
              },
              acccc: {
                w: 'found',
                g: {
                  acccc: {
                    w: 'pound',
                    g: {
                      acccc: {
                        w: 'wound',
                      },
                    },
                  },
                },
              },
              accaa: {
                w: 'pouty',
              },
              accca: {
                w: 'young',
              },
            },
          },
          acaaa: {
            w: 'pudgy',
            g: {
              accac: {
                w: 'buddy',
              },
              acacc: {
                w: 'buggy',
              },
              acaac: {
                w: 'bunny',
                g: {
                  accac: {
                    w: 'funky',
                  },
                  acccc: {
                    w: 'funny',
                  },
                  acaac: {
                    w: 'fuzzy',
                  },
                  acpac: {
                    w: 'nutty',
                  },
                },
              },
              pcapc: {
                w: 'guppy',
              },
              acaaa: {
                w: 'junto',
              },
              acpaa: {
                w: 'outdo',
              },
              acaca: {
                w: 'outgo',
              },
              ccaac: {
                w: 'puffy',
                g: {
                  ccaac: {
                    w: 'puppy',
                    g: {
                      ccaac: {
                        w: 'putty',
                      },
                    },
                  },
                },
              },
            },
          },
          accaa: {
            w: 'bully',
            g: {
              cccac: {
                w: 'bulky',
              },
              acccc: {
                w: 'dully',
                g: {
                  acccc: {
                    w: 'fully',
                    g: {
                      acccc: {
                        w: 'gully',
                      },
                    },
                  },
                },
              },
              accac: {
                w: 'pulpy',
              },
            },
          },
          acacc: {
            w: 'bunch',
            g: {
              ccacc: {
                w: 'butch',
              },
              acacc: {
                w: 'dutch',
                g: {
                  acccc: {
                    w: 'hutch',
                  },
                },
              },
              acccc: {
                w: 'hunch',
                g: {
                  acccc: {
                    w: 'punch',
                  },
                },
              },
            },
          },
          pcaaa: {
            w: 'dummy',
            g: {
              acpaa: {
                w: 'buxom',
              },
              cccac: {
                w: 'dumpy',
              },
              accaa: {
                w: 'gumbo',
                g: {
                  acccc: {
                    w: 'jumbo',
                  },
                },
              },
              acccc: {
                w: 'gummy',
              },
              accac: {
                w: 'jumpy',
              },
            },
          },
          aaacp: {
            w: 'chock',
          },
          apacp: {
            w: 'chuck',
          },
          ppapp: {
            w: 'chump',
          },
          apapp: {
            w: 'chunk',
          },
          aappc: {
            w: 'cloth',
          },
          apppa: {
            w: 'cloud',
            g: {
              cccca: {
                w: 'clout',
              },
              ccapa: {
                w: 'clung',
              },
              cpppc: {
                w: 'could',
              },
            },
          },
          aappa: {
            w: 'clown',
            g: {
              cppaa: {
                w: 'coyly',
              },
            },
          },
          appca: {
            w: 'cluck',
            g: {
              acccc: {
                w: 'pluck',
              },
            },
          },
          ppppa: {
            w: 'clump',
          },
          aacpa: {
            w: 'colon',
          },
          paapa: {
            w: 'comfy',
          },
          aaapa: {
            w: 'condo',
          },
          apacc: {
            w: 'couch',
            g: {
              acccc: {
                w: 'pouch',
                g: {
                  acccc: {
                    w: 'touch',
                    g: {
                      acccc: {
                        w: 'vouch',
                      },
                    },
                  },
                },
              },
            },
          },
          apapc: {
            w: 'cough',
          },
          apapa: {
            w: 'count',
            g: {
              pappc: {
                w: 'uncut',
              },
            },
          },
          aacaa: {
            w: 'dolly',
            g: {
              acccc: {
                w: 'folly',
                g: {
                  acccc: {
                    w: 'golly',
                    g: {
                      acccc: {
                        w: 'jolly',
                      },
                    },
                  },
                },
              },
              apcap: {
                w: 'nylon',
              },
              accap: {
                w: 'polyp',
              },
            },
          },
          acapp: {
            w: 'duchy',
          },
          appap: {
            w: 'ghoul',
          },
          aapac: {
            w: 'glyph',
          },
          acccc: {
            w: 'gulch',
          },
          aaaap: {
            w: 'whoop',
            g: {
              appaa: {
                w: 'hobby',
              },
              pppaa: {
                w: 'howdy',
              },
              accap: {
                w: 'phony',
              },
              accpp: {
                w: 'photo',
              },
              accaa: {
                w: 'thong',
              },
            },
          },
          aacap: {
            w: 'holly',
          },
          aapap: {
            w: 'hotly',
          },
          apaap: {
            w: 'hound',
          },
          pcaac: {
            w: 'humph',
          },
          acaap: {
            w: 'hunky',
            g: {
              pcaaa: {
                w: 'ought',
              },
            },
          },
          aaaca: {
            w: 'knock',
          },
          acppa: {
            w: 'lucky',
          },
          pcpaa: {
            w: 'lumpy',
          },
          acpcc: {
            w: 'lunch',
          },
          papac: {
            w: 'lymph',
          },
          cppaa: {
            w: 'mogul',
            g: {
              ccapp: {
                w: 'moult',
              },
            },
          },
          cacaa: {
            w: 'moldy',
          },
          caaac: {
            w: 'month',
          },
          caaaa: {
            w: 'moody',
            g: {
              ccpaa: {
                w: 'motto',
              },
            },
          },
          cpaaa: {
            w: 'mound',
            g: {
              cccca: {
                w: 'mount',
              },
            },
          },
          cpaac: {
            w: 'mouth',
          },
          ccapa: {
            w: 'mucky',
          },
          ccaaa: {
            w: 'muddy',
            g: {
              ccaac: {
                w: 'mummy',
              },
            },
          },
          ccacc: {
            w: 'munch',
          },
          paaac: {
            w: 'nymph',
          },
          pppaa: {
            w: 'plumb',
            g: {
              cccca: {
                w: 'plump',
              },
            },
          },
          paaaa: {
            w: 'pygmy',
          },
          acaac: {
            w: 'quoth',
          },
          ppaap: {
            w: 'thumb',
            g: {
              cccca: {
                w: 'thump',
              },
            },
          },
        },
      },
      paaaa: {
        w: 'court',
        g: {
          aacca: {
            w: 'blurb',
          },
          aaccc: {
            w: 'blurt',
          },
          apapa: {
            w: 'droop',
            g: {
              pccca: {
                w: 'brood',
              },
              accca: {
                w: 'brook',
                g: {
                  cccca: {
                    w: 'broom',
                  },
                  accca: {
                    w: 'groom',
                  },
                },
              },
              accaa: {
                w: 'brown',
                g: {
                  acccc: {
                    w: 'frown',
                    g: {
                      acccc: {
                        w: 'grown',
                      },
                    },
                  },
                  accca: {
                    w: 'growl',
                  },
                  accpp: {
                    w: 'wrong',
                  },
                },
              },
              cccaa: {
                w: 'droll',
                g: {
                  cccaa: {
                    w: 'drown',
                  },
                },
              },
              cccca: {
                w: 'drool',
              },
              apcca: {
                w: 'floor',
              },
              pccaa: {
                w: 'frond',
              },
              accap: {
                w: 'prong',
                g: {
                  cccaa: {
                    w: 'prowl',
                    g: {
                      cccaa: {
                        w: 'proxy',
                      },
                    },
                  },
                },
              },
              acccp: {
                w: 'proof',
              },
            },
          },
          apapp: {
            w: 'throb',
            g: {
              ppppp: {
                w: 'broth',
              },
              ppppa: {
                w: 'froth',
              },
              cccca: {
                w: 'throw',
              },
              cappa: {
                w: 'troll',
              },
              capca: {
                w: 'troop',
              },
            },
          },
          aacpc: {
            w: 'brunt',
            g: {
              acccc: {
                w: 'grunt',
              },
            },
          },
          aappa: {
            w: 'burly',
            g: {
              accac: {
                w: 'murky',
              },
            },
          },
          aappc: {
            w: 'burnt',
          },
          cpaca: {
            w: 'chord',
          },
          cacca: {
            w: 'churn',
          },
          ccapa: {
            w: 'color',
            g: {
              ccaap: {
                w: 'corny',
              },
            },
          },
          cpapa: {
            w: 'crown',
            g: {
              cccaa: {
                w: 'crock',
                g: {
                  cccac: {
                    w: 'crook',
                  },
                },
              },
              cccap: {
                w: 'crony',
              },
              cccca: {
                w: 'crowd',
              },
            },
          },
          cpppa: {
            w: 'croup',
          },
          cacpa: {
            w: 'crumb',
            g: {
              cccca: {
                w: 'crump',
              },
            },
          },
          caapc: {
            w: 'crypt',
          },
          cappa: {
            w: 'curly',
            g: {
              cccac: {
                w: 'curvy',
              },
            },
          },
          capca: {
            w: 'curry',
          },
          acapa: {
            w: 'donor',
            g: {
              acapp: {
                w: 'forgo',
              },
              acccc: {
                w: 'honor',
              },
              acpap: {
                w: 'horny',
              },
              acpcp: {
                w: 'moron',
              },
              acaap: {
                w: 'morph',
              },
              pcaap: {
                w: 'wordy',
                g: {
                  cccpa: {
                    w: 'world',
                  },
                },
              },
            },
          },
          acaca: {
            w: 'dowry',
            g: {
              acacc: {
                w: 'lorry',
              },
              acpcc: {
                w: 'worry',
              },
            },
          },
          aacpa: {
            w: 'drunk',
            g: {
              accaa: {
                w: 'gruff',
              },
              accca: {
                w: 'wrung',
              },
            },
          },
          aaapa: {
            w: 'dryly',
            g: {
              acccc: {
                w: 'wryly',
              },
            },
          },
          apaca: {
            w: 'fjord',
            g: {
              aacca: {
                w: 'glory',
              },
              aapcp: {
                w: 'hydro',
              },
            },
          },
          apppa: {
            w: 'furor',
            g: {
              cpapc: {
                w: 'flour',
              },
              apppa: {
                w: 'group',
                g: {
                  acccp: {
                    w: 'proud',
                  },
                },
              },
              acacc: {
                w: 'humor',
              },
              acccc: {
                w: 'juror',
              },
            },
          },
          acapp: {
            w: 'forth',
            g: {
              cccca: {
                w: 'forty',
              },
              acppa: {
                w: 'motor',
              },
              acccc: {
                w: 'north',
                g: {
                  acccc: {
                    w: 'worth',
                  },
                },
              },
            },
          },
          acppa: {
            w: 'forum',
          },
          ppapa: {
            w: 'frock',
          },
          apapc: {
            w: 'front',
          },
          aapca: {
            w: 'furry',
            g: {
              acccc: {
                w: 'hurry',
              },
            },
          },
          accca: {
            w: 'gourd',
            g: {
              accca: {
                w: 'mourn',
              },
            },
          },
          apppc: {
            w: 'grout',
            g: {
              acccc: {
                w: 'trout',
              },
            },
          },
          pappa: {
            w: 'lurch',
          },
          aaaca: {
            w: 'myrrh',
          },
          ppppa: {
            w: 'occur',
          },
          pcapa: {
            w: 'porch',
          },
          apacp: {
            w: 'thorn',
          },
          aappp: {
            w: 'thrum',
          },
          pcapp: {
            w: 'torch',
          },
          pacpp: {
            w: 'truck',
          },
          aacpp: {
            w: 'truly',
            g: {
              cccaa: {
                w: 'trump',
                g: {
                  cccaa: {
                    w: 'trunk',
                    g: {
                      cccaa: {
                        w: 'truth',
                      },
                    },
                  },
                },
              },
            },
          },
          apppp: {
            w: 'tumor',
            g: {
              ccapp: {
                w: 'turbo',
              },
              ccacc: {
                w: 'tutor',
              },
            },
          },
        },
      },
      aaaca: {
        w: 'floss',
        g: {
          acaca: {
            w: 'blush',
            g: {
              acccc: {
                w: 'plush',
              },
            },
          },
          aacca: {
            w: 'boost',
            g: {
              aaccc: {
                w: 'ghost',
              },
            },
          },
          aapcp: {
            w: 'bossy',
            g: {
              acccc: {
                w: 'mossy',
              },
            },
          },
          ccaca: {
            w: 'flush',
          },
          caacp: {
            w: 'fussy',
          },
          acccc: {
            w: 'gloss',
          },
          aaaca: {
            w: 'gypsy',
          },
          aaacp: {
            w: 'hussy',
            g: {
              pppca: {
                w: 'shush',
              },
            },
          },
          aapca: {
            w: 'joust',
          },
          appca: {
            w: 'lousy',
          },
          acccp: {
            w: 'slosh',
          },
          acacp: {
            w: 'slush',
          },
        },
      },
      aaapa: {
        w: 'stunk',
        g: {
          pappa: {
            w: 'bonus',
          },
          paaaa: {
            w: 'bosom',
          },
          papaa: {
            w: 'humus',
            g: {
              pcaap: {
                w: 'bushy',
                g: {
                  acccc: {
                    w: 'pushy',
                  },
                },
              },
              aaacc: {
                w: 'focus',
                g: {
                  acccc: {
                    w: 'locus',
                  },
                },
              },
              acacc: {
                w: 'lupus',
              },
              acpcc: {
                w: 'mucus',
              },
              pcpap: {
                w: 'mushy',
              },
            },
          },
          papap: {
            w: 'dusky',
            g: {
              acccc: {
                w: 'husky',
                g: {
                  acccc: {
                    w: 'musky',
                  },
                },
              },
            },
          },
          pppaa: {
            w: 'dusty',
            g: {
              accca: {
                w: 'gusto',
              },
              acccc: {
                w: 'gusty',
                g: {
                  acccc: {
                    w: 'lusty',
                    g: {
                      acccc: {
                        w: 'musty',
                      },
                    },
                  },
                },
              },
            },
          },
          caaaa: {
            w: 'scowl',
            g: {
              cccaa: {
                w: 'scoff',
                g: {
                  cccaa: {
                    w: 'scoop',
                  },
                },
              },
              cccap: {
                w: 'scold',
              },
              cacca: {
                w: 'showy',
              },
              caaap: {
                w: 'shyly',
                g: {
                  caccc: {
                    w: 'slyly',
                  },
                },
              },
              cacap: {
                w: 'sloop',
              },
              capaa: {
                w: 'soggy',
              },
              cacaa: {
                w: 'spoof',
              },
              cacac: {
                w: 'spool',
              },
              cacpa: {
                w: 'swoop',
              },
            },
          },
          cppaa: {
            w: 'scout',
            g: {
              caccc: {
                w: 'shout',
                g: {
                  caccc: {
                    w: 'spout',
                  },
                },
              },
            },
          },
          caaac: {
            w: 'shock',
            g: {
              cccac: {
                w: 'shook',
              },
              caccc: {
                w: 'smock',
              },
              cacac: {
                w: 'spook',
              },
            },
          },
          cpaaa: {
            w: 'shoot',
            g: {
              cpcap: {
                w: 'sloth',
              },
              cpcpp: {
                w: 'sooth',
              },
              cacpp: {
                w: 'sooty',
              },
            },
          },
          caapa: {
            w: 'shown',
            g: {
              cacap: {
                w: 'snoop',
              },
              caccp: {
                w: 'snowy',
              },
              cacac: {
                w: 'spoon',
              },
              cacpc: {
                w: 'swoon',
              },
              capap: {
                w: 'synod',
              },
            },
          },
          cacac: {
            w: 'shuck',
            g: {
              cacac: {
                w: 'skulk',
              },
            },
          },
          cpcca: {
            w: 'shunt',
          },
          cacap: {
            w: 'skull',
          },
          caccc: {
            w: 'skunk',
            g: {
              caccc: {
                w: 'slunk',
                g: {
                  caccc: {
                    w: 'spunk',
                  },
                },
              },
            },
          },
          cacaa: {
            w: 'slump',
          },
          cacca: {
            w: 'slung',
            g: {
              cacca: {
                w: 'sound',
              },
              caccc: {
                w: 'swung',
              },
            },
          },
          caaap: {
            w: 'smoky',
          },
          cpppa: {
            w: 'snout',
          },
          cacpc: {
            w: 'snuck',
          },
          cacpa: {
            w: 'snuff',
          },
          cpcaa: {
            w: 'south',
          },
          ccaac: {
            w: 'stock',
          },
          ccaaa: {
            w: 'stomp',
            g: {
              cccaa: {
                w: 'stood',
                g: {
                  cccca: {
                    w: 'stool',
                  },
                },
              },
              cccac: {
                w: 'stoop',
              },
            },
          },
          ccaca: {
            w: 'stony',
          },
          ccpaa: {
            w: 'stout',
          },
          cccac: {
            w: 'stuck',
          },
          cccaa: {
            w: 'study',
            g: {
              cccaa: {
                w: 'stuff',
                g: {
                  cccaa: {
                    w: 'stump',
                  },
                },
              },
            },
          },
          cccca: {
            w: 'stung',
            g: {
              cccca: {
                w: 'stunt',
              },
            },
          },
          capap: {
            w: 'sulky',
          },
          capaa: {
            w: 'sully',
          },
          capca: {
            w: 'sunny',
          },
        },
      },
      paaac: {
        w: 'trope',
        g: {
          appac: {
            w: 'forge',
            g: {
              accac: {
                w: 'borne',
                g: {
                  accac: {
                    w: 'horde',
                  },
                },
              },
              cccac: {
                w: 'force',
              },
              acccc: {
                w: 'gorge',
              },
              appac: {
                w: 'ombre',
              },
            },
          },
          accac: {
            w: 'drone',
            g: {
              accac: {
                w: 'broke',
                g: {
                  accac: {
                    w: 'froze',
                    g: {
                      accac: {
                        w: 'grove',
                      },
                    },
                  },
                },
              },
              acccc: {
                w: 'crone',
              },
              cccac: {
                w: 'drove',
              },
              pccac: {
                w: 'erode',
              },
            },
          },
          pcaac: {
            w: 'brute',
          },
          apcac: {
            w: 'chore',
          },
          acaac: {
            w: 'creme',
            g: {
              ccaac: {
                w: 'crude',
              },
            },
          },
          acacc: {
            w: 'crepe',
          },
          apaac: {
            w: 'nerve',
            g: {
              aaccc: {
                w: 'curve',
              },
              pcpac: {
                w: 'genre',
              },
              accac: {
                w: 'merge',
              },
              accpc: {
                w: 'verge',
              },
              acccc: {
                w: 'verve',
              },
              appac: {
                w: 'where',
              },
            },
          },
          pppac: {
            w: 'forte',
          },
          acccc: {
            w: 'grope',
          },
          accpc: {
            w: 'probe',
            g: {
              cccac: {
                w: 'prone',
                g: {
                  cccac: {
                    w: 'prove',
                  },
                },
              },
            },
          },
          acapc: {
            w: 'prude',
            g: {
              cccac: {
                w: 'prune',
              },
            },
          },
          apapc: {
            w: 'puree',
            g: {
              cccac: {
                w: 'purge',
              },
            },
          },
          cpaac: {
            w: 'there',
            g: {
              ccppc: {
                w: 'three',
              },
            },
          },
          cccac: {
            w: 'trove',
          },
          ccaac: {
            w: 'truce',
          },
          pccac: {
            w: 'wrote',
          },
        },
      },
      ppcaa: {
        w: 'briar',
        g: {
          acccc: {
            w: 'friar',
          },
          accca: {
            w: 'triad',
            g: {
              cccca: {
                w: 'trial',
              },
            },
          },
        },
      },
      pacac: {
        w: 'tripe',
        g: {
          accac: {
            w: 'bride',
            g: {
              cccac: {
                w: 'bribe',
                g: {
                  cccac: {
                    w: 'brine',
                  },
                },
              },
              accac: {
                w: 'crime',
                g: {
                  acccc: {
                    w: 'grime',
                  },
                  accac: {
                    w: 'urine',
                  },
                },
              },
              accpc: {
                w: 'drive',
              },
            },
          },
          acccc: {
            w: 'gripe',
          },
          accpc: {
            w: 'price',
            g: {
              cccac: {
                w: 'pride',
                g: {
                  cccac: {
                    w: 'prime',
                    g: {
                      cccac: {
                        w: 'prize',
                      },
                    },
                  },
                },
              },
            },
          },
          cccac: {
            w: 'tribe',
            g: {
              cccac: {
                w: 'trice',
                g: {
                  cccac: {
                    w: 'trite',
                  },
                },
              },
            },
          },
          pccac: {
            w: 'write',
          },
        },
      },
      pacaa: {
        w: 'print',
        g: {
          accaa: {
            w: 'grill',
            g: {
              accaa: {
                w: 'brick',
                g: {
                  acccc: {
                    w: 'crick',
                  },
                },
              },
              acccc: {
                w: 'drill',
                g: {
                  acccc: {
                    w: 'frill',
                    g: {
                      acccc: {
                        w: 'krill',
                      },
                    },
                  },
                },
              },
              cccaa: {
                w: 'grimy',
              },
            },
          },
          accca: {
            w: 'bring',
            g: {
              cccca: {
                w: 'brink',
                g: {
                  cccca: {
                    w: 'briny',
                  },
                },
              },
              accca: {
                w: 'drink',
              },
              acccp: {
                w: 'grind',
              },
              acccc: {
                w: 'wring',
              },
            },
          },
          ppcaa: {
            w: 'chirp',
          },
          pccaa: {
            w: 'crimp',
          },
          accac: {
            w: 'drift',
          },
          apcac: {
            w: 'flirt',
          },
          accap: {
            w: 'fritz',
            g: {
              accpa: {
                w: 'trick',
              },
            },
          },
          cccaa: {
            w: 'primo',
            g: {
              cccaa: {
                w: 'prick',
                g: {
                  cccaa: {
                    w: 'privy',
                  },
                },
              },
              cccap: {
                w: 'prior',
              },
            },
          },
          apcaa: {
            w: 'quirk',
            g: {
              aacca: {
                w: 'whirl',
              },
            },
          },
          apcap: {
            w: 'third',
            g: {
              cacca: {
                w: 'twirl',
              },
            },
          },
        },
      },
      pacap: {
        w: 'fried',
        g: {
          pccca: {
            w: 'brief',
            g: {
              acccc: {
                w: 'grief',
              },
            },
          },
          acccc: {
            w: 'cried',
            g: {
              acccc: {
                w: 'dried',
                g: {
                  acccc: {
                    w: 'pried',
                    g: {
                      acccc: {
                        w: 'tried',
                      },
                    },
                  },
                },
              },
            },
          },
          accca: {
            w: 'crier',
          },
          acccp: {
            w: 'drier',
          },
          cpcca: {
            w: 'flier',
          },
          apcca: {
            w: 'plier',
          },
          apcpc: {
            w: 'weird',
          },
        },
      },
      pacca: {
        w: 'brisk',
        g: {
          accca: {
            w: 'crisp',
            g: {
              acccp: {
                w: 'prism',
              },
              accca: {
                w: 'wrist',
              },
            },
          },
          acccc: {
            w: 'frisk',
          },
        },
      },
      paaca: {
        w: 'crust',
        g: {
          accca: {
            w: 'brush',
          },
          appcc: {
            w: 'burst',
          },
          ccaca: {
            w: 'cross',
          },
          cccca: {
            w: 'crush',
          },
          acaca: {
            w: 'dross',
            g: {
              acccc: {
                w: 'gross',
              },
            },
          },
          acacc: {
            w: 'frost',
            g: {
              acacc: {
                w: 'tryst',
              },
            },
          },
          apacp: {
            w: 'torso',
          },
          acccp: {
            w: 'truss',
          },
          acccc: {
            w: 'trust',
          },
          apacc: {
            w: 'worst',
          },
        },
      },
      acpaa: {
        w: 'panic',
        g: {
          acpcp: {
            w: 'cabin',
          },
          acapp: {
            w: 'cacti',
          },
          acacp: {
            w: 'cavil',
            g: {
              pcaca: {
                w: 'tacit',
              },
            },
          },
          acaca: {
            w: 'mafia',
            g: {
              acaca: {
                w: 'habit',
                g: {
                  acaca: {
                    w: 'valid',
                  },
                },
              },
              ccaca: {
                w: 'maxim',
              },
            },
          },
          acacc: {
            w: 'magic',
          },
          accca: {
            w: 'mania',
          },
          acccc: {
            w: 'manic',
          },
          ccaca: {
            w: 'patio',
          },
          pcaca: {
            w: 'vapid',
          },
        },
      },
      pccaa: {
        w: 'dairy',
        g: {
          accca: {
            w: 'cairn',
          },
          acccc: {
            w: 'fairy',
            g: {
              acccc: {
                w: 'hairy',
              },
            },
          },
        },
      },
      acacc: {
        w: 'lapse',
        g: {
          acacc: {
            w: 'cause',
            g: {
              acacc: {
                w: 'masse',
              },
            },
          },
          pcacc: {
            w: 'false',
          },
          acpcc: {
            w: 'pause',
          },
        },
      },
      aacac: {
        w: 'utile',
        g: {
          aacac: {
            w: 'opine',
            g: {
              aacac: {
                w: 'chide',
                g: {
                  cccac: {
                    w: 'chime',
                  },
                },
              },
              aacpc: {
                w: 'knife',
              },
              caccc: {
                w: 'ovine',
              },
              cacac: {
                w: 'oxide',
              },
              pacac: {
                w: 'voice',
              },
              aaccc: {
                w: 'whine',
              },
            },
          },
          aacpc: {
            w: 'elide',
            g: {
              acccc: {
                w: 'glide',
              },
              accac: {
                w: 'olive',
              },
            },
          },
          apcpc: {
            w: 'elite',
          },
          aaccc: {
            w: 'exile',
            g: {
              aaccc: {
                w: 'while',
              },
            },
          },
          pacac: {
            w: 'guide',
            g: {
              accac: {
                w: 'juice',
              },
            },
          },
          paccc: {
            w: 'guile',
          },
          ppcac: {
            w: 'quite',
          },
          apcac: {
            w: 'twice',
            g: {
              cccac: {
                w: 'twine',
              },
              ppcac: {
                w: 'white',
              },
            },
          },
          cpcac: {
            w: 'unite',
          },
        },
      },
      aaacc: {
        w: 'loose',
        g: {
          aaccc: {
            w: 'chose',
            g: {
              acccc: {
                w: 'those',
                g: {
                  acccc: {
                    w: 'whose',
                  },
                },
              },
            },
          },
          paccc: {
            w: 'close',
          },
          acacc: {
            w: 'copse',
            g: {
              acacc: {
                w: 'house',
                g: {
                  acccc: {
                    w: 'mouse',
                  },
                },
              },
              acpcc: {
                w: 'posse',
              },
            },
          },
          aaacc: {
            w: 'dense',
            g: {
              acacc: {
                w: 'geese',
              },
              acccc: {
                w: 'sense',
                g: {
                  acccc: {
                    w: 'tense',
                  },
                },
              },
              apacc: {
                w: 'these',
              },
            },
          },
          acccc: {
            w: 'goose',
            g: {
              acccc: {
                w: 'moose',
                g: {
                  acccc: {
                    w: 'noose',
                  },
                },
              },
            },
          },
          ccacc: {
            w: 'louse',
          },
          apacc: {
            w: 'obese',
          },
          paacc: {
            w: 'pulse',
          },
        },
      },
      papap: {
        w: 'diner',
        g: {
          pcacc: {
            w: 'cider',
            g: {
              acccc: {
                w: 'wider',
              },
            },
          },
          ccacc: {
            w: 'diver',
          },
          acacc: {
            w: 'giver',
            g: {
              acacc: {
                w: 'fiber',
                g: {
                  ccacc: {
                    w: 'filer',
                    g: {
                      ccacc: {
                        w: 'fixer',
                      },
                    },
                  },
                  acacc: {
                    w: 'piper',
                    g: {
                      acacc: {
                        w: 'timer',
                      },
                    },
                  },
                },
              },
              acccc: {
                w: 'liver',
              },
              pcacc: {
                w: 'tiger',
              },
              acpcc: {
                w: 'viper',
              },
            },
          },
          acapp: {
            w: 'fiery',
          },
          acccc: {
            w: 'finer',
            g: {
              acccc: {
                w: 'liner',
                g: {
                  acccc: {
                    w: 'miner',
                  },
                },
              },
            },
          },
          ppacc: {
            w: 'idler',
          },
          apppp: {
            w: 'inert',
          },
          appcc: {
            w: 'infer',
            g: {
              ccacc: {
                w: 'inter',
              },
            },
          },
          apccc: {
            w: 'inner',
          },
          apapp: {
            w: 'merit',
            g: {
              accca: {
                w: 'peril',
              },
            },
          },
          acpcc: {
            w: 'nicer',
          },
          apapc: {
            w: 'their',
          },
        },
      },
      paacp: {
        w: 'cress',
        g: {
          cccca: {
            w: 'crest',
          },
          acccc: {
            w: 'dress',
            g: {
              acccc: {
                w: 'press',
              },
            },
          },
          accca: {
            w: 'fresh',
            g: {
              accca: {
                w: 'wrest',
              },
            },
          },
          appca: {
            w: 'verso',
          },
        },
      },
      paacc: {
        w: 'curse',
        g: {
          aaccc: {
            w: 'horse',
            g: {
              aaccc: {
                w: 'terse',
                g: {
                  acccc: {
                    w: 'verse',
                  },
                },
              },
              acccc: {
                w: 'worse',
              },
            },
          },
          acccc: {
            w: 'nurse',
            g: {
              acccc: {
                w: 'purse',
              },
            },
          },
          aapcc: {
            w: 'prose',
          },
        },
      },
      accaa: {
        w: 'faint',
        g: {
          accaa: {
            w: 'daily',
            g: {
              acccc: {
                w: 'gaily',
              },
            },
          },
          cccap: {
            w: 'faith',
          },
          acccc: {
            w: 'paint',
            g: {
              acccc: {
                w: 'taint',
              },
            },
          },
        },
      },
      accca: {
        w: 'daisy',
        g: {
          accca: {
            w: 'waist',
          },
        },
      },
      papac: {
        w: 'dirge',
        g: {
          apcac: {
            w: 'eerie',
          },
        },
      },
      acapp: {
        w: 'easel',
      },
      appap: {
        w: 'email',
        g: {
          pappc: {
            w: 'ideal',
          },
          pppca: {
            w: 'media',
          },
        },
      },
      aaapc: {
        w: 'stone',
        g: {
          paapc: {
            w: 'ensue',
          },
          caacc: {
            w: 'scene',
          },
          caccc: {
            w: 'scone',
            g: {
              caccc: {
                w: 'shone',
              },
            },
          },
          cacac: {
            w: 'scope',
            g: {
              cacac: {
                w: 'shove',
                g: {
                  cacac: {
                    w: 'smoke',
                  },
                },
              },
              caccc: {
                w: 'slope',
              },
              cacpc: {
                w: 'spoke',
              },
            },
          },
          caaac: {
            w: 'segue',
          },
          cpcac: {
            w: 'smote',
          },
          capac: {
            w: 'solve',
          },
          cccac: {
            w: 'stoke',
            g: {
              cccac: {
                w: 'stole',
                g: {
                  cccac: {
                    w: 'stove',
                  },
                },
              },
            },
          },
          ccaac: {
            w: 'style',
          },
        },
      },
      paapp: {
        w: 'sheer',
        g: {
          papcc: {
            w: 'ester',
          },
          paacc: {
            w: 'loser',
            g: {
              acccc: {
                w: 'poser',
              },
            },
          },
          caacp: {
            w: 'screw',
          },
          capap: {
            w: 'serum',
          },
          capcc: {
            w: 'sever',
            g: {
              ccacc: {
                w: 'sewer',
              },
            },
          },
          ccacp: {
            w: 'shrew',
          },
          caccc: {
            w: 'sneer',
            g: {
              caccc: {
                w: 'steer',
              },
            },
          },
          caacc: {
            w: 'sober',
            g: {
              ccacc: {
                w: 'sower',
              },
              caacc: {
                w: 'super',
                g: {
                  ccacc: {
                    w: 'surer',
                  },
                },
              },
            },
          },
          cacap: {
            w: 'sperm',
            g: {
              cacca: {
                w: 'stern',
              },
            },
          },
          ppacc: {
            w: 'usher',
          },
        },
      },
      aaccp: {
        w: 'exist',
        g: {
          paccc: {
            w: 'heist',
          },
        },
      },
      papca: {
        w: 'first',
      },
      acaca: {
        w: 'salsa',
        g: {
          pcaca: {
            w: 'gassy',
          },
          pcpca: {
            w: 'lasso',
          },
          accca: {
            w: 'palsy',
          },
          acaca: {
            w: 'pansy',
            g: {
              ccacc: {
                w: 'patsy',
              },
            },
          },
          ccaca: {
            w: 'sassy',
          },
        },
      },
      aapca: {
        w: 'tipsy',
        g: {
          acccc: {
            w: 'gipsy',
          },
          acaca: {
            w: 'kiosk',
          },
          pcaca: {
            w: 'midst',
          },
          acacc: {
            w: 'missy',
            g: {
              acccc: {
                w: 'sissy',
              },
            },
          },
        },
      },
      aaccc: {
        w: 'noise',
        g: {
          aaccc: {
            w: 'guise',
          },
          acccc: {
            w: 'poise',
          },
        },
      },
      pcaca: {
        w: 'harsh',
        g: {
          acccc: {
            w: 'marsh',
          },
        },
      },
      appac: {
        w: 'image',
        g: {
          cacac: {
            w: 'inane',
          },
        },
      },
      pppac: {
        w: 'irate',
      },
      aappp: {
        w: 'islet',
        g: {
          ppapa: {
            w: 'sheik',
          },
          ppaca: {
            w: 'sinew',
          },
          ppapp: {
            w: 'stein',
          },
        },
      },
      aappc: {
        w: 'siege',
        g: {
          ppaac: {
            w: 'issue',
          },
          cccac: {
            w: 'sieve',
          },
          ccaac: {
            w: 'since',
          },
          ccacc: {
            w: 'singe',
          },
        },
      },
      accac: {
        w: 'naive',
        g: {
          accac: {
            w: 'maize',
          },
          acccc: {
            w: 'waive',
          },
        },
      },
      pappp: {
        w: 'miser',
        g: {
          apppp: {
            w: 'serif',
          },
          acpcp: {
            w: 'siren',
          },
          acccc: {
            w: 'wiser',
          },
        },
      },
      pcpaa: {
        w: 'nadir',
        g: {
          acacc: {
            w: 'tapir',
          },
        },
      },
      pcacc: {
        w: 'parse',
      },
      appca: {
        w: 'quasi',
      },
      ccpaa: {
        w: 'rabid',
        g: {
          cccpa: {
            w: 'rabbi',
          },
          ccacp: {
            w: 'radii',
            g: {
              cccca: {
                w: 'radio',
              },
            },
          },
          ccacc: {
            w: 'rapid',
          },
          ccaca: {
            w: 'ratio',
          },
        },
      },
      ccaap: {
        w: 'racer',
        g: {
          ccaca: {
            w: 'ramen',
            g: {
              ccacc: {
                w: 'raven',
              },
            },
          },
          ccacc: {
            w: 'rarer',
          },
        },
      },
      ccaaa: {
        w: 'randy',
        g: {
          ccapa: {
            w: 'radar',
          },
          ccaaa: {
            w: 'rajah',
            g: {
              ccaac: {
                w: 'ralph',
              },
              ccaaa: {
                w: 'razor',
              },
            },
          },
          ccaac: {
            w: 'rally',
            g: {
              ccaac: {
                w: 'ratty',
              },
            },
          },
          cccaa: {
            w: 'ranch',
          },
          ccpap: {
            w: 'rayon',
          },
        },
      },
      cccaa: {
        w: 'rainy',
      },
      ccaac: {
        w: 'range',
      },
      ccapa: {
        w: 'raspy',
      },
      cpaap: {
        w: 'relay',
        g: {
          ccapa: {
            w: 'reach',
            g: {
              cccca: {
                w: 'react',
              },
              cccaa: {
                w: 'rearm',
              },
            },
          },
          ccapc: {
            w: 'ready',
          },
          ccppa: {
            w: 'realm',
          },
          ccaca: {
            w: 'rebar',
            g: {
              ccaca: {
                w: 'recap',
              },
              ccpca: {
                w: 'rehab',
              },
            },
          },
          ccpca: {
            w: 'regal',
            g: {
              ccacc: {
                w: 'renal',
              },
            },
          },
          cccca: {
            w: 'relax',
          },
          ccacc: {
            w: 'repay',
          },
        },
      },
      caaap: {
        w: 'ruler',
        g: {
          capca: {
            w: 'rebel',
            g: {
              ccacc: {
                w: 'repel',
                g: {
                  ccacc: {
                    w: 'revel',
                  },
                },
              },
            },
          },
          cpapa: {
            w: 'rebut',
            g: {
              ccacc: {
                w: 'recut',
              },
            },
          },
          cpapc: {
            w: 'recur',
          },
          caapa: {
            w: 'reedy',
            g: {
              ccaaa: {
                w: 'retch',
              },
            },
          },
          caacc: {
            w: 'roger',
            g: {
              caacc: {
                w: 'refer',
              },
              ccacc: {
                w: 'rover',
                g: {
                  ccacc: {
                    w: 'rower',
                  },
                },
              },
            },
          },
          caaca: {
            w: 'renew',
            g: {
              caaca: {
                w: 'rodeo',
              },
            },
          },
          cappa: {
            w: 'reply',
          },
          cpapp: {
            w: 'rerun',
          },
          caapp: {
            w: 'retro',
            g: {
              cccca: {
                w: 'retry',
              },
            },
          },
          ccacc: {
            w: 'ruder',
          },
        },
      },
      caapp: {
        w: 'rebus',
        g: {
          ccaap: {
            w: 'reset',
          },
        },
      },
      capap: {
        w: 'riper',
        g: {
          cpapa: {
            w: 'refit',
            g: {
              ccaca: {
                w: 'relic',
              },
              ccacc: {
                w: 'remit',
              },
            },
          },
          ccacc: {
            w: 'rider',
            g: {
              ccacc: {
                w: 'river',
              },
            },
          },
          cccca: {
            w: 'ripen',
          },
          ccaca: {
            w: 'rivet',
          },
        },
      },
      cacap: {
        w: 'reign',
      },
      cappp: {
        w: 'resin',
        g: {
          cpcpc: {
            w: 'risen',
          },
          cpcpa: {
            w: 'riser',
          },
        },
      },
      caacc: {
        w: 'reuse',
        g: {
          caccc: {
            w: 'rouse',
          },
        },
      },
      caaac: {
        w: 'rogue',
        g: {
          caacc: {
            w: 'revue',
          },
          caaac: {
            w: 'rhyme',
          },
          ccppc: {
            w: 'rouge',
          },
          ccapc: {
            w: 'route',
          },
          caapc: {
            w: 'rupee',
          },
        },
      },
      cacaa: {
        w: 'rhino',
      },
      capac: {
        w: 'ridge',
        g: {
          ccaac: {
            w: 'rifle',
          },
        },
      },
      capaa: {
        w: 'robin',
        g: {
          caapa: {
            w: 'right',
          },
          caaca: {
            w: 'rigid',
          },
          cpapa: {
            w: 'rigor',
          },
        },
      },
      capcc: {
        w: 'rinse',
      },
      cappa: {
        w: 'risky',
      },
      cppaa: {
        w: 'rival',
      },
      cpaaa: {
        w: 'royal',
        g: {
          ccapa: {
            w: 'roach',
          },
          caapa: {
            w: 'rumba',
          },
          caacc: {
            w: 'rural',
          },
        },
      },
      cpaca: {
        w: 'roast',
      },
      caaaa: {
        w: 'ruddy',
        g: {
          caaaa: {
            w: 'robot',
            g: {
              ccacp: {
                w: 'rotor',
              },
            },
          },
          caaac: {
            w: 'rocky',
            g: {
              ccaac: {
                w: 'roomy',
              },
            },
          },
          cpaaa: {
            w: 'rough',
          },
          cppaa: {
            w: 'round',
          },
          caacc: {
            w: 'rowdy',
          },
          ccaac: {
            w: 'rugby',
          },
          ccaaa: {
            w: 'rumor',
          },
        },
      },
      caaca: {
        w: 'roost',
      },
      caapa: {
        w: 'rusty',
      },
      pcapp: {
        w: 'safer',
        g: {
          ccacc: {
            w: 'saner',
          },
        },
      },
      accpa: {
        w: 'saint',
      },
      pcapa: {
        w: 'satyr',
        g: {
          ccaac: {
            w: 'savor',
          },
        },
      },
      apapc: {
        w: 'skate',
        g: {
          cacac: {
            w: 'space',
            g: {
              cacpc: {
                w: 'scale',
              },
              cacac: {
                w: 'shade',
                g: {
                  cccac: {
                    w: 'shale',
                    g: {
                      cccac: {
                        w: 'shame',
                        g: {
                          cccac: {
                            w: 'shave',
                          },
                        },
                      },
                    },
                  },
                  cacac: {
                    w: 'suave',
                  },
                },
              },
              cpcac: {
                w: 'shape',
              },
              cccac: {
                w: 'spade',
              },
            },
          },
          cpcac: {
            w: 'shake',
            g: {
              caccc: {
                w: 'snake',
              },
            },
          },
          caccc: {
            w: 'slate',
            g: {
              caccc: {
                w: 'state',
              },
            },
          },
          cacpc: {
            w: 'stage',
            g: {
              cccac: {
                w: 'stale',
                g: {
                  cccac: {
                    w: 'stave',
                  },
                },
              },
            },
          },
          cpcpc: {
            w: 'stake',
          },
          pacac: {
            w: 'usage',
          },
        },
      },
      ppapc: {
        w: 'scare',
        g: {
          caccc: {
            w: 'share',
            g: {
              caccc: {
                w: 'snare',
                g: {
                  caccc: {
                    w: 'spare',
                    g: {
                      caccc: {
                        w: 'stare',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      aacpa: {
        w: 'stink',
        g: {
          cacpa: {
            w: 'scion',
            g: {
              cacap: {
                w: 'sniff',
              },
            },
          },
          cpcaa: {
            w: 'shift',
            g: {
              cpcap: {
                w: 'smith',
              },
              cacac: {
                w: 'spilt',
              },
              caccc: {
                w: 'swift',
              },
            },
          },
          cacca: {
            w: 'sling',
            g: {
              cacca: {
                w: 'shiny',
                g: {
                  caccc: {
                    w: 'spiny',
                  },
                },
              },
              caccc: {
                w: 'suing',
                g: {
                  caccc: {
                    w: 'swing',
                  },
                },
              },
            },
          },
          cacap: {
            w: 'skiff',
            g: {
              cccaa: {
                w: 'skill',
                g: {
                  cccaa: {
                    w: 'skimp',
                  },
                },
              },
              cpcaa: {
                w: 'spiky',
              },
            },
          },
          cacac: {
            w: 'slick',
          },
          cacaa: {
            w: 'spicy',
            g: {
              cacac: {
                w: 'slimy',
              },
              cccaa: {
                w: 'spill',
              },
              cacaa: {
                w: 'swill',
              },
            },
          },
          caccc: {
            w: 'slink',
          },
          cccac: {
            w: 'stick',
          },
          cccaa: {
            w: 'still',
            g: {
              cccaa: {
                w: 'stiff',
              },
              cccca: {
                w: 'stilt',
              },
            },
          },
          cccca: {
            w: 'sting',
            g: {
              cccca: {
                w: 'stint',
              },
            },
          },
          pacca: {
            w: 'using',
          },
        },
      },
      paapc: {
        w: 'scree',
        g: {
          ccpac: {
            w: 'score',
          },
          cacpc: {
            w: 'serve',
          },
          capac: {
            w: 'shore',
            g: {
              caccc: {
                w: 'snore',
                g: {
                  caccc: {
                    w: 'spore',
                    g: {
                      caccc: {
                        w: 'store',
                        g: {
                          caccc: {
                            w: 'swore',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          caccc: {
            w: 'spree',
          },
          cacac: {
            w: 'surge',
          },
        },
      },
      paapa: {
        w: 'short',
        g: {
          cacca: {
            w: 'scorn',
            g: {
              cacca: {
                w: 'sword',
              },
              caccc: {
                w: 'sworn',
              },
            },
          },
          cacpa: {
            w: 'scour',
          },
          caapa: {
            w: 'scrub',
            g: {
              cccca: {
                w: 'scrum',
              },
              cacpa: {
                w: 'surly',
              },
              cacca: {
                w: 'syrup',
              },
            },
          },
          cccca: {
            w: 'shorn',
          },
          ccapa: {
            w: 'shrub',
            g: {
              cccca: {
                w: 'shrug',
              },
            },
          },
          caaca: {
            w: 'slurp',
            g: {
              caccp: {
                w: 'spurn',
              },
            },
          },
          caccc: {
            w: 'snort',
            g: {
              caccc: {
                w: 'sport',
              },
            },
          },
          capca: {
            w: 'sorry',
          },
          caacc: {
            w: 'spurt',
          },
          caccp: {
            w: 'stork',
            g: {
              cccca: {
                w: 'storm',
                g: {
                  cccca: {
                    w: 'story',
                  },
                },
              },
            },
          },
          caapc: {
            w: 'strut',
          },
          pappp: {
            w: 'torus',
          },
          paaca: {
            w: 'usurp',
          },
        },
      },
      aacpc: {
        w: 'snipe',
        g: {
          cacac: {
            w: 'slime',
            g: {
              cacac: {
                w: 'seize',
                g: {
                  cacac: {
                    w: 'suite',
                  },
                },
              },
              cccac: {
                w: 'slice',
                g: {
                  cccac: {
                    w: 'slide',
                  },
                },
              },
              cpcpc: {
                w: 'smile',
              },
              cacpc: {
                w: 'smite',
              },
            },
          },
          cpcac: {
            w: 'shine',
            g: {
              caccc: {
                w: 'swine',
              },
            },
          },
          cccac: {
            w: 'snide',
          },
          cacpc: {
            w: 'spice',
            g: {
              cccac: {
                w: 'spike',
                g: {
                  cccac: {
                    w: 'spite',
                  },
                },
              },
            },
          },
          cpcpc: {
            w: 'spine',
          },
        },
      },
      apppp: {
        w: 'sepia',
      },
      ppapp: {
        w: 'shear',
        g: {
          caccc: {
            w: 'smear',
            g: {
              caccc: {
                w: 'spear',
                g: {
                  caccc: {
                    w: 'swear',
                  },
                },
              },
            },
          },
        },
      },
      aacpp: {
        w: 'shied',
        g: {
          caccc: {
            w: 'spied',
          },
          cacca: {
            w: 'spiel',
          },
        },
      },
      pacpc: {
        w: 'shire',
        g: {
          caccc: {
            w: 'spire',
          },
        },
      },
      pacpa: {
        w: 'shirk',
        g: {
          cccca: {
            w: 'shirt',
          },
          caccp: {
            w: 'skirt',
          },
          caccc: {
            w: 'smirk',
          },
          cacca: {
            w: 'swirl',
          },
        },
      },
      apppa: {
        w: 'slain',
        g: {
          cappa: {
            w: 'sigma',
          },
          cpccp: {
            w: 'snail',
          },
          cacca: {
            w: 'staid',
          },
          caccc: {
            w: 'stain',
          },
          cacpa: {
            w: 'swami',
          },
          pappa: {
            w: 'vista',
          },
        },
      },
      pacpp: {
        w: 'skier',
      },
      pappa: {
        w: 'sprig',
        g: {
          cpcca: {
            w: 'strip',
          },
          pacpa: {
            w: 'virus',
          },
          pappa: {
            w: 'visor',
          },
        },
      },
      ppppa: {
        w: 'stair',
      },
    },
  };

  protected _about(): BotMeta {
    return {
      name: 'O(1) lookup table bot',
      author: 'Jirka Vrba',
      description:
        'This bot uses a precomputed lookup table with best entropy guess for any given evaluation.',
    };
  }

  protected async _init(): Promise<void> {}

  protected async _pickWord(
    _guessIndex: number,
    previousGuesses: Guess[],
  ): Promise<string> {
    if (previousGuesses.length === 0) {
      return this.lookupTable.w;
    }

    const previousGuessEvaluation = this.buildPattern(previousGuesses.at(-1)!);
    this.lookupTable = this.lookupTable.g![previousGuessEvaluation];
    return this.lookupTable.w;
  }

  private buildPattern(guess: Guess): Evaluation {
    const mapping: Record<LetterStatus, Clue> = {
      exact: 'c',
      occurring: 'p',
      missing: 'a',
    };

    return guess.map((letter) => mapping[letter.status]).join('') as Evaluation;
  }
}
