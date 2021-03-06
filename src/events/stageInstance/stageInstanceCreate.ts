import { CreateEvent } from '../../event';
import { StageInstance } from '../../objects/stageInstance';

/**
 * @interface StageInstanceCreate
 * @see https://discord.com/developers/docs/topics/gateway#stage-instance-create
 */
export interface StageInstanceCreate extends CreateEvent, StageInstance { }
