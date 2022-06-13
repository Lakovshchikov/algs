//Задача со скобками

function isBalanced(input) {
    let list_left = new LinkedListStack();
    let list_right = new LinkedListStack();
    let left = '{(';
    for(var i = 0; i <input.length; i++ ){
        if (left.includes(input[i])){
            list_left.push(input[i]);
        }
    }
}



(function main() {
    let input = [];
    input.push('(){}');
    input.push('{()}');
    input.push('(}{)');
    input.push('{){})');
    input.push('{)');
    input.push('{)))((}');
})()


