// ^　を使って先頭の数値にマッチ
// const pattern = /^[0-9]/
// const str = "0123456789"
// const result = str.match(pattern)
// _______________________________________________________________
// console.log(result[0])

// $で末尾の数字にマッチ
// const pattern = /[0-9]$/
// const str = "0123456789"
// const result = str.match(pattern)

// console.log(result[0])
// _________________________________________________________________
// *を使って全部をマッチ
// const pattern = /[0-9]*/
// const str = "0123456789"
// const result = str.match(pattern)

// console.log(result[0])

// _________________________________________________________________

// *5を使って5までの数字全部をマッチ
// const pattern = /[0-9]*5/
// const str = "0123456789"
// const result = str.match(pattern)

// console.log(result[0])
// __________________________________________________________________
// x|yを使う(まず012があるかみに行く)
// const pattern = /(012|56)/
// const str = "0123456789"
// const result = str.match(pattern)

// console.log(result[0])

const abcmart = 'abcmart'
const hijmart = 'hijmart'
const regex = new RegExp('abc*')

console.log(regex.test(abcmart))
console.log(regex.test(hijmart))

console.log(/abc*/.test(abcmart))