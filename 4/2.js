f=x=>x.map(y=>y.split(/,|-/).map(z=>z-0)).filter(y=>(y[0]>=y[2]&y[0]<=y[3])|(y[2]>=y[0]&y[2]<=y[1])).length
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
