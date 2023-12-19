import data from '../simulado.json'

export function getAssessment(assessmentId: string): Promise<any> {
	console.log('getAssessment', assessmentId)
	return new Promise((resolve, reject) => {
			resolve(data)
	})
}

export function getAssessmentList():  Promise<AssessmentListType[]>{
	return new Promise((resolve, reject) => {
		resolve([
			{
				id: '1',
				title: 'Simulado 1'
			},
			{
				id: '2',
				title: 'Simulado 2'
			}
		])
	})
}