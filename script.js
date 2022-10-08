let audioTurn = new Audio("bing.mpeg")
let string = "";
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    audioTurn.play();
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string
    }
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string
    }
    else if (e.target.innerHTML == '←') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML
      document.querySelector('input').value = string;
    }

  })
})