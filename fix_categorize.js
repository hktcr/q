const fs = require('fs');
const file = '/Users/hakankarlsson/Library/CloudStorage/GoogleDrive-hlg.karlsson@gmail.com/Min enhet/🌎GAIA/GAIA-Repos/q/klasspuls_glosor.html';
let html = fs.readFileSync(file, 'utf8');

// Q2
html = html.replace(
    /items: \[\s*\{label: "Solljus", cat: "Abiotisk \(Icke-levande\)"\},\s*\{label: "Temperatur", cat: "Abiotisk \(Icke-levande\)"\},\s*\{label: "Rovdjur", cat: "Biotisk \(Levande\)"\},\s*\{label: "Bakterier", cat: "Biotisk \(Levande\)"\},\s*\{label: "Vind", cat: "Abiotisk \(Icke-levande\)"\}\s*\],/,
    `items: [
                {word: "Solljus", cat: 0},
                {word: "Temperatur", cat: 0},
                {word: "Rovdjur", cat: 1},
                {word: "Bakterier", cat: 1},
                {word: "Vind", cat: 0}
            ],`
);

// Q7
html = html.replace(
    /items: \[\s*\{label: "Mykorrhiza \(Svamp\+Träd\)", cat: "Mutualism \(\+\/\+\)"\},\s*\{label: "Tarmbakterier i oss", cat: "Mutualism \(\+\/\+\)"\},\s*\{label: "Fästing på en hund", cat: "Parasitism \(\+\/-\)"\},\s*\{label: "Bandmask", cat: "Parasitism \(\+\/-\)"\}\s*\],/,
    `items: [
                {word: "Mykorrhiza (Svamp+Träd)", cat: 0},
                {word: "Tarmbakterier i oss", cat: 0},
                {word: "Fästing på en hund", cat: 1},
                {word: "Bandmask", cat: 1}
            ],`
);

// Q9
html = html.replace(
    /items: \[\s*\{label: "Isbjörn \/ Toppkonsument", cat: "Hög gifthalt \(Toppen\)"\},\s*\{label: "Växtplankton \/ Producent", cat: "Låg gifthalt \(Botten\)"\},\s*\{label: "Havsörn", cat: "Hög gifthalt \(Toppen\)"\},\s*\{label: "Gräs", cat: "Låg gifthalt \(Botten\)"\}\s*\],/,
    `items: [
                {word: "Isbjörn / Toppkonsument", cat: 1},
                {word: "Växtplankton / Producent", cat: 0},
                {word: "Havsörn", cat: 1},
                {word: "Gräs", cat: 0}
            ],`
);

// Q14
html = html.replace(
    /items: \[\s*\{label: "En gammelskog med många biotoper", cat: "Hög Mångfald"\},\s*\{label: "Ett stort korallrev", cat: "Hög Mångfald"\},\s*\{label: "En veteåker", cat: "Låg Mångfald"\},\s*\{label: "En asfalterad skolgård", cat: "Låg Mångfald"\}\s*\],/,
    `items: [
                {word: "En gammelskog med många biotoper", cat: 0},
                {word: "Ett stort korallrev", cat: 0},
                {word: "En veteåker", cat: 1},
                {word: "En asfalterad skolgård", cat: 1}
            ],`
);

fs.writeFileSync(file, html);
