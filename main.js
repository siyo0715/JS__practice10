// コンストラクタ記法
// const regex = new RegExp('[^0-9]', 'g')


// リテラル記法
// const regex = /[^0-9]/g

// ^　を使って先頭の数値にマッチ
const pattern = /^[0-9]/
const str = "0123456789"
const result = str.match(pattern)

console.log([0])