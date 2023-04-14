const sliderImage = document.querySelector('.slider-image img');
const thumbnails = document.querySelectorAll('.thumbnail');
const dropdownList = document.querySelectorAll('.h-dropdown-title');
document.querySelector('.mobil-menu').addEventListener('click', function () {

    this.classList.toggle('active');
    document.querySelector('.header-bottom nav').classList.toggle('active');
});



if(sliderImage) {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const thumbnailImage = thumbnail.querySelector('img');
            sliderImage.src = thumbnailImage.src;
        });
    });
}


dropdownList.forEach(function(dropdown) {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
});


//

const menu1 = [
    {
        "title": "HANTECH Split Klimaanlage GWH 18000 BTU Modell Lomo",
        "link": "https://hantech.eu/produkt/hantech-split-klimaanlage-gwh-18000-btu-modell-lomo/",
        "img": "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-300x300.jpg"
    },
    {
        "title": "HANTECH Split Klimaanlage GWH 24000 BTU Modell Lomo",
        "link": "https://hantech.eu/produkt/hantech-split-klimaanlage-gwh-24000-btu-modell-lomo/",
        "img": "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-300x300.jpg"
    },
    {
        "title": "HANTECH Split Klimaanlage GWH 9000 BTU Modell Lomo",
        "link": "https://hantech.eu/produkt/hantech-split-klimaanlage-gwh-9000-btu-modell-lomo/",
        "img": "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-300x300.jpg"
    }
];
const menu2 = [];
const menu3 = [];
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");


if(name === 'Wandklimageräte') {
    menu1.map(menuItem => {
        const item = `<a href="./product-detail.html?name=${menuItem.title.toLowerCase().replaceAll(' ','_')}" class="h-product">
        <div class="h-product__img">
          <img src="${menuItem.img}" alt="">
        </div>
        <h3>${menuItem.title}</h3>
        <div class="h-product__price">
          <span>€1300,00</span>
          <span class="old-price">€1500,00</span>
        </div>
        <small>inkl. MwSt. zzgl. Versand</small>
        <button type="button" class="h-button h-button__primary">Details</button>
      </a>`;

        document.querySelector('.h-products').innerHTML += item;
    });
    if(menu1.length < 1) {
        document.querySelector('.h-products').innerHTML += '<p class="kein-produkte">Es wurden keine Produkte gefunden, die deiner Auswahl entsprechen.</p>'
    }
}
if(name === 'Deckenkassetten') {
    console.log(menu2.length)
    if(menu2.length === 0) {
        document.querySelector('section .h-container').innerHTML += '<p class="kein-produkte">Es wurden keine Produkte gefunden, die deiner Auswahl entsprechen.</p>'
    } else {
        menu2.map(menuItem => {
            const item = `<a href="./product-detail.html?name=${menuItem.title.toLowerCase().replaceAll(' ','_')}" class="h-product">
        <div class="h-product__img">
          <img src="${menuItem.img}" alt="">
        </div>
        <h3>${menuItem.title}</h3>
        <div class="h-product__price">
          <span>€1300,00</span>
          <span class="old-price">€1500,00</span>
        </div>
        <small>inkl. MwSt. zzgl. Versand</small>
        <button type="button" class="h-button h-button__primary">Details</button>
      </a>`;

            document.querySelector('section .h-container').innerHTML += item;
        });
    }
}
if(name === 'Truhengeräte') {
    menu3.map(menuItem => {
        const item = `<a href="./product-detail.html?name=${menuItem.title.toLowerCase().replaceAll(' ','_')}" class="h-product">
        <div class="h-product__img">
          <img src="${menuItem.img}" alt="">
        </div>
        <h3>${menuItem.title}</h3>
        <div class="h-product__price">
          <span>€1300,00</span>
          <span class="old-price">€1500,00</span>
        </div>
        <small>inkl. MwSt. zzgl. Versand</small>
        <button type="button" class="h-button h-button__primary">Details</button>
      </a>`;

        document.querySelector('.h-products').innerHTML += item;
    });
    if(menu3.length < 1) {
        document.querySelector('section .h-container').innerHTML += '<p class="kein-produkte">Es wurden keine Produkte gefunden, die deiner Auswahl entsprechen.</p>'
    }
}

