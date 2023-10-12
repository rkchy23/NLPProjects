const divEle = document.querySelector(".card-container");



async function getDetails() {    
    try {
        const response = await fetch(`https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093`);
        if (!response.ok) {
          throw new Error('No Data present');
        }
        const productData = await response.json();
        // console.log(productData.data);

        productData.data.forEach((product)=>{
            // console.log(product.product_variants);
            let varri=product.product_variants;
            // console.log(varri[0].v1);

            let divEl = `<div class="prod-card" id="prod-card">
                <img src=${product.product_image} alt="Profile Image" />
                <div>
                  <h3>${product.product_title}</h3>
                  <h3>${product.product_badge}</h3>
                  <p>${varri[0].v1}</p>
                  <p>${varri[1].v2}</p>
                  <p>${varri[2].v3}</p>             
                  <button class="btn">View Description</button>
                </div>
              </div>`;
              
                divEle.insertAdjacentHTML("afterbegin", divEl);
                
        })
        
      } catch (err) {
        console.log(err);
      }
}

getDetails();

document.getElementById("listBtn").addEventListener("click", function() {
  // document.getElementsByClassName("prod_card").style.flex_direction = "column";
  var elements = document.querySelectorAll(".prod_card");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.flexDirection = "column";
}
  // document.getElementById("gridView").style.display = "none";
});

document.getElementById("gridBtn").addEventListener("click", function() {
  var elements = document.querySelectorAll(".prod_card");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.flexDirection = "row";
}
});




