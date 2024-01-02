'use client';
import { AssessmentType, QuestionType } from '@/types/AssessmentType';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface AssessmentContextProps {
  assessment?: AssessmentType;
  isStarted: boolean;
  isFinished: boolean;
  currentQuestion: number;
  questions: QuestionType[];
  points: number;
  verdict?: string;
  handleQuestion: (direction: string) => void;
  handleAnswer: (question: string, selection: string[]) => void;
  setIsStarted: Dispatch<SetStateAction<boolean>>;
  setIsFinished: Dispatch<SetStateAction<boolean>>;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  reset: () => void;
  calculatePoints: () => void;
}
export const AssessmentContext = createContext<AssessmentContextProps>({
  isStarted: false,
  isFinished: false,
  currentQuestion: 0,
  questions: [],
  points: 0,
  verdict: 'REPROVADO',
  handleQuestion: () => {},
  handleAnswer: () => {},
  setIsStarted: () => {},
  setIsFinished: () => {},
  setCurrentQuestion: () => {},
  calculatePoints: () => 0,
  reset: () => {}
});

export function AssessmentProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [assessment] = useState<AssessmentType | undefined>();

  return (
    <AssessmentContext.Provider
      value={{
        assessment,
        isStarted: false,
        isFinished: false,
        currentQuestion: 0,
        questions: [],
        points: 0,
        handleQuestion: () => {},
        handleAnswer: () => {},
        setIsStarted: () => {},
        setIsFinished: () => {},
        setCurrentQuestion: () => {},
        reset: () => {},
        calculatePoints: () => 0
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export const useAssessmentContext = () => useContext(AssessmentContext);
