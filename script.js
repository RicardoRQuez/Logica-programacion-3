const formulario = document.getElementById("formFact");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputNumber = parseFloat(document.getElementById("inputNumber").value);

  if (!isNaN(inputNumber)) {
    const calcular = calcularFactorial(inputNumber);
    const factorial = document.getElementById("factorial");
    const numero = document.getElementById("numero");
    factorial.innerText = calcular;
    numero.innerText = inputNumber;
  } else {
    alert("El caracter ingresado no es un número, intente nuevamente.");
  }
});

function calcularFactorial(numero) {
    if (numero === 0) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
