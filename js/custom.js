console.log("connected!"); // This mean that our JS is linked.
//We separated this script from the main js because somehow we have encountered a conflict issue with the existing code. Not error code but issue or bugs on the actual page behavior.
//To be safe, we created a new custom JS file dedicated to this add to cart features.

//This custom script here is for us to create a simple product listing and shopping cart system.
//Products are displayed with their images, titles, and prices. Users can add products to a cart, view the cart's contents, and remove items from the cart.
//The cart also calculates and displays the total price.

//Added a variable for the product array which defined with several objects, each representing a product with properties
//like ID, IMAGE, TITLE and PRICE.
const product = [
  {
    id: 0,
    image: "image/p1.png",
    title: "Grape Flavor Juice",
    price: 2,
  },
  {
    id: 1,
    image: "image/p2.png",
    title: "Orange Flavor Juice",
    price: 2,
  },
  {
    id: 2,
    image: "image/p3.png",
    title: "Strawberry Flavor Juice",
    price: 2,
  },
  {
    id: 3,
    image: "image/p4.png",
    title: "Peach Flavor Juice",
    price: 2,
  },
];
//Added also a new array variable to which can be created by spreading a new SET of the PRODUCT array.
//This will duplicates the products (though, in this case, the products are already unique).
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
//Added an integer variable here which is initialized to 0 and the ID root element in the HTML document will be selected and its innnerHTML will be set
//to the result of mapping over the variable categories array. For each item in categories, the image, title and price are extracted using destructuring.
//Destructuring method reference: See our readme.md file for the link.
let i = 0;
document.querySelector("#root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    //This area, an HTML string is created for each item and other tag such as image tag displaying the product image. A div class as well that contains p tag
    //h2 tag showing product title and price. A button tag that when clicked, calls the addtocart function with the current index variable i as an argument and this index is then incremented.
    return (
      `<div class='box-shop'>
            <div class='img-box-shop'>
                <img class='images-shop' src=${image}></img>
            </div>
        <div class='bottom-shop'>
        <p>${title}</p>
        <h2 class='h2-shop'>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  //The resulting array of HTML strings is joined into a single string and set as the inner HTML of the #root element.
  .join("");

//Added an empty cart variable here which is initialized to hold the items added to the shopping cart.
const cart = [];

//Added a function that will takes an index 'a' as an argument and it pushes a new object into the 'cart' array.
//then it will calls the displaycart function to update the cart display.
function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
//Added a function that will takes an index 'a' as an argument and it removes one element at the specified index from the cart array using  'splice'.
//then calls the displaycart function to update the cart display.
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

//Added function to display/updates the cart and total price. Also it will initializes two variables, 'j' for indexing cart items and 'total' for the total price.
//It will also update the #count element id with the number of items in the cart. If the cart is empty, it displays "Your cart is empty" and sets the total price to '$0.00'.
function displaycart() {
  let j = 0,
    total = 0;
  document.querySelector("#count").innerHTML = cart.length;

  //Set a condition that if the cart has items, it maps over the 'cart' array and for each item it extracts IMAGE, TITLE and PRICE using destructuring.
  //then adds the item's price to 'total'. It will updates the #total element with the current total price.
  if (cart.length == 0) {
    document.querySelector("#cartItem").innerHTML = "Your cart is empty";
    document.querySelector("#total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.querySelector("#cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.querySelector("#total").innerHTML = "$ " + total + ".00";

        //It will then return an HTML string for each cart item that includes div with class cart-item-shop, p tag, h2 tag, i tag with a trash icon that, when clicked,
        //it calls the 'delElement' function with current index 'j' as an argument and it is then incremented.
        return (
          `<div class='cart-item-shop'>
                <div class='row-img-shop'>
                    <img class='rowimg-shop' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })

      //The resulting array of HTML strings is joined into a single string and set as the inner HTML of the #cartItem element.
      .join("");
  }
}
