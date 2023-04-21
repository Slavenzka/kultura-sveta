import { AnswerItemType } from 'api/specs/answers.spec'

export interface FirebaseUserType {
  email: string,
}

export interface StoreFirebaseSlice {
  user: FirebaseUserType | null,
  isLoggingIn: boolean,
  isSubmitting: boolean,
  isFetching: boolean,
  fetchError: string | null,
  answers: AnswerItemType[] | null
}
