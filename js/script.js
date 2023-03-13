const Screen = document.querySelector(".screen");
const Btns = document.querySelectorAll(".btn");

Btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
    })
})