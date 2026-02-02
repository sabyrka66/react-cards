export interface QuestionApiItem {
  id: string
  level: number
  completed: boolean
  question: string
  answer: string
}

export interface CardAttributes {
  id: string
  level: number
  isCompleted: boolean
  question: string
  answer: string
}
