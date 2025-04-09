import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobDescription: '',
  companyName: '',
  position: '',
  isLoading: false,
  error: null
}

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJobDescription: (state, action) => {
      state.jobDescription = action.payload
    },
    setCompanyName: (state, action) => {
      state.companyName = action.payload
    },
    setPosition: (state, action) => {
      state.position = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setJobDescription, setCompanyName, setPosition, setLoading, setError } = jobSlice.actions
export default jobSlice.reducer
