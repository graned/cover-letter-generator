import { configureStore } from '@reduxjs/toolkit'
import cvReducer from '../features/cv/cvSlice'
import jobReducer from '../features/job/jobSlice'
import letterReducer from '../features/letter/letterSlice'

export const store = configureStore({
  reducer: {
    cv: cvReducer,
    job: jobReducer,
    letter: letterReducer
  }
})
