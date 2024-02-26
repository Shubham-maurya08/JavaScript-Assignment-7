//Q:1
// function area(length){
//     function rec(breadth){
//         return length*breadth;
//     }
//     rec();
// }
// console.log(); incomplete

//Q:2


//Q:3
// function newWord(){
//     document.getElementById("new").innerText = "MERN STACK";
// }

//Q:4
// function first(){
//     const fst = document.getElementsByTagName("p");
//     console.log(fst[0].innerText);
// }
// first();

//Q:5
//function showTime(){
//     var date = new Date();
//     var hrs = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();

//     var time = hrs + ":" + min + ":" + sec + "";
//     document.getElementById("MyClockDisplay").innerText = time;

//     document.getElementById("MyClockDisplay").textContent = time;

//     setTimeout(showTime,1000);
// }
// showTime();

//Q:6
// function newChange(){
//     document.getElementById("name").innerText = "Welcome to Elevation academy";
// }

//Q:7
// function hideText(){
//     document.getElementById("name").innerText = "";
// }

//Q:8
// const array=[1,0,0,1,0,1,0,1,1,0];
// const res = array.filter(x =>x === 0);
// console.log(res.length);

//Q:9
// const array1=[1,5,6,8,2,7,9,4,3,1];
// let evennum = 0;
// let oddnum = 0;

// for(let i=0; i<array1.length;i++){
//     if(array1[i] % 2 === 0){
//         evennum++;
//     }else{
//         oddnum++;
//     }
// }
// console.log(evennum, oddnum);

//Q:10 
// function Count_Vowel() {
//     const string = "FASNA";
//     let vowel = 0;
//     for (let i = 0; i <= string.length; i++) {
//       if (
//         string[i] == "A" ||
//         string[i] == "E" ||
//         string[i] == "I" ||
//         string[i] == "O" ||
//         string[i] == "U"
//       )
//         vowel++;
//     }
//     console.log(vowel);
//   }
//   Count_Vowel();

//Q:11
// function printNum() {

//   }
//   printNum();

function printNum() {
    for (let i = 1; i <= 7; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
printNum();
    // setTimeout(() => {
    //     console.log("1")
    // }, 1000);
    // setTimeout(() => {
    //     console.log("2")
    // }, 2000);
    // setTimeout(() => {
    //     console.log("3")
    // }, 3000);
    // setTimeout(() => {
    //     console.log("4")
    // }, 4000);
    // setTimeout(() => {
    //     console.log("5")
    // }, 5000);
    // setTimeout(() => {
    //     console.log("6")
    // }, 6000);
    // setTimeout(() => {
    //     console.log("7")
    // }, 7000);


