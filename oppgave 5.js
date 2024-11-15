function doesInputExistInList(søkeTekst, liste) {
  return liste.includes(søkeTekst);
}

// Eksempler:
console.log(doesInputExistInList("Hei", ["Hei", "Salami", "Bjarte"])); // true
console.log(doesInputExistInList("Rød", ["Hei", "Salami", "Bjarte"])); // false

// ( itteration funktion ..?) i
