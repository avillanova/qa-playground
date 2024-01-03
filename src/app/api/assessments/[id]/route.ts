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
  return response;
}
