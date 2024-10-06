import { makeUrl, searchUrl } from '../JS/Sheard/commonFun.js';


function loadData() {
    const {id} = searchUrl();
    const url = makeUrl(`/get-by-id/${id}`); 
    fetch(url)
        .then(res => res.json())
        .then(res => {
            printData(res)// Log the result from the backend
        })
    }


    function  printData(params) {
            const {des,img,title,productId,price} = params
     
        let htmlCode=
        ` <div class="product">
        <img src=${img}>
        <h3>${productId}</h3>
        <h2>${title}</h2>
        <h4>$20</h4>
        <p>${des}</p>
   <a><button class=".btn">Buy Now</button></a>
    </div>
        `

         let div= document.getElementById('root');
         div.innerHTML = htmlCode;
        
    }

      

loadData()
