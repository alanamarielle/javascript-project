"use strict";
let inventory = [
  {
    name: "Mommy's Time Out",
    type: "Wine",
    description:
      "A delightful merlot for when your day is less than delightful",
    price: 15.99,
    quantity: 0,
  },
  {
    name: "Girls' Night",
    type: "Wine",
    description:
      "A fruity pinot grigio for when grrls just wanna have fuh-uuun!",
    price: 15.99,
    quantity: 45,
  },
  {
    name: "Oh Hush, You're Making Me Blush",
    type: "Wine",
    description: "A playful rosé because it's noon somewhere",
    price: 20.99,
    quantity: 45,
  },
  {
    name: "Ale Mary",
    type: "Beer",
    description: "A hearty ale -- if you like that kind of thing",
    price: 8.99,
    quantity: 32,
  },
  {
    name: "Lager Than Life!",
    type: "Beer",
    description:
      "A light, refreshing lager for when you have to work through lunch",
    price: 8.99,
    quantity: 14,
  },
  {
    name: "Pucker Up, Butter Cup",
    type: "Beer",
    description: "A fun and fruity sour beer, like sourpatch kids for adults",
    price: 12.99,
    quantity: 15,
  },
  {
    name: "You're Tequila Me, Dude!",
    type: "Liquor",
    description:
      "Each sip is a little vacation -- dig your toes in the sand and grab the salt!",
    price: 22.99,
    quantity: 4,
  },
  {
    name: "Russian Potato Salad",
    type: "Liquor",
    description:
      "Vodka warms you up, calms you down, gives you courage -- most versatile liquor around",
    price: 22.99,
    quantity: 6,
  },
  {
    name: "Coder Kris's Rare Cask",
    type: "Liquor",
    description:
      "Your favorite cigar and rainy day will pair nicely with this whiskey",
    price: 27.99,
    quantity: 5,
  },
  {
    name: "Gin-derella's Glass Sipper",
    type: "Liquor",
    description:
      "Add some tonic or make it dirty with a gin martini and you'll feel like a princess until midnight",
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

    itemInfo.classList.add("item-info");

    let name = document.createElement("p");
    name.innerText = item.name;
    let type = document.createElement("p");
    type.classList.add("type");
    type.innerText = item.type;
    let description = document.createElement("p");
    description.classList.add("type");
    description.innerText = item.description;
    let price = document.createElement("p");
    price.innerText = item.price;
    itemInfo.append(name, price);
    let addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add", "button");
    addToCartButton.innerText = "Add";
    addToCartButton.setAttribute("data-index", index);
    card.append(name, type, description, price, addToCartButton);
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
  receiptContainer.innerHTML = "<h3>Your Cart</h3>";
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

  let payCash = document.createElement("button");
  let payCard = document.createElement("button");
  checkoutButton.addEventListener("click", (e) => {
    checkoutButton.classList.add("hidden");
    if (e.target.classList.contains("checkout")) {
      let paymentOption = document.createElement("div");
      paymentOption.classList.add("pay-option");
      paymentOption.innerText = "How would you like to pay?";

      payCash.innerText = "Cash";
      payCash.classList.add("button", "checkout");

      payCard.innerText = "Credit/Debit";
      payCard.classList.add("button", "checkout");
      paymentOption.append(payCard, payCash);
      receiptContainer.append(paymentOption);
    }

    let creditCardInfo = document.querySelector(".credit-card");

    payCard.addEventListener("click", () => {
      creditCardInfo.classList.toggle("hidden");
      let form = document.querySelector(".form");
      form.addEventListener("submit", (e) => {
        creditCardInfo.classList.toggle("hidden");
        e.preventDefault();
        let capture = new FormData(form);
        let customerName = capture.get("name");
        let number = capture.get("number");
        let cvv = capture.get("cvv");

        let creditCardReceipt = document.createElement("div");
        creditCardReceipt.classList.add("pay-option");

        let index = e.target.getAttribute("data-index");
        let finalTotal = `This is your total: $${(
          subtotal * 0.06 +
          subtotal
        ).toFixed(2)}`;

        cartArray.forEach((item) => {
          let name = document.createElement("p");
          name.innerText = item.name;
          let price = document.createElement("p");
          price.innerText = item.price;

          creditCardReceipt.append(name, price);
        });
        let receiptText = document.createElement("p");
        receiptText.innerText = `Thanks for shopping at Not Your Mama's Cocktail Cart , ${customerName}`;
        receiptContainer.append(receiptText, creditCardReceipt, finalTotal);
        console.log(creditCardReceipt);
      });
    });

    let cashCheckOut = document.createElement("div");
    payCash.addEventListener("click", () => {
      cashCheckOut.classList.add("pay-option");
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
    changeButton.classList.add("button");
    changeButton.innerText = `Get Change`;
    let onChangeButtonClick = () => {
      let tender = document.getElementById("tender").value;
      let changeP = document.createElement("p");

      let finalTotal = subtotal * 0.06 + subtotal;
      //   finalTotal.innerText = `This is your total: $${finalTotal}`;
      let change = parseFloat(tender) - parseFloat(finalTotal);
      if (change < 0) {
        changeP.innerText = `Sorry, this is not sufficient`;
      } else {
        changeP.innerText = "Your change is $" + change.toFixed(2);
      }
      let cashReceipt = document.createElement("div");
      cashReceipt.classList.add("pay-option");

      cartArray.forEach((item) => {
        let name = document.createElement("p");
        name.innerText = item.name;
        let price = document.createElement("p");
        price.innerText = item.price;
        cashReceipt.append(name, price);
      });

      let receiptText = document.createElement("p");
      receiptText.innerText = `Thanks for shopping at Not Your Mama's Cocktail Cart `;
      receiptContainer.append(
        receiptText,
        cashReceipt,
        changeP,
        `This is your total: $${finalTotal.toFixed(2)}`
      );
      // cashCheckOut.append(changeP, receiptText, cashReceipt);

      console.log(tender);
      changeButton.removeEventListener("click", onChangeButtonClick);
    };

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
