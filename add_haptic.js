const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

// selectMC
html = html.replace(/fb\.innerHTML = '✓ ' \+ q\.feedbackOk;/, `$& if(navigator.vibrate) navigator.vibrate([100]);`);
html = html.replace(/fb\.innerHTML = '✗ ' \+ \(\(q\.type === 'match' \|\| q\.type === 'categorize'\) \? q\.feedbackNok : \(o\.text \+ " är fel\. " \+ q\.feedbackNok\)\);/, 
`$& if(navigator.vibrate) navigator.vibrate([50,100,50]);`);

// evaluateAnswer (Match & Categorize)
html = html.replace(/const isOk = isMatchOk \|\| isCatOk;/, `const isOk = isMatchOk || isCatOk;
        if(isOk) { if(navigator.vibrate) navigator.vibrate([100]); }
        else { if(navigator.vibrate) navigator.vibrate([50,100,50]); }`);

fs.writeFileSync('klasspuls_glosor.html', html);
