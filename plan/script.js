document.addEventListener("DOMContentLoaded", function () {

    let w_width = window.innerWidth;
    let w_height = window.innerHeight - 10;
    console.log(w_width, w_height)
    targetElement = document.getElementById("plan-all-container");
    targetElement.style.width = w_width + 'px'
    targetElement.style.height = w_height - 60 + 'px' // headerとfooter分ひく

});


function click_plan(element) {
    let parent = element.parentElement
    // console.log(parent.id)

    if (parent.id == "plan1") {
        targetElement = document.getElementById("plan-detail-button-1");
        targetElement.classList.remove("vi-hidden");
        targetElement.classList.add("vi-visible");
    } else if (parent.id == "plan2") {
        targetElement = document.getElementById("plan-detail-button-2");
        targetElement.classList.remove("vi-hidden");
        targetElement.classList.add("vi-visible");
    } else if (parent.id == "plan3") {
        targetElement = document.getElementById("plan-detail-button-3");
        targetElement.classList.remove("vi-hidden");
        targetElement.classList.add("vi-visible");
    } else if (parent.id == "plan4") {
        targetElement = document.getElementById("plan-detail-button-4");
        targetElement.classList.remove("vi-hidden");
        targetElement.classList.add("vi-visible");
    }

    var now = new Date();
    var Year = now.getFullYear();
    var Month = now.getMonth() + 1;
    var nDate = now.getDate();
    var nHour = now.getHours();
    var nMin = now.getMinutes();
    console.log(nHour, nMin)


    // 子要素をめくる
    let child_1 = element.children[0]
    let child_2 = element.children[1]
    // console.log(child_1);
    child_1.style.transform = "rotateX(" + 90 + "deg)";
    child_2.style.transform = "rotateX(" + 0 + "deg)";
}