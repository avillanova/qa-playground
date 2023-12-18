'use client';
import { getAssessment, getAssessmentList } from "@/services/AssessmentService";
import { use, useEffect, useMemo, useState } from "react";

export function useAssessmentList(){
	const [assessmentList, setAssessmentList] = useState<AssessmentListType[]>([])

	useMemo(async () => {
		console.log('loadAssessmentList')
		const response = await getAssessmentList()
		setAssessmentList(response)
	}, [])

	return {assessmentList}	
}

export function useAssessment(id: string){
	const [assessmentId, setAssessmentId] = useState<string>(id)
	const [assessment, setAssessment] = useState<AssessmentType>()
	const [isStarted, setIsStarted] = useState<boolean>(false)
	const [isFinished, setIsFinished] = useState<boolean>(false)
	const [currentQuestion, setCurrentQuestion] = useState<number>(0)
	const [questions, setQuestions] = useState<QuestionType[]>([]);
	const [points, setPoints] = useState<number>(0)
	const [verdict, setVerdict] = useState<string>('REPROVADO')
	
	function reset(){
		if(assessment){
			const newArray: QuestionType[] = [];
			assessment.questions.forEach((question, i) => {
				newArray.push(Object.assign({}, question));
			});
			setQuestions(newArray);
		}
		setIsStarted(false)
		setIsFinished(false)
		setCurrentQuestion(0)
		setPoints(0)
		setVerdict('REPROVADO')
	}
	useEffect(() => {
		reset()
	}, [assessment])

	useEffect(() => {
		if(assessmentId){
			getAssessment(assessmentId).then((response) => {
				setAssessment(response)
			})
		}
	}, [assessmentId])


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

	function calculatePoints(){
		let pt = 0;
		questions.forEach((question) => {
			if(question.answers && question?.answers.length > 0){
				let symDifference = question.answers.filter(x => !question.correctAnswers.includes(x))
                        .concat(question.correctAnswers.filter(x => !question.answers.includes(x)));
				if(symDifference.length === 0){
					pt += 1;
				}
			}
		})
		setPoints(pt)
		if((pt*100/questions.length) >= assessment?.approvalScore!){
			setVerdict('APROVADO')
		} else {
			setVerdict('REPROVADO')
		}
	}

	return {assessmentId, assessment, isStarted, isFinished, currentQuestion, questions, points, verdict, handleQuestion, handleAnswer, setAssessmentId, setIsStarted, setIsFinished, setCurrentQuestion, reset, calculatePoints}

}