let number =
  "100001011,1110000,11000000,11001000,100001110,10000101,1010010,1110010,11111100";

function handler(number) {
  let lista = number.split("");
  let estructuraMal = false;
  if (lista.length > 9) {
    estructuraMal = true;
  }
  lista = lista.map((item) => {
    if (typeof item === "string") {
      item = item.slice(0, -3);
      item = item + "100";
    }
    if (!/^[0-9]$/.test(item) || item === "") {
      estructuraMal = true;
    }
    return item;
  });

  if (estructuraMal) {
    return "";
  }
  const result = lista.join(",");
  return result;
}

handler(
  "100001011,1110000,11000000,11001000,100001110,10000101,1010010,1110010,11111100"
);
