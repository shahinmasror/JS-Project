import {makeUrl} from '../JS/Sheard/commonFun.js'
import productCard from '../JS/Sheard/productCard.js'

const productUrl=makeUrl('/get-allproducts')
function loadProduct(){

    fetch(productUrl).then(res=>res.json()).then(res=>{
        printdata(res)
    })
} 

function  printdata(params) {
    let div = document.getElementById('our-product-container')
    
    let htmlCode ='';

    params.forEach(element => {
        
        const code = productCard(element);
        htmlCode += code;
    });
    div.innerHTML = htmlCode;
    
}
loadProduct()