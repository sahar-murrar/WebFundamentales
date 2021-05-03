1. Biggie Size
function biggieSize (arr){
    for(var i=0; i<arr.length; i++){
       if(arr[i]>0){
           arr[i]='big';
       }
      
    }
    return arr;
}
var arr=[1, -3, 5, -7];
var result = biggieSize(arr);
console.log(result);
    
2. Print Low, Return High 
function printMinReturnMax (arr){
    var min=arr[0], max=arr[0];
    for(var i=0; i<arr.length; i++){
       if(arr[i]>max){
          max=arr[i];
       }
       else if(arr[i]<min){
        min=arr[i];
       }
      
    }
    console.log(min);
    return max;
}
var arr=[1, -3, 5, -7];
var result = printMinReturnMax(arr);
console.log(result);

3. Print One, Return Another
function printOneReturnAnother (arr){
    var firstOdd;

    for(var j=1; j<arr.length-1; j++){ //start from 1 to print the second value and stop on the value that is previous of the last value.
        console.log(arr[j]);

    }

    for(var i=0; i<arr.length; i++){
        if(arr[i] %2 != 0){
            firstOdd=arr[i];
            break;

        }
      
      
    }
   
    return firstOdd;
}
var arr=[2, -4, 5, -7];
var result = printOneReturnAnother(arr);
console.log("The first Odd number is: ", result);

4. Double Vision
function doubleArray (arr){
    var newarray=[];

    for(var i=0; i<arr.length; i++){
       newarray.push(arr[i]*arr[i]); 
    }
   
    return newarray;
}
var arr=[2, -4, 5, -7];
var result = doubleArray(arr);
console.log(result);

5. Count Positives
function countPositives (arr){
    var count=0;

    for(var i=0; i<arr.length; i++){
       if(arr[i]>0){
           count++;

       }
    }
    arr.pop();
    arr.push(count);
   
    return arr;
}
var arr=[2, -4, 5, 9, -7];
var result = countPositives(arr);
console.log(result);

6. Evens and Odds
function evenAndOdds (arr){
    var countOdd=0;
    var countEven=0;

    for(var i=0; i<arr.length; i++){
       if(arr[i]%2!=0 && countOdd!=3){
            countOdd++;
            countEven=0; //we made it 0 to just have and 3 odd numbers in cascade
            if(countOdd==3){
                console.log("That's odd!")
            }
        }
       else if(arr[i]%2==0 && countEven!=3){
            countEven++;
            countOdd=0;//we made it 0 to just have and 3 even numbers in cascade
            if(countEven==3){
                 console.log("Even more so!")
            }
        }
    }
    
  
}
var arr=[2, -4, 10, 6, -7, 8];
evenAndOdds(arr);

7. Increment the Seconds
function IncrementTheSeconds (arr){
    var countOdd=0;
    var countEven=0;

    for(var i=0; i<arr.length; i++){
      if(i%2 != 0){
          arr[i]++;
      }
       console.log(arr[i]);
    }
    return arr;
    
  
}
var arr=[2, -4, 5, 9, -7, 8];
var result = IncrementTheSeconds(arr);
console.log(result);

8. Previous Lengths

function previousLengths (arr){
    var newarray=[];

    for(var i=0; i<arr.length; i++){

      if(typeof(arr[i]) == "string"){
            if(i != 0 && typeof(arr[i-1]) == "string"){
               // arr[i] = arr[i-1].length;
                newarray.push(arr[i-1].length);
                
            }
            else  if(i == 0){
                newarray.push(arr[i]);
            }
        }
        else if(typeof(arr[i]) != "string"){
            newarray.push(arr[i]);
        }
    }
    return newarray;
    
  
}
var arr=["hello", "dojo", "awesome"];
var result = previousLengths(arr);
console.log(result);

9. Add Seven

function addSeven (arr){
    var newarray=[];

    for(var i=0; i<arr.length; i++){

        var element = arr[i] +7;
        newarray.push(element);
    }
    return newarray;
    
  
}
var arr=[1, 4, 20, 35];
var result = addSeven(arr);
console.log(result);

10. Reverse Array

function reverse (arr){
    var left=0; //index of first element on right
    var right=arr.length-1; //index of the last element in the array
    var temp;

    while(left<right){
        temp= arr[left];
        arr[left] =arr[right];
        arr[right]=temp;

        left++;
        right--;

        
    }
    return arr;
    
  
}
var arr=[1, 4, 20, 35];
var result = reverse(arr);
console.log(result);

    
11. Outlook: Negative

function makeAllNegative (arr){
   var newarray=[];

   for(var i=0; i<arr.length; i++){
       if(arr[i] > 0){
          newarray.push(arr[i] * -1);
       }
       else{
        newarray.push(arr[i]);
       }
   }
        
    return newarray;
    
  
}
var arr=[1, -4, 20, -35];
var result = makeAllNegative(arr);
console.log(result);

12. Always Hungry

function hungry (arr){
    var count=0;

   for(var i=0; i<arr.length; i++){
       if(arr[i]=="food"){
         console.log("Yummy");
       }
       else{
       count++;
       }
   }

   if(count == arr.length){
    console.log("I'm hungry");
   }
        
    
  
}
var arr=[1, "food", 20, -35];
 hungry(arr);

13. Swap Toward the Center 

 function reverse (arr){

   var left=0; //index of first element on right
    var right=arr.length-1; //index of the last element in the array
    var temp;

    while(left<right){
        if(left%2 ==0){
           temp= arr[left];
           arr[left] =arr[right];
           arr[right]=temp;
           left++;
           right--;
        }
        else{
            left++;
            right--;
        }

        
    }
    return arr;
    
  
}
var arr=[true,42,"Ada",2,"pizza"];
var result = reverse(arr);
console.log(result);

14. Scale the Array

function scaleArray (arr, num){

    for(var i=0; i<arr.length; i++){
        arr[i] *=num;
    }
 
    return arr;
    
  
}
var arr=[1,2,3];
var result = scaleArray(arr, 3);
console.log(result);