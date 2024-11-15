// function greet() {
//     console.log("Hello");
// }

// function delay(callback,time) {
//     setTimeout(callback,2000);
// }

// delay(greet,2000);

//----------------------------------------------------------------------------------------------------------------------------------

// function greet(callback) {
//     const message = "hello how are you";
//     callback(message);
// }

// function sayingHello(message) {
//     console.log(message)
// }

// greet(sayingHello);

//-------------------------------------------------------------------------------------------------------------------------------------

// function longArray(arr,callback){
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i]);
//     }
// }

// function printArray(item) {
//     console.log(item);
// }

// let arr = [2,4,6,8,10];
// longArray(arr,printArray);

//----------------------------------------------------------------------------------------------------------------------------------

// function longArray(arr,callback){
//     for (let i = 0; i  < arr.length; i++) {
//         setTimeout(()=>callback(arr[i]),1000*i);  
//     }
// }

// function printArray(item){
//     console.log(item);
// }

// let arr = [2,4,6,8,10];
// longArray(arr,printArray);

//------------------------------------------------------------------------------------------------------------------------------------

// function add(a,b){
//     let result = a + b;
//     if (result > 10) {
//         console.log(result);
//     }
// }

// add(5,6);
// add(2,3);

//------------------------------------------------------------------------------------------------------------------------------------

// function add(a,b,callback) {
//     let result = a + b;
//     callback(result);
// }

// function printOutput(item){
//     if (item > 10) {
//         console.log(item);
//     }
// }

// add(5,6,printOutput);
// add(2,1,printOutput);
// add(43,11,printOutput);

//------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5,6,7,8,9,10];

// arr.forEach((number)=>{
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// });

//------------------------------------------------------------------------------------------------------------------------------------

// const fs = require('fs');

// function readFileWithCallback(filename,callback) {
//     fs.readFile(filename,'utf-8',(err,data)=>{
//         if (err) {
//             callback(err,null);
//         } else{
//             callback(null,data);
//         }
//     })
// }

// const filename = 'a.txt';

// readFileWithCallback(filename,(err,data)=>{
//     if (err) {
//         console.log('error occured: '+ err);
//     } else {
//         console.log(data);
//     }
// })


//------------------------------------------------------------------------------------------------------------------------------------
//callback hell

// function fetchUser(id, callback){
//     setTimeout(()=>{
//         console.log('user id is: '+id);
//         callback(null,{userid: id, username: "shubham"})
//     },1000);
// }

// function fetchUserPost(id,callback){
//     setTimeout(() => {
//         console.log('user id is: '+ id);
//         callback(null,[{post1: 1, content: 'helloworld'},{post2: 2, content: 'another post'}])
//     }, 1000);
// }

// function fetchPostComments(id, callback){
//     setTimeout(() => {
//         console.log('user id is: '+ id);
//         callback(null,[{comment1: 1, text: 'good'},{comment2: 2, text: 'very good'}])
//     }, 1000);
// }

// fetchUser(1,(err,user)=>{
//     if (err) {
//         return console.error(err);
//     }
//     fetchUserPost(1,(err,post)=>{
//         if (err) {
//             return console.error(err);
//         }
//         fetchPostComments(1,(err,comment)=>{
//             if (err) {
//                 return console.error(err);
//             }
//             console.log(comment);
//         });
//     });
// });

//promises

// function fetchUser(id) {
//    return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve({username: 'shubham'})
//     }, 1000);
//    });
// }

// function fetchUserPost(id) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve([{post1: 1, content: 'hello feeling good'},{post2: 2, content: 'good day'}])
//         }, 1000);
//     });
// }

// function fetchPostComments(id) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve([{comment1: 1, text: 'great post'},{comment2: 2, text: 'nice'}])
//         }, 1000);
//     });
// }


// fetchUser(1)
// .then(data=>{
//     console.log('User: '+ JSON.stringify(data));
//     return fetchUserPost(1);
// })
// .then(data =>{
//     console.log('Post: '+ JSON.stringify(data));
//     return fetchPostComments(1);
// })
// .then(data=>{
//     console.log('Comment: '+ JSON.stringify(data));
// })
// .catch(error =>{
//     console.error(error);
// })

//asyn/await

// async function fetchData() {
//     try{
//     const user = await fetchUser(1);
//     console.log('User: '+ JSON.stringify(user));
//     const post = await fetchUserPost(1);
//     console.log('Post: '+ JSON.stringify(post));
//     const comment = await fetchPostComments(1);
//     console.log('Comment: '+ JSON.stringify(comment));
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// fetchData();

//------------------------------------------------------------------------------------------------------------------------------------

// setInterval(() => {
//     const currentTime = new Date().toLocaleTimeString();
//     console.log("Current time:", currentTime);
// }, 1000);

//------------------------------------------------------------------------------------------------------------------------------------

// function fetchUserData(callback){
//     setTimeout(() => {
//         const data = {username: 'shubham singh', niumber: 7799076554}
//         callback(data);
//     }, 1000);
// }

// function printData(data){
//     console.log(data);
// }

// //making ajax call with callback
// fetchUserData(printData);

//------------------------------------------------------------------------------------------------------------------------------------

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "i am data";
//         callback(null,data);
//     }, 1000);
// }

// fetchData((err,data)=>{
//     if (err) {
//         console.log("error: "+ err);
        
//     } else {
//         console.log(data);
//     }
// })

//------------------------------------------------------------------------------------------------------------------------------------

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = 'my name is data';
//             resolve(data);
//         }, 2000);
//     })
// }

// fetchData()
// .then(data => {
//     console.log(data);
// })
// .catch(err =>{
//     console.error(err);
// })


//------------------------------------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4];

// const doublenumber = arr.map(number=>number*2);

// console.log(doublenumber);

//------------------------------------------------------------------------------------------------------------------------------------

// let arr1 = [1,2,3,4,5,5,66,7,7,8,98,9];

// const remove = arr1.filter(number => number > 3);

// console.log(remove);

//------------------------------------------------------------------------------------------------------------------------------------

// let arr2 = [1,2,3,4,5];

// const sum = arr2.reduce((accumulator,currentvalue)=> accumulator+currentvalue,0);

// console.log(sum);


//------------------------------------------------------------------------------------------------------------------------------------

//callback and clouser

// function greet(name){
//     return function(){
//         console.log('hi how are you '+ name);
//     }
// }

// const callGreet = greet('shubham');
// callGreet();

//------------------------------------------------------------------------------------------------------------------------------------

function processList(list,onSucess,onFailure){

    if (!Array.isArray(list) || !list.every(item => typeof item === 'number')) {
        onFailure(new Error('Invalid Input: please provide an array of numbers.'));
        return;
    }

    const filterResult = list.filter(num=> num % 2 === 0);
    onSucess(filterResult);
}

function handleSucess(data){
    console.log(data);
}

function handleFailure(data){
    console.log(data);
}

processList([1,2,3,4,5,6],handleSucess,handleFailure);
processList(["1",2,3],handleSucess,handleFailure)








