'use client';

import { useState } from 'react';
import { Box } from '../atoms/Box';
import { Button } from '../atoms/actions/Button';
import { RecordDetails } from './RecordDetails';
import { Question } from '../molecules/Question';
import data from '../../simulado.json';
import { QuestionHeader } from '../molecules/QuestionHeader';
import { QuestionFooter } from '../molecules/QuestionFooter';

interface StartQuestionProps {
  data: { title: string; details: { key: string; value: string }[] };
  setIsStarted: (isStarted: boolean) => void;
}

function StartQuestion(props: StartQuestionProps) {
  return (
    <Box className="flex flex-col justify-stretch">
      <RecordDetails
        className="p-5 flex-1 overflow-y-auto"
        title={data.title}
        details={data.details}
      />
      <Button
        className="flex-none p-4"
        onClick={() => props.setIsStarted(true)}
      >
        Start
      </Button>
    </Box>
  );
}

interface StartedQuestionProps {
  questions: {
    id: string;
    title: string;
    description: string;
    options: string[];
    answer: string;
  }[];
  currentQuestion: number;
  setIsStarted: (isStarted: boolean) => void;
  handleAnswer: (question: string, answer: string) => void;
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
          id={question.id}
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

function FinishedQuestion() {
  return (
    <Box className="flex items-center">
      <article className="prose flex-1 justify-items-center items-center p-4">
        <h2 className="">RESULTADOS</h2>
        <p className="">Sua pontuação foi de 0 pontos</p>
      </article>
      <div className="flex-2 p-4 overflow-y-auto">
        Lista de questões e responstas Lista de questões e responstas Lista de
        questões e responsztas Lista de questões e responstas Lista de questões
        e responstas Lista de questões e responstas Lista de questões e
        responstas Lista de questões e responstas Lista de questões e responstas
        Lista de questões e responstas Lista de questões e responstas Lista de
        questões e responstas Lista de questões e responstas Lista de questões e
        responstas Lista de questões e responstas Lista de questões e
        responstasLista de questões e responstas Lista de questões e
        responstasLista de questões e responstas Lista de questões e
        responstasLista de questões e responstasLista de questões e
        responstasLista de questões e responstasLista de questões e
        responstasLista de questões e responstas Lista de questões e
        responstasLista de questões e responstasLista de questões e responstas
        Lista de questões e responstas Lista de questões e responstas Lista de
        questões e responstas Lista de questões e responstas Lista de questões e
        responstas Lista de questões e responstas Lista de questões e responstas
        Lista de questões e responstasLista de questões e responstasLista de
        questões e responstas Lista de questões e responstasLista de questões e
        responstasLista de questões e responstas Lista de questões e responstas
        Lista de questões e responstas Lista de questões e responsztas Lista de
        questões e responstas Lista de questões e responstas Lista de questões e
        responstas Lista de questões e responstas Lista de questões e responstas
        Lista de questões e responstas Lista de questões e responstas Lista de
        questões e responstas Lista de questões e responstas Lista de questões e
        responstas Lista de questões e responstas Lista de questões e responstas
        Lista de questões e responstasLista de questões e responstas Lista de
        questões e responstasLista de questões e responstas Lista de questões e
        responstasLista de questões e responstasLista de questões e
        responstasLista de questões e responstasLista de questões e
        responstasLista de questões e responstas Lista de questões e
        responstasLista de questões e responstasLista de questões e responstas
        Lista de questões e responstas Lista de questões e responstas Lista de
        questões e responstas Lista de questões e responstas Lista de questões e
        responstas Lista de questões e responstas Lista de questões e responstas
        Lista de questões e responstasLista de questões e responstasLista de
        questões e responstas Lista de questões e responstasLista de questões e
        responstasLista de questões e responstas
      </div>
      <div className="p-4 bottom-0 flex-3">
        <Button>Reiniciar</Button>
      </div>
    </Box>
  );
}

export function Questions() {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState(data.questions);

  function handleQuestion(direction: string) {
    if (direction === 'next') {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  }
  function handleAnswer(question: string, answer: string) {
    console.log(question, answer);
    const newQuestions = questions.map((item) => {
      if (item.id === question) {
        item.answer = answer;
      }
      return item;
    });
    setQuestions(newQuestions);
  }

  return (
    <>
      {!isStarted ? (
        <StartQuestion setIsStarted={setIsStarted} data={data} />
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
        <FinishedQuestion />
      )}
    </>
  );
}
