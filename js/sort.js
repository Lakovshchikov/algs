Array.prototype.swap = function (a,b) {
    let tmp = this[a];
    this[a] = this[b];
    this[b] = tmp;
}
Array.prototype.sink = function (i,max) {
    let big_ind;
    while (i<max){
        let big_ind = i,
            childL = 2 * i + 1,
            childR = childL + 1;

        if(childL < max && this[childL] > this[big_ind])
            big_ind = childL;
        if(childR < max && this[childR] > this[big_ind])
            big_ind = childR;

        if(big_ind == i) return

        this.swap(i,big_ind);
        i=big_ind;
    }
}

//Сортировка прямыми включениями (проход, cравнение элемента с каждым элементом упорядоченного массива, )
function inclusionSort(arr) {
    if(arr.length == 1)
        return arr;

    for(var i = 1;i<arr.length;i++){
        let value = arr[i];
        let index = i;
        while (index>0 && arr[index-1]>value) {
            arr[index] = arr[index-1];
            index--;
        }
        arr[index] = value
    }
    return arr;
}

//Сортировка прямым выбором (свап минимального и первого элемента неотсортированной части массива)
function selectionSort(arr){
    if(arr.length == 1)
        return arr;
    for(var i = 0; i< arr.length; i++){
        let temp,
            min;
        min = i;
        for(var j = i+1; j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

//Пузырьковая сортировка (проверка i и i-1)
function bubbleSort(arr){
    if(arr.length == 1)
        return arr;
    for(var i = 0; i< arr.length; i++){
        for(var j = i+1; j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//Шейкер-сортировка (двигать левую и правую границу, + flag, если был свап). Усовершенствованная пузырьковая
function shakerSort(arr){
    if(arr.length==1)
        return arr;
    let left = 0,
        right = arr.length - 1,
        flag = true;
    while((left<right) && flag){
        flag = false;
        for(var i  = left; i<right; i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                flag = true;
            }
        }
        right--;
        for(var j = right;j>left;j--){
            if(arr[j]<arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                flag = true;
            }
        }
        left++;
    }
    return arr;
}

//Сортировка Шелла (сначала через 3 элем, потом через 2 элем, потом обычная)
function shellSort(arr){
    //нахуй
}

//Сортировка с помощью бинарного дерева
function binaryTreeSort(arr){
    let binaryTree = new BinaryTree(arr[0]);
    for(var i = 1; i <arr.length; i++){
        binaryTree.add(arr[i])
    }
    let result = []
    binaryTree.inOrder(node=>{
        result.push(node.data);
    })
    console.log(binaryTree);
    return result;
}

//Сортировка кучей, пирамидальная сортировка
function heapSort(array){
    let end = array.length - 1,
        index = Math.floor((array.length/2) - 1);

    while ( index >= 0){
        array.sink(index,array.length);
        index--;
    }

    while(end >= 0){
        array.swap(0,end);
        array.sink(0,end);
        end--
    }

    return array

}

//QuickSort
// function quickSort(array){
//     let pivot = 0;
//
//     (function recursive(arr,left,right) {
//         let pivot = left,
//             l_hold = left,
//             r_hold = right;
//         if(right-left!=1){
//             while(left<right){
//                 while (arr[left]<=arr[pivot] && left<right){
//                     left++;
//                 }
//                 while(arr[right]>=arr[pivot] && right > left){
//                     right--;
//                 }
//                 if(left!=right)
//                     arr.swap(left,right)
//             }
//             arr.swap(right,pivot)
//             if(l_hold<right){
//                 recursive(arr,l_hold,right-1);
//             }
//             if(r_hold>left){
//                 recursive(arr,left,r_hold)
//             }
//         }
//         else{
//             if(arr[left]>arr[right])
//                 arr.swap(left,right)
//         }
//     })(array,0,array.length-1);
//
//     return array;
// }
// function quickSort(arr){
//     let pivot = 0;
//
//     (function recursive(arr,left,right){
//         let l_init = left,
//             r_init = right,
//             pivot = left-1;
//         while(left<right){
//             while (arr[left]<=arr[pivot] && left<right){
//                 left++;
//             }
//             while (arr[right]>=arr[pivot] && left<right){
//                 right--;
//             }
//             if(left<right && arr[left] != arr[right]){
//                 arr.swap(left,right);
//             }
//         }
//         right--
//         arr.swap(pivot,right)
//         if(l_init<right){
//             recursive(arr,l_init,right-1);
//         }
//         if(r_init>left){
//             recursive(arr,left+1,r_init);
//         }
//     })(arr,pivot+1,arr.length-1)
//
//     return arr;
// }
// function QuickSort(A){
//     let pivot = 0;
//
//     (function recursive(arr,left,right){
//         let l_init = left,
//             r_init = right,
//             pivot = (left+right)/2;
//         while(left<=right){
//             while (arr[left]<=arr[pivot]){
//                 left++;
//             }
//             while (arr[right]>=arr[pivot]){
//                 right--;
//             }
//             if(left<=right && arr[left] != arr[right]){
//                 arr.swap(left++,right--);
//             }
//         }
//         if(l_init<right){
//             recursive(arr,l_init,right);
//         }
//         if(r_init>left){
//             recursive(arr,left,r_init);
//         }
//     })(A,pivot+1,A.length-1)
//
//     return A;
// }
function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    var pivot = array[0];

    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};



let button_Sort = document.querySelector('.sort');
let button_inclusionSort = document.querySelector('.inclusionSort');
let button_selectionSort = document.querySelector('.selectionSort');
let button_bubbleSort = document.querySelector('.bubbleSort');
let button_shakerSort = document.querySelector('.shakerSort');
let button_binaryTreeSort = document.querySelector('.binaryTreeSort');
let button_heapSort = document.querySelector('.heapSort');
let button_quickSort = document.querySelector('.quickSort');

function startTimer(callback) {
    let time = performance.now()
    callback();
    console.log(`Time: ${performance.now() - time}`);
    console.log('----------');
    console.log(array);
}

button_Sort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(array.slice(0).sort((a,b)=>a-b))
    })
});

button_inclusionSort.addEventListener('click', ()=>{
    startTimer(()=>{
        console.log(inclusionSort(array.slice(0)));
    })
});

button_selectionSort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(selectionSort(array.slice(0)));
    })
});

button_bubbleSort.addEventListener('click', ()=>{
    startTimer(()=>{
        console.log(bubbleSort(array.slice(0)));
    })
});

button_shakerSort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(shakerSort(array.slice(0)));
    })
});

button_binaryTreeSort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(binaryTreeSort(array.slice(0)));
    })
})

button_heapSort.addEventListener('click',()=>{
    startTimer(()=>{
        console.log(heapSort(array.slice(0)));
    })
})

button_quickSort.addEventListener('click',()=>{
    startTimer(()=>{
        let a = ["", "", "", "", "ac", "", "aa", "ad", "","a"];
        // console.log(quicksort(array.slice(0)));
        console.log(quicksort(a).reverse())
    })
})


