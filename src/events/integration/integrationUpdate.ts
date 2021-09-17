import { UpdateEvent } from '../../event';
import { Integration } from '../../objects/integration';
import { Snowflake } from '../../objects/snowflake';

/**
 * @interface IntegrationUpdate
 * @see https://discord.com/developers/docs/topics/gateway#integration-update
 */
export interface IntegrationUpdate extends UpdateEvent, Integration {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;
}
