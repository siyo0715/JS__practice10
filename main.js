// ^　を使って先頭の数値にマッチ
// const pattern = /^[0-9]/
// const str = "0123456789"
// const result = str.match(pattern)

// console.log(result[0])

// $で末尾の数字にマッチ
const pattern = /[0-9]$/
const str = "0123456789"
const result = str.match(pattern)

console.log(result[0])