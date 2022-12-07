f=x=>{
    dirs = [];
    curdir = '';
    x.forEach(y=>{
        if(a=y.match(/cd ([a-z]+)/)) {
            curdir+=`/${a[1]}`;
        }
        if(y =='$ cd ..') {
            curdir=curdir.split`/`.slice(0,-1).join`/`
        }
        if((a=y.match(/dir (\w+)/))||(a=y.match(/(\d+) .*/))) {
            j = dirs.findIndex(z=>z[0]==curdir)
            if (j<0) {
                dirs.unshift([curdir]);
                j=0
            }
            if (y.match(/dir (\w+)/)) {
                dirs[j].push(`${curdir}/${a[1]}`)
            }
            else {
                dirs[j].push(a[1]);
            }
        }
    });
    let v = [];
    dirs.map(y=>{
        let w =
        y.slice(1).reduce((acc,z)=>{
            if(z-0!=z){
                return acc+~~v.find(u=>u[0]==z)[1]
            }
            else{
                return acc+~~z;
            }
        },0);
        v.push([y[0], w]);
    });
    return v.sort((a,b)=>a[1]-b[1]).find(y=>y[1]>v.find(y=>y[0]=='')[1]-40000000)[1];
}
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
