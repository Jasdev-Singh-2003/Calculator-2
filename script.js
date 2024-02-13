const display = document.getElementById('display');
let decimalUsed = false;

function appendToDisplay(input) {
  if (input === '.') {
    if (decimalUsed) {
      return;
    } else {
      decimalUsed = true;
    }
  } else if ('+-*/'.includes(input)) { 
    decimalUsed = false;
  }
  display.value += input;
}


function clearDisplay(){
  display.value = '';
  decimalUsed = false;
}

function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = 'Error';
  }
}

function deleteLast(){
  display.value = display.value.slice(0, -1);
}

