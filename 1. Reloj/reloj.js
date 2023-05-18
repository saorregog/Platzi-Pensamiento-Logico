// RELOJ
// FORMATO HH:MM:SS

// DEFINICIÓN DE VALORES NUMÉRICOS
let segundos = 0;
let minutos = 0;
let horas = 0;

// DEFINICIÓN DE VALORES TEXTUALES
let s = "";
let m = "";
let h = "";

// CONVERSIÓN DE VALORES NUMÉRICOS A VALORES TEXTUALES
function conversion(valor) {
  let valorTextual = String(valor);

  if (valorTextual.length === 1) {
    return "0" + valorTextual;
  } else if (valorTextual.length === 2) {
    return valorTextual;
  }
}

// FUNCIONAMIENTO DEL RELOJ (CADA 10 SEGUNDOS)
s = conversion(segundos);
m = conversion(minutos);
h = conversion(horas);

console.log(h + ":" + m + ":" + s);

do {
  segundos = segundos + 10;

  if (segundos === 60) {
    segundos = 0;
    minutos = minutos + 1;
  }

  if (minutos === 60) {
    minutos = 0;
    horas = horas + 1;
  }

  s = conversion(segundos);
  m = conversion(minutos);
  h = conversion(horas);

  console.log(h + ":" + m + ":" + s);
} while (horas !== 24);
