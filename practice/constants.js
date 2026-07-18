const PI  = 3.14;
let radius;
let circumference;


radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("heading").textContent =  circumference;
} 