const input=document.querySelector("input")
const display=document.querySelector(".display")
const button=document.querySelector("button")

button.addEventListener('click',dis)

function dis()
{
  display.textContent = input.value
}


