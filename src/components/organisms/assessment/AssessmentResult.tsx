'use client';
import { Box } from '@/components/atoms/Box';
import { Button } from '@/components/atoms/actions/Button';
import { useAssessmentContext } from '@/context/AssessmentContext';
import { QuestionResult } from './question/QuestionResult';

export function AssessmentResult() {
  const { questions, verdict, points, assessment, reset } =
    useAssessmentContext();

  return (
    <Box className="flex items-center justify-items">
      <article className="prose p-4 m-2 flex-1">
        <h2 className="text-center">RESULTADOS - {verdict}</h2>
      </article>
      <div className="overflow-y-auto w-full bg-base-300/30">
        <article className="prose p-4 m-2 flex-1">
          <p className="text-center">Sua pontuação foi de {points} pontos!</p>
          <p className="text-center">
            Minimo necessario de {assessment?.approvalScore}% para aprovação.
          </p>
        </article>
        <div className="flex-2 p-4 self-start rounded-box">
          {questions.map((question) => (
            <QuestionResult question={question} />
          ))}
        </div>
      </div>
      <div className="p-4 m-2 bottom-0 flex-3">
        <Button
          className="flex-none p-4"
          onClick={() => {
            reset();
          }}
        >
          Reiniciar
        </Button>
      </div>
    </Box>
  );
}
