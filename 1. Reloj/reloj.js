// FORMATO DE RELOJ
// HH:MM:SS

// DEFINICIÓN DE VALORES NUMÉRICOS
let segundos = 0;
let minutos = 0;
let horas = 0;

// DEFINICIÓN DE VALORES TEXTUALES
let s = "";
let m = "";
let h = "";

// CONVERSIÓN DE VALORES NUMÉRICOS A VALORES TEXTUALES
function conversion(unidad) {
  switch (unidad) {
    case "Segundos":
      let segundosTextuales = String(segundos);

      if (segundosTextuales.length === 1) {
        s = "0" + segundosTextuales;
      } else if (segundosTextuales.length === 2) {
        s = segundosTextuales;
      }
  }
  switch (unidad) {
    case "Minutos":
      let minutosTextuales = String(minutos);

      if (minutosTextuales.length === 1) {
        m = "0" + minutosTextuales;
      } else if (minutosTextuales.length === 2) {
        m = minutosTextuales;
      }
  }
  switch (unidad) {
    case "Horas":
      let horasTextuales = String(horas);

      if (horasTextuales.length === 1) {
        h = "0" + horasTextuales;
      } else if (horasTextuales.length === 2) {
        h = horasTextuales;
      }
  }
}

// FUNCIONAMIENTO DEL RELOJ (CADA 10 SEGUNDOS)
conversion("Horas");
conversion("Minutos");
conversion("Segundos");

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

  conversion("Horas");
  conversion("Minutos");
  conversion("Segundos");

  console.log(h + ":" + m + ":" + s);
} while (horas !== 24);
