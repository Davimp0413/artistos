const cor =document.querySelector("input");
const grade = document.querySelector(".grade");
const limpar = document.querySelector(".darthVader");

for (let i = 0; i < 1024; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("pixel");

    pixel.addEventListener("click",function(){
        pixel.style.backgroundColor = "red";
    })
    grade.appendChild(pixel);
}