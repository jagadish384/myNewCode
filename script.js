// var d = document.createElement('div')
// d.innerHTML = 'hi i am Jagadish'
// d.addEventListener('mouseover',()=>d.style.color="red")
// document.body.append(d)

// function foo(){
//     console.log("hoiiiiii");
// }
// console.log(foo());

//     console.log("kooo");
// var f=()=>{
//     console.log('hi hello f');
// }
// setTimeout(function timeout() {
//     // setTimeout(function n(){
//         f()
//         console.log("hi timeout");
//     // },5000)

// },2000)

// setInterval(function v(){
//     console.log("hii....");
// },5000)

// var f = parseInt(prompt("enter your age"))
// var d = new Promise((resolve,reject)=>{
//     .then(if(f >= 18){
//         resolve("eligible");
//      }else{
//          reject("not eligible");
//      })
//     .catch

// })
// console.log(d);
// calback hell

// function a1(){
//     function a2(){
//         function a3(){
//             function a4(){
//                 function a5(){
//                     function a6(){
//                         function a7(){
//                             console.log("hi i'm a7");
//                         }
//                         a7()
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(a7());// function m( b) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve(2* b);
//     }, 5000)
//   );
// }
// function c(b) {
//   return new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject(2 * b+" reject");
//     }, 5000)
//   );
// }


// m(12)
//   .then((data) => {
//     console.log(data);
//     return m(data);
//   }).then((data) => {
//     console.log(data);
//     return m(data);
//   }).then((data1) => {
//     console.log(data1);
//     return c(data1);
//   }).then((data) => {
//     console.log(data);
//     return m(data);
//   }).then((data2) => {
//     console.log(data2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // c(2,7).then((data)=>{console.log(data);}).catch((error)=>{console.log(error);})



// function m( b) {
//     return new Promise((resolve, reject) =>
//       setTimeout(() => {
//         resolve(2* b);
//       }, 5000)
//     );
//   }
//   function c(b) {
//     return new Promise((resolve, reject) =>
//       setTimeout(() => {
//         reject(2 * b+" reject");
//       }, 5000)
//     );
//   }
  
// var request= new XMLHttpRequest();

// request.open('GET', 'https://api.publicapis.org/entries');

// request.send();


// request.onload=function(){
// var data=JSON.parse(request.response);
// console.log(data.entries[0].Category);
// }

//   m(12)
//     .then((data) => {
//       console.log(data);
//       return m(data);
//     }).then((data) => {
//       console.log(data);
//       return m(data);
//     }).then((data1) => {
//       console.log(data1);
//       return c(data1);
//     }).then((data) => {
//       console.log(data);
//       return m(data);
//     }).then((data2) => {
//       console.log(data2);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// var divbox = document.createElement("div")
// divbox.setAttribute('class','box')
// var divcon = document.createElement("div")
// divcon.setAttribute('class','container')
// var divrow = document.createElement("div")
// divrow.setAttribute('class','row')
// divrow.classList.add('row','m-3')
// divcon.append(divrow)
// // divbox.append(divcon)

// var f = fetch('https://restcountries.com/v3.1/all').then((d)=>d.json()).then((s)=>{getFun(s)})

// function getFun(s){
//     var w = s.map((q)=>{q.name.common
//     divrow.innerHTML += `<div class="col-md-4">
//                         <div class="card text-bg-danger mb-3" style="max-width: 18rem;">
//                         <h5 class="card-title">${q.name.common}</h5>
//                         <img src="${q.flags.png}"  alt="flags">
//                         <div class="card-body">
//                                       <h5>Capital : ${q.capital}</h5>
//                                       <h5>Region : ${q.region}</h5>
//                                       <h5>Country Code : ${q.cca3}</h5>
//                           <a href="#" class="btn btn-primary">Go somewhere</a>
//                         </div>
//                         </div>
//                         </div>` 
// document.body.append(divcon)
// console.log(q);
// })
// }

// var divbox = document.createElement("div")
// divbox.setAttribute('class','box')
// var divcon = document.createElement("div")
// divcon.setAttribute('class','container')
// var divrow = document.createElement("div")
// divrow.setAttribute('class','row')
// divcon.append(divrow)
// divbox.append(divcon)

// var f = fetch('https://restcountries.com/v3.1/all').then((d)=>d.json()).then((s)=>{getFun(s)})

// function getFun(s){

//     var w = s.map((q)=>{q.name.common
//     var da = document.createElement("div")
//     da.setAttribute('class','new')
//     da.innerHTML = `<div class="card border-success mb-3; max-width: 18rem>
//                     <div class="body">
//                     <div class="col-md-3">
//                     <h4 class="card-title">${q.name.common}</h4>
//                     <img src="${q.flags.png}" alt="flags">
//                     <div>
//                     <h5>Capital : ${q.capital}</h5>
//                     <h5>Region : ${q.region}</h5>
//                     <h5>Country Code : ${q.cca3}</h5>
//                     </div>
//                     </div>
//                     </div>
//                     </div>` 

// divrow.append(da)


// document.body.append(div)
// console.log(q);
// })
//


async function h(){
  let re = await fetch("https://data.covid19india.org/v4/min/data.min.json")
  let r = await  re.json()
  // console.log(r.AN.districts.Nicobars.meta.population);
  console.log(r.TN.total.recovered);
 
  return r
}
console.log(h());

