import { DeleteEvent } from '../../event';
import { Integration } from '../../objects/integration';
import { Snowflake } from '../../objects/snowflake';

/**
 * @interface IntegrationDelete
 * @see https://discord.com/developers/docs/topics/gateway#integration-delete
 */
export interface IntegrationDelete extends DeleteEvent, Integration {
    /**
     * @property { Snowflake } id - integration id
     */
    id: Snowflake;

    /**
     * @property { Snowflake } guild_id - id of the guild
     */
    guild_id: Snowflake;

    /**
     * @property { Snowflake | undefined } application_id - id of the bot/OAuth2 application for this discord integration
     */
    application_id?: Snowflake;
}
