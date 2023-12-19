'use client';
import { Button } from '@/components/atoms/actions/Button';
import { Chronometer } from '@/components/molecules/Cronometer';
import { useAssessmentContext } from '@/context/AssessmentContext';

interface QuestionHeaderProps {
  className?: string;
}

export function QuestionHeader({ className }: QuestionHeaderProps) {
  const { setIsFinished, reset, assessment } = useAssessmentContext();
  return (
    <div className={className}>
      <div className="flex justify-between">
        <Button
          className="bg-error"
          onClick={() => {
            reset();
          }}
        >
          Cancelar
        </Button>
        <Chronometer setIsFinished={setIsFinished} time={assessment!.time} />
      </div>
    </div>
  );
}
