/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, 
modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array 
solo le auto a benzina, nel secondo solo le auto a diesel,
 nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.*/

const automobili = [
  { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
  { marca: "Ford", modello: "Fiesta", alimentazione: "diesel" },
  { marca: "Renault", modello: "Clio", alimentazione: "gpl" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
  { marca: "Fiat", modello: "Punto", alimentazione: "gpl" },
  { marca: "Fiat1", modello: "Panda", alimentazione: "diesel" },
  { marca: "Fiat2", modello: "Panda", alimentazione: "diesel" },
  { marca: "Fiat3", modello: "Panda", alimentazione: "benzina" },
  { marca: "Fiat4", modello: "Panda", alimentazione: " elettrico" },
  { marca: "Fiat5", modello: "Panda", alimentazione: " elettrico" },
];

/*Dividi le automobili in 3 array separati: nel primo array 
solo le auto a benzina, nel secondo solo le auto a diesel,
 nel terzo il resto delle auto.*/

const benzina = [];
const diesel = [];
const altro = [];
