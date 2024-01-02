import data from '../simulado.json'

export function getAssessment(assessmentId: string): Promise<any> {
	console.log('getAssessment', assessmentId)
	const assessment: Promise<void|AssessmentType> = fetch(`http://localhost:3000/api/assessments/${assessmentId}`,{
    next: { revalidate: 10 },
  }).then(res => res.json())
	return assessment
}

export function getAssessmentList():  Promise<void|AssessmentListType[]>{
	const assessments: Promise<void|AssessmentListType[]> = fetch('http://localhost:3000/api/assessments',{
    next: { revalidate: 10 },
  }).then(res => res.json())
	return assessments
}