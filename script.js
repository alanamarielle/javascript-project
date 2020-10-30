"use strict";

let inventory = [
  {
    name: "Mommy's Time Out",
    type: "wine",
    price: 15.99,
    quantity: 0,
  },
  {
    name: "Girl's Night",
    type: "wine",
    price: 15.99,
    quantity: 45,
  },
  {
    name: "Oh Hush, You're Making Me Blush",
    type: "wine",
    price: 20.99,
    quantity: 45,
  },
  {
    name: "Ale Mary",
    type: "beer",
    price: 8.99,
    quantity: 32,
  },
  {
    name: "Lager Than Life!",
    type: "beer",
    price: 8.99,
    quantity: 14,
  },
  {
    name: "Pucker Up, Butter Cup",
    type: "beer",
    price: 12.99,
    quantity: 15,
  },
  {
    name: "You're Tequila Me, Dude!",
    type: "liquor",
    price: 22.99,
    quantity: 4,
  },
  {
    name: "Russian Potato Salad",
    type: "liquor",
    price: 22.99,
    quantity: 6,
  },
  {
    name: "Coder Kris's Rare Cask",
    type: "liquor",
    price: 27.99,
    quantity: 5,
  },
  {
    name: "Gin-derella's Glass Sipper",
    type: "liquor",
    price: 27.99,
    quantity: 4,
  },
];
let inventoryContainer = document.querySelector(".store");
console.log(inventory);

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
    itemInfo.append(name, price);

    let addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add");
    addToCartButton.innerText = "Add";
    addToCartButton.setAttribute("data-index", index);

    card.append(type, name, price, addToCartButton);
    inventoryContainer.append(card);
  });
};
display();

let receiptContainer = document.querySelector(".receipt-container");
let store = document.querySelector(".store");

let cartArray = [];
let subtotalContainer = document.querySelector(".sub-total");
let displayCart = () => {
  receiptContainer.innerHTML = "";
  let subtotal = 0;
  cartArray.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("item-info");
    let name = document.createElement("p");
    name.innerText = item.name;
    let price = document.createElement("p");
    price.innerText = item.price;
    // itemInfo.append(name, price);

    let deleteFromCartButton = document.createElement("button");
    deleteFromCartButton.classList.add("add");
    deleteFromCartButton.innerText = "Delete";
    deleteFromCartButton.setAttribute("data-index", index);
    card.append(name, price, deleteFromCartButton);
    receiptContainer.append(card);
    subtotal += item.price;
  });
  let subTotal = document.createElement("p");
  subTotal.innerText = `This is your subtotal: $${subtotal}`;

  let checkoutButton = document.createElement("button");
  checkoutButton.innerText = "checkout";
  checkoutButton.classList.add("checkout");

  receiptContainer.append(subTotal, checkoutButton);
  console.log(subtotal);
};

let checkout = document.querySelector(".checkout");
checkout.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkout")) {
    let paymentOption = document.querySelector(".pay-option");
    paymentOption.innerText = "How would you like to pay?";
    let payCash = document.createElement("button");
    payCash.innerText = "Ca$h";
    let payCard = document.createElement("button");
    payCard.innerText = "Plastic";
    checkout.append(paymentOption, payCard, payCash);
  }
});

console.log(receiptContainer);
store.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    let index = e.target.getAttribute("data-index");
    cartArray.push(inventory[index]);
    //array.push([index])
    console.log(cartArray);
    displayCart();
  }
});

receiptContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    let index = e.target.getAttribute("data-index");
    cartArray.splice(index, 1);
    displayCart();
  }
});

console.log(cartArray);
