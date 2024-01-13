'use client';
import { Link } from '@/components/atoms/actions/Link';
import { useAssessmentList } from '@/hooks/useAssessment';

export function AssessmentList() {
  const { assessmentList } = useAssessmentList();

  return (
    <>
      <h1>Assessments</h1>
      {assessmentList.map((assessment) => (
        <div key={assessment.id} className="flex flex-col">
          <h2 className="card-title">{assessment.title}</h2>
          <Link
            href={`/assessments/list/${assessment.id}`}
            className="flex-1 overflow-y-auto p-2"
          >
            {assessment.title}
          </Link>
        </div>
      ))}
    </>
  );
}
