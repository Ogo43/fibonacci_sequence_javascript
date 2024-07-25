function fibonacciGenerator (n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0,1];

    let output = [0,1];

    for (let i = 2; i < n; i++) {
        // output.push(output[i - 2] + output[i - 1]);

        output.push(output[output.length - 1] + output[output.length - 2]);
    }

    return output;
}

let result = fibonacciGenerator (5);
console.log(result);

// OR


function fibonacciGenerator (n) {
output = [];
    
    if (n === 1){
        output=[0];
    } else if (n === 2){
        output=[0,1];
    } else {
        output=[0,1];
        for(var i=2; i<n; i++){
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    
    return output;
}

let result1 = fibonacciGenerator (7);
console.log(result1);