/* eslint-disable prettier/prettier */
// 1. Create an array of pizzaToppings with at least four different toppings
let pizza = [
  "extra cheese",
  "pepperoni",
  "sausage",
  "black olives",
  "garlic",
  "spinach",
  "mushrooms",
  "jalapenos",
  "pineapple",
  "onions"
];
// 2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9) i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer(param1) {
  console.log(`Hello!`);
  let greeting = "Welcome to Pizza House, our toppings are: ";
  for (let i of param1) {
    switch(param1.indexOf(i)) {
      case param1.length - 2 : greeting += i + ", and "; break;
      case param1.length - 1 : greeting += i + "."; break;
      default: greeting += i + ", "; break;
    }
  }
  return greeting;
}
console.log(greetCustomer(pizza));

// 3. Create a getPizzaOrder function that has the parameters size, crust, and an indefinite amount of toppings as inputs prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!" outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings) {
  let theOrder;
  if (toppings.length === 0) {
    theOrder = [`One ${size} ${crust} crust pizza with cheese `];
  } else {
    theOrder = `One ${size} ${crust} crust pizza with `;
    for (let i of toppings) {
      if (!(pizza.includes(i))){
        console.log(`We don't have any ${i}.`); 
        return false;
      }
      theOrder += i + ", ";
    }
  }
  console.log(theOrder + "coming up!");
  toppings.unshift(crust);
  toppings.unshift(size);
  return toppings;
}

// 4. Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let preparePizza = prepare => {
  if (!(prepare)) {
    return false;
  }
  let newPizza = {};
  newPizza["size"] = prepare[0];
  newPizza["crust"] = prepare[1];
  newPizza["toppings"] = prepare.splice(2);
  console.log("...Cooking pizza...");
  return newPizza;
};

// 5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
let servePizza = pizzaParam => {
if(!(pizzaParam)){
  return "Please order again.";
}
let orderUp;
if(pizzaParam.toppings.length === 0) {
  orderUp = `Order up! Here's your ` + pizzaParam.size + ` ` + pizzaParam.crust + ` plain cheese pizza. `;
} else {
    orderUp = `Order up! Here's your ` + pizzaParam.size + ` ` + pizzaParam.crust + ` pizza with `;
    for (let p of pizzaParam.toppings) {
      orderUp += p + ", ";
    }
  }
  return (orderUp += "Enjoy!");
};

// 6. Call each function and (starting with preparePizza) use the returned value from the previous function as its input
// eslint-disable-next-line prettier/prettier
let orderLifeCycle = servePizza(preparePizza(getPizzaOrder("large", "garlic-stuffed", "black olives", "mushrooms", "extra cheese", "onions", "jalapenos", "pineapple", "bell peppers")));

console.log(orderLifeCycle);

// BONUS Challenges
// 9. Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a listToppings function that stores the functionality, and call the function each time we list toppings in a function.
// i.e. "Our toppings are a, b, and c." instead of "Our toppings are a, b, c"

// Done!

// 10. In getPizzaOrder, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). Alter servePizza in a similar way to fix its grammar when serving a "plain" cheese pizza.

// Done!

// 11. In getPizzaOrder, check the toppings the customer ordered against your list of available toppings. If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again

// Done!