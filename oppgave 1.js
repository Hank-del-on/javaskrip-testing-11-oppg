function delOgByttTekst(tekst) {
  const ordListe = tekst.split(" ");
  const midten = Math.floor(ordListe.length / 2);

  const førsteDel = ordListe.slice(0, midten);
  const andreDel = ordListe.slice(midten);

  return [...andreDel, ...førsteDel].join(" ");
}

// Eksempler:
console.log(delOgByttTekst("Hei på deg")); // "deg på Hei"
console.log(delOgByttTekst("Brodern besøkte syden i fjor vinter")); // "i fjor vinter Brodern besøkte syden"
