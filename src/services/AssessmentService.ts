import { AssessmentListType, AssessmentType } from '@/types/AssessmentType';

export function getAssessment(assessmentId: string): Promise<any> {
  console.log('getAssessment', assessmentId);
  const assessment: Promise<AssessmentType> = fetch(
    `/api/assessments/${assessmentId}`,
    {
      next: { revalidate: 10 }
    }
  ).then((res) => res.json());
  return assessment;
}

export function getAssessmentList(): Promise<AssessmentListType[]> {
  const assessments: Promise<AssessmentListType[]> = fetch('/api/assessments', {
    next: { revalidate: 10 }
  }).then((res) => res.json());
  return assessments;
}
