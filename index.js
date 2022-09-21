
// import { useState, useEffect } from 'react';
// let obj={
//     name:'shubham',
//     lname:'pawar'
// }

// const firstname= {...obj,address:"Latur"}

// console.log(firstname);

// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
// setTimeout(function() {
// console.log('Index: ' + i + ', element: ' + arr[i]);
// }, 3000);
// }
// console.log(arr[i])

//undefined




// var count=0;

// const[timer,setTimer]= useState(count);

// useEffect(()=>{
//     setTimeout(()=>{
//         setTimer(timer+1);
//     },1000)

//     //clear state function

// },[timer])




// var arr=[1,2,3,4,5];


// var value=arr.reduce((acc,curr)=>{
//     // return acc=acc+acc[index]
//     return curr=curr*2;

// },0)
// console.log(value);


var store = [0, 1, 2, 3, 4];

var stored = store.reduce(function(pV, cV, cI){
//   console.log("pv: ", pV);
  pV.push(cV);
  return pV; // *********  Important ******
}, []);

console.log(stored);



