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
    let name = document.createElement("p");
    name.innerText = item.name;
    let price = document.createElement("p");
    price.innerText = item.price;
    card.append(type, name, price);
    inventoryContainer.append(card);
    if (item.quantity === 0) {
      let out = document.createElement("div");
      out.classList.add("hidden");
    }
  });
};
display();
