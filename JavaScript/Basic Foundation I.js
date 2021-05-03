1. Get 1 to 255
function printNumbers(){
    var arr=[];
    for(var i=1; i<=255; i++){
        arr.push(i);

    }
    return arr;
}

var result = printNumbers();
console.log(result);
2. Get even 1000
function sumEvenNumbers(){
    var sum=0;
    for(var i=1; i<=1000; i++){
        if(i%2==0){
            sum+=i;
        }

    }
    return sum;
}

var result = sumEvenNumbers();
console.log(result);

3. Sum odd 5000
function sumEvenNumbers(){
    var sum=0;
    for(var i=1; i<=5000; i++){
        if(!(i%2==0)){
            sum+=i;
        }

    }
    return sum;
}

var result = sumEvenNumbers();
console.log(result);

4. Iterate an array

function sumOfArray(){
    var sum=0;
    var arr=[1,2,5];
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];

    }
    return sum;
}

var result = sumOfArray();
console.log(result);

5. Find max
function findMax(arr){
    var max=arr[0];
   
    for(var i=1; i<arr.length; i++){
       if(arr[i] > max){
           max=arr[i];
       }

    }
    return max;
}
var arr=[1,2,5];
var result = findMax(arr);
console.log(result);

6. Find average 
function findAverage(arr){
    var avg=0;
    var sum=0;
   
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
      
    }
    avg=sum/(arr.length);
    return avg;
}
var arr=[1,3,5];
var result = findAverage(arr);
console.log(result);

7. Array odd
function arrayOdd(){
    var arr=[];
    for(var i=1; i<=50; i++){
        if(i%2 != 0){
            arr.push(i);
        }
      
    }
    return arr;
}
var result = arrayOdd();
console.log(result);

8. Greater than Y
function GreaterThanY(arr, Y){
    var count=0;
    for(var i=0; i<arr.length; i++){
       if(arr[i] > Y){
           count++;

       }
      
    }
    return count;
}
var arr=[1, 3, 5, 7];
var result = GreaterThanY(arr, 3);
console.log(result);

9. Squares
function squares (arr){
    for(var i=0; i<arr.length; i++){
       arr[i] *=arr[i]
      
    }
    return arr;
}
var arr=[1, 3, 5, 7];
var result = squares(arr);
console.log(result);

10. Negatives 
function replaceNegatives (arr){
    for(var i=0; i<arr.length; i++){
       if(arr[i]<0){
           arr[i]=0;
       }
      
    }
    return arr;
}
var arr=[1, -3, 5, -7];
var result = replaceNegatives(arr);
console.log(result);

11. Max/Min/Avg
function findMaxMinAgv (arr){
    var newarray=[];
    var max=arr[0];
    var min=arr[0];
    var avg=0
    var sum=0;
    for(var i=0; i<arr.length; i++){
      sum+=arr[i];
      if(arr[i] >max){
          max=arr[i]
      }
      else if(arr[i] < min){
          min=arr[i];
      }
     
    }
    avg=sum/(arr.length);
    newarray.push(max);
    newarray.push(min);
    newarray.push(avg);
      
    return newarray;
}
var arr=[1, 3, 5];
var result = findMaxMinAgv(arr);
console.log(result);

12. Swap Values
function swapValues (arr){
    
    for(var i=0; i<arr.length; i++){
      var temp=arr[0];
      arr[0]=arr[arr.length-1];
      arr[arr.length-1]=temp;
     
    }
   
      
    return arr;
}
var arr=[1, 3, 5];
var result = swapValues(arr);
console.log(result);

13. Number to String
    function replaceNegatives (arr){
    for(var i=0; i<arr.length; i++){
       if(arr[i]<0){
           arr[i]='Dojo';
       }
      
    }
    return arr;
}
var arr=[1, -3, 5, -7];
var result = replaceNegatives(arr);
console.log(result);