const products = [
    {
        title: 'HANTECH Split Klimaanlage GWH 18000 BTU Modell Lomo',
        desc: `  <div class="column medium-12">
                            <h4>Split Klimaanlage mit 4m Leitungen</h4>
                            <h5>Wlan und Internet Steuerung</h5>
                        </div>
                        <div class="column medium-4">
                            <ul class="checkliste">
                                <li>Sehr sparsames Split Klimagerät</li>
                                <li><span class="fett">Energieeffizienzklasse A++</span></li>
                                <li>4 Meter Kupferleitungen bereits im Lieferumfang</li>
                                <li>weiteres Installationsmaterial wie el.Verbindungs­leitungen, Kondens­wasser­schlauch, Isoliertape, Abschlussring, usw dabei</li>
                                <li>Modernes LED Display, abschaltbar (z.B. über die Nacht)</li>
                                <li>Flüsterleiser Betrieb durch herabsenken der Lüfter­geschwindigkeit</li>
                                <li>Fernbedienung</li>
                                <li><span class="fett">Wlan Fernsteuerung</span></li>
                                <li>Serverraum geeignet</li>
                                <li>Kühlen bis -15°C Außentemperatur</li>
                                <li>Turbo-Modus</li>
                                <li>Timer 24h ON (Uhrzeitgesteuert)</li>
                                <li>Timer 24h OFF (Uhrzeitgesteuert)</li>
                                <li>Korrosionsbeschichtung der Außeneinheit für lange Lebensdauer</li>
                            </ul>
                            <h4>Smarte WLAN und Internet-Steuerung</h4>
                            <p><img class="aligncenter wp-image-8631 size-full" src="http://hantech.eu/wp-content/uploads/2017/09/gwh-wlan.jpg" alt="" width="1200" height="631"></p>
                            <p>HANTECH Klimageräte mit WiFi-Controller lassen sich bequem per APP steuern. Verbinden Sie einfach Ihre Klimaanlage mit Ihrem Wlan-Router Schritt für Schritt nach Anleitung. Danach stehen Ihnen sämtliche Funktionen und Einstellungen des Klimageräts zur Verfügung. Die Bedienung erfolgt sowohl über Wlan als auch Internet, was bedeutet dass Sie bereits vor Ankunft Ihre Wunschtemperatur einstellen.</p>
                        </div>
                        <p><!--more--></p>
                        <p>&nbsp;</p>`,
        img: [
            "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-150x150.jpg",
            "https://hantech.eu/wp-content/uploads/2017/09/Hantech_GWH_24-150x150.png",
            "https://hantech.eu/wp-content/uploads/2017/09/gwh-wlan-150x150.jpg",
            "https://hantech.eu/wp-content/uploads/2017/09/gwh-featured-150x150.jpg"
        ],
        tabs: [
            {
                "name": "\n            Beschreibung\n        ",
                "content": "\n\n        <h2>Beschreibung</h2>\n\n        <ul class=\"checkliste\">\n            <li>Sehr sparsames Split Klimagerät</li>\n            <li><span class=\"fett\">Energieeffizienzklasse A++</span></li>\n            <li>4 Meter Kupferleitungen bereits im Lieferumfang</li>\n            <li>weiteres Installationsmaterial wie el.Verbindungs­leitungen, Kondens­wasser­schlauch, Isoliertape, Abschlussring, usw dabei</li>\n            <li>Modernes LED Display, abschaltbar (z.B. über die Nacht)</li>\n            <li>Flüsterleiser Betrieb durch herabsenken der Lüfter­geschwindigkeit</li>\n            <li>Fernbedienung</li>\n            <li><span class=\"fett\">Wlan Fernsteuerung</span></li>\n            <li>Serverraum geeignet</li>\n            <li>Kühlen bis -15°C Außentemperatur</li>\n            <li>Turbo-Modus</li>\n            <li>Timer 24h ON (Uhrzeitgesteuert)</li>\n            <li>Timer 24h OFF (Uhrzeitgesteuert)</li>\n            <li>Korrosionsbeschichtung der Außeneinheit für lange Lebensdauer</li>\n        </ul>\n        <p>HANTECH Klimageräte mit WiFi-Controller lassen sich bequem per APP steuern. Verbinden Sie einfach Ihre Klimaanlage mit Ihrem Wlan-Router Schritt für Schritt nach Anleitung. Danach stehen Ihnen sämtliche Funktionen und Einstellungen des Klimageräts zur Verfügung. Die Bedienung erfolgt sowohl über Wlan als auch Internet, was bedeutet dass Sie bereits vor Ankunft Ihre Wunschtemperatur einstellen.</p>\n    "
            },
            {
                "name": "\n            Zusätzliche Information\n        ",
                "content": "\n\n        <h2>Zusätzliche Information</h2>\n\n        <table class=\"shop_attributes\">\n\n\n            <tbody><tr>\n                <th>Technische Daten</th>\n                <td><p>Technische Daten</p>\n                    <p>Hersteller HANTECH (Powered by GREE), Modellbezeichnung GWH24QE-K3DNA1G, Schallleistungspegel 39 dB, Schallleistungspegel Innen/Außen 64/68dB (max), Kältemittel 2)∗ (GWP) R410A (2088), SEER / SCOP 6,3 / 4,0, Energieeffizienzklasse Kühlen / Heizen A++ / A+, Auslegungslast Kühl- / Heizbetrieb 6,7 kW / 6,4 kW, Stromverbrauch 1)∗ Kühlen / Heizen 373 kWh/Jahr / 2240 kWh/Jahr, Heizperiode (mittel) bis -15°C, Maße Innen / Außen (in mm) 1078×325×246 / 955×700×396, Gewicht Innen / Außen 20,5 kg / 57,5 kg, Gewinde 5/8\" 1/4\", Ø el. Leitungen 2,5mm², Spannung 220-240V, Max. Stromstärke 16,4A, Max. Luftumwälzung 1150m³/h, Länge der Kupferleitungen 4m, 1)* Energieverbrauch pro Jahr (kWh/Jahr). Auf der Grundlage von Ergebnissen der Normprüfung. Der tatsächliche Verbrauch hängt von der Nutzung und vom Standort des Gerätes ab., 2)* Der Austritt von Kältemittel trägt zum Klimawandel bei. Kältemittel mit geringerem Treibhauspotential (GWP) tragen im Fall eines Austretens weniger zur Erderwärmung bei als solche mit höherem Treibhauspotential (GWP). Diese Anlage enthält Kältemittel mit einem GWP gleich 2088. Somit hätte ein Austreten von 1 kg dieses Kältemittels 2088-Mal größere Auswirkungen auf die Erderwärmung als 1 kg CO2, bezogen auf hundert Jahre. Keine Arbeiten am Kältekreislauf vornehmen oder das Gerät zerlegen – stets Fachpersonal hinzuziehen.</p>\n                </td>\n            </tr>\n            <tr>\n                <th>Funktion</th>\n                <td><p>WLAN Steuerung<br>\n                    Fernsteuerung per APP und Smartphone (Android und iOS)., Timer<br>\n                    An- und oder Ausschalten zu festgelegten Uhrzeiten., LED Display<br>\n                    Hochmodernes LED Display in reinweisses, bei Bedarf abschaltbar., Turbo Modus<br>\n                    Für blitzschnelle Abkühlung und maximalen Leistungsabruf., Schlafmodus<br>\n                    Entspannt durch die Nacht ohne Unterkühlung durch konstante Temperaturanhebung., Entfeuchtung<br>\n                    Ideal zum Entfeuchten, ohne Temperatur­unterschied., Konstante Temperaturen</p>\n                    <p>Der präzise Inverterkompressor erreicht die eingestellte Wunschtemperatur nicht nur schneller gegenüber herkömmlichen Klimaansagen mit On/Off Technologie, sondern kann zudem eine konstante Temperatur sicherstellen.</p>\n                    <p>Noch geringerer Energieverbrauch</p>\n                    <p>Da der Inverter Kompressor die Stromaufnahme stets auf die benötigte Leistung abstimmt und nach erreichen der Solltemperatur nicht völlig abschaltet, sondern auf der niedrigster Drehzahl weiter läuft, ist ein erneuter und hoher Anlaufstrom nicht notwendig. Stromeinsparungen und konstantere Temperaturen sind das Resultat der HANTECH Klimaanlagen mit der aktuellsten Invertertechnologie aus 2016., Mehr Effizienz für kühle Tage</p>\n                    <p>Besonders eignen sich die HANTECH Klimaanlagen in der Übergangszeit zum aufheizen dank der bis zu Energieeffizienzklasse A+++.</p>\n                    <p>Kennen Sie das nicht auch wenn die Abende wieder kälter werden und die Öl-Zentralheizung evtl. noch nicht läuft? HANTECH Geräte schaffen hier blitzschnell eine besonders angenehm-wohlige Raumtemperatur und eine kostengünstige Heizalternative., Wärmepumpen­prinzip</p>\n                    <p>Nutzen Sie die 'kostenlosen Ressourcen' unseres Planeten mit Hilfe des Wärmepumpenprinzips. Klimaanlagen von HANTECH bedienen sich hierbei bis zu 75% aus der kostenfreien Energieressource Luft und die restlichen bis zu 25% aus der Steckdose.</p>\n                    <p>Diese komfortable und energiesparende Klimatisierung ist auch als Luft-Luft Wärmepumpe bekannt. In der Luft verbirgt sich eine Menge ungenutzter Energie. HANTECH Geräte greifen die Energie auf und verarbeiten diese. Investieren Sie schon heute in eine kostenlose Energieqeuelle und profitieren von der vitalisierenden Wirkung eines perfekt klimatisierten und entfeuchteten Wohn- oder Geschäftsraums., Serverraum geeignet</p>\n                    <p>Ein sehr weiter Arbeitsbereich im Kühlbetrieb bei Außentemperaturen von -15°C bis 55°C eignen sich HANTECH Klimaanlagen für den gewerblichen und auch privaten Serverraumkühlbetrieb. Der Dauerbetrieb stellt für HANTECH Klimageräte absolut kein Problem dar., Sicherheits­features</p>\n                    <p>Selbstdiagnose<br>\n                        Fehler werden automatisch erkannt und auf dem Display der Inneneinheit angezeigt. Sicherungs­automatik wird aktiviert.</p>\n                    <p>Niedrige Anlaufspannung<br>\n                        Auch Softstart genannt, dabei wird mit geringer Spannung gestartet.</p>\n                    <p>Auto Restart<br>\n                        Nach dem Ausschalten oder einem Strom­ausfall wird das gewählte Programm fortgesetzt.</p>\n                </td>\n            </tr>\n            <tr>\n                <th>Lieferumfang</th>\n                <td><p>1x Außeneinheit (für 4m vorgefüllt)<br>\n                    1x Inneneinheit<br>\n                    1x Fernbedienung<br>\n                    1x 4 Meter Kupferleitungen<br>\n                    1x El. Verbindungskabel<br>\n                    1x Kondenswasserschlauch<br>\n                    1x Isolierband<br>\n                    1x Abschlussstück für Mauerdurchführung<br>\n                    1x Bedienungsanleitung</p>\n                </td>\n            </tr>\n            <tr>\n                <th>Hinweise</th>\n                <td><p>Entsorgung von Altbatterien des Geräts</p>\n                    <p>nach § 18 Batteriegesetz (BattG)</p>\n                    <p>Informationspflicht gemäß Batteriegesetz (BattG)<br>\n                        Achten Sie darauf, dass Ihre alten Batterien/Akkus, so wie es der Gesetzgeber vorschreibt, an einer kommunalen Sammelstelle oder im Handel vor Ort abgeben. Die Entsorgung über den gewöhnlichen Hausmüll ist verboten und verstößt gegen das Batteriegesetz. Die Abgabe ist für Sie kostenlos. Gerne können Sie auch die bei uns erworbenen Batterien/Akkus nach dem Gebrauch an uns unentgeltlich zurückgeben. Die Rücksendung der Batterien/Akkus an uns muss in jedem Fall ausreichend frankiert erfolgen. Rücksendungen von Batterien/Akkus sind zu richten an:</p>\n                    <p>Ananda GmbH<br>\n                        Daimler Str.6<br>\n                        D-76185 Karlsruhe</p>\n                    <p>Batterien und Akkus, die Schadstoffe enthalten, sind mit dem Symbol einer durchgekreuzten Mülltonne deutlich erkennbar gekennzeichnet. Desweiteren befindet sich unter dem Symbol der durchgekreuzten Mülltonne, die chemische Bezeichnung der entsprechenden Schadstoffe. Beispiele hierfür sind: (Pb) Blei, (Cd) Cadmium, (Hg) Quecksilber., Ökodesign-Richtlinie</p>\n                    <p>Klimaschutzziele</p>\n                    <p>In der EU wurden von der Europäischen Kommission anspruchsvolle Ziele zur Steigerung der Energieeffizienz aufgestellt. Bis zum Jahr 2020 sind die sogenannten 20-20-20-Ziele angestrebt. Dazu gehört eine Senkung des Verbrauch von Primärenergie um 20 %, eine Senkung der CO2-Emission um 20 % und einen Anteil erneuerbarer Energie von 20 %. Für die Realisierung dieser Ziele hat die EU die Ökodesign-Richtlinie [2009/125/EG] herausgegeben. Diese Richtlinie legt die Mindestanforderungen an die Effizienz energieverbrauchsrelevanter Produkte fest. Seit dem Jahr 2013 fallen alle Klimaanlagen und Luft-Luft-Wärmepumpen unter 12 kW in den Geltungsbereich dieser Ökodesign-Richtlinie. Im Jahr 2014 wurde beim Energieverhalten die Messlatte deutlich höher gelegt.</p>\n                    <p>Saisonale Effizienz</p>\n                    <p>Neben der Ökodesign-Richtlinie, welche die Mindestanforderungen hinsichtlich des Umweltverhaltens systematisch anhebt, wurde auch das Verfahren zur Messung der Effizienzwerte geändert. Bisher wurde bei der nominalen Effizienz (EER und COP) das Leistungsverhalten bei einer einzigen, fest vorgegebenen Außentemperatur und unter Volllastbetrieb getestet. Damit das Leistungsverhalten unter realen Bedingungen besser wiedergegeben wird, wurde die breite Palette an Temperaturen der jeweiligen Kühl- und Heizsaison, Teil- und Volllastzeiten, sowie Stand By-Zeiten berücksichtigt. Durch die unterschiedliche Gewichtung der Messpunkte wird der Teillastbetrieb, für reale Bedingungen und über die gesamte Saison wiedergespiegelt.</p>\n                    <p>Die Bezeichnug der Effizienzwerte wurde um ein „S“ für „saisonal“ (SEER und SCOP) erweitert. Höherer Wert = effizienter</p>\n                </td>\n            </tr>\n            </tbody></table>\n    "
            },
        ]
    },
    {
        title: 'HANTECH Split Klimaanlage GWH 24000 BTU Modell Lomo',
        desc: `<p>Ob Kühlen, Heizen oder Entfeuchten eine Klimaanlage ist immer eine lohnende Investition für unser Wohlbefinden. Der Jahrhundertsommer von 2003 ist zwar eher die Ausnahme, jedoch zeigen sich in Deutschland statistisch immer mehr Tage die über 30°C erreichen. So zum Beispiel auch 2014 und 2015. In der Automobilindustrie ist sie bereits Standard und warum sollten sie auf den Komfort aus Ihrem KFZ in den eigenen Wänden verzichten? Vor allem in den Schlafräumen sind Klimageräte sehr gefragt da dort ein Wohlfühlklima herrschen sollte um möglichst ausgeruht den neuen Tag zu beginnen. Ein körperliches Wohlbefinden steigert unsere Leistungsfähigkeit.</p>
                        <p>Entscheidend für unser Wohlbefinden ist ein optimal temperierter und entfeuchteter Wohnraum. Besonders die Entfeuchtungsfunktion macht sich stark bemerkbar auch bei gleicher Temperatur. So zum Beispiel unterscheidet sich ein Raum mit 26°C Raumluft wesentlich von einem nicht konditionierten mit schwüler Raumluft.</p>
                        <p>Wärmepumpen in der übergangszeit und auch an kühlen Sommertagen sind praktische Helfer um das Raumklima komfortabel und energiesparend anzupassen.</p>
                        <p>Dachausbauten und Dachgeschosswohnungen können bereits im Frühjahr unangenehme Temperaturen durch Aufheizen der Wände erreichen. Die Wärme in kurzer Zeit wieder ab zu führen erweist sich oftmals als sehr schwierig. Mit einer Klimaanlage von HANTECH können Sie sich bereits heute schon auf ein verbessertes Raumklima von morgen freuen.</p>`,
        img: [
            "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-150x150.jpg",
            "https://hantech.eu/wp-content/uploads/2017/09/Hantech_GWH_24-150x150.png",
            "https://hantech.eu/wp-content/uploads/2017/09/gwh-wlan-150x150.jpg",
            "https://hantech.eu/wp-content/uploads/2017/09/gwh-featured-150x150.jpg"
        ],
        tabs: [
            {
                "name": "\n                            Beschreibung\n                        ",
                "content": "\n\n                        <h2>Beschreibung</h2>\n\n                        <ul class=\"checkliste\">\n                            <li>Sehr sparsames Split Klimagerät</li>\n                            <li><span class=\"fett\">Energieeffizienzklasse A++</span></li>\n                            <li>4 Meter Kupferleitungen bereits im Lieferumfang</li>\n                            <li>weiteres Installationsmaterial wie el.Verbindungs­leitungen, Kondens­wasser­schlauch, Isoliertape, Abschlussring, usw dabei</li>\n                            <li>Modernes LED Display, abschaltbar (z.B. über die Nacht)</li>\n                            <li>Flüsterleiser Betrieb durch herabsenken der Lüfter­geschwindigkeit</li>\n                            <li>Fernbedienung</li>\n                            <li><span class=\"fett\">Wlan Fernsteuerung</span></li>\n                            <li>Serverraum geeignet</li>\n                            <li>Kühlen bis -15°C Außentemperatur</li>\n                            <li>Turbo-Modus</li>\n                            <li>Timer 24h ON (Uhrzeitgesteuert)</li>\n                            <li>Timer 24h OFF (Uhrzeitgesteuert)</li>\n                            <li>Korrosionsbeschichtung der Außeneinheit für lange Lebensdauer</li>\n                        </ul>\n                        <p>HANTECH Klimageräte mit WiFi-Controller lassen sich bequem per APP steuern. Verbinden Sie einfach Ihre Klimaanlage mit Ihrem Wlan-Router Schritt für Schritt nach Anleitung. Danach stehen Ihnen sämtliche Funktionen und Einstellungen des Klimageräts zur Verfügung. Die Bedienung erfolgt sowohl über Wlan als auch Internet, was bedeutet dass Sie bereits vor Ankunft Ihre Wunschtemperatur einstellen.</p>\n                    "
            },
            {
                "name": "\n                            Zusätzliche Information\n                        ",
                "content": "\n\n                        <h2>Zusätzliche Information</h2>\n\n                        <table class=\"shop_attributes\">\n\n\n                            <tbody><tr>\n                                <th>Technische Daten</th>\n                                <td><p>Technische Daten</p>\n                                    <p>Hersteller HANTECH (Powered by GREE), Modellbezeichnung GWH24QE-K3DNA1G, Schallleistungspegel 39 dB, Schallleistungspegel Innen/Außen 64/68dB (max), Kältemittel 2)∗ (GWP) R410A (2088), SEER / SCOP 6,3 / 4,0, Energieeffizienzklasse Kühlen / Heizen A++ / A+, Auslegungslast Kühl- / Heizbetrieb 6,7 kW / 6,4 kW, Stromverbrauch 1)∗ Kühlen / Heizen 373 kWh/Jahr / 2240 kWh/Jahr, Heizperiode (mittel) bis -15°C, Maße Innen / Außen (in mm) 1078×325×246 / 955×700×396, Gewicht Innen / Außen 20,5 kg / 57,5 kg, Gewinde 5/8\" 1/4\", Ø el. Leitungen 2,5mm², Spannung 220-240V, Max. Stromstärke 16,4A, Max. Luftumwälzung 1150m³/h, Länge der Kupferleitungen 4m, 1)* Energieverbrauch pro Jahr (kWh/Jahr). Auf der Grundlage von Ergebnissen der Normprüfung. Der tatsächliche Verbrauch hängt von der Nutzung und vom Standort des Gerätes ab., 2)* Der Austritt von Kältemittel trägt zum Klimawandel bei. Kältemittel mit geringerem Treibhauspotential (GWP) tragen im Fall eines Austretens weniger zur Erderwärmung bei als solche mit höherem Treibhauspotential (GWP). Diese Anlage enthält Kältemittel mit einem GWP gleich 2088. Somit hätte ein Austreten von 1 kg dieses Kältemittels 2088-Mal größere Auswirkungen auf die Erderwärmung als 1 kg CO2, bezogen auf hundert Jahre. Keine Arbeiten am Kältekreislauf vornehmen oder das Gerät zerlegen – stets Fachpersonal hinzuziehen.</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Funktion</th>\n                                <td><p>WLAN Steuerung<br>\n                                    Fernsteuerung per APP und Smartphone (Android und iOS)., Timer<br>\n                                    An- und oder Ausschalten zu festgelegten Uhrzeiten., LED Display<br>\n                                    Hochmodernes LED Display in reinweisses, bei Bedarf abschaltbar., Turbo Modus<br>\n                                    Für blitzschnelle Abkühlung und maximalen Leistungsabruf., Schlafmodus<br>\n                                    Entspannt durch die Nacht ohne Unterkühlung durch konstante Temperaturanhebung., Entfeuchtung<br>\n                                    Ideal zum Entfeuchten, ohne Temperatur­unterschied., Konstante Temperaturen</p>\n                                    <p>Der präzise Inverterkompressor erreicht die eingestellte Wunschtemperatur nicht nur schneller gegenüber herkömmlichen Klimaansagen mit On/Off Technologie, sondern kann zudem eine konstante Temperatur sicherstellen.</p>\n                                    <p>Noch geringerer Energieverbrauch</p>\n                                    <p>Da der Inverter Kompressor die Stromaufnahme stets auf die benötigte Leistung abstimmt und nach erreichen der Solltemperatur nicht völlig abschaltet, sondern auf der niedrigster Drehzahl weiter läuft, ist ein erneuter und hoher Anlaufstrom nicht notwendig. Stromeinsparungen und konstantere Temperaturen sind das Resultat der HANTECH Klimaanlagen mit der aktuellsten Invertertechnologie aus 2016., Mehr Effizienz für kühle Tage</p>\n                                    <p>Besonders eignen sich die HANTECH Klimaanlagen in der Übergangszeit zum aufheizen dank der bis zu Energieeffizienzklasse A+++.</p>\n                                    <p>Kennen Sie das nicht auch wenn die Abende wieder kälter werden und die Öl-Zentralheizung evtl. noch nicht läuft? HANTECH Geräte schaffen hier blitzschnell eine besonders angenehm-wohlige Raumtemperatur und eine kostengünstige Heizalternative., Wärmepumpen­prinzip</p>\n                                    <p>Nutzen Sie die 'kostenlosen Ressourcen' unseres Planeten mit Hilfe des Wärmepumpenprinzips. Klimaanlagen von HANTECH bedienen sich hierbei bis zu 75% aus der kostenfreien Energieressource Luft und die restlichen bis zu 25% aus der Steckdose.</p>\n                                    <p>Diese komfortable und energiesparende Klimatisierung ist auch als Luft-Luft Wärmepumpe bekannt. In der Luft verbirgt sich eine Menge ungenutzter Energie. HANTECH Geräte greifen die Energie auf und verarbeiten diese. Investieren Sie schon heute in eine kostenlose Energieqeuelle und profitieren von der vitalisierenden Wirkung eines perfekt klimatisierten und entfeuchteten Wohn- oder Geschäftsraums., Serverraum geeignet</p>\n                                    <p>Ein sehr weiter Arbeitsbereich im Kühlbetrieb bei Außentemperaturen von -15°C bis 55°C eignen sich HANTECH Klimaanlagen für den gewerblichen und auch privaten Serverraumkühlbetrieb. Der Dauerbetrieb stellt für HANTECH Klimageräte absolut kein Problem dar., Sicherheits­features</p>\n                                    <p>Selbstdiagnose<br>\n                                        Fehler werden automatisch erkannt und auf dem Display der Inneneinheit angezeigt. Sicherungs­automatik wird aktiviert.</p>\n                                    <p>Niedrige Anlaufspannung<br>\n                                        Auch Softstart genannt, dabei wird mit geringer Spannung gestartet.</p>\n                                    <p>Auto Restart<br>\n                                        Nach dem Ausschalten oder einem Strom­ausfall wird das gewählte Programm fortgesetzt.</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Lieferumfang</th>\n                                <td><p>1x Außeneinheit (für 4m vorgefüllt)<br>\n                                    1x Inneneinheit<br>\n                                    1x Fernbedienung<br>\n                                    1x 4 Meter Kupferleitungen<br>\n                                    1x El. Verbindungskabel<br>\n                                    1x Kondenswasserschlauch<br>\n                                    1x Isolierband<br>\n                                    1x Abschlussstück für Mauerdurchführung<br>\n                                    1x Bedienungsanleitung</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Hinweise</th>\n                                <td><p>Entsorgung von Altbatterien des Geräts</p>\n                                    <p>nach § 18 Batteriegesetz (BattG)</p>\n                                    <p>Informationspflicht gemäß Batteriegesetz (BattG)<br>\n                                        Achten Sie darauf, dass Ihre alten Batterien/Akkus, so wie es der Gesetzgeber vorschreibt, an einer kommunalen Sammelstelle oder im Handel vor Ort abgeben. Die Entsorgung über den gewöhnlichen Hausmüll ist verboten und verstößt gegen das Batteriegesetz. Die Abgabe ist für Sie kostenlos. Gerne können Sie auch die bei uns erworbenen Batterien/Akkus nach dem Gebrauch an uns unentgeltlich zurückgeben. Die Rücksendung der Batterien/Akkus an uns muss in jedem Fall ausreichend frankiert erfolgen. Rücksendungen von Batterien/Akkus sind zu richten an:</p>\n                                    <p>Ananda GmbH<br>\n                                        Daimler Str.6<br>\n                                        D-76185 Karlsruhe</p>\n                                    <p>Batterien und Akkus, die Schadstoffe enthalten, sind mit dem Symbol einer durchgekreuzten Mülltonne deutlich erkennbar gekennzeichnet. Desweiteren befindet sich unter dem Symbol der durchgekreuzten Mülltonne, die chemische Bezeichnung der entsprechenden Schadstoffe. Beispiele hierfür sind: (Pb) Blei, (Cd) Cadmium, (Hg) Quecksilber., Ökodesign-Richtlinie</p>\n                                    <p>Klimaschutzziele</p>\n                                    <p>In der EU wurden von der Europäischen Kommission anspruchsvolle Ziele zur Steigerung der Energieeffizienz aufgestellt. Bis zum Jahr 2020 sind die sogenannten 20-20-20-Ziele angestrebt. Dazu gehört eine Senkung des Verbrauch von Primärenergie um 20 %, eine Senkung der CO2-Emission um 20 % und einen Anteil erneuerbarer Energie von 20 %. Für die Realisierung dieser Ziele hat die EU die Ökodesign-Richtlinie [2009/125/EG] herausgegeben. Diese Richtlinie legt die Mindestanforderungen an die Effizienz energieverbrauchsrelevanter Produkte fest. Seit dem Jahr 2013 fallen alle Klimaanlagen und Luft-Luft-Wärmepumpen unter 12 kW in den Geltungsbereich dieser Ökodesign-Richtlinie. Im Jahr 2014 wurde beim Energieverhalten die Messlatte deutlich höher gelegt.</p>\n                                    <p>Saisonale Effizienz</p>\n                                    <p>Neben der Ökodesign-Richtlinie, welche die Mindestanforderungen hinsichtlich des Umweltverhaltens systematisch anhebt, wurde auch das Verfahren zur Messung der Effizienzwerte geändert. Bisher wurde bei der nominalen Effizienz (EER und COP) das Leistungsverhalten bei einer einzigen, fest vorgegebenen Außentemperatur und unter Volllastbetrieb getestet. Damit das Leistungsverhalten unter realen Bedingungen besser wiedergegeben wird, wurde die breite Palette an Temperaturen der jeweiligen Kühl- und Heizsaison, Teil- und Volllastzeiten, sowie Stand By-Zeiten berücksichtigt. Durch die unterschiedliche Gewichtung der Messpunkte wird der Teillastbetrieb, für reale Bedingungen und über die gesamte Saison wiedergespiegelt.</p>\n                                    <p>Die Bezeichnug der Effizienzwerte wurde um ein „S“ für „saisonal“ (SEER und SCOP) erweitert. Höherer Wert = effizienter</p>\n                                </td>\n                            </tr>\n                            </tbody></table>\n                    "
            }
        ]
    },
    {
        title: 'HANTECH Split Klimaanlage GWH 9000 BTU Modell Lomo',
        desc: `<div class="column medium-12">
                            <h1>Klimatisierte Räume sind</h1>
                            <h2>weltweit begehrt, zu Recht!</h2>
                        </div>
                        <div class="column medium-12">
                            <p>Ob Kühlen, Heizen oder Entfeuchten eine Klimaanlage ist immer eine lohnende Investition für unser Wohlbefinden. Der Jahrhundertsommer von 2003 ist zwar eher die Ausnahme, jedoch zeigen sich in Deutschland statistisch immer mehr Tage die über 30°C erreichen. So zum Beispiel auch 2014 und 2015. In der Automobilindustrie ist sie bereits Standard und warum sollten sie auf den Komfort aus Ihrem KFZ in den eigenen Wänden verzichten? Vor allem in den Schlafräumen sind Klimageräte sehr gefragt da dort ein Wohlfühlklima herrschen sollte um möglichst ausgeruht den neuen Tag zu beginnen. Ein körperliches Wohlbefinden steigert unsere Leistungsfähigkeit.</p>
                            <p>Entscheidend für unser Wohlbefinden ist ein optimal temperierter und entfeuchteter Wohnraum. Besonders die Entfeuchtungsfunktion macht sich stark bemerkbar auch bei gleicher Temperatur. So zum Beispiel unterscheidet sich ein Raum mit 26°C Raumluft wesentlich von einem nicht konditionierten mit schwüler Raumluft.</p>
                            <p>Wärmepumpen in der übergangszeit und auch an kühlen Sommertagen sind praktische Helfer um das Raumklima komfortabel und energiesparend anzupassen.</p>
                            <p>Dachausbauten und Dachgeschosswohnungen können bereits im Frühjahr unangenehme Temperaturen durch Aufheizen der Wände erreichen. Die Wärme in kurzer Zeit wieder ab zu führen erweist sich oftmals als sehr schwierig. Mit einer Klimaanlage von HANTECH können Sie sich bereits heute schon auf ein verbessertes Raumklima von morgen freuen.</p>
                            <h2>Ihre Vorteile</h2>
                            <div class="spBox">
                                <ul class="checkliste">
                                    <li>Top Marken Produkt</li>
                                    <li>Freundliche Beratung per Email und Telefon</li>
                                    <li>Gerne vermitteln wir Ihnen einen Klimatechniker in Ihrer Region</li>
                                    <li>Schnelle Lieferung</li>
                                    <li>Ersatzteile stehen bei Bedarf zur Verfügung</li>
                                </ul>
                            </div>
                        </div>`,
        img: [
            "https://hantech.eu/wp-content/uploads/2017/09/w1200_hantech_gwh-150x150.jpg",
            "https://hantech.eu/wp-content/uploads/2017/09/Hantech_GWH_24-150x150.png",
            "https://hantech.eu/wp-content/uploads/2017/09/gwh-wlan-150x150.jpg",
            "https://hantech.eu/wp-content/uploads/2017/09/gwh-featured-150x150.jpg"
        ],
        tabs: [
            {
                "name": "\n                            Beschreibung\n                        ",
                "content": "\n\n                        <h2>Beschreibung</h2>\n\n                        <ul class=\"checkliste\">\n                            <li>Sehr sparsames Split Klimagerät</li>\n                            <li><span class=\"fett\">Energieeffizienzklasse A++</span></li>\n                            <li>4 Meter Kupferleitungen bereits im Lieferumfang</li>\n                            <li>weiteres Installationsmaterial wie el.Verbindungs­leitungen, Kondens­wasser­schlauch, Isoliertape, Abschlussring, usw dabei</li>\n                            <li>Modernes LED Display, abschaltbar (z.B. über die Nacht)</li>\n                            <li>Flüsterleiser Betrieb durch herabsenken der Lüfter­geschwindigkeit</li>\n                            <li>Fernbedienung</li>\n                            <li><span class=\"fett\">Wlan Fernsteuerung</span></li>\n                            <li>Serverraum geeignet</li>\n                            <li>Kühlen bis -15°C Außentemperatur</li>\n                            <li>Turbo-Modus</li>\n                            <li>Timer 24h ON (Uhrzeitgesteuert)</li>\n                            <li>Timer 24h OFF (Uhrzeitgesteuert)</li>\n                            <li>Korrosionsbeschichtung der Außeneinheit für lange Lebensdauer</li>\n                        </ul>\n                        <p>HANTECH Klimageräte mit WiFi-Controller lassen sich bequem per APP steuern. Verbinden Sie einfach Ihre Klimaanlage mit Ihrem Wlan-Router Schritt für Schritt nach Anleitung. Danach stehen Ihnen sämtliche Funktionen und Einstellungen des Klimageräts zur Verfügung. Die Bedienung erfolgt sowohl über Wlan als auch Internet, was bedeutet dass Sie bereits vor Ankunft Ihre Wunschtemperatur einstellen.</p>\n                    "
            },
            {
                "name": "\n                            Zusätzliche Information\n                        ",
                "content": "\n\n                        <h2>Zusätzliche Information</h2>\n\n                        <table class=\"shop_attributes\">\n\n\n                            <tbody><tr>\n                                <th>Funktion</th>\n                                <td><p>Besonderheiten</p>\n                                    <p>WLAN Steuerung<br>\n                                        Fernsteuerung per APP und Smartphone (Android und iOS)., Timer<br>\n                                        An- und oder Ausschalten zu festgelegten Uhrzeiten., LED Display<br>\n                                        Hochmodernes LED Display in reinweisses, bei Bedarf abschaltbar., Turbo Modus<br>\n                                        Für blitzschnelle Abkühlung und maximalen Leistungsabruf., Schlafmodus<br>\n                                        Entspannt durch die Nacht ohne Unterkühlung durch konstante Temperaturanhebung., Entfeuchtung<br>\n                                        Ideal zum Entfeuchten, ohne Temperatur­unterschied., Neuste Invertertechnik 2016</p>\n                                    <p>Konstante Temperaturen</p>\n                                    <p>Der präzise Inverterkompressor erreicht die eingestellte Wunschtemperatur nicht nur schneller gegenüber herkömmlichen Klimaansagen mit On/Off Technologie, sondern kann zudem eine konstante Temperatur sicherstellen.</p>\n                                    <p>Noch geringerer Energieverbrauch</p>\n                                    <p>Da der Inverter Kompressor die Stromaufnahme stets auf die benötigte Leistung abstimmt und nach erreichen der Solltemperatur nicht völlig abschaltet, sondern auf der niedrigster Drehzahl weiter läuft, ist ein erneuter und hoher Anlaufstrom nicht notwendig. Stromeinsparungen und konstantere Temperaturen sind das Resultat der HANTECH Klimaanlagen mit der aktuellsten Invertertechnologie aus 2016., Mehr Effizienz für kühle Tage</p>\n                                    <p>Besonders eignen sich die HANTECH Klimaanlagen in der Übergangszeit zum aufheizen dank der bis zu Energieeffizienzklasse A+++.</p>\n                                    <p>Kennen Sie das nicht auch wenn die Abende wieder kälter werden und die Öl-Zentralheizung evtl. noch nicht läuft? HANTECH Geräte schaffen hier blitzschnell eine besonders angenehm-wohlige Raumtemperatur und eine kostengünstige Heizalternative., Wärmepumpen­prinzip</p>\n                                    <p>Nutzen Sie die 'kostenlosen Ressourcen' unseres Planeten mit Hilfe des Wärmepumpenprinzips. Klimaanlagen von HANTECH bedienen sich hierbei bis zu 75% aus der kostenfreien Energieressource Luft und die restlichen bis zu 25% aus der Steckdose.</p>\n                                    <p>Diese komfortable und energiesparende Klimatisierung ist auch als Luft-Luft Wärmepumpe bekannt. In der Luft verbirgt sich eine Menge ungenutzter Energie. HANTECH Geräte greifen die Energie auf und verarbeiten diese. Investieren Sie schon heute in eine kostenlose Energieqeuelle und profitieren von der vitalisierenden Wirkung eines perfekt klimatisierten und entfeuchteten Wohn- oder Geschäftsraums., Serverraum geeignet</p>\n                                    <p>Ein sehr weiter Arbeitsbereich im Kühlbetrieb bei Außentemperaturen von -15°C bis 55°C eignen sich HANTECH Klimaanlagen für den gewerblichen und auch privaten Serverraumkühlbetrieb. Der Dauerbetrieb stellt für HANTECH Klimageräte absolut kein Problem dar., Sicherheits­features</p>\n                                    <p>Selbstdiagnose<br>\n                                        Fehler werden automatisch erkannt und auf dem Display der Inneneinheit angezeigt. Sicherungs­automatik wird aktiviert.</p>\n                                    <p>Niedrige Anlaufspannung<br>\n                                        Auch Softstart genannt, dabei wird mit geringer Spannung gestartet.</p>\n                                    <p>Auto Restart<br>\n                                        Nach dem Ausschalten oder einem Strom­ausfall wird das gewählte Programm fortgesetzt.</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Lieferumfang</th>\n                                <td><p>1x Außeneinheit (für 4m vorgefüllt), 1x Inneneinheit, 1x Fernbedienung, 1x 4 Meter Kupferleitungen, 1x El. Verbindungskabel, 1x Kondenswasserschlauch, 1x Isolierband, 1x Abschlussstück für Mauerdurchführung, 1x Bedienungsanleitung</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Hinweise</th>\n                                <td><p>Entsorgung von Altbatterien des Geräts</p>\n                                    <p>nach § 18 Batteriegesetz (BattG)</p>\n                                    <p>Informationspflicht gemäß Batteriegesetz (BattG)<br>\n                                        Achten Sie darauf, dass Ihre alten Batterien/Akkus, so wie es der Gesetzgeber vorschreibt, an einer kommunalen Sammelstelle oder im Handel vor Ort abgeben. Die Entsorgung über den gewöhnlichen Hausmüll ist verboten und verstößt gegen das Batteriegesetz. Die Abgabe ist für Sie kostenlos. Gerne können Sie auch die bei uns erworbenen Batterien/Akkus nach dem Gebrauch an uns unentgeltlich zurückgeben. Die Rücksendung der Batterien/Akkus an uns muss in jedem Fall ausreichend frankiert erfolgen. Rücksendungen von Batterien/Akkus sind zu richten an:</p>\n                                    <p>Ananda GmbH<br>\n                                        Daimler Str.6<br>\n                                        D-76185 Karlsruhe</p>\n                                    <p>Batterien und Akkus, die Schadstoffe enthalten, sind mit dem Symbol einer durchgekreuzten Mülltonne deutlich erkennbar gekennzeichnet. Desweiteren befindet sich unter dem Symbol der durchgekreuzten Mülltonne, die chemische Bezeichnung der entsprechenden Schadstoffe. Beispiele hierfür sind: (Pb) Blei, (Cd) Cadmium, (Hg) Quecksilber., Ökodesign-Richtlinie</p>\n                                    <p>Klimaschutzziele</p>\n                                    <p>In der EU wurden von der Europäischen Kommission anspruchsvolle Ziele zur Steigerung der Energieeffizienz aufgestellt. Bis zum Jahr 2020 sind die sogenannten 20-20-20-Ziele angestrebt. Dazu gehört eine Senkung des Verbrauch von Primärenergie um 20 %, eine Senkung der CO2-Emission um 20 % und einen Anteil erneuerbarer Energie von 20 %. Für die Realisierung dieser Ziele hat die EU die Ökodesign-Richtlinie [2009/125/EG] herausgegeben. Diese Richtlinie legt die Mindestanforderungen an die Effizienz energieverbrauchsrelevanter Produkte fest. Seit dem Jahr 2013 fallen alle Klimaanlagen und Luft-Luft-Wärmepumpen unter 12 kW in den Geltungsbereich dieser Ökodesign-Richtlinie. Im Jahr 2014 wurde beim Energieverhalten die Messlatte deutlich höher gelegt.</p>\n                                    <p>Saisonale Effizienz</p>\n                                    <p>Neben der Ökodesign-Richtlinie, welche die Mindestanforderungen hinsichtlich des Umweltverhaltens systematisch anhebt, wurde auch das Verfahren zur Messung der Effizienzwerte geändert. Bisher wurde bei der nominalen Effizienz (EER und COP) das Leistungsverhalten bei einer einzigen, fest vorgegebenen Außentemperatur und unter Volllastbetrieb getestet. Damit das Leistungsverhalten unter realen Bedingungen besser wiedergegeben wird, wurde die breite Palette an Temperaturen der jeweiligen Kühl- und Heizsaison, Teil- und Volllastzeiten, sowie Stand By-Zeiten berücksichtigt. Durch die unterschiedliche Gewichtung der Messpunkte wird der Teillastbetrieb, für reale Bedingungen und über die gesamte Saison wiedergespiegelt.</p>\n                                    <p>Die Bezeichnug der Effizienzwerte wurde um ein „S“ für „saisonal“ (SEER und SCOP) erweitert. Höherer Wert = effizienter</p>\n                                </td>\n                            </tr>\n                            <tr>\n                                <th>Technische Daten</th>\n                                <td><p>Hersteller HANTECH (Powered by GREE), Modellbezeichnung GWH09QB-K3DNA1G, Schallleistungspegel 26 dB, Schallleistungspegel Innen/Außen 55/61dB (max), Kältemittel 2)∗ (GWP) R410A (2088), SEER 6,1, SCOP 4,0, Energieeffizienzklasse Kühlen A++, Energieeffizienzklasse Heizen A+, Auslegungslast Kühlbetrieb 2,6 kW, Auslegungslast Heizbetrieb 2,6 kW, Stromverbrauch 1)∗ Kühlen 149 kWh/Jahr, Stromverbrauch 1)∗ Heizen 1706 kWh/Jahr, Heizperiode (mittel) bis -15°C, Arbeitsbereich Kühlen -15°C bis 55°C, Gewinde 3/8\" 1/4\", Gewicht Innen / Außen 11 / 31 kg, 1)* Energieverbrauch pro Jahr (kWh/Jahr). Auf der Grundlage von Ergebnissen der Normprüfung. Der tatsächliche Verbrauch hängt von der Nutzung und vom Standort des Gerätes ab.</p>\n                                    <p>2)* Der Austritt von Kältemittel trägt zum Klimawandel bei. Kältemittel mit geringerem Treibhauspotential (GWP) tragen im Fall eines Austretens weniger zur Erderwärmung bei als solche mit höherem Treibhauspotential (GWP). Diese Anlage enthält Kältemittel mit einem GWP gleich 2088. Somit hätte ein Austreten von 1 kg dieses Kältemittels 2088-Mal größere Auswirkungen auf die Erderwärmung als 1 kg CO2, bezogen auf hundert Jahre. Keine Arbeiten am Kältekreislauf vornehmen oder das Gerät zerlegen – stets Fachpersonal hinzuziehen.</p>\n                                </td>\n                            </tr>\n                            </tbody></table>\n                    "
            }
        ]
    }
]

if(document.querySelector('.product-detail')) {

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const filteredProducts = products.filter(product => product.title.toLowerCase().replaceAll(' ','_') === name.toLowerCase().replaceAll(' ','_'));
    filteredProducts.forEach(item => {

        console.log(item)
        const sliderFirstImage = document.querySelector('.slider-image')
        const sliderThumbnails = document.querySelector('.slider-thumbnails');
        const title = document.querySelector('.h-product__title');
        const dropdownList = document.querySelector('.h-dropdown-list');
        const breadCrumb = document.querySelector('.h-breadcrumb');
        const desc = document.querySelector('.h-product__description');

        item.img.map((image,index) => {
            if(index === 0) {
                sliderFirstImage.innerHTML += `<img src="${image}" alt="Image 1">`
            }
            sliderThumbnails.innerHTML += `<div class="thumbnail"><img src="${image}" alt="Image 1"></div>`
        })

        title.textContent = item.title;
        breadCrumb.innerHTML += `<span>${item.title}</span>`;
        desc.innerHTML = item.desc;


    });


}