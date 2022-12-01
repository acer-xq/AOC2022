f=x=>(v=x.reduce((y,z)=>!z&&y.unshift(0)?y:(y[0]+=1*z)?y:y,[0]).sort((y,z)=>z-y))[0]+v[1]+v[2]
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
