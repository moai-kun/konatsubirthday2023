document.addEventListener("DOMContentLoaded", function () {

    let w_width = window.innerWidth;
    let w_height = window.innerHeight;
    console.log(w_width, w_height)
    targetElement = document.getElementById("plan-all-container");
    targetElement.style.width = w_width + 'px'
    targetElement.style.height = w_height + 'px'

});