const startStr = prompt('Enter the start')
const start= parseInt(startStr,10)

alert(start)

const endStr = prompt('Enter the end')
const end= parseInt(endStr,10)

const stepStr = prompt('Enter the step')
const step = parseInt(stepStr,10)

var min = start;
var max = end;
var arr = [];
for (var i = min; i <= max; i=i+step)
    arr.push(i);

var total=0;
for (var i in arr){
    total +=arr[i];
}

const output = document.getElementById("output")
output.innerHTML = 'The generated array is ' + arr;

const outputSum = document.getElementById("outputSum")
outputSum.innerHTML = 'The sum is ' + total


