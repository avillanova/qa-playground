import { AssessmentListType, AssessmentType } from '@/types/AssessmentType';

export function getAssessment(assessmentId: string): Promise<any> {
  console.log('getAssessment', assessmentId);
  const assessment: Promise<AssessmentType> = fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/assessments/${assessmentId}`,
    {
      next: { revalidate: 10 }
    }
  ).then((res) => res.json());
  return assessment;
}

export function getAssessmentList(): Promise<AssessmentListType[]> {
  console.log('get List');
  console.log(`Base Url: ${process.env.NEXT_PUBLIC_VERCEL_URL}`);
  const assessments: Promise<AssessmentListType[]> = fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/assessments`,
    {
      next: { revalidate: 10 }
    }
  ).then((res) => res.json());
  return assessments;
}
