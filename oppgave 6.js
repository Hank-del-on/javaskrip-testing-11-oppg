function combineFirstAndLastWord(ordListe) {
  const førsteOrd = ordListe.shift();
  const sisteOrd = ordListe.pop();

  return førsteOrd + sisteOrd;
}

// Eksempler:
console.log(combineFirstAndLastWord(["Hei", "Salami", "Bjarte"])); // "HeiBjarte"
