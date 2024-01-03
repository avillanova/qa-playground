import { AssessmentListType, AssessmentType } from '@/types/AssessmentType';

export function getAssessment(assessmentId: string): Promise<any> {
  console.log('getAssessment', assessmentId);
  const assessment: Promise<AssessmentType> = fetch(
    `${getBaseUrl()}/api/assessments/${assessmentId}`,
    {
      next: { revalidate: 10 }
    }
  ).then((res) => res.json());
  return assessment;
}

export function getAssessmentList(): Promise<AssessmentListType[]> {
  console.log('get List');
  const assessments: Promise<AssessmentListType[]> = fetch(
    `${getBaseUrl()}/api/assessments`,
    {
      next: { revalidate: 10 },
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((res) => res.json());
  return assessments;
}

function getBaseUrl() {
  console.log(`Base Url: ${process.env.NEXT_PUBLIC_VERCEL_URL}`);
  if (process.env.NEXT_PUBLIC_VERCEL_URL?.includes('localhost')) {
    return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
