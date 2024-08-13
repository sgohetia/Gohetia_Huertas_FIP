console.log("connected!"); // This mean that our JS is linked.

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
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.querySelector("#root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
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
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.querySelector("#count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.querySelector("#cartItem").innerHTML = "Your cart is empty";
    document.querySelector("#total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.querySelector("#cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.querySelector("#total").innerHTML = "$ " + total + ".00";
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
      .join("");
  }
}
