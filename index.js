const counter = document.querySelector(".counter")
const barElement = document.querySelector(".loading-bar-front")


let idx = 0
 updateNum()

 function updateNum(){
    counter.innerHTML = idx + "%"
    barElement.style.width = idx + "%"
    idx++
    if(idx<101){
        setTimeout(updateNum , 30);
    }

 }