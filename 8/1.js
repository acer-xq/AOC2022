f=x=>x.flatMap((z,i)=>[...z].map((w,j)=>!i&j|-~i-~j-x.length-z.length>-1|(m=x=>Math.max(...x))(z[s='slice'](0,j))<w|m(z[s](-~j))<w|m(x[s](0,i).map(v=>v[j]))<w|m(x[s](-~i).map(v=>v[j]))<w)).reduce((y,z)=>y+z)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
