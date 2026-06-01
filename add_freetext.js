const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

// Add the new questions to the array
const newQuestions = `        { 
            num: 15, 
            type: "freetext", 
            text: "Den process där växter tillverkar socker och syre med hjälp av solljus, koldioxid och vatten kallas för <span class='blank'></span>.", 
            correctAnswers: ["fotosyntes", "fotosyntesen", "fotosyntes "],
            specificErrors: [
                { trigger: ["cellandning", "cellandningen"], feedback: "Nej, cellandning är motsatsen! Det är när djur (och växter) FÖRBRÄNNER sockret för att få energi. Kolla s. 4 i häftet." },
                { trigger: ["klorofyll"], feedback: "Klorofyll är visserligen det gröna ämnet i bladen som FÅNGAR solljuset, men vad heter själva processen/tillverkningen?" }
            ],
            feedbackOk: "Korrekt! Fotosyntesen är grunden för nästan allt liv på Jorden.", 
            feedbackNok: "Det rätta svaret är FOTOSYNTES. Detta är den absolut viktigaste reaktionen på jorden. Läs mer på s. 4 i häftet!" 
        },
        { 
            num: 16, 
            type: "freetext", 
            text: "Alla individer av en och samma art som lever i ett visst område (t.ex. alla harar i en skog) kallas gemensamt för en <span class='blank'></span>.", 
            correctAnswers: ["population", "populationen", "popolation"],
            specificErrors: [
                { trigger: ["art", "arten"], feedback: "Nästan! 'Art' beskriver vilken typ av djur det är globalt, men när vi pratar om en specifik grupp av samma art i just en skog använder vi ett annat ord på P. Kolla s. 1." },
                { trigger: ["samhälle", "ekologiskt samhälle"], feedback: "Ett samhälle består av MÅNGA olika arter (både harar, rådjur, ekar etc). Om vi bara tittar på EN art är det en...?" },
                { trigger: ["ekosystem"], feedback: "Ett ekosystem inkluderar även det abiotiska (stenar, regn, solljus). Vi söker ordet för en grupp av samma art." }
            ],
            feedbackOk: "Helt rätt! Population är det ord biologer använder för att studera hur antalet individer av en art ökar eller minskar.", 
            feedbackNok: "Det rätta svaret är POPULATION. Om du missade detta, repetera de grundläggande begreppen på s. 1 i häftet." 
        },
        { 
            num: 17, 
            type: "freetext", 
            text: "I naturen äter många djur flera olika saker. När flera näringskedjor flätas samman och korsar varandra kallas det för en <span class='blank'></span>.", 
            correctAnswers: ["näringsväv", "näringsväven", "neringsväv"],
            specificErrors: [
                { trigger: ["näringskedja", "näringskedjan", "neringskedja"], feedback: "En näringskedja är bara en enda rak linje (Gräs -> Hare -> Räv). Vad kallas det när flera sådana kedjor flätas ihop till ett nät?" },
                { trigger: ["ekosystem"], feedback: "Det sker i ett ekosystem, men vi söker det specifika begreppet för 'mat-kartan' där streck går kors och tvärs mellan alla djur och växter." },
                { trigger: ["näringspyramid"], feedback: "Näringspyramiden visar hur ENERGIN försvinner på vägen upp. Vi söker ordet för det nätverk som visar vem som äter vem." }
            ],
            feedbackOk: "Snyggt! En näringsväv ger en mycket mer realistisk bild av naturen än en enkel kedja.", 
            feedbackNok: "Det rätta svaret är NÄRINGSVÄV. Tänk dig det som ett spindelnät av matvanor! Kolla s. 3 i häftet." 
        }
    ];`;

html = html.replace(/\];\s*let currentQ = -1;/, ",\n" + newQuestions + "\n\n    let currentQ = -1;");

