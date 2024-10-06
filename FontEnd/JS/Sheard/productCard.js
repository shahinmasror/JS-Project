
import {sliceTitle } from '../Sheard/commonFun.js'
function ProductCard(element){


    const htmlCode =`
    <div class="product-card">
               <img src="${element.img}">
               <h3>${sliceTitle(element.title)}</h3>
               <p>${element.price}</p>
               <p>${element.description}</p>
               <a href="productDetails.html?id=${element._id}">
                <button>View Details</button>
               </a>

           </div>

    
    
    `;
    return htmlCode;
}

export default ProductCard;