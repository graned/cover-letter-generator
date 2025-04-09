import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { generateLetter } from '../features/letter/letterSlice'

export default function LetterPreview() {
  const { cvData } = useSelector((state) => state.cv)
  const { companyName, position, jobDescription } = useSelector((state) => state.job)
  const { generatedLetter, isLoading } = useSelector((state) => state.letter)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cvData && companyName && position && jobDescription) {
      dispatch(generateLetter({
        cvData,
        jobData: { companyName, position, jobDescription }
      }))
    }
  }, [cvData, companyName, position, jobDescription, dispatch])

  const handleDownload = () => {
    // Implement PDF download
    console.log('Downloading PDF...')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Generated Cover Letter</h2>
      <div className="border p-4 rounded bg-gray-50 min-h-64">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
            />
          </div>
        ) : generatedLetter ? (
          <div>
            <p className="mb-4">Preview of generated cover letter would appear here.</p>
            <motion.button
              onClick={handleDownload}
              className="py-2 px-6 bg-accent text-white rounded hover:bg-highlight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download PDF
            </motion.button>
          </div>
        ) : (
          <p>Complete both CV upload and job details to generate a cover letter.</p>
        )}
      </div>
    </div>
  )
}
