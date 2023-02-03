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
