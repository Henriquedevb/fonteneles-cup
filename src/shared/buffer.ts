import { createReadStream } from 'fs';
import { promisify } from 'util';

const readFile = promisify(createReadStream);

export async function bufferToBase64(buffer) {
  const fileContent = await readFile(buffer, 'base64');
  return fileContent.toString();
}