// Update renderTeacherPanel preview HTML
html = html.replace(/} else if\(q\.type === 'match'\) \{/, `} else if(q.type === 'freetext') {
                            previewHTML = \`<div style="font-size:0.85rem; color:#9ca3af; margin-bottom:1rem; padding-left:0.8rem; border-left:2px solid rgba(255,255,255,0.1);">
                                <div><strong>✅ Rätt:</strong> \${q.correctAnswers.join(', ')}</div>
                                \${q.specificErrors.map(e => \`<div style="color:#fca5a5; margin-top:0.3rem;"><strong>❌ Vid '\${e.trigger.join('/')}':</strong> \${e.feedback}</div>\`).join('')}
                            </div>\`;
                        } else if(q.type === 'match') {`);

// Update instructionText in showQuestion
html = html.replace(/else if \(q\.type === 'lucktext'\) instructionText = "👆 Tryck på det alternativ som passar bäst i luckan\.";/, `else if (q.type === 'lucktext') instructionText = "👆 Tryck på det alternativ som passar bäst i luckan.";
            else if (q.type === 'freetext') instructionText = "⌨️ Skriv in det ord som saknas i luckan och tryck på Svara.";`);

// Update showQuestion rendering logic
html = html.replace(/else if \(q\.type === 'match'\) \{/, `else if (q.type === 'freetext') {
                contentHTML += \`<div class="freetext-container" style="display:flex; flex-direction:column; gap:1rem; align-items:center; margin-top:1rem;">
                    <input type="text" id="freetextInput" placeholder="Skriv ditt ord här..." style="width:100%; max-width:400px; padding:1.2rem; font-size:1.5rem; text-align:center; border-radius:12px; border:2px solid rgba(255,255,255,0.2); background:rgba(0,0,0,0.4); color:#fff; font-weight:bold; outline:none;" autocomplete="off" onkeydown="if(event.key==='Enter') submitFreetext()">
                    <button onclick="submitFreetext()" style="width:100%; max-width:400px; padding:1.2rem; font-size:1.2rem; font-weight:bold; border-radius:12px; background:var(--primary); color:#fff; border:none; cursor:pointer;">Svara / Rätta</button>
                </div>\`;
            }
            else if (q.type === 'match') {`);

// Add submitFreetext function
const freetextLogic = `
    /* --- FREETEXT LOGIC --- */
    window.submitFreetext = function() {
        if (answers[currentQ] !== undefined) return;
        const q = questions[currentQ];
        const inputEl = document.getElementById('freetextInput');
        const ans = inputEl.value.trim().toLowerCase();
        if (ans === "") return;
        
        inputEl.disabled = true;
        
        let isCorrect = false;
        let specificFeedback = null;
        
        if (q.correctAnswers.some(c => c.toLowerCase() === ans)) {
            isCorrect = true;
        } else {
            // Check specific errors
            for (let err of q.specificErrors) {
                if (err.trigger.some(t => t.toLowerCase() === ans)) {
                    specificFeedback = err.feedback;
                    break;
                }
            }
        }
        
        answers[currentQ] = isCorrect;
        sendStat(isCorrect ? 'ok' : 'nok');
        
        const fb = document.getElementById('fb');
        fb.className = 'feedback show ' + (isCorrect ? 'ok' : 'nok');
        
        if (isCorrect) {
            fb.innerHTML = '✓ ' + q.feedbackOk;
            inputEl.style.borderColor = 'var(--correct)';
            inputEl.style.color = 'var(--correct)';
        } else {
            fb.innerHTML = '✗ ' + (specificFeedback ? specificFeedback : q.feedbackNok);
            inputEl.style.borderColor = 'var(--incorrect)';
            inputEl.style.color = 'var(--incorrect)';
        }
        
        if (!isSyncMode) document.getElementById('nextBtn').classList.add('show');
        else document.getElementById('syncWaitMsg').style.display = 'block';
    };
`;

html = html.replace(/function selectMC\(el, val\) \{/, freetextLogic + "\n    function selectMC(el, val) {");

fs.writeFileSync('klasspuls_glosor.html', html);
