//Dijkstra 3-way partitioning

function quickSort(arr) {
    (function recursive(lo,hi) {
        if (hi <= lo) return;
        let i = lo,
            lt = lo,
            gt = hi;
        while (i <= gt) {
            let cmp = compare(arr[i], arr[lt])
            if (cmp > 0) exchange(arr, i, gt--);
            if (cmp < 0) exchange(arr, i++, lt++);
            if (cmp == 0) i++;
        }
        recursive(lo,lt-1);
        recursive(gt+1, hi);
    })(0, arr.length-1)

    function exchange(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    function compare(a, b) {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
    }
    return arr;
}


function startTimer(callback) {
    let time = performance.now()
    callback();
    console.log(`Time: ${performance.now() - time}`);
    console.log('----------');
    console.log(array);
}

let button_QS = document.querySelector('.dijkstraQuickSort');

array = [3, 4, 1, 2, 5, 1, 1, 1, 3, 6, 4, 8, 9, 12, 23, 1, 23, 4];

console.log(array)

button_QS.addEventListener('click', ()=>{
    startTimer(()=>{
        console.log(quickSort(array.slice(0)));
    })
})