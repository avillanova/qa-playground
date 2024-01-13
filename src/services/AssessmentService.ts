import { AssessmentListType, AssessmentType } from '@/types/AssessmentType';
import { getBaseUrl } from './ServiceBase';

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
      next: { revalidate: 10 }
    }
  ).then((res) => res.json());
  return assessments;
}
