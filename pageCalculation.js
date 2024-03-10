// total record count - 12
// page's size - 2

// o/p 1 - 1, 2, 3, 4, 5, 6

// active page - 3 - 7, 8

let b = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function pageConstruction(content,activePage) {
        let pageSize = Math.round(b.length/content)
        console.log(pageSize+" button");

        for (let i = (activePage*content)- content; i < activePage*content; i++) {
            console.log(b[i]);
        }
};
pageConstruction(2,5)


// console.log(pageConstruction(data, 2, 2));


// var req = new XMLHttpRequest();

// req.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")

// req.send();

// req.onload = function getData(){
//     var result = JSON.parse(req.response)
//     var start = 0
//     var end = 5
//     for (let i = 0; i < array.length; i++) {

//     }
// }


// function capitalizeFirstCharacter(text) {
//     return text.charAt(0).toUpperCase() + text.slice(1);
// }

// function fullName(firstName, lastName){
//    console.log(`${capitalizeFirstCharacter(firstName)} ${capitalizeFirstCharacter(lastName)}`);
// }

// // fullName('jagadish', 'm');


// // input [5, 2, 4, 10];
// // output [5, 10]
// var input = [5, 2, 4, 10];
// var g =[]
// for (let i = 0; i < input.length; i++) {
//     if(input[i]%5==0){
//        g.push(input[i])
//     }
// }
// console.log(g);


// function b(){
//     var getData = document.getElementsByClassName("data").innerHTML
//     console.log(getData);
// }
