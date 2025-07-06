# Chat

Sekce Chat slouží k vedení konverzací s AI asistenty, kteří jsou vytvořeni a nakonfigurování v části Assistants platformy. Uživatel zde spouští nové konverzace, prochází historii předchozích chatů a poskytuje zpětnou vazbu na odpovědi.

## Zahájení nové konverzace

Nový chat se zakládá pomocí tlačítka **New Chat**. Po jeho kliknutí se zobrazí modální okno, ve kterém uživatel:

- zadá název konverzace,
- vybere asistenta, se kterým chce komunikovat (ze seznamu dříve vytvořených),
- případně má možnost přejít rovnou na vytvoření nového asistenta.

Potvrzením výběru tlačítkem **Submit** se chat inicializuje a uživateli se otevře hlavní rozhraní konverzace.

## Rozhraní chatu

Hlavní obrazovka je rozdělena na dvě části:

- **vlevo** se zobrazuje historie všech konverzací (včetně názvu a data),
- **vpravo** probíhá samotná komunikace s vybraným asistentem.

Uživatel píše své dotazy do vstupního pole v dolní části obrazovky a odesílá je stisknutím tlačítka **Send**. K dispozici je také možnost aktivovat vstup hlasem nebo připojit další soubor.

Asistent odpovídá v reálném čase, přičemž každá zpráva zůstává uchována v rámci dané konverzace.

## Zpětná vazba na odpovědi

Pod každou odpovědí asistenta je možné kliknout na ikonu palce nahoru nebo dolů, čímž uživatel poskytne rychlou zpětnou vazbu k dané reakci.

V případě negativního hodnocení se zároveň zobrazí okno **New feedback**, kam lze doplnit konkrétní komentář, proč odpověď nebyla relevantní, přesná nebo očekávaná. Tato zpětná vazba je po odeslání automaticky odeslána do administrátorského rozhraní.

Díky tomuto mechanismu mohou administrátoři sledovat kvalitu odpovědí, analyzovat nedostatky v podkladech nebo datech a optimalizovat nastavení asistentů.

## Public Chat Plugin 

Veřejně přístupné chatovací rozhraní, které lze snadno vložit na web (např. jako iframe nebo pomocí jednoduchého scriptu pro vložení). Nepožaduje registraci ani přihlášení. Umožňuje návštěvníkům komunikovat s AI asistenty. Funkce chatu odpovídá internímu chatu, s možností feedbacku a auditního logování. 