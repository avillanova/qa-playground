'use client';
import { Button } from '@/components/atoms/actions/Button';
import { useAssessmentContext } from '@/context/AssessmentContext';

interface QuestionFooterProps {
  className?: string;
}

export function QuestionFooter({ className }: QuestionFooterProps) {
  const {
    currentQuestion,
    questions,
    calculatePoints,
    handleQuestion,
    setIsFinished
  } = useAssessmentContext();
  const currentQuestionIndex = currentQuestion + 1;
  return (
    <div className={className}>
      <div className="flex justify-between">
        <Button
          onClick={() => handleQuestion('previous')}
          disabled={currentQuestion === 0}
        >
          Anterior
        </Button>
        <div>
          <span>
            {currentQuestionIndex}/{questions?.length}
          </span>
        </div>
        {currentQuestionIndex != questions?.length ? (
          <Button
            onClick={() => handleQuestion('next')}
            disabled={currentQuestionIndex === questions?.length}
          >
            Próxima
          </Button>
        ) : (
          <Button
            className="btn-success"
            onClick={() => {
              setIsFinished(true);
              calculatePoints();
            }}
          >
            Finalizar
          </Button>
        )}
      </div>
    </div>
  );
}
