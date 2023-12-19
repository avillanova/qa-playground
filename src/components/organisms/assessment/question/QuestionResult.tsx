import { OptionResult } from './OptionResult';

export function QuestionResult({ question }: { question: QuestionType }) {
  return (
    <>
      <div
        className={`flex flex-col m-2 justify-between rounded-box border border-2 border-solid ${
          question.isCorrect ? 'border-success' : 'border-error'
        }`}
      >
        <article className="m-2 prose w-full">
          <div>Titulo</div>
          <div>decripton</div>

          {question.options.map((option) => {
            return (
              <OptionResult
                option={option}
                correctAnswers={question.correctAnswers}
                answers={question.answers}
              />
            );
          })}
          <div>{question.explanation}</div>
        </article>
      </div>
    </>
  );
}
