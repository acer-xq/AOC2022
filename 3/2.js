f=x=>{let t=[];for(let i=0;i<x.length;i+=3){t.push([...x[i]].find(z=>[...x[i+1]].includes(z)&[...x[i+2]].includes(z)))}return eval(t.map(y=>(b=y.charCodeAt())-(b>96?96:38)).join`+`);}
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
