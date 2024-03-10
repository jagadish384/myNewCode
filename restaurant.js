const menu = [
  {
    id: 101,
    name: "curdRice",
    quantity: 2,
    categor: "veg",
  },
  {
    id: 102,
    name: "curdRice",
    quantity: 2,
    categor: "veg",
  },
  {
    id: 103,
    name: "curdRice",
    quantity: 2,
    categor: "veg",
  },
  {
    id: 104,
    name: "curdRice",
    quantity: 2,
    categor: "veg",
  },
  {
    id: 105,
    name: "curdRice",
    quantity: 2,
    categor: "veg",
  },
  {
    id: 106,
    name: "curdRice",
    quantity: 2,
    categor: "veg",
  },
];
function category() {
  var getData = document.getElementById("data").value;
  console.log(getData);
  if (getData == "veg" || getData == "nonveg") {
    alert("valid");
  } else {
    alert("Enter veg or nonveg");
  }
}
