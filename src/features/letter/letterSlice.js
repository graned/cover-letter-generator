import { createSlice } from '@reduxjs/toolkit'
import { PDFDocument, rgb } from 'pdf-lib'

const initialState = {
  generatedLetter: null,
  isLoading: false,
  error: null
}

export const letterSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {
    generateLetter: (state, action) => {
      const { cvData, jobData } = action.payload
      // Generate PDF logic here
      state.generatedLetter = 'pdf-data-here'
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { generateLetter, setLoading, setError } = letterSlice.actions
export default letterSlice.reducer
