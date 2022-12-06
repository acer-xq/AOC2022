f=x=>[...x[0]].map((_,i)=>x[0].slice(i,i+4)).map((y,i)=>new Set(y).size-y.length?[][0]:i).find(x=>x)+4
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
