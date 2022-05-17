
function first() {
document.getElementById("sliderImage").src = "./img/slider1.png"
}
function second() {
document.getElementById("sliderImage").src = "./img/slider2.png"
}
setInterval(()=>{
document.getElementById("sliderImage").src = "./img/slider3.png"
},6000)
setInterval(first,4000);
setInterval(second,8000);
// setInterval(third,12000);