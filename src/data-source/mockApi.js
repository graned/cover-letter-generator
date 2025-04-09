export const uploadCv = async (cvData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: cvData
      })
    }, 1000)
  })
}

export const generateLetter = async (cvData, jobData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: 'pdf-data-here'
      })
    }, 1500)
  })
}
