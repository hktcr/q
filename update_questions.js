const fs = require('fs');

let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

const updatedQuestions = `const questions = [
        { 
            num: 1, 
            type: "multiple-choice", 
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
            feedbackNok: "Minnesregel: Sätt ett A framför så betyder det 'icke'. Abiotisk = Icke-levande. Kolla s. 1-2 i häftet!" 
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
            feedbackNok: "Ledtråd: Ordet population betyder 'befolkning' (bara en art). Ett samhälle är när FLERA arter lever ihop. Kolla s. 1-2 i häftet!" 
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
            feedbackOk: "Helt rätt! I naturen är det sällan raka rör. En räv kan äta både möss, bär och harar. Läs mer på s. 8-9 i häftet.", 
            feedbackNok: "Tänk på ordet 'väv' (som en spindelväv med många korsande trådar). I naturen äter ju rovdjur flera olika saker. Kolla bilderna på s. 8-9 i häftet!" 
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
            feedbackOk: "Helt rätt! Producenten (växternas fotosyntes) skapar basen, konsumenterna äter, och toppkonsumenten regerar högst upp. Läs mer på s. 8 i häftet.", 
            feedbackNok: "Minnesregel: 'Producera' = tillverka egen mat (växter). 'Konsumera' = äta upp (djur). Kolla s. 8 i häftet!" 
        },
        { 
            num: 6, 
            type: "multiple-choice", 
            text: "Utan <span class='blank'></span> (svampar & bakterier) skulle kretsloppet stanna av. De städar upp döda växter och djur så näringen kan användas igen.", 
            options: [{letter: "A", text: "Toppkonsumenter"}, {letter: "B", text: "Producenter"}, {letter: "C", text: "Nedbrytare"}, {letter: "D", text: "Parasiter"}],
            correct: "C", 
            feedbackOk: "Snyggt! Nedbrytarna är naturens återvinningsstation. Mycket viktigt för kolets kretslopp (se s. 7 i häftet).", 
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
            feedbackOk: "Korrekt! Mutualism gynnar båda (ömsesidigt), medan parasiten stjäl energi. Bra minne! Repetera symbiosbegreppen i häftet / anteckningarna.", 
            feedbackNok: "Ledtråd: En parasit är någon som tar utan att ge (+/-). Mutualism betyder 'ömsesidig' — båda vinner (+/+). Kolla symbiosavsnittet i häftet!" 
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
            feedbackOk: "Rätt! Genom att ha olika 'yrken' (nischer) slipper arterna konkurrera med varandra. Läs mer om Nischer i häftet!", 
            feedbackNok: "Tänk på exemplet med Talgoxen och Blåmesen som letar insekter på olika tjocka grenar. De har olika 'yrken' för att slippa konkurrera. Repetera detta i häftet." 
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
            feedbackOk: "Mycket bra! Gifter förbränns inte, de lagras i fettet. Därför drabbas rovdjuren längst upp värst. Repetera detta från H.Pod #3 och häftet!", 
            feedbackNok: "Minnesregel: Eftersom rovdjuret måste äta MÅNGA byten, samlas (ackumuleras) alla bytenas gifter i ETT rovdjur. Kolla H.Pod #3 och häftet!" 
        },
        { 
            num: 10, 
            type: "multiple-choice", 
            text: "När cellandning och fotosyntes jobbar ihop går materiens atomer runt i ett evigt <span class='blank'></span>.", 
            options: [{letter: "A", text: "Samhälle"}, {letter: "B", text: "Kretslopp"}, {letter: "C", text: "Ekosystem"}, {letter: "D", text: "Biotop"}],
            correct: "B", 
            feedbackOk: "Bra! Kolatomerna återvinns om och om igen. Naturen kastar inget. Läs om vattnets och kolets kretslopp på s. 7 i häftet.", 
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
            feedbackOk: "Grymt! Detta var en fördjupning som vi tränat mycket på. Kommensalism (snålskjuts) är vanligare än man tror. Repetera häftet och lektionsanteckningarna!", 
            feedbackNok: "Minnesregel: Parasit är ett välkänt ord (-). Mutual kommer från engelskans 'ömsesidig' (+). Det konstiga ordet Kommensalism betyder då (+/0). Kolla häftet!" 
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
            feedbackOk: "Exakt! 'Kaskad' betyder vattenfall. Förändringen på toppen rinner ner genom hela systemet (från varg till växter). Läs mer om rubbade ekosystem i häftet.", 
            feedbackNok: "Ledtråd: Leta efter ett ord som låter som 'vattenfall'. Förändringen på toppen rinner ner genom hela systemet som ett dominospel." 
        },
        { 
            num: 13, 
            type: "multiple-choice", 
            text: "Varje nytt steg i en näringskedja (t.ex. från producent till konsument) brukar med ett finare ord kallas för en <span class='blank'></span>.", 
            options: [{letter: "A", text: "Ekologisk nisch"}, {letter: "B", text: "Bioackumulation"}, {letter: "C", text: "Trofinivå"}, {letter: "D", text: "Biotop"}],
            correct: "C", 
            feedbackOk: "Snyggt! Och för varje ny trofinivå går 90% av energin förlorad som värme (10%-regeln). Läs mer om trofinivåer och energipyramider på s. 8 i häftet.", 
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
            feedbackOk: "Korrekt! Hög biologisk mångfald är som ett brett Jenga-torn — det tål mycket stryk innan det rasar. Läs om detta på s. 2 i häftet.", 
            feedbackNok: "Tänk Jenga-tornet! Biologisk mångfald betyder MÅNGA OLIKA arter. En veteåker har ju nästan bara EN art. Kolla s. 2 i häftet." 
        },
        { 
            num: 15, 
            type: "lucktext", 
            text: "Den process där växter tillverkar socker och syre med hjälp av solljus, koldioxid och vatten kallas för <span class='blank'></span>.", 
            correctAnswers: ["fotosyntes", "fotosyntesen", "fotosyntes "],
            specificErrors: [
                { trigger: ["cellandning", "cellandningen"], feedback: "Nej, cellandning är motsatsen! Det är när djur FÖRBRÄNNER sockret för energi. Läs s. 4 i häftet." },
                { trigger: ["klorofyll"], feedback: "Klorofyll är det gröna ämnet i bladen som FÅNGAR solljuset, men vad heter själva processen? Kolla s. 4 i häftet." }
            ],
            feedbackOk: "Korrekt! Fotosyntesen är grunden för nästan allt liv på Jorden. Repetera processen på s. 4 i häftet.", 
            feedbackNok: "Det rätta svaret är FOTOSYNTES. Detta är den absolut viktigaste reaktionen på jorden. Läs mer på s. 4 i häftet!" 
        },
        { 
            num: 16, 
            type: "lucktext", 
            text: "Alla individer av en och samma art som lever i ett visst område (t.ex. alla harar i en skog) kallas gemensamt för en <span class='blank'></span>.", 
            correctAnswers: ["population", "populationen", "popolation"],
            specificErrors: [
                { trigger: ["art", "arten"], feedback: "Nästan! 'Art' beskriver vilken typ av djur det är globalt. En specifik grupp i en skog har ett annat namn. Kolla s. 1 i häftet." },
                { trigger: ["samhälle", "ekologiskt samhälle"], feedback: "Ett samhälle består av MÅNGA arter. Om vi tittar på EN art är det en...? Kolla s. 1-2 i häftet." },
                { trigger: ["ekosystem"], feedback: "Ett ekosystem inkluderar även stenar, regn och solljus. Vi söker ordet för en grupp av samma art (s. 1 i häftet)." }
            ],
            feedbackOk: "Helt rätt! Population är det ord biologer använder för att studera antalet individer av en specifik art i ett område.", 
            feedbackNok: "Det rätta svaret är POPULATION. Om du missade detta, repetera de grundläggande begreppen på s. 1 i häftet." 
        },
        { 
            num: 17, 
            type: "lucktext", 
            text: "I naturen äter många djur flera olika saker. När flera näringskedjor flätas samman och korsar varandra kallas det för en <span class='blank'></span>.", 
            correctAnswers: ["näringsväv", "näringsväven", "neringsväv"],
            specificErrors: [
                { trigger: ["näringskedja", "näringskedjan", "neringskedja"], feedback: "En näringskedja är en rak linje (Gräs -> Hare -> Räv). Vad kallas nätet av flera sådana linjer? (s. 8-9 i häftet)." },
                { trigger: ["ekosystem"], feedback: "Vi söker det specifika begreppet för 'mat-kartan' där streck går kors och tvärs mellan alla djur och växter." },
                { trigger: ["näringspyramid"], feedback: "Näringspyramiden visar hur ENERGIN försvinner på vägen upp (s. 8). Vi söker nätverket av VEM som äter VEM." }
            ],
            feedbackOk: "Snyggt! En näringsväv ger en mycket mer realistisk bild av naturen än en enkel kedja. Titta på exemplen på s. 8-9 i häftet.", 
            feedbackNok: "Det rätta svaret är NÄRINGSVÄV. Tänk dig det som ett spindelnät av matvanor! Kolla s. 8-9 i häftet." 
        },
        { 
            num: 18, 
            type: "lucktext", 
            text: "De organismer (t.ex. svampar, maskar och bakterier) som lever på döda växter och djur och på så sätt återför näringen till jorden kallas för <span class='blank'></span>.", 
            correctAnswers: ["nedbrytare", "nedbrytarna", "destruenter"],
            specificErrors: [
                { trigger: ["konsumenter"], feedback: "De är en typ av konsument, men vad är det specifika namnet för dem som 'städar upp' i naturen? Läs på s. 7 i häftet." },
                { trigger: ["producenter", "producent"], feedback: "Nej, producenter (växter) TILLVERKAR näring. Dessa organismer bryter ner den. Försök igen eller kolla s. 7 i häftet!" }
            ],
            feedbackOk: "Korrekt! Utan nedbrytarna hade naturen drunknat i döda löv, och kolets kretslopp (s. 7 i häftet) hade stannat.", 
            feedbackNok: "Det rätta svaret är NEDBRYTARE. Detta är naturens egna städpatrull! Läs mer om deras roll på s. 7 i häftet." 
        },
        { 
            num: 19, 
            type: "multiple-choice", 
            text: "Vad menas egentligen med begreppet 'Biologisk mångfald'?", 
            options: [
                {letter: "A", text: "Att det finns extremt många djur av samma art i en och samma skog."}, 
                {letter: "B", text: "Att naturen är rik på variation, med många olika arter, gener och livsmiljöer."}, 
                {letter: "C", text: "Att vi människor aktivt planterar många träd för att motverka klimatförändringarna."}, 
                {letter: "D", text: "Att djuren utvecklas och förändras långsamt under miljoner år."}
            ],
            correct: "B", 
            feedbackOk: "Helt rätt! Mångfalden är vår absolut bästa 'livförsäkring' mot miljöförändringar. Repetera s. 2 i häftet.", 
            feedbackNok: "Ledtråd: 'Mångfald' betyder variation. Det handlar om hur många OLIKA typer som finns, inte antalet av en typ. Läs s. 2 i häftet." 
        },
        { 
            num: 20, 
            type: "match", 
            text: "Koppla ihop rätt art/begrepp med dess ekologiska roll!", 
            pairs: [
                { left: "Spansk skogssnigel", right: "Invasiv art som tränger undan lokala arter" },
                { left: "Varg", right: "Toppkonsument som reglerar antalet växtätare" },
                { left: "Daggmask", right: "Viktig nedbrytare som syresätter jorden" },
                { left: "Bakterie", right: "Mikroskopisk nedbrytare i naturens kretslopp" }
            ],
            feedbackOk: "Snyggt jobbat! Invasiva arter (t.ex. mördarsnigeln) är ett stort hot mot den biologiska mångfalden.", 
            feedbackNok: "Kom ihåg: Invasiva arter är arter som människan flyttat och som ställer till problem i sin nya miljö. Läs om mångfald på s. 2 i häftet." 
        },
        { 
            num: 21, 
            type: "lucktext", 
            text: "Den process som gör att jorden hålls varm tack vare en 'filt' av gaser (t.ex. koldioxid) i atmosfären kallas för <span class='blank'></span>.", 
            correctAnswers: ["växthuseffekten", "växthuseffekt", "den naturliga växthuseffekten"],
            specificErrors: [
                { trigger: ["klimatförändring", "klimatförändringar"], feedback: "Klimatförändringarna är KONSEKVENSEN av att vi förstärkt denna effekt. Vad heter gas-filten? (Se s. 12 i häftet)." },
                { trigger: ["global uppvärmning"], feedback: "Global uppvärmning är resultatet när 'filten' blir för tjock. Vi söker namnet på fenomenet (som är livsnödvändigt i grunden). Läs s. 12 i häftet." }
            ],
            feedbackOk: "Precis! Växthuseffekten är naturlig och livsnödvändig, men vi människor har gjort den för stark. Läs mer på s. 12 i häftet.", 
            feedbackNok: "Det rätta svaret är VÄXTHUSEFFEKTEN. Läs noga på s. 12 i häftet om hur atmosfären fångar in värmen." 
        },
        { 
            num: 22, 
            type: "multiple-choice", 
            text: "Ett ekosystems förmåga att återhämta sig och motstå störningar (t.ex. en skogsbrand, storm eller sjukdomsutbrott) kallas för ekologisk <span class='blank'></span>.", 
            options: [
                {letter: "A", text: "Bärkraft"}, 
                {letter: "B", text: "Nisch"}, 
                {letter: "C", text: "Resiliens"}, 
                {letter: "D", text: "Succession"}
            ],
            correct: "C", 
            feedbackOk: "Exakt! Hög biologisk mångfald (som ett stabilt Jenga-torn) ger hög resiliens, vilket gör att ekosystemet kan stå emot katastrofer bättre.", 
            feedbackNok: "Bärkraft handlar om hur många individer miljön tål. Succession är hur skogen växer tillbaka över tid. Rätt ord är Resiliens. Läs om mångfald på s. 2 i häftet." 
        }
    ];`;

html = html.replace(/const questions = \[[\s\S]*?    \];/, updatedQuestions);
fs.writeFileSync('klasspuls_glosor.html', html);

