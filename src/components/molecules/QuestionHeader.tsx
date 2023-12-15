import { Button } from '../atoms/actions/Button';
import { Chronometer } from './Cronometer';

interface QuestionHeaderProps {
  handleCancel: () => void;
  className?: string;
  setIsFinished: (isFinished: boolean) => void;
}

export function QuestionHeader(props: QuestionHeaderProps) {
  return (
    <div className={props.className}>
      <div className="flex justify-between">
        <Button className="bg-error" onClick={props.handleCancel}>
          Cancelar
        </Button>
        <Chronometer setIsFinished={props.setIsFinished} />
      </div>
    </div>
  );
}
