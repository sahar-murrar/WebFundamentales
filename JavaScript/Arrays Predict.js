var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

T Diagram:
arr.length=7
i=0, 1, 2, 3, 4, 5, 6

**predicted output:
8, 6, 7, 5, 3, 0, 9
-------------------------------------
var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

T Diagram:
arr.length=7
i=0,1,2,3,4,5,6
**predicted output:
That is odd!
That is odd!
8
4
2
0
That is odd!
-----------------------------------------
var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

T Diagram:
arr.length= 8
i=0,1,2,3,4,5,6,7
newArr=[-5,-2, -1]
arr=[-1, -3, -8, 5, "Zero", 2, -4, 1]

predicted output:
[-1, -3, -8, 5, "Zero", 2, -4, 1]
[-5,-2, -1]
