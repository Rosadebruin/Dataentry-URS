const readline = require("readline");
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let registratie = {};

rl.question("Hoeveel uur heb je gewerkt?", (uren) => {
registratie.uren = uren;

rl.question("Welke taak heb je gedaan?", (taak) => {
registratie.taak = taak;

rl.question("Welke datum is het? (YYYY-MM-DD) ", (datum) => {
registratie.datum = datum;

console.log("\nUrenregistratie:");
console.log(`${registratie.uren} uur - ${ registratie.taak} - ${registratie.datum}`);
rl.close();
});
});
});






  

