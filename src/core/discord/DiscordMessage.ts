import type { BufferFile } from '../utils/BufferFile.ts';

interface BaseDiscordMessage {
  type: string;
  content: string;
}

export interface TextDiscordMessage extends BaseDiscordMessage {
  type: 'text';
}

export interface AttachedFilesDiscordMessage extends BaseDiscordMessage {
  type: 'attached-files';
  attachedFiles: BufferFile[];
}

export type DiscordMessage = TextDiscordMessage | AttachedFilesDiscordMessage;
