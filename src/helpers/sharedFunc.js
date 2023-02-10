import moment from 'moment'

export const separateTxt = (str) => {
   return str.split('\n')
}

// export const separateMediabyYear = (arr) => {
//    if (!arr.length) {
//       return {
//          emptiedStrArr: [],
//          dateArr: [],
//       }
//    } else {
//       const dateArr = arr.filter((item) => {
//          if (Object.keys(item).includes('release_date')) {
//             return item.release_date !== ''
//          }
//          return item.first_air_date !== ''
//       })
//       const emptiedStrArr = arr.filter((item) => {
//          if (Object.keys(item).includes('release_date')) {
//             return item.release_date === ''
//          }
//          return item.first_air_date === ''
//       })

//       return {
//          emptiedStrArr,
//          dateArr,
//       }
//    }
// }

export const getYear = (str) => {
   return moment(str).format('YYYY')
}
export const sortYear = (arr) => {
   return arr.sort((a, b) => getYear(b.date) - getYear(a.date))
}
export const mergeYearGroup = (a) => {
   const arr = a
   const result = []
   for (let i = 0; i < arr.length - 1; i++) {
      const b = []
      b.push(arr[i])
      for (let j = i + 1; j < arr.length; j++) {
         if (getYear(arr[i].date) === getYear(arr[j].date)) {
            b.push(arr[j])
            i = j
         }
      }
      result.push(b)
   }
   return result.filter((item) => item.length)
}
export const generatePersonCreditList = (type, arr1, arr2) => {
   switch (type) {
      case 'Movies':
         return arr1
      case 'TV Shows':
         return arr2
      default:
         return [...arr1, ...arr2]
   }
}
