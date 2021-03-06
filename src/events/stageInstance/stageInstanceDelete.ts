import { DeleteEvent } from '../../event';
import { StageInstance } from '../../objects/stageInstance';

/**
 * @interface StageInstanceDelete
 * @see https://discord.com/developers/docs/topics/gateway#stage-instance-delete
 */
export interface StageInstanceDelete extends DeleteEvent, StageInstance { }
