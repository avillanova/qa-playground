import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware');
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers.get('origin'));
  console.log('Request Headers: ', request.headers);

  if (request.method === 'OPTIONS') {
    const response = NextResponse.json({});
    console.log('Response Headers: ', response.headers);
    return response;
  }
  const response = NextResponse.next();

  console.log('Response Headers: ', response.headers);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTION'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  response.headers.set('Access-Control-Expose-Headers', '');

  return response;
}

export const config = {
  matcher: '/api/:path*'
};
