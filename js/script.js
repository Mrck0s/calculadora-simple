const Screen = document.querySelector(".screen");
const Btns = document.querySelectorAll(".btn");

Btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const btnClick = btn.textContent;
        if (Screen.textContent === "Press a Button") {
            Screen.textContent = btnClick;
        } else {
            Screen.textContent += btnClick;
        }
    })
})