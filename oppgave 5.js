function doesInputExistInList(søkeTekst, liste) {
  let finnes = false; // Initialiserer en boolean for å sjekke om teksten finnes

  // Iterer gjennom listen og sjekk om teksten finnes
  for (let i = 0; i < liste.length; i++) {
    if (liste[i] === søkeTekst) {
      finnes = true; // Hvis teksten finnes, sett boolean til true
      break; // Avslutt iterasjonen så snart vi finner teksten
    }
  }

  return finnes; // Returner resultatet
}

// Eksempler:
console.log(doesInputExistInList("Hei", ["Hei", "Salami", "Bjarte"])); // true
console.log(doesInputExistInList("Rød", ["Hei", "Salami", "Bjarte"])); // false
