const readline = require("readline");
const fs = require('fs'); // Direct bovenin importeren

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});

const filePath = 'urenregistratie.csv';
let registratie = {};

/*******************************************    

 *

 * Rosa

 * 

 ******************************************/

// 1. Check of het bestand al bestaat. Zo niet, maak het aan met de koppen.
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "uren,taak,datum\n");
}

// 2. Start de vragen in de terminal
rl.question("Hoeveel uur heb je gewerkt? ", (uren) => {
    registratie.uren = uren;

    rl.question("Welke taak heb je gedaan? ", (taak) => {
        registratie.taak = taak;

        rl.question("Welke datum is het? (YYYY-MM-DD) ", (datum) => {
            registratie.datum = datum;

            console.log("\n--- Samenvatting ---");
            console.log(`${registratie.uren} uur - ${registratie.taak} - ${registratie.datum}`);

            // 3. Bereid de CSV regel voor
            // We zetten de waarden tussen " " voor het geval je ergens een komma typt
            const csvContent = `"${registratie.uren}","${registratie.taak}","${registratie.datum}"\n`;

            // 4. Voeg de regel toe aan het bestand (append)
            fs.appendFile(filePath, csvContent, (err) => {
                if (err) {
                    console.error("Oeps, er ging iets mis bij het opslaan:", err);
                } else {
                    console.log("------------------------------------------------");
                    console.log('De uren zijn opgeslagen in urenregistratie.csv!');
                }
                
                // Sluit de interface pas af nadat het opslaan klaar is
                rl.close();
            });
        });
    });
});