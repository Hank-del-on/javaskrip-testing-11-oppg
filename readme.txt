Hei.

Oppgaven leveres inn på GitHub og vil bli vurdert til godkjent eller ikke godkjent.

Oppgaven består av flere mindre oppgaver som alle gjøres i samme filer.

Alle oppgaver skal skrive ut svaret til konsollen.


1. Lag en funksjon som tar en tekst inn. Deler den i to deler på midten og bytt om slik at den bakerste delen kommer først og så kommer den første delen bakerst.

eks:

"Hei på deg" // Blir "deg på Hei"
"Brodern besøkte syden i fjor vinter" // Blir "i fjor vinter Brodern besøkte syden"


2. Lag en funksjon som tar inn en tekst og en boolean. Basert på verdien i boolean'en skal den enten returnere teksten med store eller små bokstaver.
Bruk toUpperCase() og toLowerCase()

stringToCaseUpper("HeLLo På DeG", true){} // Skal bli "HELLO PÅ DEG"
stringToCaseUpper("HeLLo På DeG", false){}// Skal bli "hello på deg"

 

3. Lag en funksjon som tar inn en tekst som inneholder dag i uken. Funksjonen skal bruke en switch til å skrive ut forskjellge tekster basert på parameter.

dayToText("Torsdag"){} // kan f.eks console.log("Torsdag er en veldig fin dag!")
dayToText("Fredag"){} // kan f.eks console.log("Fredag, endelig snart helg!")


4. Lag en funksjon som sjekker om en tekst starter og slutter med samme bokstav
Bruk charAt()

startAndEndWithSameChar("Hei på deg H") // Skal returne så printe True
startAndEndWithSameChar("Bjørnar spiste brødskive med salami") // Skal returne så printe False


5. Lag en funksjon som sjekker om en tekst finnes i en liste. Funksjonen tar både søketekst og liste inn som parametere og returnerer true/false.
Bruk includes()

doesInputExistInList("Hei", ["Hei", "Salami", "Bjarte"]) // Skal returne så printe True
doesInputExistInList("Rød", ["Hei", "Salami", "Bjarte"]) // Skal returne så printe False



6. Lag en funksjon som tar inn en liste av ord og returnerer det første og siste ordet kombinert.
Bruk pop() og shift()

combineFirstAndLastWord(["Hei", "Salami", "Bjarte"]) // Skal returne  "HeiBjarte"



7. Lag en funksjon som sammenligner to tekststrenger og sjekker om de er identiske, uavhengig av store og små bokstaver.

isInputTheSame("HaLlA På Deg", "Halla på deg") // Skal returne true
isInputTheSame("HaLalA På Deg", "Bjarne Superku") // Skal returne false



8. Lag en funksjon som sjekker hvilken kategori en alder hører til.

 

    Funksjonen skal ta inn et tall (alder) og returnere en av følgende kategorier basert på alderen:
        Under 13: "Barn"
        13 til 19: "Tenåring"
        20 til 64: "Voksen"
        65 og over: "Pensjonist"

   Bruk if og else if eller switch for å løse oppgaven

9. Lag en funksjon som tar inn en bokstav og sjekker om det er en vokal eller konsonant.

isVowel("b") // Skal returne False
isVowel("a") // Skal returne True

10. Lag en funksjon som sjekker hvilken årstid en måned tilhører.

    Funksjonen tar inn navnet på en måned og returnerer en av følgende årstider:
        Desember, Januar, Februar: "Vinter"
        Mars, April, Mai: "Vår"
        Juni, Juli, August: "Sommer"
        September, Oktober, November: "Høst"
    Bruk switch for å bestemme årstiden basert på måneden.

11. Lag en funksjon som fjerner det første og siste elementet fra en liste.

    Funksjonen tar inn en array og returnerer en ny array der første og siste element er fjernet.
    Bruk slice() for å få en ny array uten de to ytterste elementene.
    Eksempel: ["sol", "vind", "regn", "snø"] gir ["vind", "regn"].
