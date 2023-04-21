import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setAnsweredStatus, setAuthVisibility, toggleModal } from 'store/actions/ui'
import { AnswerItemType } from 'api/specs/answers.spec'
import { addDoc, collection, Firestore, getDocs } from 'firebase/firestore'
import { Collections, LocalStorageProps, Names } from 'utils/const'
import { ModalTypes } from 'components/atoms/Modal/Modal.spec'

export const setLoggingInStatus = createAction<boolean>(`FIREBASE_IS_LOGGING_IN_STATUS`)

export const logInUser = createAsyncThunk(
  `FIREBASE_LOGIN`,
  async function ({
    email,
    password,
    onError
  }: {
    email: string,
    password: string,
    onError: (code: string) => void
  }, {dispatch}) {
    const auth = getAuth()

    return signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        dispatch(setAuthVisibility(false))

        return {
          email: response.user.email
        }
      })
      .catch(error => {
        onError(error.code)
      })
  })

export const submitAnswer = createAsyncThunk(
  `FIREBASE_SUBMIT_ANSWER`,
  async function ({firestore, ...data}: {firestore: Firestore} & AnswerItemType, {dispatch}) {
    const dataCollectionRef = collection(firestore, Collections.ANSWERS)
    console.log(dataCollectionRef)

    return addDoc(dataCollectionRef, data)
      .then(response => {
        console.log(response)
        dispatch(toggleModal({
          type: ModalTypes.MESSAGE_SUCCESS,
          contentProps: {
            heading: `Данные были успешно сохранены`,
            description: `Большое спасибо за&nbsp;участие в&nbsp;опросе! Ваше мнение поможет нам сделать световую среду Москвы привлекательнее и&nbsp;удобнее для всех.`
          }
        }))
        localStorage.setItem(LocalStorageProps.KS_IS_ANSWERED, `${Date.now()}`)
        dispatch(setAnsweredStatus(true))
      })
      .catch(error => {
        console.log(error)
      })
  }
)

export const fetchAnswers = createAsyncThunk(
  `FIREBASE_FETCH_ANSWERS`,
  async function (firestore: Firestore) {
    const dataCollectionRef = collection(firestore, Collections.ANSWERS)
    const data: AnswerItemType[] = []

    return getDocs(dataCollectionRef)
      .then(snapshot => {
        snapshot.forEach(doc => {
          const itemData = doc.data() as AnswerItemType

          data.push({
            ...itemData,
            [Names.EVENING_LOCATION]: JSON.parse(itemData[Names.EVENING_LOCATION] as string),
            [Names.FAVOURITE_DAY]: JSON.parse(itemData[Names.FAVOURITE_DAY] as string),
            [Names.FAVOURITE_NIGHT]: JSON.parse(itemData[Names.FAVOURITE_NIGHT] as string),
          })
        })

        return data
      })
      .catch(() => {
        return `Ошибка при попытке получения списка ответов`
      })
  }
)
