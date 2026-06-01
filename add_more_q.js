const fs = require('fs');
let html = fs.readFileSync('klasspuls_glosor.html', 'utf8');

const additionalQuestions = `        { 
            num: 18, 
            type: "freetext", 
            text: "De organismer (t.ex. svampar, maskar och bakterier) som lever på döda växter och djur och på så sätt återför näringen till jorden kallas för <span class='blank'></span>.", 
            correctAnswers: ["nedbrytare", "nedbrytarna", "destruenter"],
            specificErrors: [
                { trigger: ["konsumenter"], feedback: "De är tekniskt sett en typ av konsument, men vad är det specifika namnet för dem som 'städar upp' i naturen?" },
                { trigger: ["producenter", "producent"], feedback: "Nej, producenter (växter) TILLVERKAR näring. Dessa organismer bryter ner den. Försök igen!" }
            ],
            feedbackOk: "Korrekt! Utan nedbrytarna hade naturen drunknat i döda löv och djurkroppar.", 
            feedbackNok: "Det rätta svaret är NEDBRYTARE. Detta är naturens egna städpatrull!" 
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
            feedbackOk: "Helt rätt! Mångfalden är vår absolut bästa 'livförsäkring' mot miljöförändringar.", 
            feedbackNok: "Ledtråd: 'Mångfald' betyder variation. Det handlar inte om ANTALET individer, utan hur många OLIKA typer som finns." 
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
            feedbackOk: "Snyggt jobbat! Invasiva arter är ett av de största hoten mot biologisk mångfald idag.", 
            feedbackNok: "Kom ihåg: Invasiva arter (som snigeln) är arter som människan flyttat och som ställer till problem i sin nya miljö." 
        },
        { 
            num: 21, 
            type: "freetext", 
            text: "Den process som gör att jorden hålls varm tack vare en 'filt' av gaser (t.ex. koldioxid) i atmosfären kallas för <span class='blank'></span>.", 
            correctAnswers: ["växthuseffekten", "växthuseffekt", "den naturliga växthuseffekten"],
            specificErrors: [
                { trigger: ["klimatförändring", "klimatförändringar"], feedback: "Klimatförändringarna är KONSEKVENSEN av att människan har *förstärkt* denna effekt. Vad heter själva gas-filten?" },
                { trigger: ["global uppvärmning"], feedback: "Global uppvärmning är resultatet när 'filten' blir för tjock. Vi söker namnet på själva fenomenet (som vi faktiskt behöver för att inte frysa ihjäl!)." }
            ],
            feedbackOk: "Precis! Växthuseffekten är naturlig och livsnödvändig, men problemet idag är att den har blivit alldeles för stark.", 
            feedbackNok: "Det rätta svaret är VÄXTHUSEFFEKTEN. Läs mer på s. 12 om hur atmosfären fungerar." 
        },
        { 
            num: 22, 
            type: "lucktext", 
            text: "Ett ekosystems förmåga att återhämta sig och motstå störningar (t.ex. en skogsbrand, storm eller sjukdomsutbrott) kallas för ekologisk <span class='blank'></span>.", 
            options: [
                {letter: "A", text: "Bärkraft"}, 
                {letter: "B", text: "Nisch"}, 
                {letter: "C", text: "Resiliens"}, 
                {letter: "D", text: "Succession"}
            ],
            correct: "C", 
            feedbackOk: "Exakt! Hög biologisk mångfald ger högre resiliens, vilket gör att ekosystemet inte kollapsar lika lätt.", 
            feedbackNok: "Bärkraft handlar om hur många individer miljön tål. Succession är naturens ordning. Det rätta ordet för 'motståndskraft' är Resiliens." 
        }
    ];`;

html = html.replace(/\];\s*let currentQ = -1;/, ",\n" + additionalQuestions + "\n\n    let currentQ = -1;");

fs.writeFileSync('klasspuls_glosor.html', html);
