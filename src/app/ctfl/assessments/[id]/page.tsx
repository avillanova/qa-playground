import { Breadcrumb } from '@/components/molecules/Breadcrumb';
import { Assessment } from '@/components/organisms/assessment/Assessment';
import { AssessmentProvider } from '@/context/AssessmentContext';

export default function AssessmentPage() {
  return (
    <div>
      <Breadcrumb />
      <AssessmentProvider>
        <Assessment />
      </AssessmentProvider>
    </div>
  );
}
