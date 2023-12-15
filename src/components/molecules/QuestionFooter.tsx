import { Button } from '../atoms/actions/Button';

interface QuestionFooterProps {
  handleQuestion: (direction: string) => void;
  currentQuestion: number;
  totalQuestions: number;
  className?: string;
  setIsFinished: (isFinished: boolean) => void;
}

export function QuestionFooter(props: QuestionFooterProps) {
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <Button
          onClick={() => props.handleQuestion('previous')}
          disabled={props.currentQuestion === 1}
        >
          Anterior
        </Button>
        <div>
          <span>
            {props.currentQuestion}/{props.totalQuestions}
          </span>
        </div>
        {props.currentQuestion != props.totalQuestions ? (
          <Button
            onClick={() => props.handleQuestion('next')}
            disabled={props.currentQuestion === props.totalQuestions}
          >
            Próxima
          </Button>
        ) : (
          <Button
            className="btn-success"
            onClick={() => {
              props.setIsFinished(true);
            }}
          >
            Finalizar
          </Button>
        )}
      </div>
    </div>
  );
}
