function isVowel(bokstav) {
  const vokaler = "aeiouAEIOU";
  return vokaler.includes(bokstav);
}

// Eksempler:
console.log(isVowel("b")); // false
console.log(isVowel("a")); // true
