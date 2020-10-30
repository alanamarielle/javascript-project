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
  let subtotalContainer = document.querySelector(".sub-total");
  let subTotal = document.createElement("p");
  subTotal.innerText = `This is your subtotal: $${subtotal}`;

  receiptContainer.append(subTotal);
  console.log(subtotal);
};
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
