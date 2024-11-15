function alderKategori(alder) {
  if (alder < 13) {
    return "Barn";
  } else if (alder >= 13 && alder <= 19) {
    return "Tenåring";
  } else if (alder >= 20 && alder <= 64) {
    return "Voksen";
  } else {
    return "Pensjonist";
  }
}

// Eksempler:
console.log(alderKategori(12)); // "Barn"
console.log(alderKategori(16)); // "Tenåring"
console.log(alderKategori(30)); // "Voksen"
console.log(alderKategori(70)); // "Pensjonist"
