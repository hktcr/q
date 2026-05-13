# KlassPuls Interactive System 📣

KlassPuls är ett lättviktigt, realtidssynkroniserat och interaktivt quiz- och klassrumshanteringssystem utvecklat för GAIA-ekosystemet och LessonLab.

Till skillnad från traditionella system där eleverna driver tempot, är KlassPuls designat för **lärarstyrd synkronisering**. Verktyget används primärt vid filmvisningar eller lärargenomgångar, där läraren via en Lärarpanel (Teacher Panel) manuellt "pushar" ut frågor till elevernas enheter i exakt rätt ögonblick, eller aktiverar skärmövertagande (Live-Meddelanden som "Var Tysta!") för att bryta och återskapa fokus.

## 🏗 Arkitektur ("Zero-Build")

KlassPuls bygger på absolut portabilitet:
- **Single-File Deployment:** Hela applikationen (HTML, CSS, JS-logik och Frågebank) är paketerad i en och samma HTML-fil (ex. `attenborough.html`).
- **Hosting:** Deployas statiskt via GitHub Pages.
- **Backend/Synk:** Använder Immanuel API (`keyvalue.immanuel.co`) för realtids-polling (`state`) varannan sekund.
- **Payload & Säkerhet:** För att runda problem med URL-kodning och CORS vid specialtecken (å, ä, ö) och emojis, konverteras alla klassrumsmeddelanden till HEX innan de lagras på KeyValue-servern.

## 🧬 Att bygga en ny KlassPuls-lektion

Att skala upp KlassPuls kräver ingen komplicerad byggprocess, utan hanteras via det dedikerade GAIA-workflowet `/klasspuls`.

### Steg-för-steg:
1. **Duplicera:** Kopiera en befintlig KlassPuls-fil (t.ex. `cp attenborough.html ekologi_del1.html`).
2. **Namespace (KRITISKT):** Leta upp `const kvKey = '...';` och byt ut den mot en helt unik nyckel för den nya lektionen. (Annars riskerar olika klasser att "snacka över varandra" och få fel frågor pushade).
3. **Frågebank:** Uppdatera arrayen `const questions = [...]` i filens topp.
4. **Deploy:** Pusha filen till repot `hktcr/q`.

## 👩‍🏫 Lärarvy vs Elevvy
Båda vyerna drivs av exakt samma fil.
- **Elevvy:** Besök URL:en direkt (ex. `https://hktcr.github.io/q/attenborough.html`). Mjukt gränssnitt som låser sig i vänte-läge fram tills läraren pushar något.
- **Lärarvy:** Lägg till `?mode=teacher` i slutet av URL:en. Kräver inloggning med synk-nyckeln och ger en kontrollpanel med knappar för att pusha frågor, visa statistik och sända Live-Meddelanden.

## 📊 Dynamisk Rättning
När läraren avslutar lektionen (index `999`), beräknar systemet elevens poäng. Beräkningen sker dynamiskt baserat på *hur många frågor som faktiskt hann pushas*, vilket gör att man kan avbryta en lektion mitt i (t.ex. när rastklockan ringer) utan att eleverna bestraffas för de frågor som aldrig dök upp.
