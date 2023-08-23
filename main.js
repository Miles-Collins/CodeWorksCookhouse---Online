const menu = [
  {
    name: "HTML5 Hummus Platter",
    price: 8.99,
    type: "appetizers",
    favorite: true,
    image: "/assets/hummus.webp",
  },
  {
    name: "CSS Crispy Calamari",
    price: 10.99,
    type: "appetizers",
    image: "/assets/crispy-calamari.png",
  },
  {
    name: "Vue Veggies Tempura",
    price: 9.49,
    type: "appetizers",
    image: "/assets/veggie-tempura.png",
  },
  {
    name: "MVC Mixed Grill",
    price: 18.99,
    type: "main courses",
    favorite: true,
    image: "/assets/mixed-grill.webp",
  },
  {
    name: "Bootstrap BBQ Burger",
    price: 13.99,
    type: "main courses",
    image: "/assets/bootstrap-bbq-burger.png",
  },
  {
    name: "C# Seafood Symphony",
    price: 22.99,
    type: "main courses",
    favorite: true,
    image: "/assets/seafood-symphony.png",
  },
  {
    name: "Node Noodle Stir-Fry",
    price: 15.99,
    type: "main courses",
    image: "/assets/node-noodle-stir-fry.png",
  },
  {
    name: ".NET Nacho Tower",
    price: 11.99,
    type: "sides",
    favorite: true,
    image: "/assets/net-nacho-tower.png",
  },
  {
    name: "Dynamic CSS Salad",
    price: 7.49,
    type: "sides",
    image: "/assets/css-salad.png",
  },
  {
    name: "Vue Vanilla Parfait",
    price: 6.99,
    type: "desserts",
    image: "/assets/vue-vanilla-parfait.png",
  },
  {
    name: "Node Nutty Brownie",
    price: 7.99,
    type: "desserts",
    favorite: true,
    image: "/assets/node-nutty-brownie.png",
  },
  {
    name: "Responsive Raspberry Cheesecake",
    price: 8.49,
    type: "desserts",
    image: "/assets/responsive-raspberry-cheesecake.png",
  },
  {
    name: "CodeBrew Coffee",
    price: 3.99,
    type: "beverages",
    favorite: true,
    image: "/assets/codebrew-coffee.png",
  },
  {
    name: "TechTonic Tea",
    price: 2.99,
    type: "beverages",
    image: "/assets/techtonic-tea.png",
  },
  {
    name: "Node Nectar",
    price: 4.49,
    type: "beverages",
    image: "/assets/node-nectar.png",
  },
];

// SECTION VARIABLES

let cartTotal = 0;

// SECTION MENU

function drawMenu(type) {
  const menuItems = filterMenu(type);
  drawMenuTitle(type);
  const menuString = menuItemString(menuItems);
  menuElem(menuString);
}

function menuItemString(menuArray) {
  let menuItemsString = "";

  menuArray.forEach(
    (item) =>
      (menuItemsString += `
            <div onclick="addToCart('${item.name}', ${item.price} )" class="col-3 d-flex align-items-center justify-content-center p-3 m-2 menu-item">
              <div class="row">
                <div class="col-12 text-center">
                  <img src="${item.image}" class="mb-1 menu-item-image" />
                  <p class="mb-0 font-small">${item.name}</p>
                </div>
              </div>
            </div>
  `)
  );
  console.log("[MENU ITEMS STRING]", menuItemString);
  return menuItemsString;
}

function menuElem(menuString) {
  let menuElem = document.getElementById("menu");
  menuElem.innerHTML = menuString;
}

function drawMenuTitle(type) {
  // const menuTitleElem = document.getElementById('filterTitle')
  document.getElementById("filterTitle").innerHTML = `
  <p class="fs-5 text-uppercase">${type}</p>
  `;
}

// SECTION MENU SERVICES

function filterMenu(type) {
  if (type == "all") {
    return menu;
  } else if (type == "favorites") {
    return menu.filter((item) => item.favorite == true);
  } else {
    return menu.filter((item) => item.type == type);
  }
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
    <button onclick="cartOnSubmit()" class="btn btn-light form-control">Checkout</button>
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
  drawMenu("favorites");
}

pageLoad();
