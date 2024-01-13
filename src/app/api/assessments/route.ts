import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin');
  console.log('Origin: ', origin);
  console.log('GET /api/assessments');
  const assessments = await prisma.assessment.findMany();
  const response = NextResponse.json(assessments);
  return response;
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  const res = await prisma.assessment.create({
    data: {
      title: data.title,
      source: data.source,
      description: data.description,
      time: data.time,
      approvalScore: data.approvalScore,
      questions: {
        create: data.questions
      }
    }
  });
  const response = NextResponse.json(res, { status: 201 });
  return response;
}
