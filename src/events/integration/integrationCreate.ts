import { CreateEvent } from '../../event';
import { Integration } from '../../objects/integration';
import { Snowflake } from '../../objects/snowflake';

/**
 * @interface IntegrationCreate
 * @see https://discord.com/developers/docs/topics/gateway#integration-create
 */
export interface IntegrationCreate extends CreateEvent, Integration {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;
}
