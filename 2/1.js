f=x=>x.reduce((a,n)=>a+1+'BXCYAZAXBYCZCXAYBZ'.search(n[0]+n[2])/2,0)
f=x=>x.reduce((a,n)=>(2*n[c="charCodeAt"]()+(z=n[c](2))-1)%3*3+z+a-87,0)
f=x=>x.reduce((a,n)=>(2*("0x"+n[0]-9)+(z=n.charCodeAt(2))-1)%3*3+z+a-87,0)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
