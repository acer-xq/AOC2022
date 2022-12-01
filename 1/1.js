f=x=>Math.max(...x.reduce((y,z)=>!z&&y.unshift(0)?y:(y[0]+=1*z)?y:y,[0]))
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
