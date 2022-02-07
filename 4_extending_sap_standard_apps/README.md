# SAP Standard Apps erweitern 
Dieser Leitfaden zeigt Dir zunächst auf, was Du bei der Erweiterung von SAP Standard-Apps alles zu beachten hast.
Am Ende des Guides befinden sich schließlich Verlinkungen zu den verschiedenen Erweiterungsarten und wie diese in der Praxis umgesetzt werden können.s

## 1. Evaluiere die Notwendigkeit der Erweiterung
Eine Erweiterung ist nunmal eine Erweiterung und kommt ggf. mit einem erhöhten Aufwand für den Kunden und Dich einher (Wartungsaufwand, mehr zeitlicher Aufwand, etc.). 
Stelle daher zunächst sicher, dass die Anforderungen Deines Kunden auch wirklich nicht über den SAP-Standard abgedeckt werden können.

## 2. Auswahl der Erweiterungsart
Folgende Erweiterungsarten stehen zur Verfügung (wobei das Customizing über die SPRO nicht als Erweiterung anzusehen ist):

<p align="center">
  <img src="./img/extension_options.png" alt="Erweiterungsarten"/>
</p>

Abhängig von den Anforderungen des Kunden stehst Du nun vor der Herausforderung die passende Erweiterungsart auszuwählen. Gehe dabei am besten von unten nach oben vor und prüfe jede Erweiterungsmöglichkeit genau. Gerade die BAdIs der SAP bieten häufig auch die Möglichkeit UI-Elemente hinsichtlich der Sichtbarkeit zu steuern oder aber kleine Logik-Verfeinerungen mit einzubauen. 

## 3. Implementierung und Einbindung der Änderungen
Nachdem die passende Erweiterungsart ausgewählt wurde, gilt es diese nun in die Tat umzusetzen. Behalte dabei im Hinterkopf, dass jenachdem für welche Art der Erweiterung Du dich entschieden hast, ggf. auch weitere Schritte notwendig werden (bspw. das Deployen der Erweiterung auf das Gateway-System/die Cloud Platform).

## Die Erweiterungsarten detailliert erklärt
1. [Erweiterungspunkte im SAP-Backend](./7_1_extensions_sap_backend/README.md)
2. [Erweiterung oData-Services](./7_2_extensions_odata/README.md)
3. [Erweiterungen im Frontend](./7_3_extensions_frontend/README.md)