const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

const searchBarHTML = `
                <div style="display:flex; gap:0.5rem; margin-bottom:1rem;">
                    <input type="text" id="teacherSearch" placeholder="🔍 Sök efter ord, svar eller begrepp..." onkeyup="filterQuestions()" style="flex:1; padding:0.8rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:#fff; font-size:1rem; outline:none;">
                    <select id="teacherFilterType" onchange="filterQuestions()" style="padding:0.8rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:#fff; font-size:1rem; outline:none;">
                        <option value="all">Alla typer</option>
                        <option value="multiple-choice">Flerval</option>
                        <option value="lucktext">Lucktext</option>
                        <option value="match">Matchning</option>
                        <option value="categorize">Kategorisering</option>
                        <option value="freetext">Fritext</option>
                    </select>
                </div>
`;

html = html.replace(/<h3 style="margin-bottom:1rem; color:var\(--text-muted\); font-size:0.9rem; text-transform:uppercase; letter-spacing:2px;">Glosfrågor \(\$\{questions\.length\} st\)<\/h3>/, 
    `<h3 style="margin-bottom:1rem; color:var(--text-muted); font-size:0.9rem; text-transform:uppercase; letter-spacing:2px;">Glosfrågor (\${questions.length} st)</h3>` + searchBarHTML);

html = html.replace(/<div class="opt" style="flex-direction:column; align-items:stretch; background:rgba\(255,255,255,0\.02\); border-color:rgba\(255,255,255,0\.05\); padding:1rem;">/, 
    `<div id="t-card-\${i}" class="opt teacher-q-card" data-qtype="\${q.type}" style="flex-direction:column; align-items:stretch; background:rgba(255,255,255,0.02); border-color:rgba(255,255,255,0.05); padding:1rem;">`);

// Inject search logic
const filterLogic = `
    window.filterQuestions = function() {
        const query = document.getElementById('teacherSearch').value.toLowerCase();
        const typeFilter = document.getElementById('teacherFilterType').value;
        
        for (let i = 0; i < questions.length; i++) {
            const card = document.getElementById('t-card-' + i);
            if (!card) continue;
            
            const q = questions[i];
            let isMatch = true;
            
            if (typeFilter !== 'all' && q.type !== typeFilter) isMatch = false;
            
            if (query !== '') {
                const searchStr = JSON.stringify(q).toLowerCase(); // Ghetto but effective full-text search on question object
                if (!searchStr.includes(query)) isMatch = false;
            }
            
            card.style.display = isMatch ? 'flex' : 'none';
        }
    };
`;

html = html.replace(/window\.pushQuestion = async function\(idx\) \{ await setGlobalQ\(idx\); \};/, "window.pushQuestion = async function(idx) { await setGlobalQ(idx); };\n" + filterLogic);

fs.writeFileSync('klasspuls_glosor.html', html);
