import { UpdateEvent } from '../event';
import { Snowflake } from '../objects/snowflake';

/**
 * @interface WebhookUpdate
 * @see https://discord.com/developers/docs/topics/gateway#webhooks-update
 */
export interface WebhookUpdate extends UpdateEvent {
    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Snowflake } channel_id - id of the channel
     */
    channel_id: Snowflake;
}
