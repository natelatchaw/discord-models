import { Event } from '../event';
import { Message } from '../objects/message';

/**
 * @interface MessageCreate
 * @see https://discord.com/developers/docs/topics/gateway#message-create
 */
export interface MessageCreate extends Event, Message { }
