f=x=>x.filter(y=>((z=y.split(/,|-/).map(eval))[0]>=z[2]&z[1]<=z[3])|(z[2]>=z[0]&z[3]<=z[1]))
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))