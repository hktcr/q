const fs = require('fs');
const newQuestions = `    const questions = [
        { 
            num: 1, 
            type: "multiple-choice", 
            text: "Ordet ekologi kommer från de grekiska orden \\"Oikos\\" och \\"logos\\". Vad betyder ordet egentligen?", 
            options: [{letter: "A", text: "Djuren"}, {letter: "B", text: "Läran om huset (Jorden)"}, {letter: "C", text: "Växterna"}, {letter: "D", text: "Rymden"}],
            correct: "B", 
            feedbackOk: "Exakt! 'Oikos' betyder hus och 'logos' betyder lära. Ekologi är alltså läran om vårt gemensamma hus, Jorden, och hur allt liv samspelar här.", 
            feedbackNok: "Tyvärr fel. Rätt svar är B (Läran om huset). 'Oikos' är grekiska för hus. Inom ekologin ser vi hela Jorden som vårt gemensamma hus där allt liv hänger ihop." 
        },
        { 
            num: 2, 
            type: "categorize", 
            text: "Kategorisera miljöfaktorerna nedan!", 
            categories: ["Abiotiska faktorer", "Biotiska faktorer"], 
            items: [
                {word: "Solljus", cat: 0},
                {word: "Temperatur", cat: 0},
                {word: "Rovdjur", cat: 1},
                {word: "Bakterier", cat: 1},
                {word: "Vind", cat: 0}
            ], 
            feedbackOk: "Klockrent! Abiotiska faktorer är den icke-levande miljön (solljus, temperatur, vind). Biotiska faktorer är de levande organismerna (rovdjur, bakterier).", 
            feedbackNok: "Något hamnade fel. Solljus, temperatur och vind är Abiotiska (icke-levande fysiska faktorer), medan rovdjur och bakterier är Biotiska (levande organismer)." 
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
            feedbackOk: "Snyggt! En biotop är platsen, en population är individerna av samma art, och samhället är nätverket av alla arter som lever där.", 
            feedbackNok: "Någon koppling blev fel. Biotop = själva naturtypen, Population = alla av en specifik art, Samhälle = alla olika arter i ekosystemet tillsammans." 
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
            feedbackOk: "Helt rätt! I verkligheten är det sällan enkla 'raka rör', eftersom de flesta djur äter flera olika saker. Detta bildar ett komplext nätverk, en näringsväv.", 
            feedbackNok: "Fel svar. Rätt svar är B. I naturen äter många djur flera olika saker. När man slår ihop flera raka näringskedjor bildas en mer realistisk och komplex näringsväv." 
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
            feedbackOk: "Helt rätt! Producenter fångar solens energi, konsumenter äter denna energi, och toppkonsumenter står högst upp i näringskedjan utan naturliga rovdjur.", 
            feedbackNok: "Något blev fel. Rätt är: Producent (tillverkar energi via fotosyntes), Konsument (måste äta för energi), Toppkonsument (högst upp, saknar naturliga fiender)." 
        },
        { 
            num: 6, 
            type: "multiple-choice", 
            text: "Utan <span class='blank'></span> (svampar & bakterier) skulle kretsloppet stanna av. De städar upp döda växter och djur så näringen kan användas igen.", 
            options: [{letter: "A", text: "Toppkonsumenter"}, {letter: "B", text: "Producenter"}, {letter: "C", text: "Nedbrytare"}, {letter: "D", text: "Parasiter"}],
            correct: "C", 
            feedbackOk: "Snyggt! Nedbrytarna fungerar som naturens återvinningsstation. Utan dem skulle jorden täckas av döda växter och djur, och näringen skulle ta slut.", 
            feedbackNok: "Fel svar. Rätt svar är C (Nedbrytare). Det är maskar, svampar och bakterier som äter dött material och frigör näringen till jorden igen." 
        },
        { 
            num: 7, 
            type: "categorize", 
            text: "Kategorisera vilket typ av samspel (symbios) det är!", 
            categories: ["Mutualism", "Parasitism"], 
            items: [
                {word: "Mykorrhiza (Svamp+Träd)", cat: 0},
                {word: "Tarmbakterier i oss", cat: 0},
                {word: "Fästing på en hund", cat: 1},
                {word: "Bandmask", cat: 1}
            ], 
            feedbackOk: "Korrekt! Mutualism är 'Win-Win' (mykorrhiza, tarmbakterier) där båda vinner. Parasitism är 'Win-Lose' där den ena stjäl energi och den andra skadas.", 
            feedbackNok: "Något hamnade fel. Mutualism = ömsesidig nytta där båda gynnas (mykorrhiza, tarmbakterier). Parasitism = en vinner och den andra skadas (fästing, bandmask)." 
        },
        { 
            num: 8, 
            type: "multiple-choice", 
            text: "Vad menas med en arts \\"Ekologiska Nisch\\\"?", 
            options: [
                {letter: "A", text: "Platsen där den bygger sitt bo."}, 
                {letter: "B", text: "Den typ av miljö (biotop) den lever i."}, 
                {letter: "C", text: "Artens \\"yrke\\" och specialisering i ekosystemet."}, 
                {letter: "D", text: "Hur många ungar den får per år."}
            ], 
            correct: "C", 
            feedbackOk: "Rätt! Genom att ha olika yrken (specialiserade nischer) slipper arterna konkurrera med varandra om exakt samma mat och utrymme.", 
            feedbackNok: "Fel svar. Rätt svar är C. Nischen är artens 'yrke'. Exempelvis har talgoxen och blåmesen olika nischer (äter på olika ställen) för att undvika konkurrens." 
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
            feedbackOk: "Mycket bra! Producenter i botten har låg gifthalt. Eftersom rovdjuren högre upp måste äta väldigt många djur under sitt liv, lagras allt gift i deras kroppar.", 
            feedbackNok: "Fel sorterat. Producenter i botten har låg gifthalt. Toppkonsumenter drabbas hårdast, eftersom de får i sig allt gift som deras tusentals byten har samlat på sig." 
        },
        { 
            num: 10, 
            type: "multiple-choice", 
            text: "När cellandning och fotosyntes jobbar ihop går materiens atomer runt i ett evigt <span class='blank'></span>.", 
            options: [{letter: "A", text: "Samhälle"}, {letter: "B", text: "Kretslopp"}, {letter: "C", text: "Ekosystem"}, {letter: "D", text: "Biotop"}],
            correct: "B", 
            feedbackOk: "Bra! Atomer kan varken skapas eller förstöras. De återvinns om och om igen i naturens kretslopp mellan luften, växterna och djuren.", 
            feedbackNok: "Fel svar. Rätt svar är Kretslopp (B). Atomer återvinns och går runt i en evig slinga, t.ex. när syre från växter andas in av djur, som andas ut koldioxid till växterna." 
        },
        { 
            num: 11, 
            type: "match", 
            text: "Vi dök ju ner i \\"Symbios\\" (samliv). Koppla rätt begrepp till förklaringen!", 
            pairs: [
                {left: "Mutualism", right: "Båda arterna vinner på det (t.ex. lav = alg + svamp)"}, 
                {left: "Kommensalism", right: "Ena vinner, den andra bryr sig inte (t.ex. havstulpan på val)"}, 
                {left: "Parasitism", right: "Ena vinner, den andra skadas (t.ex. fästing på hund)"}
            ], 
            feedbackOk: "Grymt! Mutualism (+/+), Kommensalism (+/0) och Parasitism (+/-). Dessa är de tre vanligaste typerna av samliv i naturen.", 
            feedbackNok: "Något blev fel. Rätt är: Mutualism = båda vinner (+/+), Kommensalism = en vinner och den andra påverkas inte (+/0), Parasitism = en vinner och den andra skadas (+/-)." 
        },
        { 
            num: 12, 
            type: "multiple-choice", 
            text: "Vilken typ av symbios beskriver ett förhållande där den ena organismen utnyttjar den andra så att den blir sjuk eller förlorar näring?", 
            options: [
                {letter: "A", text: "Mutualism"}, 
                {letter: "B", text: "Kommensalism"}, 
                {letter: "C", text: "Parasitism"}, 
                {letter: "D", text: "Konkurrens"}
            ],
            correct: "C", 
            feedbackOk: "Helt rätt! Vid parasitism (+/-) stjäl parasiten näring, vilket gör värddjuret sjukt eller försvagat, men parasiten dödar oftast inte sitt värddjur direkt.", 
            feedbackNok: "Fel. Rätt svar är Parasitism (C). Vid parasitism utnyttjas den ena organismen (värden) så att den tar skada eller förlorar näring." 
        },
        { 
            num: 13, 
            type: "multiple-choice", 
            text: "Två arter lever tätt ihop. Den ena får skydd och mat, medan den andra varken påverkas positivt eller negativt. Vad kallas detta?", 
            options: [
                {letter: "A", text: "Mutualism"}, 
                {letter: "B", text: "Kommensalism"}, 
                {letter: "C", text: "Parasitism"}, 
                {letter: "D", text: "Predation"}
            ],
            correct: "B", 
            feedbackOk: "Snyggt! Kommensalism brukar ibland kallas för \\"snålskjuts\\". Den ena får en fördel, medan den andra förblir helt opåverkad (+/0).", 
            feedbackNok: "Fel svar. Rätt svar är Kommensalism (B). Det är när en organism får fördel (t.ex. en liten fisk som simmar bakom en haj) utan att hajen bryr sig." 
        },
        { 
            num: 14, 
            type: "multiple-choice", 
            text: "Ni minns NP-uppgiften om Vargen: Vargarna försvinner → Hjortarna ökar → Skogen betas sönder. Vad kallar biologer en sådan kedjereaktion?", 
            options: [
                {letter: "A", text: "En kaskadeffekt"}, 
                {letter: "B", text: "En bioackumulation"}, 
                {letter: "C", text: "En parasitism"}, 
                {letter: "D", text: "En ekologisk nisch"}
            ], 
            correct: "A", 
            feedbackOk: "Exakt! I en kaskadeffekt rinner en förändring på toppkonsument-nivån ner genom hela systemet, som ett dominospel, och påverkar växterna i botten.", 
            feedbackNok: "Fel svar. Rätt svar är Kaskadeffekt. Kaskad betyder vattenfall. När toppkonsumenten rubbas rinner effekterna hela vägen ner genom näringsväven." 
        },
        { 
            num: 15, 
            type: "multiple-choice", 
            text: "Varje nytt steg i en näringskedja (t.ex. från producent till konsument) brukar med ett finare ord kallas för en <span class='blank'></span>.", 
            options: [{letter: "A", text: "Ekologisk nisch"}, {letter: "B", text: "Bioackumulation"}, {letter: "C", text: "Trofinivå"}, {letter: "D", text: "Biotop"}],
            correct: "C", 
            feedbackOk: "Snyggt! 'Trofi' handlar om näring. För varje trofinivå går 90% av energin förlorad som rörelse och värme (10%-regeln).", 
            feedbackNok: "Fel svar. Rätt svar är Trofinivå (C). Trofinivåer är de olika stegen i en näringspyramid (Producent → 1:a konsument → Toppkonsument)." 
        },
        { 
            num: 16, 
            type: "categorize", 
            text: "The Jenga-Crash! Sortera exemplen efter om de har HÖG eller LÅG biologisk mångfald.", 
            categories: ["Hög Mångfald", "Låg Mångfald"], 
            items: [
                {word: "En gammelskog med många biotoper", cat: 0},
                {word: "Ett stort korallrev", cat: 0},
                {word: "En veteåker", cat: 1},
                {word: "En asfalterad skolgård", cat: 1}
            ], 
            feedbackOk: "Korrekt! Gammelskogar och rev har enorm variation (hög mångfald). Åkrar består ofta av bara en enda art (monokultur) och har extremt låg mångfald.", 
            feedbackNok: "Något blev fel. Gammelskog och korallrev har stor artrikedom = Hög mångfald. Veteåker (monokultur) och asfalt saknar variation = Låg mångfald." 
        },
        { 
            num: 17, 
            type: "lucktext", 
            text: "Den process där växter tillverkar socker och syre med hjälp av solljus, koldioxid och vatten kallas för <span class='blank'></span>.", 
            correctAnswers: ["fotosyntes", "fotosyntesen", "fotosyntes "],
            feedbackOk: "Korrekt! Fotosyntesen är bokstavligen motorn för nästan allt liv på Jorden, eftersom solenergin binds in i sockret och syret frigörs till oss.", 
            feedbackNok: "Fel svar. Det rätta svaret är FOTOSYNTES. Detta är den livsviktiga kemiska reaktionen där växterna förvandlar solenergi till socker och syre." 
        },
        { 
            num: 18, 
            type: "lucktext", 
            text: "Alla individer av en och samma art som lever i ett visst område (t.ex. alla harar i en skog) kallas gemensamt för en <span class='blank'></span>.", 
            correctAnswers: ["population", "populationen", "popolation"],
            feedbackOk: "Helt rätt! En population växer om det finns mat och krymper om rovdjuren blir fler eller sjukdomar bryter ut (detta kallas populationsekologi).", 
            feedbackNok: "Fel svar. Det rätta svaret är POPULATION. Det är biologernas ord för alla de individer av en specifik art som delar samma livsmiljö." 
        },
        { 
            num: 19, 
            type: "lucktext", 
            text: "I naturen äter många djur flera olika saker. När flera näringskedjor flätas samman och korsar varandra kallas det för en <span class='blank'></span>.", 
            correctAnswers: ["näringsväv", "näringsväven", "neringsväv"],
            feedbackOk: "Snyggt! En näringsväv är mycket mer stabil. Om en art minskar, kan rovdjuren byta till att äta något av de andra bytena i väven.", 
            feedbackNok: "Fel svar. Det rätta svaret är NÄRINGSVÄV. Tänk dig det som ett nätverk av pilar som korsar varandra, till skillnad från en rak näringskedja." 
        },
        { 
            num: 20, 
            type: "lucktext", 
            text: "De organismer (t.ex. svampar, maskar och bakterier) som lever på döda växter och djur och på så sätt återför näringen till jorden kallas för <span class='blank'></span>.", 
            correctAnswers: ["nedbrytare", "nedbrytarna", "destruenter"],
            feedbackOk: "Korrekt! När nedbrytarna bryter ner dött material frigörs näringsämnen (t.ex. kväve och fosfor) i jorden så att nya växter kan använda dem.", 
            feedbackNok: "Fel svar. Det rätta svaret är NEDBRYTARE. Detta är naturens egna städpatrull som äter dött material och sluter det ekologiska kretsloppet." 
        },
        { 
            num: 21, 
            type: "multiple-choice", 
            text: "Vad menas egentligen med begreppet \\"Biologisk mångfald\\\"?", 
            options: [
                {letter: "A", text: "Att det finns extremt många djur av samma art i en och samma skog."}, 
                {letter: "B", text: "Att naturen är rik på variation, med många olika arter, gener och livsmiljöer."}, 
                {letter: "C", text: "Att vi människor aktivt planterar många träd för att motverka klimatförändringarna."}, 
                {letter: "D", text: "Att djuren utvecklas och förändras långsamt under miljoner år."}
            ],
            correct: "B", 
            feedbackOk: "Helt rätt! Mångfalden handlar om variationen. Hög variation gör naturen mycket starkare mot sjukdomar och klimatförändringar.", 
            feedbackNok: "Fel svar. Rätt svar är B (Naturen är rik på variation). Mångfald handlar inte om *antalet* djur, utan om *hur många olika sorter* (arter, gener) det finns." 
        },
        { 
            num: 22, 
            type: "match", 
            text: "Koppla ihop rätt art/begrepp med dess ekologiska roll!", 
            pairs: [
                { left: "Spansk skogssnigel", right: "Invasiv art som tränger undan lokala arter" },
                { left: "Varg", right: "Toppkonsument som reglerar antalet växtätare" },
                { left: "Daggmask", right: "Viktig nedbrytare som syresätter jorden" },
                { left: "Bakterie", right: "Mikroskopisk nedbrytare i naturens kretslopp" }
            ],
            feedbackOk: "Snyggt jobbat! Invasiva arter, som spansk skogssnigel, är farliga eftersom de rubbar ekosystemet och tränger undan lokala svenska arter.", 
            feedbackNok: "Något blev fel. Snigeln = Invasiv art (utifrån), Varg = Toppkonsument (rovdjur), Daggmask = Stor nedbrytare, Bakterie = Mikroskopisk nedbrytare." 
        },
        { 
            num: 23, 
            type: "lucktext", 
            text: "Den process som gör att jorden hålls varm tack vare en \\"filt\\" av gaser (t.ex. koldioxid) i atmosfären kallas för <span class='blank'></span>.", 
            correctAnswers: ["växthuseffekten", "växthuseffekt", "den naturliga växthuseffekten"],
            feedbackOk: "Precis! Växthuseffekten är naturlig och livsnödvändig (annars vore Jorden -18°C), men när vi eldar fossil energi blir filten för tjock.", 
            feedbackNok: "Fel svar. Det rätta svaret är VÄXTHUSEFFEKTEN. Koldioxid och metan fungerar som glaset i ett växthus – de släpper in solens strålar, men håller kvar värmen." 
        },
        { 
            num: 24, 
            type: "multiple-choice", 
            text: "Ett ekosystems förmåga att återhämta sig och motstå störningar (t.ex. en skogsbrand, storm eller sjukdomsutbrott) kallas för ekologisk <span class='blank'></span>.", 
            options: [
                {letter: "A", text: "Bärkraft"}, 
                {letter: "B", text: "Nisch"}, 
                {letter: "C", text: "Resiliens"}, 
                {letter: "D", text: "Succession"}
            ],
            correct: "C", 
            feedbackOk: "Exakt! Hög biologisk mångfald ger hög resiliens, vilket fungerar som en ekologisk stötdämpare när katastrofer inträffar.", 
            feedbackNok: "Fel svar. Rätt ord är Resiliens (C). Ordet kommer från engelskans 'resilience' och handlar om systemets flexibilitet och motståndskraft mot yttre påfrestningar." 
        },
        { 
            num: 25, 
            type: "image-label", 
            text: "Sätt rätt trofisk nivå på rätt plats i näringsväven!", 
            html: \`<div style="display:flex; flex-direction:column; align-items:center; gap:1.5rem; margin-bottom:1rem;">
    <!-- Topp -->
    <div style="display:flex; flex-direction:column; align-items:center;">
        <div id="vz-fw1" class="vis-zone" data-correct="Toppkonsument" onclick="selectVisZone(this)" style="width:clamp(100px, 30vw, 180px); height:clamp(40px, 8vw, 50px); border-radius:8px;"></div>
        <div style="font-size:0.8rem; color:#9ca3af; margin-top:5px; display:flex; align-items:center; gap:5px;"><img src="assets/rav.png" style="width:20px; height:20px; border-radius:4px;"> Räv</div>
    </div>
    
    <div style="display:flex; gap:3rem; font-size:2rem; color:var(--primary);"><span>&uarr;</span><span>&uarr;</span></div>
    
    <!-- Mitten -->
    <div style="display:flex; gap:1rem;">
        <div style="display:flex; flex-direction:column; align-items:center;">
            <div id="vz-fw2" class="vis-zone" data-correct="Förstahandskonsument" onclick="selectVisZone(this)" style="width:clamp(80px, 20vw, 140px); height:clamp(40px, 8vw, 50px); border-radius:8px;"></div>
            <div style="font-size:0.8rem; color:#9ca3af; margin-top:5px; display:flex; align-items:center; gap:5px;"><img src="assets/kanin.png" style="width:20px; height:20px; border-radius:4px;"> Kanin</div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:center;">
            <div id="vz-fw3" class="vis-zone" data-correct="Förstahandskonsument" onclick="selectVisZone(this)" style="width:clamp(80px, 20vw, 140px); height:clamp(40px, 8vw, 50px); border-radius:8px;"></div>
            <div style="font-size:0.8rem; color:#9ca3af; margin-top:5px; display:flex; align-items:center; gap:5px;"><img src="assets/sork.png" style="width:20px; height:20px; border-radius:4px;"> Sork</div>
        </div>
    </div>
    
    <div style="display:flex; gap:6rem; font-size:2rem; color:var(--primary);"><span>&uarr;</span><span>&uarr;</span></div>
    
    <!-- Botten -->
    <div style="display:flex; flex-direction:column; align-items:center;">
        <div id="vz-fw4" class="vis-zone" data-correct="Producent" onclick="selectVisZone(this)" style="width:clamp(120px, 35vw, 200px); height:clamp(40px, 8vw, 50px); border-radius:8px;"></div>
        <div style="font-size:0.8rem; color:#9ca3af; margin-top:5px; display:flex; align-items:center; gap:5px;"><img src="assets/gras.png" style="width:20px; height:20px; border-radius:4px;"> Gräs / Blad</div>
    </div>
</div>\`,
            labels: ["Toppkonsument", "Förstahandskonsument", "Förstahandskonsument", "Producent"],
            feedbackOk: "Snyggt! Energin går från gräset (producent) upp till sorken och kaninen (förstahandskonsumenter) och slutligen räven (toppkonsument). Pilarna i näringskedjan visar alltid åt vilket håll energin färdas.", 
            feedbackNok: "Något hamnade fel. Pilarna visar vem som äter vem (energins väg). Gräs (producent) är längst ner. Kanin och sork äter gräs (förstahandskonsumenter). Räv äter kanin och sork (toppkonsument)." 
        },
        { 
            num: 26, 
            type: "image-label", 
            text: "Sätt rätt energinivå i näringspyramiden!", 
            html: \`<div style="display:flex; flex-direction:column; align-items:center; gap:5px; margin-bottom:1rem; position:relative; width:100%; max-width:300px;">
    <!-- Toppkonsument -->
    <div id="vz-p4" class="vis-zone" data-correct="0.1%" onclick="selectVisZone(this)" style="width: 25%; height: 60px; clip-path: polygon(50% 0%, 100% 100%, 0% 100%); align-items:flex-end; padding-bottom:5px;"></div>
    <!-- Andrahandskonsument -->
    <div id="vz-p3" class="vis-zone" data-correct="1%" onclick="selectVisZone(this)" style="width: 50%; height: 50px; clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);"></div>
    <!-- Förstahandskonsument -->
    <div id="vz-p2" class="vis-zone" data-correct="10%" onclick="selectVisZone(this)" style="width: 75%; height: 50px; clip-path: polygon(16.6% 0%, 83.3% 0%, 100% 100%, 0% 100%);"></div>
    <!-- Producent -->
    <div id="vz-p1" class="vis-zone" data-correct="100%" onclick="selectVisZone(this)" style="width: 100%; height: 50px; clip-path: polygon(12.5% 0%, 87.5% 0%, 100% 100%, 0% 100%);"></div>
</div>\`,
            labels: ["0.1%", "1%", "10%", "100%"],
            feedbackOk: "Korrekt! På grund av 10%-regeln ryms det väldigt få toppkonsumenter jämfört med producenter. 90% går förlorat som rörelse och värme på varje steg.", 
            feedbackNok: "Fel. Minns 10%-regeln! Du startar med 100% energi i botten hos växterna (producenterna). Vid varje steg upp tappas 90%. Så det blir: 100% -> 10% -> 1% -> 0.1% högst upp i toppen." 
        }
    ];`;

let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

// The array starts at `const questions = [` and ends right before `let currentQ = -1;`
const startIndex = html.indexOf('const questions = [');
const endIndex = html.indexOf('let currentQ = -1;');

if (startIndex > -1 && endIndex > -1) {
    // Replace that chunk with newQuestions + '\n\n    '
    html = html.substring(0, startIndex) + newQuestions + '\n\n    ' + html.substring(endIndex);
    fs.writeFileSync('klasspuls_glosor.html', html, 'utf8');
    console.log("Successfully replaced questions array!");
} else {
    console.log("Could not find the bounds for replacement.");
}
