const startStr = prompt('Enter the start')
const start= parseInt(startStr,10)

const endStr = prompt('Enter the end')
const end= parseInt(endStr,10)

const stepStr = prompt('Enter the step')
//     if (stepStr==0) or (stepStr==isNaN); {
//        alert('Invalid integer input, please reload and try again');
// }
// // else {
    const step = parseInt(stepStr,10)

    var min = start;
    var max = end;
    var arr = [];
        for (var i = min; i <= max; i=i+step){
            arr.push(i);
        }
    var total=0;
        for (var i in arr){
        total +=arr[i];
        }

    var binArr =[];
        for (var i=0, len=arr.length; i<len; i++) {
        total+=arr[i]; binArr.push(arr[i].toString(2))
        }

document.write('The generated array is ' + arr  + '<br>') ; 
document.write('The sum is ' + total + '<br>' ); 
document.write('The binary of absolute element values are: ' + binArr);
