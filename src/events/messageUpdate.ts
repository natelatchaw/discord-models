import { Event } from '../event';
import { Message } from '../objects/message';

/**
 * @interface MessageUpdate
 * @see https://discord.com/developers/docs/topics/gateway#message-update
 */
export interface MessageUpdate extends Event, Message { }
