function validateSSN(ssn) {
  var pattern = /^(?!000|666|[9][0-9]{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
  return pattern.test(ssn);
}

const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
  const result = document.getElementById("result");
  if (validateSSN(input.value)) {
    result.innerHTML = ` <p class="fs-2 m-5"  style="color:green">${input.value} is a valid SSN.🎉</p>`;
    input.value = ''
     input.focus();
   
  } else {
    if (input.value) {
      result.innerHTML = `<p class="fs-2 m-5"  style="color:red">${input.value} is not a valid SSN.💥</p>`;
      input.value = "";
      input.focus();
      
    } else {
      alert('please enter your ssn')
      input.focus();
    }
  }
  setTimeout(() => {
       return  result.innerText=''
      },3000)
  
});

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      btn.click();
    }
  });
