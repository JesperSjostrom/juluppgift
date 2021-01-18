Applikation: Personlig Loggbok

En mobilapplikation för att snabbt föra en digital loggbok/dagbok över stora och små händelser.

Grundfunktioner:
1/Skapa ett loggmeddelande
-Starta Appen
--Skriv en kort text på max 40 tecken
--Spara/Logga knapp
--Meddelande sparas i backend med texten, datum, klockslag

2/Återblick
-Starta Appen
--Välj Återblick
---nu visas en kronologisk lista över händelser med den senaste överst

Tilläggsfunktioner:
Förutom en text, möjlighet att ange en av tre fördefinierade Emojis (glad, ledsen, neutral)
-meddelandets känsla
-ska möjliggöra filtrering vid återblick
Möjlighet att ange en flagga (true/false) för "favorit" dvs en stjärna
-ska möjliggöra filtrering vid återblick

Extrafunktioner:
Automatiskt spara geolocation för var man befanns sig när man skrev loggnoteringen
-möjliggör att vid återblick visa/dölj geolocation-informationen tillsammans med loggmeddelandet


Fallgropar!
Hur säkerställer du att samma person som loggar är den som kan se återblicken?
-vi vill undvika att skapa en registreringsfunktion
--hårdkoda en användare i backend som får en GUID som nyckel att använda vid varje anrop
---obs: detta är inte ok säkerhetsmässigt, men tillräckligt för denna uppgift
----fundera gärna på hur du skulle göra det säkert på riktigt (men bara fundera)

Hur planerar jag mitt arbete, när jag är ensam?
-samma sätt som när du arbetar i grupp
--tänk olika "hattar"
--avsätt tid och tidsboxar. Ex: kl 9-10 planera, 1030-15 koda, 16-17 test/bugg...


Bedömningskriterier
-------------------------------------
Fokus på "snygga" (tydliga och relevanta) incheckningar i Git
Rätt användande av branches i Git (lokalt och centralt)
Möjlighet att följa tankegångar och resonemang i Git (history och stats)

Driftsättning automatiserad utifrån DEV och PROD branches (valfria namn)
Valfritt vilken tjänst du väljer att använda

Tydlig dokumentation
Transparens avseende buggar och deras rättningar

Kodade tester, som körs automatiskt lokalt vid "start" (håll det enkelt)