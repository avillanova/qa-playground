'use client';

import { use, useEffect, useState } from 'react';
import { Box } from '../atoms/Box';
import { Button } from '../atoms/actions/Button';
import { RecordDetails } from './RecordDetails';
import { Question } from '../molecules/Question';
import data from '../../simulado.json';
import { QuestionHeader } from '../molecules/QuestionHeader';
import { QuestionFooter } from '../molecules/QuestionFooter';

interface StartQuestionProps {
  data: { title: string; details: string };
  setIsStarted: () => void;
  setQuestions: (questions: QuestionType[]) => void;
}

function StartQuestion(props: StartQuestionProps) {
  return (
    <Box className="flex items-center justify-items">
      <RecordDetails
        className="p-4 m-6 flex-1 overflow-y-auto self-start"
        title={data.title}
        details={data.details}
      />
      <div className="p-4 bottom-0 flex-3">
        <Button className="flex-none p-4" onClick={() => props.setIsStarted()}>
          Start
        </Button>
      </div>
    </Box>
  );
}

interface StartedQuestionProps {
  questions: QuestionType[];
  currentQuestion: number;
  setIsStarted: (isStarted: boolean) => void;
  handleAnswer: (question: string, selection: string[]) => void;
  handleQuestion: (direction: string) => void;
  setIsFinished: (isFinished: boolean) => void;
}
function StartedQuestion(props: StartedQuestionProps) {
  return (
    <Box className="flex flex-col justify-stretch">
      <QuestionHeader
        handleCancel={() => props.setIsStarted(false)}
        className="p-5"
        setIsFinished={props.setIsFinished}
      />

      {props.questions.map((question, index) => (
        <Question
          key={question.id}
          visible={props.currentQuestion === index + 1}
          question={question}
          className="flex-1 overflow-y-auto p-2"
          onSelect={props.handleAnswer}
        />
      ))}

      <QuestionFooter
        handleQuestion={props.handleQuestion}
        currentQuestion={props.currentQuestion}
        totalQuestions={3}
        className="p-4"
        setIsFinished={props.setIsFinished}
      />
    </Box>
  );
}

interface FinishedQuestionProps {
  setIsFinished: (isFinished: boolean) => void;
  setIsStarted: (isStarted: boolean) => void;
  questions: QuestionType[];
}

function FinishedQuestion(props: FinishedQuestionProps) {
  return (
    <Box className="flex">
      <article className="prose p-4 m-2 flex-1">
        <h2 className="text-center">RESULTADOS</h2>
        <p className="text-center">Sua pontuação foi de 0 pontos!</p>
      </article>
      <div className="flex-2 p-4 m-2 overflow-y-auto">
        {props.questions.map((question, index) => (
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
            props.setIsFinished(false);
            props.setIsStarted(false);
          }}
        >
          Reiniciar
        </Button>
      </div>
    </Box>
  );
}

export function Questions() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  useEffect(() => {
    const newArray: QuestionType[] = [];
    data.questions.forEach((v, i) => {
      const val = typeof v === 'object' ? Object.assign({}, v) : v;
      newArray.push(val);
    });
    setQuestions(newArray);
  });
  function handleQuestion(direction: string) {
    if (direction === 'next') {
      setCurrentQuestion((prevState) => prevState + 1);
    } else {
      setCurrentQuestion((prevState) => prevState - 1);
    }
  }
  function handleAnswer(question: string, selection: string[]) {
    const newQuestions = questions.map((item) => {
      if (item.id === question) {
        item.answers = selection;
      }
      return item;
    });
    setQuestions(newQuestions);
  }
  function handleStart() {
    setIsStarted(true);
    setCurrentQuestion(1);
  }

  return (
    <>
      {!isStarted ? (
        <StartQuestion
          setQuestions={setQuestions}
          setIsStarted={handleStart}
          data={data}
        />
      ) : !isFinished ? (
        <StartedQuestion
          questions={questions}
          currentQuestion={currentQuestion}
          setIsStarted={setIsStarted}
          handleAnswer={handleAnswer}
          handleQuestion={handleQuestion}
          setIsFinished={setIsFinished}
        />
      ) : (
        <FinishedQuestion
          setIsFinished={setIsFinished}
          setIsStarted={setIsStarted}
          questions={questions}
        />
      )}
    </>
  );
}
