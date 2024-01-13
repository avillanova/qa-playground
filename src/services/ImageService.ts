import { PutBlobResult } from '@vercel/blob';
import { getBaseUrl } from './ServiceBase';

export async function uploadImage(file: File) {
  const response = await fetch(
    `${getBaseUrl()}/api/images?filename=${file.name}`,
    {
      method: 'POST',
      body: file
    }
  );
  const blob = (await response.json()) as PutBlobResult;
  return blob;
}
