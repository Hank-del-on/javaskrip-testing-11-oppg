function startAndEndWithSameChar(tekst) {
  return (
    tekst.charAt(0).toLowerCase() ===
    tekst.charAt(tekst.length - 1).toLowerCase()
  );
}

// Eksempler:
console.log(startAndEndWithSameChar("Hei på deg H")); // true
console.log(startAndEndWithSameChar("Bjørnar spiste brødskive med salami")); // false
