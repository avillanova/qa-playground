'use client';
import { AssessmentContext } from '@/context/AssessmentContext';
import { AssessmentSummary } from './AssessmentSummary';
import { useParams } from 'next/navigation';
import { useAssessment } from '@/hooks/useAssessment';
import { Questions } from './Questions';
import { AssessmentResult } from './AssessmentResult';

export function Assessment() {
  const { id } = useParams();
  const {
    assessment,
    isStarted,
    isFinished,
    currentQuestion,
    questions,
    points,
    verdict,
    handleQuestion,
    setIsStarted,
    setIsFinished,
    handleAnswer,
    setCurrentQuestion,
    reset,
    calculatePoints
  } = useAssessment(id.toString());
  return (
    <>
      <AssessmentContext.Provider
        value={{
          assessment,
          isStarted,
          isFinished,
          currentQuestion,
          questions,
          points,
          verdict,
          handleQuestion,
          handleAnswer,
          setIsStarted,
          setIsFinished,
          setCurrentQuestion,
          reset,
          calculatePoints
        }}
      >
        {!isStarted && <AssessmentSummary />}
        {isStarted && !isFinished && <Questions />}
        {isFinished && <AssessmentResult />}
      </AssessmentContext.Provider>
    </>
  );
}
