import axios from 'axios'

const request = axios.create({
   baseURL: process.env.REACT_APP_SERVICE_API,
   headers: {
      'Content-Type': 'application/json',
   },
})

request.interceptors.request.use(async (config) => config)

request.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data
      }

      return response
   },
   (error) => {
      throw error
   }
)

export default request
