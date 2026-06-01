const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

const regex = /const questions = \[[\s\S]*?    \];/;
let match = html.match(regex);
if (match) {
    let qStr = match[0];
    
    // Replace 'word' with \"word\" in text, feedbackOk, feedbackNok, and options text.
    // It's safer to just replace all instances of ' (that have letters around them or are used as quotes)
    // with \". But we don't want to replace apostrophes in words like "can't" (not used in Swedish anyway).
    // Let's replace 'Oikos' -> \"Oikos\"
    // 'logos' -> \"logos\"
    // '14. Ekologi' -> \"14. Ekologi\"
    // 'icke' -> \"icke\"
    // 'befolkning' -> \"befolkning\"
    // 'väv' -> \"väv\"
    // 'Producera' -> \"Producera\"
    // 'Konsumera' -> \"Konsumera\"
    // 'yrken' -> \"yrken\"
    // 'Ekologiska Nisch' -> \"Ekologiska Nisch\"
    // 'yrke' -> \"yrke\"
    // 'Symbios' -> \"Symbios\"
    // 'ömsesidig' -> \"ömsesidig\"
    // 'Kaskad' -> \"Kaskad\"
    // 'vattenfall' -> \"vattenfall\"
    // 'Biologisk mångfald' -> \"Biologisk mångfald\"
    // 'Mångfald' -> \"Mångfald\"
    // 'filt' -> \"filt\"
    // 'Art' -> \"Art\"
    // 'mat-kartan' -> \"mat-kartan\"
    // 'städar upp' -> \"städar upp\"
    // 'livförsäkring' -> \"livförsäkring\"

    qStr = qStr.replace(/'Oikos'/g, '\\"Oikos\\"');
    qStr = qStr.replace(/'logos'/g, '\\"logos\\"');
    qStr = qStr.replace(/'14\. Ekologi'/g, '\\"14. Ekologi\\"');
    qStr = qStr.replace(/'icke'/g, '\\"icke\\"');
    qStr = qStr.replace(/'befolkning'/g, '\\"befolkning\\"');
    qStr = qStr.replace(/'väv'/g, '\\"väv\\"');
    qStr = qStr.replace(/'Producera'/g, '\\"Producera\\"');
    qStr = qStr.replace(/'Konsumera'/g, '\\"Konsumera\\"');
    qStr = qStr.replace(/'yrken'/g, '\\"yrken\\"');
    qStr = qStr.replace(/'yrke'/g, '\\"yrke\\"');
    qStr = qStr.replace(/'Ekologiska Nisch'/g, '\\"Ekologiska Nisch\\"');
    qStr = qStr.replace(/'Symbios'/g, '\\"Symbios\\"');
    qStr = qStr.replace(/'ömsesidig'/g, '\\"ömsesidig\\"');
    qStr = qStr.replace(/'Kaskad'/g, '\\"Kaskad\\"');
    qStr = qStr.replace(/'vattenfall'/g, '\\"vattenfall\\"');
    qStr = qStr.replace(/'Biologisk mångfald'/g, '\\"Biologisk mångfald\\"');
    qStr = qStr.replace(/'Mångfald'/g, '\\"Mångfald\\"');
    qStr = qStr.replace(/'filt'/g, '\\"filt\\"');
    qStr = qStr.replace(/'Art'/g, '\\"Art\\"');
    qStr = qStr.replace(/'mat-kartan'/g, '\\"mat-kartan\\"');
    qStr = qStr.replace(/'städar upp'/g, '\\"städar upp\\"');
    qStr = qStr.replace(/'livförsäkring'/g, '\\"livförsäkring\\"');

    html = html.replace(regex, qStr);
    fs.writeFileSync('klasspuls_glosor.html', html);
}
