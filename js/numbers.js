function iterFeb(count) {
    let result = [];
    result.push(1);
    result.push(1);
    if(count==1)
        return result.slice(0,0);
    if(count==2)
        return result.slice(0,1);
    for (var i=1;i<count-1;i++){
        result.push(result[i-1] + result[i]);
    }
    return result;
}

function recursiveFeb(num){
    let result = [];

    function rec(n) {
        if(n<2) return n;
        return rec(n-1) + rec(n-2);
    }
    for(var i = 1; i<=num; i++){
        result.push(rec(i));
    }

    return result;
}

function iterFac(n){
    let result = 1;

    while (n){
        result *= n--
    }

    return result;
}

function recFac(n, result){
    result = result || 1;
    if(!n){
        return result;
    }else{
        return recFac(n-1, result*n);
    }
}


let button_iterFeb = document.querySelector('.iterFeb');
let button_recursiveFeb = document.querySelector('.recursiveFeb');
let button_iterFac = document.querySelector('.iterFac');
let button_recFac = document.querySelector('.recFac');

function startTimerFeb(callback) {
    let value = document.querySelector('.feb_count').value;
    let time = performance.now()
    callback(value);
    console.log(`Time: ${performance.now() - time}`);
    console.log('----------');
}

button_iterFeb.addEventListener('click',()=>{
    startTimerFeb(count=>{
        console.log(iterFeb(count))
    })
});

button_recursiveFeb.addEventListener('click',()=>{
    startTimerFeb(count=>{
        console.log(recursiveFeb(count));
    })
});

button_iterFac.addEventListener('click', ()=>{
    startTimerFeb(value=>{
        console.log(iterFac(value));
    })
})

button_recFac.addEventListener('click', ()=>{
    startTimerFeb(value=>{
        console.log(recFac(value));
    })
})