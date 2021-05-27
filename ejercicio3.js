while ((input = readline()) != null) {
  print(process_input(input));
}
function process_input(input) {
  var params = input.split(",");
  return calculate_price(params[0], params[1], params[2], params[3]);
}

function calculate_price(product_name, category, cost, weight) {
  cost = parseFloat(cost);
  weight = parseFloat(weight);
  let arancel = calcularArancel(cost);
  let envio = costoEnvio(weight);
  let costoProductoTotal = cost + arancel + envio;
  let iva = calcularIVA(costoProductoTotal);

  let costoProductoTotalIVA = costoProductoTotal + iva;

  let costoProductoTotalGanancia =
    costoProductoTotalIVA + costoProductoTotalIVA * 0.1;

  let total =
    costoProductoTotalGanancia +
    calcularComision(category, costoProductoTotalGanancia);

  return console.log(product_name + "," + total.toFixed(2));
}

function calcularArancel(costo) {
  return costo * 0.1;
}

function calcularIVA(valor) {
  if (valor > 200) {
    return valor * 0.19;
  }
  return 0;
}

function calcularCostoTotal() {
  return costoProducto + calcu;
}

function costoEnvio(peso) {
  if (peso <= 4) {
    return 10;
  } else {
    return (peso - 4) * 2 + 10;
  }
}

function calcularComision(categoria, costoProductoTotalIVA) {
  switch (categoria) {
    case "001":
      return costoProductoTotalIVA * (0.1 / (1 - 0.1));

    case "002":
      return costoProductoTotalIVA * (0.05 / (1 - 0.05));

    case "003":
      return costoProductoTotalIVA * (0.15 / (1 - 0.15));

    default:
      return 0;
  }
}

calculate_price("cama de perro", 001, 100.0, 2.0);
