"use strict";

let inventory = [
  {
    name: "Red Wine",
    type: "wine",
    price: 15.99,
    quantity: 0,
  },
  {
    name: "White Wine",
    type: "wine",
    price: 15.99,
    quantity: 45,
  },
  {
    name: "Rosé Wine",
    type: "wine",
    price: 20.99,
    quantity: 45,
  },
  {
    name: "Ale",
    type: "beer",
    price: 8.99,
    quantity: 32,
  },
  {
    name: "Lager",
    type: "beer",
    price: 8.99,
    quantity: 14,
  },
  {
    name: "Sour",
    type: "beer",
    price: 12.99,
    quantity: 15,
  },
  {
    name: "Tequila",
    type: "liquor",
    price: 22.99,
    quantity: 4,
  },
  {
    name: "Vodka",
    type: "liquor",
    price: 22.99,
    quantity: 6,
  },
  {
    name: "Whiskey",
    type: "liquor",
    price: 27.99,
    quantity: 5,
  },
  {
    name: "Gin",
    type: "liquor",
    price: 27.99,
    quantity: 4,
  },
];
let inventoryContainer = document.querySelector(".store");

let display = () => {
  inventory.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("item");

    let type = document.createElement("p");
    type.classList.add(item.type);
    let itemInfo = document.createElement("div");
    // document.card.appendChild(itemInfo);
    itemInfo.classList.add("item-info");
    // itemInfo.innerText = (item.name, item.price);
    let name = document.createElement("p");
    name.innerText = item.name;
    let price = document.createElement("p");
    price.innerText = item.price;
    itemInfo.appendChild(name, price);
    let addToCart = document.createElement("button");
    addToCart.classList.add("add");
    addToCart.innerText = "Add";
    addToCart.setAttribute("data-index", index);
    card.append(type, name, price, addToCart);
    inventoryContainer.append(card);
  });
};
display();

let receiptContainer = document.querySelector(".receipt-container");
let addToCart = document.querySelector(".add");
let item = document.querySelector(".item");

addToCart.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("add")) {
    let name = document.createElement("p");
    inventory.name.innerText = name;
    let price = document.createElement("p");
    price.innerText = price;
    let index = e.target.getAttribute("data-price");
    price.setAttribute("data-price", index);

    let deleteFromCart = document.createElement("button");
    deleteFromCart.classList.add("delete");
    deleteFromCart.innerText = "Remove From Cart";
    deleteFromCart.setAttribute(index, "price");
    receiptContainer.append(name, inventory.price, deleteFromCart);
    console.log(addToCart);
  }
});
