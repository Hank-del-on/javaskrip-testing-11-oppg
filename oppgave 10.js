function årstidForMåned(måned) {
  switch (måned) {
    case "Desember":
    case "Januar":
    case "Februar":
      return "Vinter";
    case "Mars":
    case "April":
    case "Mai":
      return "Vår";
    case "Juni":
    case "Juli":
    case "August":
      return "Sommer";
    case "September":
    case "Oktober":
    case "November":
      return "Høst";
    default:
      return "Ukjent måned";
  }
}

// Eksempler:
console.log(årstidForMåned("Januar")); // "Vinter"
console.log(årstidForMåned("Mai")); // "Vår"
console.log(årstidForMåned("Juli")); // "Sommer"
console.log(årstidForMåned("Oktober")); // "Høst"
