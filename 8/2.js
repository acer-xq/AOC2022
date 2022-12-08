f=x=>m(x.map(y=>[...y].map(z=>z-0)).flatMap((z,i,s)=>{
    return z.map((w,j,t)=>{
        if (i==0||i==s.length-1) return 0
        if (j==0||j==t.length-1) return 0
        a=(g=t.slice(0,j).reverse().findIndex(v=>v>=w))<0?j:g+1
        b=(g=t.slice(j+1).findIndex(v=>v>=w))<0?t.length-j-1:g+1
        c=(g=s.slice(0,i).map(v=>v[j]).reverse().findIndex(v=>v>=w))<0?i:g+1
        d=(g=s.slice(i+1).map(v=>v[j]).findIndex(v=>v>=w))<0?s.length-i-1:g+1
        // console.log(`${i}, ${j}: ${d}`);
        return a*b*c*d
    })
}))
m=x=>Math.max(...x)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
