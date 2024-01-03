import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: Request, context: { params: { id: string } }) {
  console.log('GET', context.params.id);
  const assessment = await prisma.assessment.findUnique({
    where: {
      id: Number(context.params.id)
    },
    include: {
      questions: true
    }
  });
  const response = NextResponse.json(assessment);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  return response;
}

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  console.log('DELETE', context.params.id);
  await prisma.assessment.delete({
    where: {
      id: Number(context.params.id)
    }
  });
  const response = NextResponse.json({
    message: `Assessment ${context.params.id} removed with success!`
  });
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  return response;
}
