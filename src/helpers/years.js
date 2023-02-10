// import {getYear} from './sharedFunc'
// export const groupedArrByYear = (arr) => {
//    const result = arr.reduce((acc, curVal, i, a) => {
//       if (getYear(curVal.date) === getYear(a[i - 1].date)) {
//          acc[acc.length - 1].push(curVal)
//       } else {
//          acc.push(getYear(curVal.date) === getYear(a[i + 1].date) ? [curVal] : curVal)
//       }
//       return acc
//    }, [])
//    return result
// }

export const reviseCast = (arr) => {
   const result = arr?.map((item) => {
      if (item.movie_type === 'tv') {
         return {
            id: item.id,
            title: item.name || item.original_name || item.original_title || item.title,
            date: item.first_air_date
               ? item.first_air_date
               : '' || item.release_date
               ? item.release_date
               : '',
            character: item.character,
            media_type: item.media_type,
         }
      } else {
         return {
            id: item.id,
            title: item.title || item.original_title || item.original_name || item.name,
            date: item.release_date
               ? item.release_date
               : '' || item.first_air_date
               ? item.first_air_date
               : '',
            character: item.character,
            media_type: item.media_type,
         }
      }
   })
   return result
}

export const separateMediabyYear = (arr) => {
   if (!arr.length) {
      return {
         emptiedStrArr: [],
         dateArr: [],
      }
   } else {
      const dateArr = arr.filter((item) => {
         return item.date !== ''
      })
      const emptiedStrArr = arr.filter((item) => {
         return item.date === ''
      })
      return {
         emptiedStrArr,
         dateArr,
      }
   }
}
