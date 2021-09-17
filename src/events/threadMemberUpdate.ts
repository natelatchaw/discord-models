import { UpdateEvent } from '../event';
import { ThreadMember } from '../objects/threadMember';

/**
 * @interface ThreadMemberUpdate
 * @see https://discord.com/developers/docs/topics/gateway#thread-member-update
 */
export interface ThreadMemberUpdate extends UpdateEvent, ThreadMember { }
