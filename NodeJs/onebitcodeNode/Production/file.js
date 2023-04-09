const fs = require('fs')
fs.writeFile('teste.txt',"Node js",err => console.log(err))
// fs.unlink('teste.txt')
fs.appendFile('teste.txt','Node 2',err => console.log(err))
// fs.rename('teste.txt','teste2.txt', err => console.log(err))
console.log(__filename);