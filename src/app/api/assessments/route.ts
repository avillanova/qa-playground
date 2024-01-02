import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  console.log('GET /api/assessments');
  const assessments = await prisma.assessment.findMany();
  return NextResponse.json(assessments);
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  const response = await prisma.assessment.create({
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
  return NextResponse.json(response, { status: 201 });
}
