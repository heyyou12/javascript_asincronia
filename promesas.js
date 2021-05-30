function cuadradoPromise(value) {
  if (typeof value !== "number") {
    return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        resuelt: value * value,
      });
    }, 0 || Math.random() * 1000);
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("inicio de la promise");
    console.log(`promise: ${obj.value},${obj.resuelt}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`promise: ${obj.value},${obj.resuelt}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`promise: ${obj.value},${obj.resuelt}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`promise: ${obj.value},${obj.resuelt}`);
    return cuadradoPromise("4");
  })
  .then((obj) => {
    console.log(`promise: ${obj.value},${obj.resuelt}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`promise: ${obj.value},${obj.resuelt}`);
    console.log("fin de la promise");
  })
  .catch((erroris) => {
    console.error(erroris);
  });
