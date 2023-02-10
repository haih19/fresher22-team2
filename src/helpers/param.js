export const removeCharacter = (str) => {
   const result = []
   const strArr = str.split('')
   for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === '-') {
         break
      }
      result.push(strArr[i])
   }
   return Number(result.join(''))
}

export const getPathname = (str) => {
   const strArr = str.split('/')
   return strArr.filter((item) => item.length > 0)
}

export const searchToObject = (str) => {
   var pairs = str.substring(1).split('&'),
      obj = {},
      pair,
      i

   for (i in pairs) {
      if (pairs[i] === '') continue

      pair = pairs[i].split('=')
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
   }

   return obj
}

export const removeSuffixS = (str) => {
   if (str[str.length - 1] === 's') {
      return str.substring(0, str.length - 1)
   } else {
      return str
   }
}

export const removeSpace = (str) => {
   return str.replace(/\s/g, '')
}
