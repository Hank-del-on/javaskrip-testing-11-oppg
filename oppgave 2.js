function stringToCaseUpper(tekst, tilUpper) {
  if (tilUpper) {
    return tekst.toUpperCase();
  } else {
    return tekst.toLowerCase();
  }
}

// Eksempler:
console.log(stringToCaseUpper("HeLLo På DeG", true)); // "HELLO PÅ DEG"
console.log(stringToCaseUpper("HeLLo På DeG", false)); // "hello på deg"
