# Assistants

Sekce Assistants slouží k vytváření a správě vlastních AI asistentů, kteří odpovídají uživatelům v rámci vymezeného kontextu a podle přednastaveného chování. Každý asistent je samostatně definována entita, která může mít vlastní přístup k datům, rozdílný způsob komunikace a využívat jiný model.

## Seznam asistentů

V hlavním přehledu se zobrazuje seznam všech existujících asistentů. Tabulka obsahuje následující sloupce:

- **#** – unikátní identifikátor asistenta
- **Name** – název asistenta (např. ESG Assistant, HR Assistant)
- **Instructions** – zkrácený náhled instrukcí, které určují chování asistenta
- **Temperature** – parametr určující míru kreativity odpovědí
- **Status** – aktuální stav (např. Active, Deactivate)
- **Actions** – možnost náhledu, úprav nebo sdílení asistenta (tvorba veřejného odkazu)

Nového asistenta lze vytvořit kliknutím na tlačítko **Create Assistant**.

## Tvorba asistenta

Po kliknutí na tlačítko pro vytvoření se otevře konfigurační formulář, ve kterém se nastavují klíčové vlastnosti asistenta:

### Detaily
- **Name** – název, pod kterým bude asistent veden v systému
- **Instructions** – hlavní část promptu, která určuje, jak se má asistent chovat (např. kdo je, jak má odpovídat, jaký má tón, na co se má specializovat)

### Výběr modelu
Uživatel zvolí konkrétní jazykový model, který bude asistent využívat (např. GPT-4o). Výběr modelu může ovlivnit způsob, jakým asistent odpovídá – např. rychlost, přesnost nebo schopnost práce s kontextem.

### Přístup k datům
Při nastavování asistenta je možné zvolit, ze kterých datových zdrojů má čerpat. Tímto způsobem je možné každému asistentovi přiřadit jiný kontext, odpovídající jeho účelu:

- **Access to all data sources** – přístup ke všem připojeným datům
- **Limited data sources access** – možnost vybrat pouze konkrétní zdroje (např. HR dokumenty, Intranet, Finanční zprávy)

### Konfigurace modelu
Dále lze upravit chování modelu pomocí následujících parametrů:

- **Response format** – výstupní formát odpovědi (např. text)
- **Temperature** – čím vyšší hodnota, tím kreativnější a méně předvídatelné odpovědi
- **Top P** – ovlivňuje rozmanitost výběru slov v odpovědi (nízká hodnota = konzervativnější odpovědi)

### Public Chat
Je možné aktivovat veřejný režim chatu, díky kterému je možné asistenta jednoduše nasadit na web nebo intranet. Po aktivaci je vygenerován jednoduchý JavaScript kód, který lze zkopírovat a vložit do webové stránky pro integraci widgetu asistenta.

Po vyplnění všech polí je nutné kliknout na tlačítko **Submit**, čímž se nový asistent uloží a zpřístupní v systému. 