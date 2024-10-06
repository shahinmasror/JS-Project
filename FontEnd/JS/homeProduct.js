import productCard  from '../JS/Sheard/productCard.js'
import { makeUrl } from './Sheard/commonFun.js';


function loadProduct(){
    const url = makeUrl('/get-products');
    fetch(url)
    .then(res=>res.json())
    .then(res=>{printData(res)})
}
loadProduct()


function printData(res){

  let  productHTML ='';
    const div = document.getElementById('product-section')
    res.forEach(element => {
        productHTML+=productCard(element);
    });
        div.innerHTML = productHTML;
}

