const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');
let match = html.match(/const questions = (\[[\s\S]*?\]);/);
let questions = eval(match[1]);
questions.forEach((q, i) => console.log(`Index ${i}: Fråga ${q.num} - ${q.type}`));
