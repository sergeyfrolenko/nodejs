console.log(process.argv[2]);

function timer(n) {
    let t=n;
    let seconds = setInterval(()=>{
            if(t>0) {
                console.log(t--);
            } else {
                clearInterval(seconds);
                console.log('Boom!');
            }
        }, 1000);
}
// timer(3);

function sentry(n) {
    setInterval(()=>{
        console.log(new Date().getSeconds());
    }, n);
}
// sentry(1000);

function iterator(cb,n) {
    
}
// iterator('abc',1000);

function enumeration(n1,n2) {
    for(let i=n1; i<=n2; i++) {
        console.log(i);
    }
}
// enumeration(1,2);


