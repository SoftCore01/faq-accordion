//quest-img is clicked
//panel becomes visible
//plus-icon disappers
//minus-icon disappers

let questImg = document.getElementsByClassName("quest-img");
let plus = document.getElementsByClassName("plus-icon");
let minus = document.getElementsByClassName("minus-icon");
let panel = document.getElementsByClassName("panel");

for (let i = 0; i < questImg.length; i++) {
    questImg[i].addEventListener("click", function () {
        if (
            panel[i].style.display === "block" && 
            minus[i].style.display === "block"
        ) {
            panel[i].style.display = "none";
            minus[i].style.display = "none";
            plus[i].style.display = "block";
        } else {
            panel[i].style.display = "block";
            minus[i].style.display = "block";
            plus[i].style.display = "none";
        }
    });
};
