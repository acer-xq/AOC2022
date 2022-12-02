f=x=>x
console.log(f(require('fs').readFileSync('./test.txt', 'utf8').split('\r\n')))
