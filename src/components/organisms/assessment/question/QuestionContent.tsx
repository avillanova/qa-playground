'use client';
import { useAssessmentContext } from '@/context/AssessmentContext';
import { useState } from 'react';
import Markdown from 'react-markdown';
interface QuestionProps {
  question: QuestionType;
  visible: boolean;
  className?: string;
}

export function QuestionContent({
  question,
  visible,
  className
}: QuestionProps) {
  const [selection, setSelection] = useState<string[]>([]);
  const { handleAnswer } = useAssessmentContext();

  const handleOptionChange = (event: any) => {
    let newSelection: string[] = [];
    if (selection.includes(event.target.value)) {
      newSelection = selection.filter((value) => value !== event.target.value);
      setSelection(newSelection);
    } else {
      newSelection = [...selection, event.target.value];
      setSelection(newSelection);
    }
    if (handleAnswer) {
      handleAnswer(question.id, newSelection);
    }
  };

  return (
    <div className={`${className} ${visible ? '' : 'hidden'}`}>
      <div className="m-4">
        <article className="prose prose-img:mx-auto">
          <h2 className="card-title">{question.title}</h2>
          <Markdown>{question.description}</Markdown>
        </article>
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={index.toString()}
              name={question.id}
              value={option}
              checked={selection.includes(option)}
              onChange={handleOptionChange}
              className="checkbox"
              disabled={
                !selection.includes(option) &&
                selection.length >= question.correctAnswers.length
              }
            />
            <label className="p-2">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
