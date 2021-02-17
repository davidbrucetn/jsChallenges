/*
  WRITE YOUR SOLUTION HERE
*/
const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

const menuElement = document.querySelector("#menu");
menu.filter(dish => {
  if (dish.isVegetarian) {
    var newNode = document.createElement('li');
    newNode.textContent = dish.name;
    menuElement.appendChild(newNode);
  }
});