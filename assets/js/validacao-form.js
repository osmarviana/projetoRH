const form = document.getElementById("form");
const inputText = document.querySelectorAll(".input");
const select = document.getElementById("select");
const radioSelect = document.getElementsByName("gender");

inputText.forEach((input) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === "") {
      input.classList.remove("sucesso-preenchimento");
      input.classList.add("erro-preenchimento");

      setErrorFor(input, "Campo obrigatório!");
    } else {
      input.classList.add("sucesso-preenchimento");
      input.classList.remove("erro-preenchimento");

      setSuccessFor(input);
    }

    if (select.value === "") {
      select.classList.remove("sucesso-preenchimento");
      select.classList.add("erro-preenchimento");
    } else {
      select.classList.add("sucesso-preenchimento");
      select.classList.remove("erro-preenchimento");
    }

    if (radioSelect.checked === "") {
      alert("selecione uma opção");
    }
  });
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
