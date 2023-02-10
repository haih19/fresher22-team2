import {useEffect, useState} from 'react'

function useFetch(service, options, immidiate = false) {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const fetch = async (params) => {
      try {
         setIsLoading(true)
         const res = await service(params.type, params.param)
         setData(res)
      } catch (e) {
         setError(e)
      } finally {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      if (immidiate) {
         fetch(options)
      }
   }, [])

   return {data, error, isLoading, fetch}
}

export default useFetch
