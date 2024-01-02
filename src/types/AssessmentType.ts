export interface AssessmentListType {
  id: string;
  title: string;
}

export interface AssessmentType {
  id: string;
  title: string;
  description: string;
  approvalScore: number;
  time: number;
  questions: QuestionType[];
}

export interface QuestionType {
  id: string;
  title: string;
  description: string;
  options: string[];
  correctAnswers: string[];
  answers: string[];
  isCorrect: boolean;
  explanation: string;
}
