import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { MulterOverrideOptionsType } from './types/multer-override-options.type';
import { InvalidActionException } from 'src/application/exceptions/invalid-action.exception';

/**
 * Generate multer configuration for NestJS.
 *
 * @param overrideOptions Object with properties to override from the default configuration
 * @returns {MulterOptions} The generated multer configuration
 */
const multerConfig = (
  overrideOptions?: MulterOverrideOptionsType,
  fileNameRegExp?: RegExp,
): MulterOptions => {
  const options = {
    allowedMimetypes: ['image/jpeg', 'image/png'],
    maxFileByteLength: 10 * 1024 * 1024,
    maxFileNameLength: 60,
    fields: 12,
    files: 1,
    exceptionClass: InvalidActionException,
    ...overrideOptions,
  };

  const ExceptionConstructor = options.exceptionClass;

  return {
    limits: {
      fields: options.fields,
      fileSize: options.maxFileByteLength,
      files: options.files,
      parts: options.files + options.fields,
    },
    fileFilter: (
      _req: any,
      file: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        destination: string;
        filename: string;
        path: string;
        buffer: Buffer;
      },
      callback: (error: Error | null, acceptFile: boolean) => void,
    ) => {
      if (file.originalname.length > options.maxFileNameLength) {
        return callback(
          new ExceptionConstructor(
            `Max file name length is ${options.maxFileNameLength} characters`,
          ),
          false,
        );
      }

      if (fileNameRegExp && fileNameRegExp.test(file.originalname)) {
        return callback(
          new ExceptionConstructor(
            `The file name does not comprise the regular expression ${fileNameRegExp}`,
          ),
          false,
        );
      }

      if (!options.allowedMimetypes.includes(file.mimetype)) {
        return callback(
          new ExceptionConstructor('Mimetype not allowed'),
          false,
        );
      }

      return callback(null, true);
    },
  };
};

export default multerConfig;
