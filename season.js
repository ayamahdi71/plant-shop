//seasons array
 let seasons={
  data:[
    {
      category:"summer",
    img:'img/ss1.jpg',
    name:'Black-eyed Susan',
        price:'10$',
description:' generally bloom from June to August, often blanketing open fields with their golden.',
      },
      {
      category:"summer",
    img:'img/ss2.jpg',
    name:'yarrow',
        price:'7$',
description:'Yarrow is  care-free, making it perfect for borders, ground covers, and open meadows.',
      },
      {
      category:"summer",
    img:'img/ss3.jpg',
    name:'fern',
        price:'10$',
description:' vascular plants that reproduce via spores and have neither seeds nor flowers..',
      },
      {
      category:"summer",
    img:'img/ss4.jpg',
    name:'salvias',
        price:'8$',
description:'All salvias do best in full sun (6-8 hours of sunlight per day) and well-drained soil.',
      },
      {
      category:"winter",
    img:'img/sw1.jpg',
    name:'snowdrops',
        price:'10$',
 description:' are small bulbs that are often sold "in the green" or undried.',
      },
      {
      category:"winter",
    img:'img/sw2.jpg',
    name:'pussywillow',
        price:'20$',
 description:'has long been admired for its strong, spreading, upright stems.',
      },
      {
      category:"winter",
    img:'img/sw3.jpg',
    name:'River birch',
        price:'16$',
 description:' a medium to tall tree, growing 60-80 feet at maturity and about 40 wide..',
      },
      {
      category:"winter",
    img:'img/sw4.jpeg',
    name:'Witch-hazel',
        price:'12$',
 description:'a hardy shrub or small tree that produces eye-catching and has fragrant blooms',
      },
      {
      category:"spring",
     img:'img/sp1.jpg', 
    name:'narcissus',
    price:'7$',
 description:'The mainly yellow or white flowers are comprised of six petals surrounding a corona..',
      },
      {
      category:"spring",
     img:'img/sp2.jpg',
    name:'tulip',
    price:'10$',
    description:'lovely spring-blooming flower that is one of the first to appear after winter.',
      },{
      category:"spring",
     img:'img/sp3.jpg',
    name:'lilacs',
    price:'15$',
    description:' lilacs should be planted in full sun, being 6 hours of sunlight each day.',
      },{
      category:"spring",
     img:'img/sp4.jpg',
    name:'pansis',
    price:'9$',
    description:'are popular flowering plants face-like blooms and wide range of colors and patterns.',
      },
    
      {
      category:"fall",
     img:'img/sf1.jpg',
    name:'asters',
        price:'6$',
 description:'purple daisylike perennials which bloom in fall when other flowers have faded..',
      },
      {
      category:"fall",
     img:'img/sf3.jpg',
    name:'autumn crocus',
        price:'15$',
 description:'meadow saffron, naked boys or naked ladies, is a toxic autumn-blooming flowering.',
      },
      {
      category:"fall",
     img:'img/sf4.jpg',
    name:'goldenrod',
        price:'10$',
 description:'tall and slim with fluffy golden flower spikes in various shades of yellow .',
      },
      {
      category:"fall",
     img:'img/sf2.jpg',
    name:'sedum',
        price:'10$',
 description:'succulent green foliage and produces clusters of star-shaped flowers ..',
      },
      ],
};
for (let i of seasons.data){
  let con = document.getElementById("card-con");
        let season=document.createElement("div");
         con.appendChild(season);
        season.classList.add("season-card",i.category,"hide");
        let simg=document.createElement("img");
        season.appendChild(simg);
        simg.setAttribute("src",i.img);
        simg.classList.add("img-fluid");
        let snmae=document.createElement("h5");
        season.appendChild(snmae);
        snmae.textContent=i.name.toUpperCase();
        snmae.classList.add("card-title");
        let sdesc=document.createElement("p");
        season.appendChild(sdesc);
        sdesc.textContent=i.description.toUpperCase();
        sdesc.classList.add("card-text");
        let sprice=document.createElement("p");
        season.appendChild(sprice);
        sprice.textContent="price is "+ ": " +i.price.toUpperCase();
        sprice.classList.add("card-text");
        let sbuttons=document.createElement("btn");
        season.appendChild(sbuttons);
        sbuttons.innerHTML="add to cart";
        sbuttons.classList.add("btn-sec");
        sbuttons.setAttribute("id","seasonsbutton");
       seasonsbutton.addEventListener("click",function() {
       window.location.href='cart.html';
 });
      }
