import { UpdateEvent } from '../event';
import { VoiceState } from '../objects/voiceState';

/**
 * @interface VoiceStateUpdate
 * @see https://discord.com/developers/docs/topics/gateway#voice-state-update
 */
export interface VoiceStateUpdate extends UpdateEvent, VoiceState { }
