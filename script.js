"use strict";
let inventory = [
  {
    name: "Mommy's Time Out",
    type: "wine",
    price: 15.99,
    quantity: 0,
  },
  {
    name: "Girls' Night",
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
    addToCartButton.classList.add("add", "button");
    addToCartButton.innerText = "Add";
    addToCartButton.setAttribute("data-index", index);
    card.append(name, price, addToCartButton);
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
  receiptContainer.innerText = "Your Cart";
  let subtotal = 0;
  cartArray.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("item-info");
    let name = document.createElement("p");
    name.innerText = item.name;
    let price = document.createElement("p");
    price.innerText = item.price;
    let deleteFromCartButton = document.createElement("button");
    deleteFromCartButton.classList.add("delete", "button");
    deleteFromCartButton.innerText = "Delete";
    deleteFromCartButton.setAttribute("data-index", index);
    card.append(name, price, deleteFromCartButton);
    receiptContainer.append(card);
    subtotal += item.price;
  });

  let subTotal = document.createElement("p");
  subTotal.innerText = `This is your subtotal: $${subtotal.toFixed(2)}`;
  let checkoutButton = document.createElement("button");
  checkoutButton.innerText = "Checkout";
  checkoutButton.classList.add("checkout", "button");
  receiptContainer.append(subTotal, checkoutButton);
  console.log(subtotal);
  // let checkout = document.querySelector
  let payCash = document.createElement("button");
  let payCard = document.createElement("button");
  checkoutButton.addEventListener("click", (e) => {
    checkoutButton.classList.add("hidden");
    if (e.target.classList.contains("checkout")) {
      let paymentOption = document.createElement("div");
      paymentOption.classList.add("pay-option");
      paymentOption.innerText = "How would you like to pay?";
      //   let payCash = document.createElement("button");
      payCash.innerText = "Ca$h";
      payCash.classList.add("button");
      //   let payCard = document.createElement("button");
      payCard.innerText = "Plastic";
      payCard.classList.add("button");
      paymentOption.append(payCard, payCash);
      receiptContainer.append(paymentOption);
    }
    // let payCard = document.createElement("button");
    let creditCardInfo = document.querySelector(".credit-card");

    payCard.addEventListener("click", () => {
      creditCardInfo.classList.toggle("hidden");
      let form = document.querySelector(".form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let capture = new FormData(form);
        let customerName = capture.get("name");
        let number = capture.get("number");
        let cvv = capture.get("cvv");

        let creditCardReceipt = document.createElement("div");
        creditCardReceipt.classList.add("receipt");

        let index = e.target.getAttribute("data-index");

        //want to pull cartArray info to receiptItems div and append to creditCardReceipt
        cartArray.forEach((item) => {
          let card = document.createElement("div");
          card.classList.add("item-info");
          let name = document.createElement("p");
          name.innerText = item.name;
          let price = document.createElement("p");
          price.innerText = item.price;
          card.append(name, price);
          creditCardReceipt.innerText = customerName;
          creditCardReceipt.append(index);
          // itemInfo.append(name, price);
          receiptContainer.append(card, creditCardReceipt);
        });
      });
    });

    let cashCheckOut = document.createElement("div");
    payCash.addEventListener("click", () => {
      cashCheckOut.classList.add("finish", "cash");
      let subP = document.createElement("p");
      subP.innerText = `Subtotal : $${subtotal}`;
      let taxP = document.createElement("p");
      taxP = `Tax : $${(subtotal * 0.06).toFixed(2)}`;
      let cashInput = document.createElement("input");
      cashInput.setAttribute("placeholder", "Cash Tender");
      cashInput.setAttribute("id", "tender");
      cashInput.setAttribute("type", "number");
      cashInput.setAttribute("step", "0.01");
      let finalTotal = (subtotal * 0.06 + subtotal).toFixed(2);
      cashCheckOut.innerText = `Your total is : $${finalTotal}`;
      cashCheckOut.append(subP, taxP, cashInput, changeButton);
      receiptContainer.append(cashCheckOut);
    });
    let changeButton = document.createElement("button");
    let onChangeButtonClick = () => {
      let tender = document.getElementById("tender").value;
      let changeP = document.createElement("p");
      let finalTotal = subtotal * 0.06 + subtotal;
      let change = parseFloat(tender) - parseFloat(finalTotal);
      if (change < 0) {
        changeP.innerText = `Gimme mo' monay!`;
      } else {
        changeP.innerText = "Your change: " + change.toFixed(2);
      }
      cashCheckOut.append(changeP);

      console.log(tender);
      changeButton.removeEventListener("click", onChangeButtonClick);
    };
    // changeButton.setAttribute("type", "submit");
    changeButton.addEventListener("click", onChangeButtonClick);
  });
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
  if (e.target.classList.contains("delete")) {
    let index = e.target.getAttribute("data-index");
    cartArray.splice(index, 1);
    displayCart();
  }
  if (cartArray.length === 0) {
    location.reload();
  }
});
console.log(cartArray);
