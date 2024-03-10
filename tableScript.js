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
// table
function table(tag, attName, attValue) {
  var tab = document.createElement(tag);
  tab.setAttribute(attName, attValue);
  document.body.append(tab);
  return tab;
}
// thead
function head(tag, attName, attValue) {
  var thead = document.createElement(tag);
  thead.setAttribute(attName, attValue);
  document.body.append(thead);
  return thead;
}
// th
function th(tag, attName, attValue, con) {
  var th = document.createElement(tag);
  th.setAttribute(attName, attValue);
  th.innerHTML = con;
  document.body.append(th);
  return th;
}
// tbody
function tbody(tag, attName, attValue) {
  var body = document.createElement(tag);
  body.setAttribute(attName, attValue);
  document.body.append(body);
  return body;
}
// tr
function tr(tag) {
  var tr = document.createElement(tag);
  document.body.append(tr);
  return tr;
}
// td
function td(tag, con) {
  var td = document.createElement(tag);
  td.innerHTML = con;
  document.body.append(td);
  return td;
}
//==================================================================================================================//
//=================================================================================================================//
var div1 = divBlock("div", "class", "main");
var div2 = divBlock("div", "class", "sMain");

var tab = table("table", "class", "table");

var thead = head("thead", "class", "thead-dark");

var th0 = th("th", "scope", "col", "Id");
var th1 = th("th", "scope", "col", "Name");
var th2 = th("th", "scope", "col", "Email");

var bodyT = tbody("tbody", "id", "tBody");

var div3 = divBlock("div", "class", "butDiv");

var butfirst = button(
  "button",
  "onclick",
  "fo(1)",
  "class",
  "firstBut",
  "<< First"
);
var temp = [];
for (let i = 0; i < 10; i++) {
  var butto = button(
    "button",
    "onclick",
    `fo(${i + 1})`,
    "class",
    "firstBut",
    `${i + 1}`
  );
  temp.push(butto);
}
var butlast = button(
  "button",
  "onclick",
  "fo(10)",
  "class",
  "lastBut",
  "Last >>"
);
div3.append(butfirst, ...temp, butlast);

thead.append(th0, th1, th2);
fo(1);
tab.append(thead, bodyT);

div2.append(tab, div3);
div1.append(div2);
document.body.append(div1);

function fo(nextButton) {
  var getBody = document.getElementById("tBody");
  getBody.innerHTML = "";

  var req = new XMLHttpRequest();

  req.open(
    "GET",
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );

  req.send();

  req.onload = function () {
    var data = 5;
    var d = JSON.parse(req.response);
    for (let i = (nextButton - 1) * data; i < data * nextButton; i++) {
      var s = tr("tr");
      var id = td("td");
      var nam = td("td");
      var mail = td("td");
      id.innerHTML = d[i].id;
      nam.innerHTML = d[i].name;
      mail.innerHTML = d[i].email;
      s.append(id, nam, mail);
      bodyT.append(s);
    }
    return bodyT;
  };
}

// dd = (nextButton - 1) * 10;
// j = dd + 10;
// var butfirst = button("button","onclick","fo(1)",'class','firstBut',"<< First")
// var but0 = button("button","onclick","fo(1)",'class','but1',"1")
// var but1 = button("button","onclick","fo(2)",'class','but2',"2")
// var but2 = button("button","onclick","fo(3)",'class','but3',"3")
// var but3 = button("button","onclick","fo(4)",'class','but4',"4")
// var but4 = button("button","onclick","fo(5)",'class','but5',"5")
// var but5 = button("button","onclick","fo(6)",'class','but6',"6")
// var but6 = button("button","onclick","fo(7)",'class','but7',"7")
// var but7 = button("button","onclick","fo(8)",'class','but8',"8")
// var but8 = button("button","onclick","fo(9)",'class','but9',"9")
// var but9 = button("button","onclick","fo(10)",'class','but10',"10")
// var butlast = button("button","onclick","fo(10)",'class','lastBut',"Last >>")
// div3.append(butfirst,but0,but1,but2,but3,but4,but5,but6,but7,but8,but9,butlast)

// fo(1, function (result) {
//     bodyT.append(result);
// });

// function addButton(text, onclick, className) {
//     var btn = button("button", "onclick", onclick, "class", className, text);
//     div3.append(btn);
// }
// addButton("<< First", "fo(1)", "firstBut");

// for (let i = 1; i <= 10; i++) {
//     addButton(i, `fo(${i})`, "firstBut");
// }

// addButton("Last >>", "fo(10)", "lastBut");

// var req = new XMLHttpRequest()

// req.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")

// req.send()

// req.onload = function(){
//     var d = JSON.parse(req.response)

//     var j = 5
//     var dd = 0
//     for (let i = dd; i < j; i++) {
//     var s = tr('tr')
//     var id = td('td')
//     var nam = td('td')
//     var mail = td('td')

//     id.innerHTML = d[i].id
//     nam.innerHTML = d[i].name
//     mail.innerHTML = d[i].email
//     s.append(id,nam,mail)
//     bodyT.append(s)
//     }
//     dd = j
//     j+5

// }

// tr0.append(td0,td1,td4)
// tr1.append(td6,td7,td10)
// tr2.append(td11,td12,td15)
// tr3.append(td16,td17,td20)
// tr4.append(td21,td22,td25)
// bodyT.append(tr0,tr1,tr2,tr3,tr4)

// var td0 = td('td','class','data','1')
// var td1 = td('td','class','data','Jagadish')
// var td4 = td('td','class','data','Jagadish@gmail.com')

// var tr1 = tr('tr')
// var td6 = td('td','class','data','2')
// var td7 = td('td','class','data','praveen')
// var td10 = td('td','class','data','praveen@gmail.com')

// var tr2 = tr('tr')
// var td11 = td('td','class','data','3')
// var td12 = td('td','class','data','jaga')
// var td15 = td('td','class','data','prabhu@gmail.com')

// var tr3 = tr('tr')
// var td16 = td('td','class','data','4')
// var td17 = td('td','class','data','vinith')
// var td20 = td('td','class','data','vinith@gmail.com')

// var tr4 = tr('tr')
// var td21 = td('td','class','data','5')
// var td22 = td('td','class','data','kathik')
// var td25 = td('td','class','data','kathik@gmail.com')

// var div = divBlock("div","class","main")
// var div1 = divBlock("div","class","box")
// var heading = he("h3",'class','head',"To Do List");
// var br1 = breakLine("br");
// var inp = inputs("input",'type','text',"id",'input',"placeholder","Enter your save list");
// var br2 = breakLine("br");

// var but = button("button","onclick","getValue()","Click")

// div1.append(heading,br1,inp,but)
// div.append(div1)
// document.body.append(div)
