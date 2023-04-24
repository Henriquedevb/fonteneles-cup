import { ApplicationException } from './application.exception';

/**
 * Domain exception to indicate a general error on the operation.
 */
export class InvalidActionException extends ApplicationException {}
