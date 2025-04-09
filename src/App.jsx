import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CvUpload from './components/CvUpload'
import JobDescription from './components/JobDescription'
import LetterPreview from './components/LetterPreview'
import { setCvData, setLoading } from './features/cv/cvSlice'
import { uploadCv } from './data-source/mockApi'

function App() {
  const dispatch = useDispatch()
  const { cvData } = useSelector((state) => state.cv)

  const handleCvUpload = async (file) => {
    dispatch(setLoading(true))
    try {
      const result = await uploadCv(file)
      dispatch(setCvData(result.data))
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div className="min-h-screen p-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Cover Letter Generator
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <CvUpload onUpload={handleCvUpload} />
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <JobDescription />
          </motion.div>
        </div>

        {cvData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-white p-6 rounded-lg shadow-lg"
          >
            <LetterPreview />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default App
