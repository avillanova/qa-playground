import { Box } from '@/components/atoms/Box';
import { useAssessmentContext } from '@/context/AssessmentContext';
import { QuestionHeader } from './question/QuestionHeader';
import { QuestionFooter } from './question/QuestionFooter';
import { QuestionContent } from './question/QuestionContent';

export function Questions() {
  const { questions, currentQuestion } = useAssessmentContext();

  return (
    <>
      <Box className="flex flex-col justify-stretch">
        <QuestionHeader className="p-5" />
        {questions.map((question, index) => (
          <QuestionContent
            key={question.id}
            visible={currentQuestion === index}
            question={question}
            className="flex-1 overflow-y-auto p-2 bg-base-300/30"
          />
        ))}
        <QuestionFooter className="p-4" />
      </Box>
    </>
  );
}
