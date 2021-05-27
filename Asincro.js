// console.log("inicio");
// setTimeout(() => {
//   console.log("ejecutando metodo");
// }, 5000);

// setInterval(() => {
//   console.log("ejecutando setIntevral cada 2 segundos");
// }, 2000);

// setInterval(() => {
//   document.write(new Date().toTimeString());
// }, 1000);

// let temporizador = setTimeout(() => {
//   console.log("ejecutando metodo");
// }, 5000);

//clearTimeout(temporizador);

let intervalo = setInterval(() => {
  document.write(new Date().toTimeString());
}, 1000);

clearInterval(intervalo);
