//grabs onto checkbox id for button
const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

//disables checkbox & button making unclickable on start
checkbox.disabled = true;
submitBtn.disabled = true;

//grabs the multiple color elements
const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

//pulls random color for each element
elements.forEach(function (element) {
 const color = getRandomColor();

 //styles element background to hex color
 element.style.backgroundColor = color;
 //labels element color with text
 element.innerHTML = color;
 //gives selected hex # for verification
 selectColor.innerHTML = color;
});

//generates random color hex with 16 letters & numbers
function getRandomColor() {
 const letter = "0123456789ABCDEF";
 let color = "#";
 for (let i = 0; i<6; i++) { 
  color += letter[Math.floor(Math.random() * 16)];
 }
 return color;
}

//check if clicked color matches with selected color
elements.forEach(function(element) {
 element.addEventListener('click', function() {
  if (element.innerHTML === selectColor.innerHTML) {

   //checks checkbox
   checkbox.checked = true;
   //if true, gives this alert
   alert("Confirmed: You are Human");
   
   //removes button disable
   submitBtn.disabled = false;
   //removes class
   submitBtn.classList.remove("btn-light");
   //adds new class
   submitBtn.classList.add("btn-success");

  } else {
   //if false, gives this alert
   alert("Please verify that you are human to proceed");
   location.reload(true);
  }
 });
});