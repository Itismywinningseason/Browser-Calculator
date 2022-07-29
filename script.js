let lastThingClicked;

const anyButtonClicked = (event) => {
  if (lastThingClicked) {
    lastThingClicked.classList.remove("lastClicked");
  }

  event.target.classList.add("lastClicked");
  lastThingClicked = event.target;
};

const buttonClicked = (event) => {
  anyButtonClicked(event);
  const buttonText = event.target.innerHTML;
  const screen = document.getElementById("screen");
  if (screen.innerHTML === "0" || screen.innerHTML === "ERROR") {
    screen.innerHTML = buttonText;
  } else {
    screen.innerHTML = screen.innerHTML + buttonText;
  }
  event.target.classList.add("lastClicked");
  lastThingClicked = event.target;
};

const equalClicked = (event) => {
  try {
    //get the imput from the screen
    const input = document.getElementById("screen").innerHTML;
    //run the imput to get the output
    const output = eval(input);
    //put the output back on the screen
    document.getElementById("screen").innerHTML = output;
  } catch (error) {
    document.getElementById("screen").innerHTML = "ERROR";
  }
  anyButtonClicked(event);
};
const clearClicked = (event) => {
  anyButtonClicked(event);
  document.getElementById("screen").innerHTML = "0";
};

document.addEventListener("keydown",(event)=>{
  let numPressed;
  if (event.code === "Digit1"{
    numPressed = 1;
    {else if (event.code === "Digit2"){
      numPressed = 2;
    }}
  })
})
const clearClicked = () => {
  document.getElementById("screen").innerHTML = "0";
};
