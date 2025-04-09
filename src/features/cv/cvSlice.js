import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cvData: null,
  isLoading: false,
  error: null
}

export const cvSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    setCvData: (state, action) => {
      state.cvData = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setCvData, setLoading, setError } = cvSlice.actions
export default cvSlice.reducer
