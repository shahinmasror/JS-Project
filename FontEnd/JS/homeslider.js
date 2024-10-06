//const url = '../../FontEnd/JSON/slider.json';
import { makeUrl } from "./Sheard/commonFun.js";
const url =makeUrl('/get-sliders');

function LoadSlider() {
    fetch(url)
    .then(res=>res.json())
    .then(images=>{
       let index=0;
       function sliderSet(){
           let code=document.getElementById('slider-container')
           let  html= `<img src='${images[index].img}'/>`
           code.innerHTML= html;
           if(index<images.length-1){
               index++;

           }else{
               index=0
           }
        
       }
       setInterval(sliderSet,3000)
    })
}

LoadSlider()
