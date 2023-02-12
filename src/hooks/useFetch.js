import {useEffect, useState} from 'react'

function useFetch(service, options, immidiate = false) {
   const [data, setData] = useState(null)
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const fetch = async (type, params) => {
      try {
         setIsLoading(true)
         const res = await service(type, params)
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return {data, error, isLoading, fetch}
}

export default useFetch
