'use client';
import { Button } from '@/components/atoms/actions/Button';
import { Chronometer } from '@/components/molecules/Cronometer';
import { useAssessmentContext } from '@/context/AssessmentContext';

interface QuestionHeaderProps {
  className?: string;
}

export function QuestionHeader(props: QuestionHeaderProps) {
  const { setIsFinished, reset } = useAssessmentContext();
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <Button
          className="bg-error"
          onClick={() => {
            reset();
          }}
        >
          Cancelar
        </Button>
        <Chronometer setIsFinished={setIsFinished} />
      </div>
    </div>
  );
}
