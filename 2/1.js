f=x=>x.reduce((a,n)=>a+1+'BXCYAZAXBYCZCXAYBZ'.search(n[0]+n[2])/2,0)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