function filterseason(v){
  let buttons = document.querySelectorAll(".button-values");
  buttons.forEach((button)=>{
if (v.toUpperCase() == button.innerText.toUpperCase()) {

      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".season-card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (v == "alls") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(v)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
  
  
}

  
  window.onload = () => {
  
  filterseason("alls");
  };   
  /*comments

  for (let i of products.data)  {
let con = document.getElementById("card-con");
let product5=document.createElement("div");
  con.appendChild(product5);
  product5.classList.add("card", i.category, "hide");
  product5.setAttribute("id","cart-card");
  let proimg=document.createElement("img");
  product5.appendChild(proimg);
  proimg.setAttribute("src", i.img);
  proimg.classList.add("img-fluid");
  let  storedimg=sessionStorage.setItem("img",proimg.src);
  let name=document.createElement("h5");
  product5.appendChild(name);
  name.innerHTML=i.name.toUpperCase();
  name.classList.add("card-title");
  let storedname=sessionStorage.setItem("name",name.innerText);

  let describe=document.createElement("p");
  product5.appendChild(describe);
  describe.innerHTML=i.description.toUpperCase();
  describe.classList.add("card-text");
let price=document.createElement("p");
  product5.appendChild(price);
   price.innerHTML="price" + " :" + i.price.toUpperCase();
   let storedprice=sessionStorage.setItem("price",price.textContent);
    price.classList.add("card-text");
    let probuton=document.createElement("btn");
    product5.appendChild(probuton);

    probuton.classList.add("btn-sec");
    probuton.textContent="Add to cart";
    probuton.setAttribute("id","cartbut");
    let storedprpductcon=sessionStorage.setItem("pro",product5.innerText);
    product5.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    });}
function addToCart = (product_id) =>{

let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
 
function show() {

 
   //  window.location.href="cart.html";
Swal.fire({
    position:"center",
    icon:"success",
    title:'Item added successfully',
    width: 600,
  padding: "3em",
  color: "#112211",
  background: "#e7f0e4",
    showCancelButton:false,
    showCloseButton:false,
    showConfirmButton: true, 
    confirmButtonColor: '#8FB6AB',
    confirmButtonText:"view cart", 
    closeOnConfirm: false,
    buttons:true,
    buttons:["view cart"],
    footer:'or<a href="indoorfile.html" class="btn-third"> continue shopping ?</a>'
})
.then(function (isConfirm) {
    if (isConfirm) {
      let prodcon=document.getElementById("card-con");
         prodcon.classList.add("hide");
         let cart=document.getElementById("selectedproducts") ;
          cart.classList.remove("hide"); 
          let itemimg=document.getElementById("item-img");
         let itemg=sessionStorage.getItem("img");
         itemimg.src=itemg;
        sessionStorage.removeItem("img");
        let itemname=document.getElementById("itemname");
         let strproduct=sessionStorage.getItem("product");
          let parse=JSON.parse(strproduct);
          cart.innerHTML=sessionStorage.getItem("pro");
         itemname.innerHTML="product name is : "+"" +strproduct;
         let itemprice=document.getElementById("itemprice");
         let itemp=sessionStorage.getItem("price");
         itemprice.innerHTML=itemp;
          sessionStorage.removeItem("price");

                
          
}});
}
   
 

function filterProduct(value)
{ 
let cart=document.getElementById("selectedproducts") ;
cart.classList.add("hide"); 
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

 
  window.onload = () => {
  
  filterProduct("all");
  };   

//Search button click
/*document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value.trim();
  let elements = document.querySelectorAll(".card-title");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});*/
//Initially display all products
  */
