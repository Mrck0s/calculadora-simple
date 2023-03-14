const numeros = document.querySelectorAll(".num");
const operaciones = document.querySelectorAll(".op");
const equal = document.querySelector(".eq");
const ac = document.querySelector(".ac");
const screen = document.querySelector(".screen");
let primerNum = "";
let segundoNum = "";
let operacion = null;

numeros.forEach((numero) =>  {
    numero.addEventListener("click", () => {
        if (operacion === null) {
            primerNum += numero.innerText;
            screen.innerText = primerNum;
        } else {
            segundoNum += numero.innerText;
            screen.innerText = segundoNum;
        }
    })
})

operaciones.forEach((op) => {
    op.addEventListener("click", () => {
        if (primerNum !== "" && segundoNum !== "") {
            const resultado = eval(primerNum + operacion + segundoNum);
            screen.innerText = resultado;
            primerNum = resultado.toString();
            segundoNum = "";
            operacion = op.innerText;
        } else {
            operacion = op.innerText;
        }
    })
})

equal.addEventListener("click", () => {
    const resultado = eval(primerNum + operacion + segundoNum);
    screen.innerText = resultado;
    primerNum = resultado.toString();
    segundoNum = "";
    operacion = null;
})
ac.addEventListener("click", () => {
    screen.innerText = "0";
    primerNum = "";
    segundoNum = "";
    operacion = null;
})