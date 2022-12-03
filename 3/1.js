f=x=>eval(x.map(y=>(b=[...y].find(z=>y.indexOf(z)<(a=y.length/2)&y.lastIndexOf(z)>=a).charCodeAt())-(b>96?96:38)).join`+`)
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
