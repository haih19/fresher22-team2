import axios from 'axios'
import queryString from 'query-string'
import {SERVICE_API} from '../constants/apiPath'

const privateRequest = axios.create({
   baseURL: SERVICE_API,
   paramsSerializer: {
      encode: (account_id, params) => {
         return `account/${account_id}/${queryString.stringify(params)}`
      },
   },
})

privateRequest.interceptors.request.use(async (config) => {
   return {
      ...config,
      headers: {
         'Content-Type': 'application/json',
      },
   }
})

privateRequest.interceptors.response.use(
   (response) => {
      if (response && response.data) return response.data
      return response
   },
   (err) => {
      throw err.response.data
   }
)

export default privateRequest
