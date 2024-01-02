import Markdown from 'react-markdown';
import { OptionResult } from './OptionResult';
import { QuestionType } from '@/types/AssessmentType';

export function QuestionResult({ question }: { question: QuestionType }) {
  return (
    <>
      <div
        className={`flex flex-col m-2 justify-between rounded-box border-2 border-solid ${
          question.isCorrect ? 'border-success' : 'border-error'
        }`}
      >
        <article className="m-2 prose w-full prose-img:mx-auto">
          <h3>{question.title}</h3>
          <Markdown>{question.description}</Markdown>

          {question.options.map((option, index) => {
            return (
              <OptionResult
                key={index}
                option={option}
                correctAnswers={question.correctAnswers}
                answers={question.answers}
              />
            );
          })}
          <Markdown>{question.explanation}</Markdown>
        </article>
      </div>
    </>
  );
}
