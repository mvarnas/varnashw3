const startStr = prompt('Enter the start')
const start= parseInt(startStr,10)

const endStr = prompt('Enter the end')
const end= parseInt(endStr,10)

const stepStr = prompt('Enter the step')
const step = parseInt(stepStr,10)
// if step==0 {
//     document.write('Invalid integer input');
// }
var min = start;
var max = end;
var arr = [];
for (var i = min; i <= max; i=i+step)
    arr.push(i);

var totalSum=0;
for (var i in arr){
totalSum +=arr[i];
}

var binArr =[];
for (var i=0, len=arr.length; i<len; i++) {
    total+=arr[i]; binArr.push(arr[i].toString(2))
}

document.write('The generated array is ' + arr  + '<br>') ; 
document.write('The sum is ' + totalSum + '<br>' ); 
document.write('The binary of absolute element values are: ' + binArr);
// const output2 = document.getElementById("output2")
// output2.innerHTML = 'The sum is ' + total;
