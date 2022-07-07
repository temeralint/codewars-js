// function createPhoneNumber(numbers){
//     let str = numbers.join('')
//     return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function toCamelCase(str){
//     let arr = []
//     let sample = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase().match(/^[a-z]+$/)) {
//             sample += str[i]
//         } else {
//             arr.push(sample)
//             sample = ''
//         }
//     }
//     arr.push(sample)
//     return arr.map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1, item.length)).join('')
// }

// console.log(toCamelCase("A-B-C"))