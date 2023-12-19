interface AssessmentListType {
	id: string,
	title: string
}

interface AssessmentType {
	id: string,
	title: string,
	description: string
	approvalScore: number,
	time: number,
	questions: QuestionType[]
}

interface QuestionType {
	id: string,
	title: string,
	description: string
	options: string[],
	correctAnswers: string[],
	answers: string[]
	isCorrect: boolean
	explanation: string
}