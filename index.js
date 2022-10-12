//1
let s = document.getElementById("namechange")
 s.style.color="black";
  function changee(){
    let s = document.getElementById("namechange")
     s.style.color="red";
     s.innerText="MERN stack"
  }

//2
let b = document.getElementsByTagName("h1")
console.log(b)

//3
function getTime(){
    let date = new Date();
    let HH = date.getHours();
    let MM = date.getMinutes();
    let SS = date.getSeconds();
    document.getElementById("HH").innerText = HH;
    document.getElementById("MM").innerText = MM;
    document.getElementById("SS").innerText = SS;
    setTimeout(getTime, 1000);
}
getTime();

//4
let s = document.getElementById("namechange")
    s.style.color="black";
    function changee(){
        let s = document.getElementById("namechange")
        s.style.color="red";
        s.innerText="Welcome to Elevation Academy"
    }
 
//5
function toggleText(){
    var x = document.getElementById("hidee");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//6. Given an array of 0's and 1's find out number of 0's
let arr = [1,0,1,1,0,1,1,1,0,8,0,7,0,0,1,1,0]
let count = 0;
for (let i=0; i<arr.length; i++){
  if(arr[i]===0){
    count+=1;
  }
}
console.log(count)

// 6. Given an array find out total no. of odd and even nos.
arr = [2,4,7,9,10];
let count1 = 0;
let count2 = 0;
for(let i=0; i<arr.length; i++){
  if((arr[i]%2)==0){
    count1++;
  }
  else{
    count2++;
  }
}
console.log("even"+count1+ "odd" +count2)

// 7. Given a string find out number of vowels. 
function findVowels(str){
    let total = 0;
    for(let i=0; i<srt.length; i++){
      if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
        total+= 1;
      }
    }
    
    }
    findVowels('fgg'.toLocaleLowerCase)
    
// 8. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.   
let obj1 = {
    name: "nithin",
    arr: [2, 4, 9, 7, 8, 3]
}

let obj2 = {
    name: "pavan",
    arr2: [2, 4, 9, 7, 8, 3]
}

let result = true;
let check = function(){
    let len;
    if(obj1.arr.length > obj2.arr2.length){
        len = obj1.arr.length;
    }
    else{
        len = obj2.arr2.length;
    }
    for(let i = 0; i < len; i++){
        if(obj1.arr[i] == obj2.arr2[i]){
            result = true;
        }
        else{
            result = false;
            break;
        }
    }
    return result;
}
check();
if(result == true){
    console.log("Arrays are same")
}
else{
    console.log("Arrays are not same")
}



