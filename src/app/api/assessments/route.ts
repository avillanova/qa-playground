import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  console.log('GET /api/assessments');
  const assessments = await prisma.assessment.findMany();
  const response = NextResponse.json(assessments);
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

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const res = await prisma.assessment.create({
    data: {
      title: data.title,
      description: data.description,
      time: data.time,
      approvalScore: data.approvalScore,
      questions: {
        create: data.questions
      }
    }
  });
  const response = NextResponse.json(res, { status: 201 });
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
