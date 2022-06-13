function iterableSearch(arr,val) {
    let time = performance.now();

    for (var i = 0; i<arr.length; i++){
        if(arr[i] == val){
            time = performance.now() - time;
            console.log('Время выполнения = ', time);
            return {
                "index":i,
                "value": arr[i]
            }
        }
    }
    time = performance.now() - time;
    console.log('Время выполнения = ', time);
    return null;
}

function transpositionSearch(arr,val){
    let temp;
    let time = performance.now();
    for (var i = 0; i<arr.length; i++){
        if(arr[i] == val){
            if(i==0){
                time = performance.now() - time;
                console.log('Время выполнения = ', time);
                return {
                    "index":i,
                    "value": arr[i]
                }
            }
            temp = arr[i];
            arr[i] = arr[i-1]
            arr[i-1] = temp;
            time = performance.now() - time;
            console.log('Время выполнения = ', time);
            return {
                "index":i,
                "value": temp
            }
        }

    }
    time = performance.now() - time;
    console.log('Время выполнения = ', time);
    return null;
}

function firstSwapSearch(arr,val) {
    let temp;
    let time = performance.now();
    for (var i = 0; i<arr.length; i++){
        if(arr[i] == val){
            if(i==0){
                time = performance.now() - time;
                console.log('Время выполнения = ', time);
                return {
                    "index":i,
                    "value": arr[i]
                }
            }
            temp = arr[i];
            arr[i] = arr[0]
            arr[0] = temp;
            time = performance.now() - time;
            console.log('Время выполнения = ', time);
            return {
                "index":i,
                "value": temp
            }
        }

    }
    time = performance.now() - time;
    console.log('Время выполнения = ', time);
    return null;
}

function clasterSearch(arr,val,clasterCount){
    let time = performance.now();
    let claster = [];
    //let sortedArr = arr.sort((a,b)=>a-b);
    let curCount = 0;
    while(clasterCount < arr.length){
        curCount += clasterCount;
        if(curCount < arr.length){
            claster.push({
                'index':curCount,
                'value':arr[curCount]
            });
        }else{
            break;
        }
    }
    let startIndex = 0;
    for(var i = 0; i<claster.length; i++){
        if(i==claster.length-1){
            startIndex = claster[claster.length-1].index;
            break;
        }
        if(val>claster[i].value && val<claster[i+1].value){
            startIndex = claster[i].index;
            break;
        }
        if(val<claster[i].value){
            startIndex = 0
            break;
        }
        startIndex = -1;
    }

    if(startIndex!=-1){
        for(var i = startIndex; i<arr.length; i++){
            if(arr[i] == val){
                time = performance.now() - time;
                console.log('Время выполнения = ', time);
                return {
                    'index': i,
                    'value': val
                }
            }
        }
    }
    else{
        time = performance.now() - time;
        console.log('Время выполнения = ', time);
        return  null;
    }

}

function binarySearch(arr,val,time,callback){
    let median = null;
    if(arr.length == 1){
        time = performance.now() - time;
        console.log('Время выполнения = ', time);
        callback(arr[0]);
        return arr[0];
    }
    if(arr.length % 2 == 1){
        let value = arr[Math.floor(arr.length/2)];
        median = {
            value: value,
            index: Math.floor(arr.length/2)
        };
    }else{
        let value = (arr[arr.length/2] + arr[(arr.length/2)-1]) / 2
            median = {
            value: value,
            index: Math.floor(arr.length/2)
        }
    }
    if(val == median.value){
        time = performance.now() - time;
        console.log('Время выполнения = ', time);
        callback(median);
        return median;
    }else if(val > median.value){
        binarySearch(arr.slice(median.index,arr.length),val,time,callback);
    }else{
        binarySearch(arr.slice(0,median.index),val,time,callback);
    }
}

function iterableBinarySearch(arr, val){
    let lo = 0,
        hi = arr.length - 1;
        while (lo<=hi){
            let med = Math.floor(lo + (hi - lo) / 2);
            if (arr[med] == val)
                return med;
            if(arr[med] > val){
                hi = med - 1;
            }
            else if(arr[med] < val){
                lo = med + 1;
            }
        }
    return -1;
}



let tempArr = array;

function startTimer(callback) {
    let time = performance.now()
    callback();
    console.log(`Time: ${performance.now() - time}`);
    console.log('----------');
    console.log(array);
}

let button_IterSearch = document.querySelector('.iterSearch');
let button_transpSearch = document.querySelector('.transpSearch ');
let button_firstSwapSearch = document.querySelector('.firstSwapSearch');
let button_clasterSearch = document.querySelector('.clasterSearch');
let button_binarySearch = document.querySelector('.binarySearch');
let button_iterableBinarySearch = document.querySelector('.iterableBinarySearch');


button_IterSearch.addEventListener('click',()=>{
    let value = document.querySelector('.value').value;
    //console.log(iterableSearch(tempArr.sort((a,b)=>a-b),value));
    console.log(iterableSearch(tempArr,value));
})

button_transpSearch.addEventListener('click',()=>{
    let value = document.querySelector('.value').value;
    console.log(transpositionSearch(tempArr,value));
    console.log(tempArr);
})

button_firstSwapSearch.addEventListener('click',()=>{
    let value = document.querySelector('.value').value;
    console.log(firstSwapSearch(tempArr,value));
    console.log(tempArr);
})

button_clasterSearch.addEventListener('click',()=>{
    let value = document.querySelector('.value').value;
    console.log(clasterSearch(tempArr.sort((a,b)=>a-b),value,100));
})

button_binarySearch.addEventListener('click',()=>{
    let value = document.querySelector('.value').value;
    let time = performance.now();
    binarySearch(array.slice(0).sort((a,b)=>a-b),value,time,function (item){
        console.log(item);
    });
})

button_iterableBinarySearch.addEventListener('click', ()=>{
    let val = document.querySelector('.value').value;
    startTimer(()=>{
        console.log( iterableBinarySearch(array.slice(0).sort((a,b)=> a-b),val));
    })
})




