const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

// 1. OFFLINE BANNER CSS & HTML
html = html.replace(/<\/style>/, `    #offlineBanner { position: fixed; top: 0; left: 0; right: 0; background: #ef4444; color: #fff; text-align: center; padding: 0.5rem; font-weight: bold; z-index: 9999; display: none; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }\n    </style>`);
html = html.replace(/<body>/, `<body>\n    <div id="offlineBanner">📡 Tappat anslutningen! Försöker återansluta...</div>`);

// 2. OFFLINE LOGIC IN getGlobalQ
html = html.replace(/async function getGlobalQ\(\) \{/, `let offlineCount = 0;\n    async function getGlobalQ() {`);
html = html.replace(/const res = await fetch/, `offlineCount = 0; document.getElementById('offlineBanner').style.display = 'none';\n            const res = await fetch`);
html = html.replace(/} catch\(e\) { console.error\(e\); return { q: -1, msgColor: 'none', msgText: '', sessionId: '' }; }/, 
`} catch(e) { 
            offlineCount++; 
            if(offlineCount > 1) document.getElementById('offlineBanner').style.display = 'block';
            console.error(e); return { q: -1, msgColor: 'none', msgText: '', sessionId: '' }; 
        }`);

// 3. EPA TIMER LOGIC
html = html.replace(/if \(state\.msgColor && state\.msgColor !== 'none'\) \{[\s\S]*?\} else \{ msgOverlay\.style\.display = 'none'; \}/,
`if (state.msgColor && state.msgColor !== 'none') {
                msgOverlay.style.display = 'flex';
                if (state.msgText === 'EPA60') {
                    if (!window._epaInterval) {
                        window._epaEndTime = Date.now() + 60000;
                        window._epaInterval = setInterval(() => {
                            let left = Math.round((window._epaEndTime - Date.now()) / 1000);
                            if(left <= 0) { left = 0; clearInterval(window._epaInterval); }
                            document.getElementById('fullScreenMsgText').innerHTML = \`🗣️ Diskutera med grannen!<br><br><span style="font-size:5rem; font-weight:900;">\${left}</span><br><span style="font-size:1.5rem;">sekunder kvar</span>\`;
                        }, 1000);
                        document.getElementById('fullScreenMsgText').innerHTML = \`🗣️ Diskutera med grannen!<br><br><span style="font-size:5rem; font-weight:900;">60</span><br><span style="font-size:1.5rem;">sekunder kvar</span>\`;
                    }
                    msgOverlay.style.background = 'rgba(109, 40, 217, 0.95)'; // Purple
                } else {
                    if(window._epaInterval) { clearInterval(window._epaInterval); window._epaInterval = null; }
                    document.getElementById('fullScreenMsgText').textContent = state.msgText;
                    msgOverlay.style.background = state.msgColor === 'red' ? '#ef4444' : (state.msgColor === 'blue' ? '#3b82f6' : '#1f2937');
                }
            } else { 
                msgOverlay.style.display = 'none'; 
                if(window._epaInterval) { clearInterval(window._epaInterval); window._epaInterval = null; }
            }`);

// 4. ADD EPA BUTTON TO TEACHER PANEL
html = html.replace(/<button onclick="pushMessageUI\('red', 'Var Tysta!'\)"[^>]*>.*?<\/button>/, 
`$&
                    <button onclick="pushMessageUI('purple', 'EPA60')" style="background:rgba(139, 92, 246, 0.2); border:1px solid rgba(139, 92, 246, 0.5); color:#ddd6fe; padding:0.8rem; border-radius:8px; cursor:pointer;">🗣️ EPA (60s)</button>`);

// 5. HAPTIC FEEDBACK
html = html.replace(/fb\.innerHTML = '✓ ' \+ q\.feedbackOk;/, `$& if(navigator.vibrate) navigator.vibrate([100]);`);
html = html.replace(/fb\.innerHTML = '✗ ' \+ \(\(q\.type === 'match' \|\| q\.type === 'categorize'\) \? q\.feedbackNok : \(_ans \?\?\? q\.feedbackNok\)\);/g, 
`$& if(navigator.vibrate) navigator.vibrate([50,100,50]);`);
html = html.replace(/fb\.innerHTML = '✗ ' \+ \(specificFeedback \? specificFeedback : q\.feedbackNok\);/, 
`$& if(navigator.vibrate) navigator.vibrate([50,100,50]);`);

// Fix the missing variable error from regex substitution
html = html.replace(/_ans \?\?\? q\.feedbackNok/g, `o.text + " är fel. " + q.feedbackNok`);
// Actually, let's just do a simpler search and replace for haptics to be safe.
html = html.replace(/inputEl\.style\.borderColor = 'var\(--correct\)';/, `$& if(navigator.vibrate) navigator.vibrate([100]);`);
html = html.replace(/inputEl\.style\.borderColor = 'var\(--incorrect\)';/, `$& if(navigator.vibrate) navigator.vibrate([50,100,50]);`);


// 6. TEACHER HISTORY LOG UI
const historyHTML = `
                <div style="margin-top:2rem; border-top:1px solid rgba(255,255,255,0.1); padding-top:1rem;">
                    <h4 style="color:var(--text-muted); margin-bottom:1rem; text-transform:uppercase; letter-spacing:1px; font-size:0.85rem;">Historik (Denna klass)</h4>
                    <div id="teacherHistoryList" style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem;"></div>
                </div>
`;
html = html.replace(/<div class="opt" onclick="pushQuestion\(999\)"/, historyHTML + '\n                $&');

const historyLogic = `
    let sessionHistory = {};
    window.saveHistory = function(idx) {
        if(idx < 0 || !questions[idx]) return;
        const q = questions[idx];
        let stats = "";
        if(q.type === 'multiple-choice') {
            stats = q.options.map(o => {
                const el = document.getElementById(\`stat_\${idx}_opt_\${o.letter}\`);
                return o.letter + ": " + (el ? el.innerText : '0');
            }).join(' | ');
        } else {
            const ok = document.getElementById(\`stat_\${idx}_ok\`);
            const nok = document.getElementById(\`stat_\${idx}_nok\`);
            stats = "Rätt: " + (ok ? ok.innerText : '0') + " | Fel: " + (nok ? nok.innerText : '0');
        }
        sessionHistory[idx] = \`<div style="background:rgba(255,255,255,0.03); padding:0.8rem; border-radius:8px; border-left:3px solid var(--primary);">
            <strong style="color:#fff;">Fråga \${q.num}:</strong> <span style="color:#9ca3af;">\${stats}</span>
        </div>\`;
        renderHistory();
    };
    function renderHistory() {
        const el = document.getElementById('teacherHistoryList');
        if(!el) return;
        el.innerHTML = Object.values(sessionHistory).reverse().join('');
    }
`;
html = html.replace(/window\.pushMessage = async function\(color, text\) \{/, historyLogic + '\n    window.pushMessage = async function(color, text) {');

html = html.replace(/currentMsgColor = 'none'; currentMsgText = ''; window\._lastPushedIndex = idx;/, 
`if(window._lastPushedIndex !== undefined && window._lastPushedIndex > -1 && window._lastPushedIndex !== idx) {
            saveHistory(window._lastPushedIndex);
        }
        currentMsgColor = 'none'; currentMsgText = ''; window._lastPushedIndex = idx;`);


fs.writeFileSync('klasspuls_glosor.html', html);
