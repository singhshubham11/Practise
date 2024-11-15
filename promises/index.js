//---------------------------------------------------------------------------------------------------------------------------------------------------
// const helloWorld = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('hello world');
//     }, 2000);
// })

// helloWorld.then(data =>{
//     console.log(data);
// })
// .catch(err=>{
//     console.error(err);
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const number = new Promise((resolve, reject) => {
//     resolve(42);
// })

// number.then(data=>{
//     console.log(data);
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const randomly = new Promise((resolve, reject) => {
//     const isSucess = Math.random() > 0.5;
//     setTimeout(()=>{
//         if (isSucess) {
//             resolve('sucess: promise is resolved');
//         } else {
//             reject('fail: promise is rejected');
//         }
//     },2000)
// })

// randomly
// .then(message =>{
//     console.log(message)
// })
// .catch(err=>{
//     console.error(err);
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const stateOfPromise = new Promise((resolve,reject)=>{
//     console.log("promise created state: pending ");

//     setTimeout(() => {
//         const isSucess = Math.random() > 0.5;
//         if (isSucess) {
//             console.log("Promise resolved, state: fullfiled");
//             resolve("Operation succeeded!");
//         } else {
//             console.log("Promise rejected, state: rejected ");
//             resolve("Operation failed!");
//         }
//     }, 2000);
// })

// stateOfPromise
// .then((message) => {
//     console.log("Then handler:", message);
//   })
//   .catch((error) => {
//     console.error("Catch handler:", error);
//   });


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const makeCoffe = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('step 1: Grinding coffee beans...');
//         resolve('Ground Coffee')
//     }, 1000);
// })

// makeCoffe
// .then((groundCoffee) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('step 2: Brewing coffee');
//             resolve('Brewd Coffee') 
//         }, 1000);
//     })
// })
// .then((brewdCoffee) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('step 3: Pouring coffee');
//             resolve('Coffee is ready')
//         }, 1000);
//     })
// })
// .then((finalMessage) => {
//     console.log(finalMessage);
// })
// .catch((err) => {
//     console.error(err);
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i am promise1')
//     }, 1000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i am promise2')
//     }, 2000);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('i am promise3')
//     }, 3000);
// })

// Promise.all([promise1,promise2,promise3])
// .then((message) =>{
//     console.log('all promises resolved');
//     message.forEach(item => console.log(item));
// })
// .catch((err) => {
//     console.error(err);
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const fastPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('faster then ever');
//     }, 1000);
// });

// const slowPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('slowest then ever');
//     }, 3000);
// });

// Promise.race([fastPromise,slowPromise])
// .then((result) => {
//     console.log('the displayed promise is faster ' + result);
// })
// .catch((err) => {
//     console.error(err);
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise1 is ok')
//     }, 1000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promie2 is ok')
//     },1000)
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('failed due to some reason');
//     }, 1000);
// })

// Promise.all([promise1,promise2,promise3])
// .then((result) => {
//     console.log('all resolved');
//     result.forEach(item => console.log(item));
// })
// .catch((err) => {
//     console.error(err);
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// function unreliablePromise() {
//     return new Promise((resolve, reject) => {
//         const success = Math.random() > 0.5;
//         setTimeout(() => {
//             if (success) {
//                 resolve('promise succeeded')
//             } else{
//                 reject('promise failed')
//             }
//         }, 500);
//     })
// }

// function retyPromise(promiseFunction, retries) {
//     return new Promise((resolve, reject) => {
//         function attempt() {
//             promiseFunction()
//             .then(resolve)
//             .catch((err) => {
//                 if (retries === 0) {
//                     reject('promise failed');
//                 } else {
//                     console.log(`retrying attempt ${retries}`);
//                     retries--;
//                     attempt();
//                 }
//             })
//         }
//         attempt();
//     })
// }

// retyPromise(unreliablePromise,3)
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.error(err);
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// function longRunningPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('long running promise');
//         }, 5000);
//     })
// }

// function timeoutPromise(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('promise cancelled due to delay');
//         }, delay);
//     })
// }

// Promise.race([longRunningPromise(), timeoutPromise(2000)])
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.error(err);
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
// }

// delay(2000).then(() => {
//     console.log('executed after 2 sec');   
// });

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve,1000,'success 1');
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject,500,'failed 2');
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve,1500,'success 2')
// })

// Promise.allSettled([promise1, promise2, promise3])
// .then((result) => {
//     result.forEach(item => {
//         if (item.status === 'fulfilled') {
//             console.log(`resolved with ${item.value}`)
//         } else {
//             console.error(`rejected with ${item.reason}`)
//         }
//     })
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'resolve 1');
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'reject 2')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1500, 'resolve 3')
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(reject, 2000, 'reject 4')
// })

// Promise.allSettled([promise1,promise2,promise3,promise4])
// .then((result) => {
//     result.forEach((item, index) => {
//         if (item.status === 'fulfilled') {
//             console.log(`promise ${index + 1} successed with value ${item.value}`);
//         } else if (item.status === 'rejected') {
//             console.error(`promise ${index + 1} rejected with reason ${item.reason}`)
//         }
//     })
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({userId: 1 , userName: "shubham singh"})
//         }, 1000);
//     })
// }
// function fetchUserDetails(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({userId, details: "additional user data"})
//         }, 1000);
//     })
// }

// fetchUser()
// .then((result) => {
//     return fetchUserDetails(result.userId);
// })
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.error(err);
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched')
//         }, 2000);
//     })
// }

// fetchData()
// .then((result) => {
//     console.log(result);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log('cleaning up...')
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

function fetchData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: userId, userName: 'shubham'});
        }, 1000);
    })
}

function fetchAdmin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('admin data')
        }, 1000);
    })
}

function fetchGeneral() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('general data')
        }, 1000);
    })
}

fetchData(1)
.then((result) => {
    if (result.userName === 'shubham') {
        return fetchAdmin();
    } else {
        return fetchGeneral();
    }
})
.then((result) => {
    console.log('conditional data: ' + result);
})
.catch((err) => {
    console.error(err);
})
