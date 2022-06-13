// NC - no coursera algorithm


function NCmerge(a, b) {
    let result = [];
    let length = a.length + b.length;
    while (result.length < length){
        if(a.length == 0){
            result.push(b.shift());
        } else if(b.length == 0){
            result.push(a.shift());
        } else if(a[0] <= b[0]){
            result.push(a.shift());
        } else{
            result.push(b.shift());
        }
    }
    return result;
}

function NCmergeSort(arr) {
    if(!arr && !arr.length){
        return null;
    }
    if(arr.length == 1){
        return arr;
    }
    let med = Math.floor(arr.length/2);
    let firstArr = arr.slice(0,med);
    let secondArr = arr.slice(med);

    return NCmerge(NCmergeSort(firstArr), NCmergeSort(secondArr));
}

function merge(a, aux, lo, mid, hi) {
    for(var k = 0; k <= hi; k++){
        aux[k] = a[k];
    }
    let left = lo,
        right = mid + 1;
    for (var z = lo; z <= hi; z++){
        if(left>mid){
            a[z] = aux[right++];
        } else if (right>hi){
            a[z] = aux[left++];
        } else if (aux[left] >= aux[right]){
            a[z] = aux[right++];
        } else{
            a[z] = aux[left++];
        }
    }
}

function mergeSort(a, aux, lo, hi) {

    //  if small -> use insertion sort to sort part of array
    if(hi<=lo) return;
    let middle = Math.floor(lo + (hi - lo) / 2);
    mergeSort(a, aux, lo, middle);
    mergeSort(a, aux, middle+1, hi);
    merge(a, aux, lo, middle, hi);
}

//Bottom up, no recursive/ something wrong, not working
function mergeSortBU(arr){
    let aux = new Array(arr.length);
    for(var sz = 0; sz < arr.length; sz = sz + sz){
        for(var lo = 0; lo < arr.length-sz; lo+=sz + sz){
            merge(arr, aux, lo, lo+sz-1, Math.min(lo + sz + sz - 1, arr.length - 1));
        }
    }
}


let button_mergeSort = document.querySelector('.button_mergeSort');
let button_mergeSortBU = document.querySelector('.button_mergeSortBU');
let button_noC_button_mergeSort = document.querySelector('.noC_button_mergeSort');


function startTimer(callback) {
    let time = performance.now()
    callback();
    console.log(`Time: ${performance.now() - time}`);
    console.log('----------');
    console.log(array);
}

button_mergeSort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(mergeSort(array,new Array(array.length),0, array.length - 1));
    })
});

button_noC_button_mergeSort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(NCmergeSort(array));
    })
});

button_mergeSortBU.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(mergeSortBU(array));
    })
});