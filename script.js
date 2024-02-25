const input=document.querySelector("input");
const display=document.querySelector(".display");
const button=document.querySelector("button");

button.addEventListener('click',function dis()
{
  display.textContent = input.value ;
  // display.innerHTML = input.value ;
}
);



