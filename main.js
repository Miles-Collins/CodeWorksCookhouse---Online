const appetizers = [
  {
    name: "HTML5 Hummus Platter",
    price: 8.99,
  },
  {
    name: "CSS Crispy Calamari",
    price: 10.99,
  },
  {
    name: "Vue Veggies Tempura",
    price: 9.49,
  },
];

const mainCourses = [
  {
    name: "MVC Mixed Grill",
    price: 18.99,
  },
  {
    name: "Bootstrap BBQ Burger",
    price: 13.99,
  },
  {
    name: "C# Seafood Symphony",
    price: 22.99,
  },
  {
    name: "Node Noodle Stir-Fry",
    price: 15.99,
  },
];

const sideDishes = [
  {
    name: ".NET Nacho Tower",
    price: 11.99,
  },
  {
    name: "Dynamic CSS Salad",
    price: 7.49,
  },
];

const desserts = [
  {
    name: "Vue Vanilla Parfait",
    price: 6.99,
  },
  {
    name: "Node Nutty Brownie",
    price: 7.99,
  },
  {
    name: "Responsive Raspberry Cheesecake",
    price: 8.49,
  },
];

const beverages = [
  {
    name: "CodeBrew Coffee",
    price: 3.99,
  },
  {
    name: "TechTonic Tea",
    price: 2.99,
  },
  {
    name: "Node Nectar",
    price: 4.49,
  },
];

// SECTION VARIABLES

let cartTotal = 0;

// SECTION MENU

function drawAppetizers() {
  let appetizersElem = document.getElementById("appetizers");
  console.log("[APPETIZERS ELEM]", appetizersElem);
  const appetizersString = menuItemString(appetizers);
  appetizersElem.innerHTML = appetizersString;
}

function drawMainCourses() {
  let mainCoursesElem = document.getElementById("mainCourses");
  const mainCoursesString = menuItemString(mainCourses);
  mainCoursesElem.innerHTML = mainCoursesString;
}

function drawSideDishes() {
  let sideDishesElem = document.getElementById("sideDishes");
  const sideDishesString = menuItemString(sideDishes);
  sideDishesElem.innerHTML = sideDishesString;
}

function drawDesserts() {
  let dessertsElem = document.getElementById("desserts");
  const dessertsString = menuItemString(desserts);
  dessertsElem.innerHTML = dessertsString;
}

function drawBeverages() {
  let beveragesElem = document.getElementById("beverages");
  const beveragesString = menuItemString(beverages);
  beveragesElem.innerHTML = beveragesString;
}

function menuItemString(menuArray) {
  let menuItemsString = "";

  menuArray.forEach(
    (item) =>
      (menuItemsString += `
            <div onclick="addToCart('${item.name}', ${item.price} )" class="col-3">
              <div class="row">
                <p>${item.name}</p>
                <p>$${item.price}</p>
              </div>
            </div>
  `)
  );
  console.log("[MENU ITEMS STRING]", menuItemString);
  return menuItemsString;
}

// SECTION CART

function addToCart(name, price) {
  console.log("[NAME]", name + "[PRICE]", price);
  cartTotal += price;
  drawCartTotal();
  drawCart(name, price);
  drawCartSubmit();
}

function drawCart(name, price) {
  let cartElem = document.getElementById("cart");
  cartElem.innerHTML += `
              <div class="row my-1">
                <div class="col-8"><p>${name}</p></div>
                <div class="col-4"><p></p>$${price}</div>
              </div>
  `;
}

function drawCartTotal() {
  const cartTotalElem = document.getElementById("cartTotal");
  console.log("[CART TOTAL]", cartTotal.toFixed(2));
  cartTotalElem.innerHTML = `
  <p>Subtotal</p>
  <p>$${cartTotal.toFixed(2)}</p>
  `;
}

function drawCartSubmit() {
  const cartSubmitElem = document.getElementById("cartSubmit");
  cartSubmitElem.innerHTML = `
    <button onclick="cartOnSubmit()" class="btn btn-dark form-control">Checkout</button>
  `;
}

function cartOnSubmit() {
  window.alert("Success!");
  const cartElem = document.getElementById("cart");
  cartElem.innerText = "";
  const cartTotalElem = document.getElementById("cartTotal");
  cartTotalElem.innerText = "";
  const cartSubmitElem = document.getElementById("cartSubmit");
  cartSubmitElem.innerText = "";
}

// SECTION PAGE LOAD

function pageLoad() {
  drawAppetizers();
  drawMainCourses();
  drawSideDishes();
  drawDesserts();
  drawBeverages();
}

pageLoad();
