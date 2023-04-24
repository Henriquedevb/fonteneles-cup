import { ApplicationException } from 'src/application/exceptions/application.exception';

/**
 * Overridable options in multer default configuration
 */
export type MulterOverrideOptionsType = {
  /**
   * Which mimetypes should multer accept.
   * Defaults to? ['application/pdf', 'image/jpeg', 'image/png']
   */
  allowedMimetypes?: string[];
  /**
   * Max file byte length, defaults to 10MB.
   */

  maxFileByteLength?: number;
  /**
   * Max filename length, defaults to 60 characters.
   */

  maxFileNameLength?: number;

  /**
   * Exception class when an error occurs. Must extend
   * application exception. Defaults to InvalidActionException.
   */
  exceptionClass?: typeof ApplicationException;

  /**
   * Max number of non file fields, defaults to 1.
   */
  fields?: number;

  /**
   * Max number of file fields, defaults to 1.
   */
  files?: number;
};
