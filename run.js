const document = { getElementById: () => ({ style: {}, classList: { add: () => {}, remove: () => {} } }), querySelectorAll: () => [] };
const window = { location: { search: '' } };
const URLSearchParams = class { constructor() {} get() { return null; } };
const fetch = async () => {};
    
    const APP_KEY = "HakanGlosPuls_Ekologi2026_v1"; // Unik synknyckel
    const BASE_URL = "https://keyvalue.immanuel.co/api/KeyVal";
    let currentSessionId = Date.now().toString();

    // --- TWO-WAY STATS API ---
    async function sendStat(type) {
        if(isTeacher) return;
        try {
            await fetch(`https://api.counterapi.dev/v1/${APP_KEY}_${currentSessionId}/Q${currentQ}_${type}/up`);
        } catch(e) { console.warn("Stat sync failed", e); } // Graceful degradation
    }

const questions = [
        { 
            num: 1, 
            type: "lucktext", 
            text: "Ordet ekologi kommer från grekiskans 'Oikos' (hus) och 'logos' (läran om). Ekologi betyder alltså läran om <span class='blank'></span>.", 
            options: [{letter: "A", text: "Djuren"}, {letter: "B", text: "Huset (Jorden)"}, {letter: "C", text: "Växterna"}, {letter: "D", text: "Rymden"}],
            correct: "B", 
            feedbackOk: "Exakt! Jorden är vårt gemensamma hus. Läs mer på s. 1 i häftet '14. Ekologi'.", 
            feedbackNok: "Ledtråd: Tänk på ordet 'Oikos'. Vi bor alla på Jorden, som är vårt gemensamma... vadå? Kolla s. 1 i häftet!" 
        },
        { 
            num: 2, 
            type: "categorize", 
            text: "Sortera faktorerna i rätt ekologisk hink!", 
            categories: ["Abiotisk (Icke-levande)", "Biotisk (Levande)"], 
            items: [
                {word: "Solljus", cat: 0},
                {word: "Temperatur", cat: 0},
                {word: "Rovdjur", cat: 1},
                {word: "Bakterier", cat: 1},
                {word: "Vind", cat: 0}
            ], 
            feedbackOk: "Klockrent! A- betyder 'icke' (abiotisk = icke-levande). Dessa faktorer styr tillsammans ekosystemet (se s. 1-2 i häftet).", 
            feedbackNok: "Minnesregel: Sätt ett A framför så betyder det 'icke'. Abiotisk = Icke-levande. Kolla s. 1 i häftet!" 
        },
        { 
            num: 3, 
            type: "match", 
            text: "Koppla ihop rätt nivå i ekosystemet!", 
            pairs: [
                {left: "Biotop", right: "Själva naturtypen (t.ex. en stubbe eller granskog)"}, 
                {left: "Population", right: "Alla individer av SAMMA art i ett område"}, 
                {left: "Samhälle", right: "Alla OLIKA arter som lever tillsammans"}
            ], 
            feedbackOk: "Snyggt! Kom ihåg: Ett ekosystem = Samhället + Miljön (Biotopen). Repetera gärna detta på s. 1-2 i häftet.", 
            feedbackNok: "Ledtråd: Ordet population betyder 'befolkning' (bara en art). Ett samhälle är när FLERA arter lever ihop (s. 1-2 i häftet)." 
        },
        { 
            num: 4, 
            type: "multiple-choice", 
            text: "Vad är skillnaden mellan en näringskedja och en näringsväv?", 
            options: [
                {letter: "A", text: "En näringskedja har flera toppkonsumenter, en väv har bara en."}, 
                {letter: "B", text: "En näringsväv är flera korsande näringskedjor som sitter ihop."}, 
                {letter: "C", text: "Näringsvävar finns bara i havet, näringskedjor på land."}, 
                {letter: "D", text: "Det är exakt samma sak."}
            ], 
            correct: "B", 
            feedbackOk: "Helt rätt! I naturen är det sällan raka rör. En räv kan äta både möss, bär och harar. (Läs mer på s. 8-9 i häftet).", 
            feedbackNok: "Tänk på ordet 'väv' (som en spindelväv med många korsande trådar). I naturen äter ju rovdjur flera olika saker. Kolla bilderna på s. 9!" 
        },
        { 
            num: 5, 
            type: "match", 
            text: "Koppla ihop rätt roll i näringskedjan!", 
            pairs: [
                {left: "Producent", right: "Bygger sin egen mat (fotosyntes)"}, 
                {left: "Konsument", right: "Måste äta andra för att få energi"}, 
                {left: "Toppkonsument", right: "Saknar naturliga fiender"}
            ], 
            feedbackOk: "Helt rätt! Producenten (växten) skapar basen, konsumenterna äter den, och toppkonsumenten regerar högst upp. Läs mer på s. 8.", 
            feedbackNok: "Minnesregel: 'Producera' = tillverka egen mat (växter). 'Konsumera' = äta upp (djur). Kolla s. 8 i häftet!" 
        },
        { 
            num: 6, 
            type: "lucktext", 
            text: "Utan <span class='blank'></span> (svampar & bakterier) skulle kretsloppet stanna av. De städar upp döda växter och djur så näringen kan användas igen.", 
            options: [{letter: "A", text: "Toppkonsumenter"}, {letter: "B", text: "Producenter"}, {letter: "C", text: "Nedbrytare"}, {letter: "D", text: "Parasiter"}],
            correct: "C", 
            feedbackOk: "Snyggt! Nedbrytarna är naturens återvinningsstation. Viktigt för kolets kretslopp (se s. 7 i häftet).", 
            feedbackNok: "Vilka är det som bryter ner dött material i naturen (maskar, svampar...)? Ordet börjar på N. Kolla s. 7 i häftet!" 
        },
        { 
            num: 7, 
            type: "categorize", 
            text: "Kategorisera vilket typ av samspel (symbios) det är!", 
            categories: ["Mutualism (+/+)", "Parasitism (+/-)"], 
            items: [
                {word: "Mykorrhiza (Svamp+Träd)", cat: 0},
                {word: "Tarmbakterier i oss", cat: 0},
                {word: "Fästing på en hund", cat: 1},
                {word: "Bandmask", cat: 1}
            ], 
            feedbackOk: "Korrekt! Mutualism gynnar båda (ömsesidigt), medan parasiten stjäl energi. Bra minne från genomgången (och anteckningarna)!", 
            feedbackNok: "Ledtråd: En parasit är någon som tar utan att ge (+/-). Mutualism betyder 'ömsesidig' — båda vinner (+/+). Kolla dina egna anteckningar!" 
        },
        { 
            num: 8, 
            type: "multiple-choice", 
            text: "Vad menas med en arts 'Ekologiska Nisch'?", 
            options: [
                {letter: "A", text: "Platsen där den bygger sitt bo."}, 
                {letter: "B", text: "Den typ av miljö (biotop) den lever i."}, 
                {letter: "C", text: "Artens 'yrke' och specialisering i ekosystemet."}, 
                {letter: "D", text: "Hur många ungar den får per år."}
            ], 
            correct: "C", 
            feedbackOk: "Rätt! Genom att ha olika 'yrken' (nischer) slipper arterna konkurrera med varandra. Tänk på Talgoxen och Blåmesen från lektionen!", 
            feedbackNok: "Tänk på exemplet med Talgoxen och Blåmesen som letar insekter på olika tjocka grenar. De har olika 'yrken' för att slippa konkurrera." 
        },
        { 
            num: 9, 
            type: "categorize", 
            text: "Bioackumulation innebär att miljögifter koncentreras i pyramiden. Sortera var de har LÄGST resp. HÖGST koncentration av gift!", 
            categories: ["Låg gifthalt (Botten)", "Hög gifthalt (Toppen)"], 
            items: [
                {word: "Isbjörn / Toppkonsument", cat: 1},
                {word: "Växtplankton / Producent", cat: 0},
                {word: "Havsörn", cat: 1},
                {word: "Gräs", cat: 0}
            ], 
            feedbackOk: "Mycket bra! Gifter förbränns inte, de lagras i fettet. Därför drabbas rovdjuren längst upp värst. Repetera detta från H.Pod #3 och utdelat papper!", 
            feedbackNok: "Minnesregel: Eftersom rovdjuret måste äta MÅNGA byten, samlas (ackumuleras) alla bytenas gifter i ETT rovdjur. Kolla H.Pod #3!" 
        },
        { 
            num: 10, 
            type: "lucktext", 
            text: "När cellandning och fotosyntes jobbar ihop går materiens atomer runt i ett evigt <span class='blank'></span>.", 
            options: [{letter: "A", text: "Samhälle"}, {letter: "B", text: "Kretslopp"}, {letter: "C", text: "Ekosystem"}, {letter: "D", text: "Biotop"}],
            correct: "B", 
            feedbackOk: "Bra! Kolatomerna återvinns om och om igen. Naturen kastar inget. Läs om vattnets och kolets kretslopp på s. 7.", 
            feedbackNok: "Tänk på ordet för när något återvinns och går runt i en slinga (naturens egen återvinning). Ordet börjar på K. (s. 7 i häftet)." 
        },
        { 
            num: 11, 
            type: "match", 
            text: "Vi dök ju ner i 'Symbios' (samliv). Koppla rätt begrepp till förklaringen!", 
            pairs: [
                {left: "Mutualism (+/+)", right: "Båda arterna vinner på det (t.ex. lav = alg + svamp)"}, 
                {left: "Kommensalism (+/0)", right: "Ena vinner, den andra bryr sig inte (t.ex. havstulpan på val)"}, 
                {left: "Parasitism (+/-)", right: "Ena vinner, den andra skadas (t.ex. fästing på hund)"}
            ], 
            feedbackOk: "Grymt! Detta var en fördjupning som ni tränat mycket på. Kommensalism (snålskjuts) är vanligare än man tror. Repetera lektionsanteckningarna!", 
            feedbackNok: "Minnesregel: Parasit är ju ett välkänt ord (-). Mutual kommer från engelskans 'ömsesidig' (+). Det konstiga ordet Kommensalism betyder då (+/0)." 
        },
        { 
            num: 12, 
            type: "multiple-choice", 
            text: "Ni minns NP-uppgiften om Vargen: Vargarna försvinner → Hjortarna ökar → Skogen betas sönder. Vad kallar biologer en sådan kedjereaktion?", 
            options: [
                {letter: "A", text: "En kaskadeffekt"}, 
                {letter: "B", text: "En bioackumulation"}, 
                {letter: "C", text: "En parasitism"}, 
                {letter: "D", text: "En ekologisk nisch"}
            ], 
            correct: "A", 
            feedbackOk: "Exakt! 'Kaskad' betyder vattenfall. Precis som ett vattenfall rinner förändringen hela vägen ner från toppen (vargen) till botten (växterna). Snyggt jobbat!", 
            feedbackNok: "Ledtråd: Leta efter ett ord som låter som 'vattenfall'. Förändringen på toppen rinner ner genom hela systemet som ett dominospel." 
        },
        { 
            num: 13, 
            type: "lucktext", 
            text: "Varje nytt steg i en näringskedja (t.ex. från producent till konsument) brukar med ett finare ord kallas för en <span class='blank'></span>.", 
            options: [{letter: "A", text: "Ekologisk nisch"}, {letter: "B", text: "Bioackumulation"}, {letter: "C", text: "Trofinivå"}, {letter: "D", text: "Biotop"}],
            correct: "C", 
            feedbackOk: "Snyggt! Och för varje ny trofinivå går 90% av energin förlorad som värme (10%-regeln). Läs mer om trofinivåer på s. 8 i häftet.", 
            feedbackNok: "Ordet börjar på T och handlar om nivån (trappsteget) i näringspyramiden. Du kan läsa om detta på s. 8 i häftet." 
        },
        { 
            num: 14, 
            type: "categorize", 
            text: "The Jenga-Crash! Sortera exemplen efter om de har HÖG eller LÅG biologisk mångfald.", 
            categories: ["Hög Mångfald", "Låg Mångfald"], 
            items: [
                {word: "En gammelskog med många biotoper", cat: 0},
                {word: "Ett stort korallrev", cat: 0},
                {word: "En veteåker", cat: 1},
                {word: "En asfalterad skolgård", cat: 1}
            ], 
            feedbackOk: "Korrekt! Hög biologisk mångfald är som ett brett Jenga-torn — det tål mycket stryk (sjukdomar) innan det rasar. Läs om detta på s. 2 i häftet.", 
            feedbackNok: "Tänk Jenga-tornet från lektion 3! Biologisk mångfald betyder MÅNGA OLIKA arter. En veteåker har ju bara EN art. Kolla s. 2 i häftet." 
        }
    ];

    let currentQ = -1; 
    let highestActivated = -1;
    let answers = {};
    let isSyncMode = false;
    let syncInterval = null;
    let currentMsgColor = 'none';
    let currentMsgText = '';

    const card = document.getElementById('card');
    const progressBar = document.getElementById('progressBar');
    const stepIndicator = document.getElementById('stepIndicator');
    const stepCurrent = document.getElementById('stepCurrent');
    document.getElementById('stepTotal').textContent = questions.length;
    const msgOverlay = document.getElementById('fullScreenMsg');

    const urlParams = new URLSearchParams(window.location.search);
    const isTeacher = urlParams.get('mode') === 'teacher';

    /* --- HEX ENCODING --- */
    function strToHex(str) { return Array.from(new TextEncoder().encode(str)).map(b => b.toString(16).padStart(2, '0')).join(''); }
    function hexToStr(hex) {
        const bytes = new Uint8Array(Math.ceil(hex.length / 2));
        for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
        return new TextDecoder().decode(bytes);
    }

    /* --- API --- */
    async function setGlobalQ(qIndex) {
        try {
            const msgHex = currentMsgColor === 'none' ? 'none' : strToHex(currentMsgText);
            const stateStr = qIndex + "_true_" + currentMsgColor + "_" + msgHex + "_" + currentSessionId;
            await fetch(`${BASE_URL}/UpdateValue/${APP_KEY}/syncState/${stateStr}`, { method: 'POST', mode: 'cors' });
        } catch(e) { console.error(e); }
    }

    async function getGlobalQ() {
        try {
            const res = await fetch(`${BASE_URL}/GetValue/${APP_KEY}/syncState`);
            const text = await res.text();
            if(!text || text.includes('not found')) return { q: -1, msgColor: 'none', msgText: '', sessionId: '' };
            const parts = text.replace(/"/g, '').trim().split('_');
            let result = { q: parseInt(parts[0]) || -1, msgColor: 'none', msgText: '', sessionId: '' };
            if(parts.length >= 4) {
                result.msgColor = parts[2];
                if(parts[3] !== 'none') result.msgText = hexToStr(parts[3]);
            }
            if(parts.length >= 5) {
                result.sessionId = parts[4];
            }
            return result;
        } catch(e) { return { q: -1, msgColor: 'none', msgText: '', sessionId: '' }; }
    }

    /* --- SYNC MODE --- */
    function startSyncMode() {
        isSyncMode = true; currentQ = -1; highestActivated = -1; answers = {};
        card.innerHTML = `<div class="intro"><div class="badge">Live-Synk Aktiv</div><div class="emoji" style="font-size:4rem; margin:1rem 0;">⏳</div><h1>Låst skärm</h1><p class="sub">Väntar på att Håkan ska pusha ut första frågan...</p></div>`;
        syncInterval = setInterval(async () => {
            const state = await getGlobalQ();
            
            if (state.sessionId) currentSessionId = state.sessionId;
            
            // Handle Messages
            if (state.msgColor && state.msgColor !== 'none') {
                msgOverlay.style.display = 'flex';
                document.getElementById('fullScreenMsgText').textContent = state.msgText;
                msgOverlay.style.background = state.msgColor === 'red' ? '#ef4444' : (state.msgColor === 'blue' ? '#3b82f6' : '#1f2937');
            } else { msgOverlay.style.display = 'none'; }

            if (state.q === 999) return showResults();

            if (state.q > highestActivated && state.q !== 999) highestActivated = state.q;

            if ((state.q > currentQ && answers[currentQ] !== undefined) || (currentQ === -1 && state.q > -1)) {
                currentQ = state.q; showQuestion(currentQ);
            } else if (state.q === -1 && currentQ !== -1) {
                currentQ = -1; highestActivated = -1; answers = {};
                card.innerHTML = `<div class="intro"><div class="emoji" style="font-size:4rem; margin-bottom:1rem;">⏳</div><h2>Väntar...</h2><p class="sub">Lektionen har nollställts.</p></div>`;
            }
        }, 2000);
    }

    function renderIntro() {
        stepIndicator.style.display = 'none'; progressBar.style.width = '0%';
        if (isTeacher) return renderTeacherPanel();
        card.innerHTML = `
            <div class="intro">
                <div class="badge">Glosförhör: Självdiagnos</div>
                <h1>KlassPuls: Ekologi</h1>
                <p class="sub">En "Tap-to-Select"-avstämning på glosorna från de tre första veckorna.</p>
                <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
                    <button class="start-btn show" style="width:auto; padding: 1rem 2.5rem;" onclick="startSyncMode()">🔗 Gå med i klassrummet</button>
                    <button class="retry-btn" style="margin-top:0;" onclick="startSoloMode()">Öva ensam</button>
                </div>
            </div>`;
    }

    function startSoloMode() {
        isSyncMode = false; currentQ = 0; highestActivated = questions.length - 1; answers = {};
        showQuestion(0);
    }

    /* --- SHUFFLE ARRAY HELPER --- */
    function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

    /* --- RENDERING ENGINE --- */
    let matchState = { left: null, completed: {} };
    let catState = { placements: {} };

    function showQuestion(idx) {
        stepIndicator.style.display = 'block'; stepCurrent.textContent = idx + 1;
        progressBar.style.width = ((idx) / questions.length * 100) + '%';
        const q = questions[idx];
        
        card.classList.add('exit-left');
        setTimeout(() => {
            card.classList.remove('exit-left'); card.classList.add('enter-right');
            
            let contentHTML = `<div class="q-number">Fråga ${q.num} av ${questions.length}</div><div class="q-text">${q.text}</div>`;
            
            if (q.type === 'multiple-choice' || q.type === 'lucktext') {
                contentHTML += `<div class="options">
                    ${q.options.map(o => `<div class="opt" onclick="selectMC(this, '${o.letter}')"><span class="letter">${o.letter}</span><span>${o.text}</span></div>`).join('')}
                </div>`;
            } 
            else if (q.type === 'match') {
                matchState = { left: null, completed: {} };
                const lefts = shuffle(q.pairs.map(p => p.left));
                const rights = shuffle(q.pairs.map(p => p.right));
                contentHTML += `<div class="match-container">
                    <div class="match-col"><div class="match-col-title">Begrepp</div>
                        ${lefts.map(l => `<div class="match-item left-item" data-val="${l}" onclick="selectMatchLeft(this)">${l}</div>`).join('')}
                    </div>
                    <div class="match-col"><div class="match-col-title">Förklaring</div>
                        ${rights.map(r => `<div class="match-item right-item" data-val="${r}" onclick="selectMatchRight(this)">${r}</div>`).join('')}
                    </div>
                </div>`;
            }
            else if (q.type === 'categorize') {
                catState = { placements: {} };
                const words = shuffle(q.items.map(i => i.word));
                contentHTML += `
                    <div class="cat-buckets">
                        ${q.categories.map((c, i) => `<div class="bucket" data-cat="${i}" onclick="selectBucket(this)"><div class="bucket-title">${c}</div></div>`).join('')}
                    </div>
                    <div class="cat-items">
                        ${words.map(w => `<div class="chip" data-val="${w}" onclick="selectCatChip(this)">${w}</div>`).join('')}
                    </div>`;
            }

            contentHTML += `
                <div class="feedback" id="fb"></div>
                ${!isSyncMode ? `<button class="next-btn" id="nextBtn" onclick="nextQuestion()">${idx < questions.length - 1 ? 'Nästa Fråga →' : 'Visa Resultat →'}</button>` : `<div id="syncWaitMsg" style="display:none; text-align:center; margin-top:2rem; color:var(--text-muted); font-weight:600;">Svar registrerat! ⏳ Väntar på Håkan...</div>`}
            `;
            
            card.innerHTML = contentHTML;
            requestAnimationFrame(() => { requestAnimationFrame(() => { card.classList.remove('enter-right'); }); });
        }, 300);
    }

    function evaluateAnswer(isCorrect) {
        answers[currentQ] = isCorrect;
        const q = questions[currentQ];
        
        if (q.type !== 'multiple-choice' && q.type !== 'lucktext') {
            sendStat(isCorrect ? 'ok' : 'nok');
        }

        const fb = document.getElementById('fb');
        fb.className = 'feedback show ' + (isCorrect ? 'ok' : 'nok');
        fb.innerHTML = isCorrect ? '✓ ' + q.feedbackOk : '✗ ' + q.feedbackNok;
        if (!isSyncMode) document.getElementById('nextBtn').classList.add('show');
        else document.getElementById('syncWaitMsg').style.display = 'block';
    }

    /* --- MULTIPLE CHOICE & LUCKTEXT --- */
    function selectMC(el, val) {
        if (answers[currentQ] !== undefined) return;
        const q = questions[currentQ];
        const isCorrect = val === q.correct;
        
        sendStat('opt_' + val);
        
        document.querySelectorAll('.opt').forEach(o => {
            o.style.cursor = 'default';
            if (o.dataset.val === q.correct || o.querySelector('.letter').innerText === q.correct) o.classList.add('correct-opt');
            else if (o === el && !isCorrect) o.classList.add('wrong-opt');
            else o.classList.add('dimmed');
        });
        evaluateAnswer(isCorrect);
    }

    /* --- MATCH UI LOGIC --- */
    let matchColors = ['matched-0', 'matched-1', 'matched-2', 'matched-3'];
    function selectMatchLeft(el) {
        if (answers[currentQ] !== undefined || el.classList.contains('matched')) return;
        document.querySelectorAll('.left-item').forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
        matchState.left = el.dataset.val;
    }
    function selectMatchRight(el) {
        if (answers[currentQ] !== undefined || el.classList.contains('matched') || !matchState.left) return;
        const q = questions[currentQ];
        
        // Mark as matched
        const leftEl = document.querySelector(`.left-item[data-val="${matchState.left}"]`);
        const colorClass = matchColors[Object.keys(matchState.completed).length % matchColors.length];
        
        leftEl.classList.remove('selected');
        leftEl.classList.add('matched', colorClass);
        el.classList.add('matched', colorClass);
        
        matchState.completed[matchState.left] = el.dataset.val;
        matchState.left = null;

        if (Object.keys(matchState.completed).length === q.pairs.length) {
            let allCorrect = true;
            for (let term in matchState.completed) {
                const pair = q.pairs.find(p => p.left === term);
                if (!pair || pair.right !== matchState.completed[term]) allCorrect = false;
            }
            evaluateAnswer(allCorrect);
        }
    }

    /* --- CATEGORIZE UI LOGIC --- */
    let catSelected = null;
    function selectCatChip(el) {
        if (answers[currentQ] !== undefined) return;
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        catSelected = el;
    }
    function selectBucket(el) {
        if (answers[currentQ] !== undefined || !catSelected) return;
        el.appendChild(catSelected);
        catSelected.classList.remove('selected');
        catState.placements[catSelected.dataset.val] = parseInt(el.dataset.cat);
        catSelected = null;

        const q = questions[currentQ];
        if (Object.keys(catState.placements).length === q.items.length) {
            let allCorrect = true;
            for (let word in catState.placements) {
                const item = q.items.find(i => i.word === word);
                if (!item || item.cat !== catState.placements[word]) allCorrect = false;
            }
            evaluateAnswer(allCorrect);
        }
    }

    function nextQuestion() {
        if (currentQ < questions.length - 1) showQuestion(++currentQ);
        else showResults();
    }

    function showResults() {
        if(syncInterval) clearInterval(syncInterval);
        progressBar.style.width = '100%'; stepIndicator.style.display = 'none'; msgOverlay.style.display = 'none';
        
        let totalPossible = Math.max(0, highestActivated + 1);
        if (totalPossible === 0) return card.innerHTML = '<div class="results"><h2>Inga frågor besvarades.</h2></div>';

        let score = 0, resultRows = '';
        for(let i=0; i < totalPossible; i++) {
            const ok = answers[i] === true;
            if (ok) score++;
            resultRows += `<div class="result-row ${ok ? 'ok' : 'nok'}"><span class="result-icon">${ok ? '✓' : '✗'}</span><span>Fråga ${questions[i].num}: ${ok ? 'Rätt' : 'Fel'}</span></div>`;
        }

        const pct = score / totalPossible;
        const emoji = pct === 1 ? '🌟' : (pct >= 0.6 ? '💚' : (pct >= 0.3 ? '🌱' : '📖'));
        const title = pct === 1 ? 'Full pott!' : (pct >= 0.6 ? 'Snyggt!' : 'På god väg!');

        card.classList.add('exit-left');
        setTimeout(() => {
            card.classList.remove('exit-left'); card.classList.add('enter-right');
            card.innerHTML = `<div class="results"><div class="emoji">${emoji}</div><h2>${title}</h2><p class="score-line">Du hade <strong>${score}</strong> rätt av ${totalPossible} möjliga.</p><div style="max-height:250px; overflow-y:auto; margin-bottom:2rem;">${resultRows}</div>${!isSyncMode ? `<button class="retry-btn" onclick="retry()">Kör igen</button>` : ''}</div>`;
            requestAnimationFrame(() => { requestAnimationFrame(() => { card.classList.remove('enter-right'); }); });
        }, 300);
    }

    function retry() { currentQ = -1; highestActivated = -1; answers = {}; renderIntro(); }

    /* --- TEACHER PANEL --- */
    let statsInterval = null;

    async function renderTeacherPanel() {
        stepIndicator.style.display = 'none'; progressBar.style.display = 'none';
        
        if (!window._initializedTeacher) {
            const state = await getGlobalQ();
            if(state.sessionId) currentSessionId = state.sessionId;
            window._initializedTeacher = true;
            if(state.q !== undefined && state.q > -1) window._lastPushedIndex = state.q;
            else { await setGlobalQ(-1); window._lastPushedIndex = -1; }
        } else {
            await setGlobalQ(-1); window._lastPushedIndex = -1;
        }
        
        if(statsInterval) clearInterval(statsInterval);

        card.innerHTML = `
            <div class="intro" style="text-align:left;">
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                    <div><div class="badge">KlassPuls v2: Lärarpanel</div><h1 style="color:var(--primary); text-align:left; font-size:2rem; margin-top:0.5rem;">Kontrollpanel</h1></div>
                    <button onclick="resetLesson()" style="background:rgba(239,68,68,0.2); color:#fca5a5; border:1px solid rgba(239,68,68,0.4); padding:0.5rem 1rem; border-radius:8px; cursor:pointer; font-weight:bold;">🔄 Nollställ</button>
                </div>
                
                <h3 style="margin-top:1.5rem; margin-bottom:0.8rem; color:var(--text-muted); font-size:0.9rem; text-transform:uppercase; letter-spacing:2px;">📣 Klassrumsstyrning (Skärmövertagande)</h3>
                <div style="display:flex; gap:0.5rem; background:rgba(255,255,255,0.02); padding:1rem; border-radius:10px; margin-bottom:2rem;">
                    <button id="btnMsgRed" onclick="pushMessage('red', 'VAR TYSTA!')" style="flex:1; background:rgba(239,68,68,0.9); color:#fff; font-weight:bold; padding:0.8rem; border-radius:8px; border:none; cursor:pointer;">🛑 Var Tysta!</button>
                    <button id="btnMsgBlue" onclick="pushMessage('blue', 'Titta framåt')" style="flex:1; background:rgba(59,130,246,0.9); color:#fff; font-weight:bold; padding:0.8rem; border-radius:8px; border:none; cursor:pointer;">👁 Fokusera</button>
                </div>

                <h3 style="margin-bottom:1rem; color:var(--text-muted); font-size:0.9rem; text-transform:uppercase; letter-spacing:2px;">Glosfrågor (${questions.length} st)</h3>
                <div style="max-height: 450px; overflow-y: auto; padding-right:1rem; display:flex; flex-direction:column; gap:1rem;">
                    ${questions.map((q, i) => {
                        let statsHTML = '';
                        let previewHTML = '';
                        
                        // Generate Preview of Answers
                        if(q.type === 'multiple-choice' || q.type === 'lucktext') {
                            previewHTML = `<div style="font-size:0.85rem; color:#9ca3af; margin-bottom:1rem; padding-left:0.8rem; border-left:2px solid rgba(255,255,255,0.1);">` + 
                                q.options.map(o => `<div style="${o.letter === q.correct ? 'color:#a7f3d0; font-weight:bold;' : ''}">${o.letter === q.correct ? '✅' : '⬜'} ${o.letter}: ${o.text}</div>`).join('') + `</div>`;
                        } else if(q.type === 'match') {
                            previewHTML = `<div style="font-size:0.85rem; color:#9ca3af; margin-bottom:1rem; padding-left:0.8rem; border-left:2px solid rgba(255,255,255,0.1);">` + 
                                q.pairs.map(p => `<div>🔗 <strong style="color:#d1d5db;">${p.left}</strong> ➔ ${p.right}</div>`).join('') + `</div>`;
                        } else if(q.type === 'categorize') {
                            previewHTML = `<div style="font-size:0.85rem; color:#9ca3af; margin-bottom:1rem; padding-left:0.8rem; border-left:2px solid rgba(255,255,255,0.1);">` + 
                                `<div style="margin-bottom:0.3rem;"><strong style="color:#d1d5db;">Kategorier:</strong> ${q.categories.join(' vs ')}</div>` +
                                q.items.map(item => `<div>• ${item.word} ➔ <em style="color:#a7f3d0;">${q.categories[item.cat]}</em></div>`).join('') + `</div>`;
                        }

                        // Generate Live Stats UI
                        if(q.type === 'multiple-choice' || q.type === 'lucktext') {
                            statsHTML = `<div style="display:flex; gap:0.5rem; margin-bottom:1rem; font-size:0.9rem;">
                                ${q.options.map(o => `<div style="background:rgba(255,255,255,0.1); padding:0.4rem 0.8rem; border-radius:6px;">${o.letter}: <strong id="stat_${i}_opt_${o.letter}">0</strong></div>`).join('')}
                            </div>`;
                        } else {
                            statsHTML = `<div style="display:flex; gap:0.5rem; margin-bottom:1rem; font-size:0.9rem;">
                                <div style="background:rgba(16,185,129,0.2); color:#a7f3d0; padding:0.4rem 0.8rem; border-radius:6px;">Rätt: <strong id="stat_${i}_ok">0</strong></div>
                                <div style="background:rgba(239,68,68,0.2); color:#fca5a5; padding:0.4rem 0.8rem; border-radius:6px;">Fel: <strong id="stat_${i}_nok">0</strong></div>
                            </div>`;
                        }

                        return `
                        <div class="opt" style="flex-direction:column; align-items:stretch; background:rgba(255,255,255,0.02); border-color:rgba(255,255,255,0.05); padding:1rem;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;"><span style="font-weight:bold; color:var(--primary);">Fråga ${q.num} <span style="font-size:0.8rem; color:#6b7280; font-weight:normal;">(${q.type})</span></span></div>
                            <div style="font-size:1rem; font-weight:600; margin-bottom:0.8rem;">${q.text.replace('<span class=\'blank\'></span>', '_____')}</div>
                            ${previewHTML}
                            ${statsHTML}
                            <button id="t-btn-${i}" onclick="manualPush(${i})" style="background:rgba(16,185,129,0.2); border:1px solid rgba(16,185,129,0.5); color:#fff; padding:0.8rem; border-radius:8px; font-weight:bold; cursor:pointer; width:100%;">🚀 Puscha till klassen</button>
                        </div>
                    `}).join('')}
                </div>
                <div class="opt" onclick="pushQuestion(999)" style="margin-top:1.5rem; border-color:var(--incorrect); justify-content:center; padding:1.2rem; cursor:pointer;">
                    <span style="font-size:1.1rem; font-weight:bold; color:var(--incorrect);">🏁 Avsluta Lektion (Visa resultat)</span>
                </div>
            </div>`;
    }

    async function pollStats(idx) {
        const q = questions[idx];
        const keys = (q.type === 'multiple-choice' || q.type === 'lucktext') ? ['opt_A', 'opt_B', 'opt_C', 'opt_D'] : ['ok', 'nok'];
        
        for(let k of keys) {
            try {
                const res = await fetch(`https://api.counterapi.dev/v1/${APP_KEY}_${currentSessionId}/Q${idx}_${k}`);
                const data = await res.json();
                const statEl = document.getElementById(`stat_${idx}_${k}`);
                if(statEl) statEl.textContent = data.count || 0;
            } catch(e) {}
        }
    }

    window.resetLesson = async function() {
        if(confirm("Nollställ för nästa klass? (Detta raderar även föregående klass statistik!)")) {
            window._lastPushedIndex = -1; currentMsgColor = 'none'; currentMsgText = '';
            currentSessionId = Date.now().toString(); // New empty statistics session
            await setGlobalQ(-1); 
            renderTeacherPanel();
        }
    };
    window.pushMessage = async function(color, text) {
        currentMsgColor = color; currentMsgText = text;
        await setGlobalQ(window._lastPushedIndex !== undefined ? window._lastPushedIndex : -1);
    };
    window.manualPush = async function(idx) {
        currentMsgColor = 'none'; currentMsgText = ''; window._lastPushedIndex = idx;
        for (let i = 0; i < questions.length; i++) {
            const btn = document.getElementById(`t-btn-${i}`);
            if(i < idx) { btn.style.background = 'rgba(255,255,255,0.05)'; btn.style.borderColor = 'rgba(255,255,255,0.1)'; btn.style.color = '#9ca3af'; btn.innerText = '✓ Redan pushad'; }
            else if(i === idx) { btn.style.background = 'var(--primary)'; btn.style.color = '#fff'; btn.innerText = '▶️ AKTIV NU'; }
            else { btn.style.background = 'rgba(16,185,129,0.2)'; btn.style.borderColor = 'rgba(16,185,129,0.5)'; btn.style.color = '#fff'; btn.innerText = '🚀 Puscha till klassen'; }
        }
        await setGlobalQ(idx);
        
        // Start polling stats for active question
        if(statsInterval) clearInterval(statsInterval);
        pollStats(idx); // Poll immediately
        statsInterval = setInterval(() => pollStats(idx), 2000);
    };
    window.pushQuestion = async function(idx) { await setGlobalQ(idx); };

    renderIntro();
    
