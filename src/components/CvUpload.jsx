import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setCvData, setLoading } from '../features/cv/cvSlice'
import { uploadCv } from '../data-source/mockApi'

export default function CvUpload({ onUpload }) {
  const [file, setFile] = useState(null)
  const { isLoading } = useSelector((state) => state.cv)
  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return
    onUpload(file)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Upload Your CV</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select CV File:</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept=".pdf,.doc,.docx"
            required
          />
        </div>
        <motion.button
          type="submit"
          className={`w-full py-2 px-4 rounded text-white font-medium ${isLoading ? 'bg-gray-400' : 'bg-primary hover:bg-secondary'}`}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? 'Uploading...' : 'Upload CV'}
        </motion.button>
      </form>
    </div>
  )
}
