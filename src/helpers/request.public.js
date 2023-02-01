import axios from 'axios'
import queryString from 'query-string'
import {SERVICE_API} from '../constants/apiPath'

const publicRequest = axios.create({
   baseURL: SERVICE_API,
   paramsSerializer: {
      encode: (params) => {
         return queryString.stringify(params)
      },
   },
})

publicRequest.interceptors.request.use(async (config) => {
   return {
      ...config,
      headers: {
         'Content-Type': 'application/json',
      },
   }
})

publicRequest.interceptors.response.use(
   (response) => {
      if (response && response.data) return response.data
      return response
   },
   (err) => {
      throw err.response.data
   }
)

export default publicRequest
