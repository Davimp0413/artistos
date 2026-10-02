const cor =document.querySelector("input");
const grade = document.querySelector(".grade");
const limpar = document.querySelector("button");

for (let i = 0; i < 1024; i++) {
    const pixel = document.createElement("div")
    pixel.classList.add("pixel");
    pixel.addEventListener("click",function(){
        pixel.style.backgroundColor = cor.value;
});
grade.appendChild(pixel);
};
    
function limparGrade() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function(pixel) {
    pixel.style.backgroundColor = "#ffffff";
});
}




limpar.addEventListener("click", limparGrade);