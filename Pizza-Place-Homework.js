let pizzaPlace, numberOfToppings;

pizzaPlace = "Kdubs Always Extra Cheese";
numberOfToppings = 10; // Just extra cheese!
console.log(`${pizzaPlace}:`, typeof pizzaPlace, `${numberOfToppings}:`, typeof numberOfToppings);
console.log(`${pizzaPlace} is my favorite place to get pizza, they always include ${numberOfToppings} extra cheese topping free of charge!`);

if(numberOfToppings < 1){
  console.log(`Quality, not quantity`);
}
else {
  console.log(`A whole of of pizza`);
}

// Switch:case

switch(numberOfToppings){
  case 1: console.log(`Quality, not quantity.`); break;
  default : console.log(`A whole of of pizza.`); break;
}

// Ternary Operators

numberOfToppings < 10 ? console.log(`Quality, not quantity.`) : console.log(`A whole of of pizza.`);

// Loop even numbers

let i=1;
while (i<=numberOfToppings){
  (i % 2 === 0) ? console.log(i):console.log(`Not an even number`);
  i++;
}


