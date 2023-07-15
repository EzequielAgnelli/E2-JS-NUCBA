const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],

    // EJERCICIO C - NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO
    precioNombre: function() {
      return this.nombre +  '. El precio es de: $' + this.precio
    }
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],

    // EJERCICIO C - NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO
    precioNombre: function() {
      return this.nombre +  '. El precio es de: $' + this.precio
    }
  },

  {
    id: 3,
    nombre: "Pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],

    // EJERCICIO C - NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO
    precioNombre: function() {
      return this.nombre +  '. El precio es de: $' + this.precio
    }
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

    // EJERCICIO C - NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO

      precioNombre: function() {
      return this.nombre +  '. El precio es de: $' + this.precio
    }
  },

  {
    id: 5,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],

    // EJERCICIO C - NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO
    precioNombre: function() {
      return this.nombre +  '. El precio es de: $' + this.precio
    }
  },

  {
    id: 6,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],

    // EJERCICIO C - NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO
    precioNombre: function() {
      return this.nombre +  '. El precio es de: $' + this.precio
    }
  },
];


// EJERCICIO A - IMPRIMIENDO LAS PIZZAS QUE TIENEN UN ID IMPAR. 
console.log(`El nombre de la pizza de este menu es: ${pizzas[0].nombre}`)
console.log(`El nombre de la pizza de este menu es: ${pizzas[2].nombre}`)
console.log(`El nombre de la pizza de este menu es: ${pizzas[4].nombre}`)

console.log('--------------------------------------------------')


// EJERCICIO B - ¿HAY ALGUNA PIZZA QUE VALGA MENOS DE $600?
console.log(`Si! contamos con un menu que contiene una pizza de menos de $600. Y es la ${pizzas[0].nombre}`)



console.log('--------------------------------------------------')


// EJERCICIO B - IMPRIMIR NOMBRE DE CADA PIZZA CON SU RESPECTIVO PRECIO.
console.log(`A continuacion, se mostrara el nombre y precio de la pizza que contiene este menu: ${pizzas[0].precioNombre()}.`);
console.log(`A continuacion, se mostrara el nombre y precio de la pizza que contiene este menu: ${pizzas[1].precioNombre()}.`);
console.log(`A continuacion, se mostrara el nombre y precio de la pizza que contiene este menu: ${pizzas[2].precioNombre()}.`);
console.log(`A continuacion, se mostrara el nombre y precio de la pizza que contiene este menu: ${pizzas[3].precioNombre()}.`);
console.log(`A continuacion, se mostrara el nombre y precio de la pizza que contiene este menu: ${pizzas[4].precioNombre()}.`);
console.log(`A continuacion, se mostrara el nombre y precio de la pizza que contiene este menu: ${pizzas[5].precioNombre()}.`);

console.log('--------------------------------------------------')


// EJERCICIO C - IMPRIMIR LOS INGREDIENTES DE CADA PIZZA.
console.log(`La pizza de Muzarella tiene: ${pizzas[0].ingredientes}.`)
console.log(`La pizza de Cebolla tiene: ${pizzas[1].ingredientes}.`)
console.log(`La pizza Napolitana tiene: ${pizzas[2].ingredientes}.`)
console.log(`La pizza de 4 Quesos tiene: ${pizzas[3].ingredientes}.`)
console.log(`La pizza ESPECIAL tiene: ${pizzas[4].ingredientes}.`)
console.log(`La pizza con Anana tiene: ${pizzas[5].ingredientes}.`)