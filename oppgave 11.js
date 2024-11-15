function fjernFørsteOgSisteElement(liste) {
  return liste.slice(1, liste.length - 1);
}

// Eksempler:
console.log(fjernFørsteOgSisteElement(["sol", "vind", "regn", "snø"])); // ["vind", "regn"]
