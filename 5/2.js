f=x=> {
    let a = [];
    let b = [];
    x.forEach(y => {
        if (y.includes('[')) {
            [...y].filter((_,i)=>i%4==1).forEach((v,i)=>v!=' '?!a[i]?a[i]=[v]:a[i].push(v):1);
        }
        if (y.includes("move")) {
            (s=y.match(/e (\d+) from (\d) to (\d)/));
            b.push([s[1],s[2],s[3]]);
        }
    })
    b.forEach(y => {
        a[y[2]-1]=a[y[1]-1].splice(0,y[0]).concat(a[y[2]-1])
    })
    return a.map(y=>y[0]).join``;
}
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
