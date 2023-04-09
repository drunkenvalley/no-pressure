export interface DiscordGame {
  name: string;
}

export interface DiscordUser {
  // fields common to all users
  id: string;
  username: string;
  discriminator: string;
  avatar: unknown;
  status: string;
  avatar_url: string;
  // field attached to users displaying a game
  game?: DiscordGame;
  // fields attached to users in voice channels
  channel_id?: string;
  deaf?: boolean;
  mute?: boolean;
  self_deaf?: boolean;
  self_mute?: boolean;
  suppress?: boolean;
}

export interface DiscordChannel {
  id: string;
  name: string;
  position: number;
}

export interface DiscordResponse {
  id: string;
  name: string;
  instant_invite: string;
  channels: DiscordChannel[];
  members: DiscordUser[];
  presence_count: number;
}

export default DiscordResponse;
