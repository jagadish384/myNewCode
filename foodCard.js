// label
function labels(tag, attName, attValue, labName) {
  var con = document.createElement(tag);
  con.setAttribute(attName, attValue);
  con.innerHTML = labName;
  return con;
}
// input
function inputs(
  tag,
  attName,
  attValue,
  attName1,
  attValue1,
  attName2,
  attValue2
) {
  var con = document.createElement(tag);
  con.setAttribute(attName, attValue);
  con.setAttribute(attName1, attValue1);
  con.setAttribute(attName2, attValue2);
  return con;
}
// br
function breakLine(tag) {
  var con = document.createElement(tag);
  return con;
}
// button
function button(tag, attName, attValue, attName1, attValue1, con, par) {
  var bt = document.createElement(tag);
  bt.setAttribute(attName, attValue);
  bt.setAttribute(attName1, attValue1);
  bt.addEventListener("click", fo(par));
  // bt.style.color = 'blue'
  bt.innerHTML = con;
  return bt;
}

// save function
function saveList() {
  let ele = document.createElement("div");
  ele.innerHTML = document.getElementById("input").value;
  document.body.append(ele);
}
// get value from input tag
function getValue() {
  var input = document.getElementById("input").value;
  if (input === "") {
    alert("you must enter something!");
  } else {
    return input;
  }
}
// div
function divBlock(tag, attName, attValue) {
  var div1 = document.createElement(tag);
  div1.setAttribute(attName, attValue);
  document.body.append(div1);
  return div1;
}
// h1, h2, h3, h4, h5,h6/ p
function he(tag, attName, attValue, con) {
  var h = document.createElement(tag);
  h.setAttribute(attName, attValue);
  h.innerHTML = con;
  document.body.append(h);
  return h;
}

//===========================================================================================
//===========================================================================================



const menu = [
    {
      name: 'Sambar Rice',
      price: 40,
      url:"https://i2.wp.com/cookingwithpree.com/wp-content/uploads/2018/11/Sambhar-sadham-6-of-1.jpg?resize=768%2C960&ssl=1",  
      },
    {
      name: 'Gobi Manchurian',
      price: 70,
      url:"https://www.indianveggiedelight.com/wp-content/uploads/2021/07/gobi-manchurian-1.jpg",
    },
    {
        name: 'Curd Rice',
        price: 30,
        url : "https://simmertoslimmer.com/wp-content/uploads/2019/02/Curd-Rice-Recipe.jpg"
     },
    {
      name: 'Chicken Rice',
      price: 50,
      url:"https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min-750x750.jpg",
    },
    {
      name: 'Mutton Biriyani',
      price: 80,
      url:"https://www.cookwithnabeela.com/wp-content/uploads/2024/02/MuttonBiryani.webp",
    },
    {
      name: 'Egg Rice',
      price: 100,
      url:"https://redhousespice.com/wp-content/uploads/2021/10/Chinese-egg-fried-rice-1-scaled.jpg",
    },
  ];

  let mainDiv = divBlock("div", "class", "card-container");
  let d = menu.map((ele,index)=>
    `<div class="card">
    <img  src="${ele.url}" alt="image">
    <div class="card-content">
    <div class="card-head">
    <h5 class="card-title"> ${ele.name}</h5>
      <h5>&#8377 ${ele.price}</h5>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum natus molestias omnis, voluptatibus repudiandae, necessitatibus facilis unde minima assumenda libero repellendus ratione distinctio blanditiis odio sequi praesentium, provident officiis modi.</p>
      <button class="decrease" onclick="decrease(${index})" >-</button>
      <button class="increase" onclick="increase(${index})">+</button>
      <input type="text" class="input" value="0" id="input-${index}" />
    
    </div>
  </div>`
  );

  function increase(index) {    
    let input = document.getElementById(`input-${index}`);
    input.value = +input.value + 1;
  }

  function decrease(index) {
    let input = document.getElementById(`input-${index}`);
    input.value = Math.max(+input.value - 1, 0);
  }
mainDiv.innerHTML = d;
document.body.append(mainDiv);

let formDiv = divBlock("div", "class", "submitForm");
formDiv.innerHTML = `
        <form action="">
        <h3>Order Summary</h3>
        <h5>Items</h5>
        <p>S.GST</p>
        <P>C.GST</P>
        <h5>Grand Total</h5>
        <h6>Thankyou Visit Again!!!</h6>
        </form>`
