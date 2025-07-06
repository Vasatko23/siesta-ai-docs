# Data

Sekce Data slouží k připojování, správě a přehledu všech datových zdrojů, se kterými platforma pracuje. Tato data tvoří znalostní bázi, ze které AI čerpá při odpovídání na dotazy uživatelů.

## Výpis datových zdrojů

Po vstupu do sekce se uživateli zobrazí tabulka všech připojených zdrojů. Tabulka obsahuje následující sloupce:

- **#** – unikátní ID zdroje
- **Name** – název souboru nebo připojení
- **Type** – typ zdroje (např. File nebo External API)
- **Created** – datum vytvoření připojení
- **Status** – aktuální stav integrace (např. Interested)
- **Actions** – možnost náhledu nebo úprav pomocí ikon (např. ikona oka)

V pravém horním rohu je tlačítko **New Data**, které spustí průvodce připojením nového datového zdroje.

## Průvodce připojením nových dat

Po kliknutí na **New Data** se otevře tříkrokový průvodce, který umožňuje připojit nový datový zdroj dvěma způsoby:

### Výběr typu zdroje
Uživatel si zvolí, zda chce připojit:

- **File** – nahrání souboru z vlastního zařízení (např. PDF, DOCX, TXT),
- **External API connection** – napojení datového systému přes API (např. Google Drive, Confluence, firemní úložiště).

Po výběru typu se pokračuje kliknutím na tlačítko **Continue**.

### Konfigurace nahrání souboru (File)
V případě volby **File** se zobrazí obrazovka pro nahrání dokumentu. Uživatel zde:

- zadá název připojení do pole **Name**,
- nahraje soubor přetažením nebo kliknutím do označené oblasti **Drop files here or click to upload**.

Po vyplnění údajů se pokračuje tlačítkem **Continue**.

### Konfigurace API připojení (External API)
Pokud uživatel zvolí **External API**, zadává dvě hodnoty:

- **Name** – název připojení (např. "Siesta Intranet"),
- **API URL** – adresa API, odkud bude systém data pravidelně načítat.

Po zadání obou údajů se pokračuje tlačítkem **Continue**.

## Napojení dat na asistenta

Při tvorbě nebo nastavování AI asistenta si uživatel vybírá, ze kterých připojených datových zdrojů má asistent čerpat. Tento výběr ovlivňuje, jaké informace bude asistent používat při odpovídání na dotazy. V rámci konfigurace asistenta je možné kombinovat více datových zdrojů nebo zvolit pouze jeden konkrétní podle účelu použití.

## Funkce a chování

- Přidané datové zdroje se automaticky zobrazují v hlavním přehledu.
- Každý záznam může být zobrazen nebo upraven pomocí tlačítek ve sloupci **Actions**.
- Při chybě v připojení nebo neplatném formátu souboru je uživatel informován chybovou hláškou.

Tato sekce je klíčová pro to, aby Siesta AI mohla pracovat s aktuálními a relevantními daty napříč různými systémy, bez nutnosti jejich ruční aktualizace. 