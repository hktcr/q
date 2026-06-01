const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

// 1. Rename old lucktext to multiple-choice if it has options
html = html.replace(/type:\s*"lucktext",\s*text:(.*),\s*options:/g, 'type: "multiple-choice", \n            text:$1, \n            options:');

// 2. Rename freetext to lucktext
html = html.replace(/type:\s*"freetext"/g, 'type: "lucktext"');

// 3. Update the dropdown in teacher panel
html = html.replace(/<option value="lucktext">Lucktext<\/option>\s*<option value="match">Matchning<\/option>\s*<option value="categorize">Kategorisering<\/option>\s*<option value="freetext">Fritext<\/option>/, 
`<option value="multiple-choice">Flerval</option>
                        <option value="match">Matchning</option>
                        <option value="categorize">Kategorisering</option>
                        <option value="lucktext">Lucktext (Skriv in)</option>`);

// Remove any duplicate Flerval option if it existed
html = html.replace(/<option value="multiple-choice">Flerval<\/option>\s*<option value="multiple-choice">Flerval<\/option>/, '<option value="multiple-choice">Flerval</option>');

// 4. Update instruction text
html = html.replace(/else if \(q\.type === 'lucktext'\) instructionText = "👆 Tryck på det alternativ som passar bäst i luckan\.";/, '');
html = html.replace(/else if \(q\.type === 'freetext'\) instructionText = "⌨️ Skriv in det ord som saknas i luckan och tryck på Svara\.";/, 
`else if (q.type === 'lucktext') instructionText = "⌨️ Skriv in det ord som saknas i luckan och tryck på Svara.";`);

// 5. Update render logic in showQuestion
html = html.replace(/let contentHTML = `<div class="q-number">\$\{!isSyncMode \? `Fråga \$\{idx \+ 1\} av \$\{questions\.length\}` : `Fråga \$\{q\.num\}`\}<\/div>\s*<div class="q-text">\$\{q\.text\}<\/div>/, 
`let qTextHTML = q.text;
            if (q.type === 'lucktext') {
                qTextHTML = qTextHTML.replace("<span class='blank'></span>", \`<input type="text" id="freetextInput" placeholder="skriv här..." style="width:160px; padding:0.2rem 0.5rem; font-size:inherit; text-align:center; border-radius:8px; border:2px dashed rgba(255,255,255,0.4); background:rgba(0,0,0,0.4); color:var(--gold); font-weight:bold; outline:none; display:inline-block; margin:0 0.5rem;" autocomplete="off" onkeydown="if(event.key==='Enter') submitFreetext()">\`);
            }
            let contentHTML = \`<div class="q-number">\${!isSyncMode ? \`Fråga \${idx + 1} av \${questions.length}\` : \`Fråga \${q.num}\`}</div>
                               <div class="q-text" style="line-height:1.6;">\${qTextHTML}</div>\``);

// 6. Update the old freetext container logic
html = html.replace(/else if \(q\.type === 'freetext'\) \{\s*contentHTML \+= `<div class="freetext-container" style="display:flex; flex-direction:column; gap:1rem; align-items:center; margin-top:1rem;">\s*<input type="text" id="freetextInput" placeholder="Skriv ditt ord här\.\.\." style="width:100%; max-width:400px; padding:1\.2rem; font-size:1\.5rem; text-align:center; border-radius:12px; border:2px solid rgba\(255,255,255,0\.2\); background:rgba\(0,0,0,0\.4\); color:#fff; font-weight:bold; outline:none;" autocomplete="off" onkeydown="if\(event\.key==='Enter'\) submitFreetext\(\)">\s*<button onclick="submitFreetext\(\)" style="width:100%; max-width:400px; padding:1\.2rem; font-size:1\.2rem; font-weight:bold; border-radius:12px; background:var\(--primary\); color:#fff; border:none; cursor:pointer;">Svara \/ Rätta<\/button>\s*<\/div>`;\s*\}/, 
`else if (q.type === 'lucktext') {
                contentHTML += \`<div class="freetext-container" style="display:flex; justify-content:center; margin-top:1.5rem;">
                    <button onclick="submitFreetext()" style="width:100%; max-width:300px; padding:1.2rem; font-size:1.2rem; font-weight:bold; border-radius:12px; background:var(--primary); color:#fff; border:none; cursor:pointer; box-shadow:0 4px 15px rgba(16,185,129,0.3);">Svara / Rätta</button>
                </div>\`;
            }`);

// 7. Update teacher preview
html = html.replace(/} else if\(q\.type === 'freetext'\) \{/, `} else if(q.type === 'lucktext') {`);

// 8. Update pollStats check
html = html.replace(/const keys = \(q\.type === 'multiple-choice' \|\| q\.type === 'lucktext'\) \? \['opt_A', 'opt_B', 'opt_C', 'opt_D'\] : \['ok', 'nok'\];/, 
`const keys = (q.type === 'multiple-choice') ? ['opt_A', 'opt_B', 'opt_C', 'opt_D'] : ['ok', 'nok'];`);

// 9. Update statsHTML check in renderTeacherPanel
html = html.replace(/if\(q\.type === 'multiple-choice' \|\| q\.type === 'lucktext'\) \{/, `if(q.type === 'multiple-choice') {`);

// 10. Update q.type condition in evaluateAnswer
html = html.replace(/if \(q\.type !== 'multiple-choice' && q\.type !== 'lucktext'\) \{/, `if (q.type !== 'multiple-choice') {`);

// 11. Focus the input after rendering (if possible)
html = html.replace(/requestAnimationFrame\(\(\) => \{ requestAnimationFrame\(\(\) => \{ card\.classList\.remove\('enter-right'\); \}\); \}\);/, 
`requestAnimationFrame(() => { 
                requestAnimationFrame(() => { 
                    card.classList.remove('enter-right'); 
                    const inputEl = document.getElementById('freetextInput');
                    if(inputEl && !isSyncMode) inputEl.focus();
                }); 
            });`);


fs.writeFileSync('klasspuls_glosor.html', html);
