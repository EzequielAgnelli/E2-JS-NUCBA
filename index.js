const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],

  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],

  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],

  },

  {
    id: 4,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],

  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],

  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],

  },
];


// EJERCICIO A - IMPRIMIENDO LAS PIZZAS QUE TIENEN UN ID IMPAR. 
const pizzasImpares = pizzas.filter((pizzas) => {
  return pizzas.id % 2 === 1;
})

pizzasImpares.forEach((pizzas) => {
  const {nombre} = pizzas;
  console.log(`Las pizzas son: ${nombre}.`)
})


console.log('--------------------------------------------------')
// EJERCICIO B - ¿HAY ALGUNA PIZZA QUE VALGA MENOS DE $600?
const filtrarPizzas = pizzas.filter((pizza) => pizza.precio < 600);

filtrarPizzas.forEach((pizza) => {
  const pizzaFiltrada = `Contamos con una Pizza que sale menos de $600. Esta es: ${pizza.nombre}, Y el precio es de $${pizza.precio}.`
  console.log(pizzaFiltrada)
})


console.log('--------------------------------------------------')
// EJERCICIO C - IMPRIMIR NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO.
const pizzasConSusPrecios = pizzas.map((pizzas) => {
  return {
    ...pizzas, precio: pizzas.precio  
  }
});
pizzasConSusPrecios.forEach((pizzas) => {
  console.log(`Las pizzas con las que contamos son ${pizzas.nombre} y el precio de esta es de: $${pizzas.precio}.`)
});


console.log('--------------------------------------------------')
// EJERCICIO D - IMPRIMIR LOS INGREDIENTES DE CADA PIZZA.
const ingredientesPizzas = pizzas.map((pizzas) => {
  return {
    ...pizzas, ingredientes: pizzas.ingredientes
  }
})
  ingredientesPizzas.forEach((pizzas) => {
    console.log(`La siguiente pizza: ${pizzas.nombre}. Contiene los siguientes ingredientes: ${pizzas.ingredientes}.`)
})