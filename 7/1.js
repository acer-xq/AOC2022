f=x=>{
    dirs=[];v=[];curdir=v+'';
    x.forEach(y=>{
        if(a=y.match(/cd ([a-z]+)/)) {
            curdir+=`/${a[1]}`;
        }
        else if(y =='$ cd ..') {
            curdir=curdir.replace(/(.*)\/.*/,'$1')
        }
        else if((a=y.match(/r (\w+)/))||(a=y.match(/(\d+) .*/))) {
            dirs[(l=(j=dirs.findIndex(z=>z[0]==curdir))<0?dirs.unshift([curdir])&0:j)].push((y.match(/r (\w+)/)?curdir+'/':'')+a[1])
        }
    });
    dirs.map(y=>v.push([y[0],y.slice(1).reduce((acc,z)=>acc+~~(z-0==z?z:v.find(u=>u[0]==z)[1]),0)]));
    return v.filter(y=>y[1]<100001).reduce((acc,cur)=>acc+cur[1],0);
}
console.log(f(require('fs').readFileSync('./input.txt', 'utf8').split('\r\n')))
