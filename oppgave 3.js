function dayToText(day) {
  switch (day) {
    case "Mandag":
      console.log("Mandag er starten på en ny uke!");
      break;
    case "Tirsdag":
      console.log("Tirsdag er en fin dag!");
      break;
    case "Onsdag":
      console.log("Onsdag, snart helg!");
      break;
    case "Torsdag":
      console.log("Torsdag er en veldig fin dag!");
      break;
    case "Fredag":
      console.log("Fredag, endelig snart helg!");
      break;
    case "Lørdag":
      console.log("Lørdag, tid for avslapning!");
      break;
    case "Søndag":
      console.log("Søndag, den siste hviledagen før ny uke!");
      break;
    default:
      console.log("Ukjent dag");
  }
}

// Eksempler:
dayToText("Torsdag"); // "Torsdag er en veldig fin dag!"
dayToText("Fredag"); // "Fredag, endelig snart helg!"
