export function getBaseUrl() {
  console.log(`Base Url: ${process.env.NEXT_PUBLIC_VERCEL_URL}`);
  if (process.env.NEXT_PUBLIC_VERCEL_URL?.includes('localhost')) {
    return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
