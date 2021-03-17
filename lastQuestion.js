// //סעיף 1
// let isTrue = true;
// let promiseObj = new Promise((resolve,reject) => {
//     if(isTrue){
//     resolve("hello");
//     }
//     reject("bye");

// });
// promiseObj
// .then((res) => {console.log(res);})
// .catch((res) => {console.log(res);})

// //סעיף 2
// let yesObj = new Promise((resolve,reject) => {
//     return setTimeout(() => {
//       if(isTrue){
//           resolve("yes");
//       }
//       reject("No");

//     },5000)
// });
// yesObj
// .then((res) => {
//     console.log(res);})
// .catch((res) => {
//     console.log(res);});
// //סעיף 3
// let promiseNumber = 11;
// let isNumBigger = new Promise((resolve,reject) => {
//     return setTimeout(() => {
//         if(promiseNumber >= 10){
//             resolve("the number is bigger than 10");
//         }
//         reject("the number is less than 10");
//     },4000)
// })
// isNumBigger
// .then((res) => console.log(res))
// .catch((res) => console.log(res));

// // סעיף 4
// let evenNum = 11;
// let isNumEven = new Promise((resolve,reject) => {
//     return setTimeout(() => {
//         if(evenNum % 2 === 0){
//             resolve("the number is even");
//         }
//         reject("the number is odd");
//     },5000)
// })
// isNumEven
// .then((res) => console.log(res))
// .catch((res) => console.log(res));

// // 6 + סעיף 5
// async function asyncAnswer() {
//    let div1 = document.getElementById("div1");
//    let img1 = document.getElementById("img1");
//    img1.style.height = "30px";
//    img1.style.width = "30px";
//    img1.src = "giphy.gif"
//    try{

//     const result =  await isNumEven;

//     div1.innerText = result;
//    }  
//    catch(res) {
//     div1.innerText = res;
//    }
//    finally{
//        img1.style.display = "none";
//    }

// } 