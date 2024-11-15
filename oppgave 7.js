function isInputTheSame(tekst1, tekst2) {
  // Sjekk om lengdene på tekstene er forskjellige, da kan de ikke være like
  if (tekst1.length !== tekst2.length) {
    return false;
  }

  // Initialiserer en boolean for å holde styr på om tekstene er like
  let erLike = true;

  // Itererer gjennom begge tekstene
  for (let i = 0; i < tekst1.length; i++) {
    // Sammenligner tegnene på samme posisjon, uavhengig av store og små bokstaver
    if (tekst1[i].toLowerCase() !== tekst2[i].toLowerCase()) {
      erLike = false; // Hvis vi finner et ulikt tegn, sett boolean til false
      break; // Vi kan stoppe iterasjonen tidlig
    }
  }

  return erLike; // Returner resultatet
}

// Eksempler:
console.log(isInputTheSame("HaLlA På Deg", "Halla på deg")); // true
console.log(isInputTheSame("HaLalA På Deg", "Bjarne Super")); // false

// ( itteration funktion ..?) i
