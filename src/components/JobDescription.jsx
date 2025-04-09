import { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { 
  setJobDescription, 
  setCompanyName, 
  setPosition,
  setLoading
} from '../features/job/jobSlice'
import { generateLetter } from '../data-source/mockApi'

export default function JobDescription() {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    description: ''
  })
  const { isLoading } = useSelector((state) => state.job)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(setLoading(true))
    try {
      dispatch(setCompanyName(formData.companyName))
      dispatch(setPosition(formData.position))
      dispatch(setJobDescription(formData.description))
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Job Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Position:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Job Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32"
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
          {isLoading ? 'Processing...' : 'Save Job Details'}
        </motion.button>
      </form>
    </div>
  )
}
