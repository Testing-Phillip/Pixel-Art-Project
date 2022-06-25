// submit input const
const submitGrid = document.querySelector("input[type=submit]");
const COLOR = document.getElementById("colorPicker")
let changeColor = undefined;
COLOR.addEventListener("input", function onClick(el){
  changeColor = el.target.value;
});

// Select size input
const HEIGHT = document.getElementById("inputHeight") //store height in const
let newHeight = 1; //set height initial value
HEIGHT.addEventListener("input", function(el){
  newHeight = el.target.value;
});//update the columns


const WIDTH = document.getElementById("inputWidth") //store width in const
let newWidth = 1; //set width initial value
WIDTH.addEventListener("input", function(el){
  newWidth = el.target.value;
});//update rows


// When size is submitted by the user, call makeGrid()
function makeGrid() {
  const body = document.getElementsByTagName("body")
  const table = document.getElementById("pixelCanvas")
  const tableBody = document.createElement("tbody")

  if(table.firstChild) {
    table.firstChild.remove();
  }

  for( let r = 0; r < newWidth; r++){
    const row = document.createElement("tr");
  
  for( let c = 0; c < newHeight; c++){
    const column = document.createElement("td");
    row.appendChild(column);
  };
  tableBody.appendChild(row);
};
  table.appendChild(tableBody);
  

  const td = document.getElementsByTagName("td");
  for(let i = 0; i < td.length; i++) {
    td[i].onclick = function() {
      this.style.backgroundColor = changeColor
    }
    console.log("hello");
    }
}


const form = document.getElementById("sizePicker");
form.addEventListener("submit", function(el) {
  el.preventDefault();
});

submitGrid.addEventListener("click", makeGrid, false);
