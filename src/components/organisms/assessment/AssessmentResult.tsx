'use client';

import { Box } from '@/components/atoms/Box';
import { Button } from '@/components/atoms/actions/Button';
import { useAssessmentContext } from '@/context/AssessmentContext';

export function AssessmentResult() {
  const { questions, verdict, points, assessment, reset } =
    useAssessmentContext();

  return (
    <Box className="flex">
      <article className="prose p-4 m-2 flex-1">
        <h2 className="text-center">RESULTADOS - {verdict}</h2>
        <p className="text-center">Sua pontuação foi de {points} pontos!</p>
        <p className="text-center">
          Minimo necessario de {assessment?.approvalScore}% para aprovação.
        </p>
      </article>
      <div className="flex-2 p-4 m-2 overflow-y-auto">
        {questions.map((question, index) => (
          <article key={index}>
            <p>{question.title}</p>
            <p>{question.description}</p>
            <p>Correct: {question.correctAnswers}</p>
            <p>Selected: {question.answers}</p>
          </article>
        ))}
      </div>
      <div className="p-4 m-2 bottom-0 flex-3">
        <Button
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
