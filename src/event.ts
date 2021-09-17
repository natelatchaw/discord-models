import { EventData } from './eventData';

/**
 * @interface Event
 * @see _
 */
export interface Event extends EventData { }


/**
 * @interface AddEvent
 * @see _
 */
export interface AddEvent extends Event { }

/**
 * @interface RemoveEvent
 * @see _
 */
export interface RemoveEvent extends Event { }

/**
 * @interface CreateEvent
 * @see _
 */
export interface CreateEvent extends Event { }

/**
 * @interface UpdateEvent
 * @see _
 */
export interface UpdateEvent extends Event { }

/**
 * @interface DeleteEvent
 * @see _
 */
export interface DeleteEvent extends Event { }
