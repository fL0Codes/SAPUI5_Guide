<p align="center">
  <img src="../img/ms_logo.png" alt="mindsquare Logo"/>
</p>

# SAPUI5 - The Basics

Here you can find some information about the very basics of SAPUI5.

# Table of Contents

[What is SAPUI5?](#what-is-sapui5)

- [SAPUI5 vs. OpenUI5](#what-is-sapui5)

[Development Environment](#development-environment)

[Creating Your First UI5 App](#creating-your-first-ui5-app)

- [Create a UI5 App from Template](#create-a-ui5-app-from-template)

[SAPUI5 App Structure](#sapui5-app-structure)

# What is SAPUI5?

> SAPUI5 is an HTML5 framework for creating cross-platform, enterprise-grade web applications in an efficient way.

The key characteristics of SAPUI5 are the following:

- Consistent UX
- Use anywhere
- Hundrets of ready-to-use elements (controls)
- Easy to integrate
- Powerful extension options
- Flexible development tools available (from pro-code to low-code platforms)
- Regular innovation cycles and updates
- Unlimited usage in SAP and beyond SAP

_Sources:_

- [Blog Post: "What is SAPUI5?"](https://blogs.sap.com/2021/08/23/what-is-sapui5/#:~:text=SAPUI5%20is%20an%20HTML5%20framework,applications%20in%20an%20efficient%20way.)
- [Enterprise Features of SAPUI5](https://sapui5.hana.ondemand.com/#/topic/bf2d55eaa33b44a78ef95e7946d658e8)

## SAPUI5 vs. OpenUI5

The main difference is the license.

OpenUI5 is open source and free to use under the Apache 2.0 license.

However, SAPUI5 is integrated in the following products:

- SAP HANA
- SAP Business Technology Platform
- SAP NetWeaver 7.4 of higher

SAPUI5 and OpenUI5 both deliver the most basic control libraries to be able to build feature-rich web applications. On top SAPUI5 includes additional libraries for charts and so called "smart controls" which are controls that are automatically configured by OData annotations from the backend.

See the following links:

- [SAPUI5 API Documentation](https://sapui5.hana.ondemand.com/#/)
- [OpenUI5 API Documentation](https://openui5.org/)

_Sources:_

- [SAPUI5 vs. OpenUI5](https://sapui5.hana.ondemand.com/#/topic/5982a9734748474aa8d4af9c3d8f31c0)

# Development Environment

First of all we need a proper development setup.

The following possibilities exist on SAP Business Technology Platform:

- [Business Application Studion (BAS)](https://sapui5.hana.ondemand.com/#/topic/6bbad66475d040f39df6fbbaabe6f40f.html)
- [SAP WebIDE](https://sapui5.hana.ondemand.com/#/topic/13ced9493472408999143bc99bbb73b9)

Via the [UI5 Tooling](https://sap.github.io/ui5-tooling/) it is also possible to setup a local development environment with your favourite IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/)).

See the linked websites on how to setup your environment or have a look into the [SAP BTP setup section](/5_sap_cloud_platform_setup/README.md) to see how the environment can be set up in a BTP trial account.

**IMPORTANT:** Please note that BAS is the proposed development environment by SAP! The SAP WebIDE is only added here for reference, since many companies still have SAP WebIDE in place for development. All the samples mentioned here were developed either in BAS or Visual Studio Code in a local development setup.

# Creating Your First UI5 App

**IMPORTANT:** From here on, all the examples are based on BAS setup in a BTP Trial Account. In case you haven't set up a BTP Trial Account refere to this section first - TBD.

## Create a UI5 App from Template

Open your space in BAS and select the following option:

<p align="center">
  <img src="./img/1_create_project_from_template.png" alt="Template Creation in Business Application Studios"/>
</p>

Since we want to create a SAPUI5 app choose "SAP Fiori application":

<p align="center">
  <img src="./img/2_create_project_from_template.png" alt="Choose a SAPUI5 Template - Part 1"/>
</p>

Choose one of the different template types (here we use the "SAPUI5 freestyle - SAPUI5 Application" template):

<p align="center">
  <img src="./img/3_create_project_from_template.png" alt="Choose a SAPUI5 Template - Part 2"/>
</p>

In general we use our SAPUI5 app with an attached OData service that comes from an SAP system. Therefore we choose the data source "Connect to a System" and use the destination made available via the BTP:

<p align="center">
  <img src="./img/4_create_project_from_template.png" alt="Choose the Data Source for the SAPUI5 application"/>
</p>

In the next step we have to provide a name for our first view, automatically created by the template engine:

<p align="center">
  <img src="./img/5_create_project_from_template.png" alt="Naming our first view"/>
</p>

Finally, we have to provide some general information about our project, like its name, etc.:

<p align="center">
  <img src="./img/6_create_project_from_template.png" alt="Provide more details on the SAPUI5 project"/>
</p>

When pressing the "Finish" button the SAPUI5 template is generated for us by BAS and we are navigated to the following view in BAS, so we can start our development journey in the newly created app:

<p align="center">
  <img src="./img/7_create_project_from_template.png" alt="Finished creation of the project"/>
</p>

# SAPUI5 App Structure

Let's have a look into the generated structure of the SAPUI5 app we just created.

## Folder Structure

The generated folder structure follows the best practice for an UI5 app with **one** component, **one** attached OData service and **less than** 20 view.
As soon as these points do not apply anymore we are free to adjust the structure as needed.

<p align="center">
  <img src="./img/1_folder_structure.png" alt="SAPUI5 app Folder Structure"/>
</p>

### Root Folder

Contains all files that are **not** part of the actual application code. E.g. (**ui5.yaml, package.json**), and the **README.md** file.

### webapp Folder

Contains all relevant code files and is structured according to the MVC pattern, that is used in SAPUI5 apps.

#### view Folder

Contains all views and fragments of the app. The standard view format is XML. However, also HTML, JavaScript and JSON views are possible (in fact they aren't used that much). Besides the view files no other files must be added to this folder (e.g. JavaScript logic). In case fragments are used they are usually put into a separate folder within the view folder. Also further subfolders can be created in case the view amount of the app becomes more complex.

#### controller Folder

Each view has a controller which holds the business logic and is located in the controller folder. Also general controller, like a base controller, are located in this folder.

#### model Folder

This folder contains all model related logic and also definitions of local models used within the application.

#### i18n Folder

This folder holds internationalized texts for different languages. The file which is used when no translated texts for a specific language where found is the **i18n.properties** file. For specific languages this file gets appended with the language code of the target language e.g. **i18n_de.properties, i18n_en.properties**.

#### localService Folder

This folder holds a local copy of the **metadata** file of the used OData servic(es). We can also add our own OData metadata definition files to simulate our own OData service.

#### test Folder

All files related to (automated) test are located in this folder.

#### 1.3 Projektname & Namespaces

Der Projektname darf maximal 15 Zeichen lang sein. Das ist eine durch das ABAP Repository vorgegeben Restriktion.

Für den Namespace der App bitte an die [Reverse-DNS Notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) halten und diesen ebenfalls sprechend benennen
und wenn möglich auf drei Segmente beschränken.

_Schlecht:_

```
test.kundenname.eineapp.de // Zu viele Segmente, keine Reverse-DNS Notation
```

_Gut:_

```
de.mindsquare.superapp
```

Wenn ein neues Projekt angelegt wird, sind die Informationen wie folgt im Wizard einzutragen:

<p align="center">
  <img src="./img/2_3_naming_creating_new_project.png" alt="Namenskonventionen im Wizard"/>
</p>

Damit wird der folgende Namespace generiert:

```
de.mindsquare.EineToDoApp
```

### 2. Coding Guidelines

Für die UI5 Programmierung gelten die nachfolgenden Coding Guidelines. Es ist sicherzustellen dass diese eingehalten werden,
sodass das Coding sauber und einheitlich bleibt.

#### 2.1 Allgemeine Guidelines

1. Keine globalen Variablen verwenden - kann zu ungewolltem Verhalten führen
2. Keine privaten Elemente und Funktionen von Objekten benutzen (erkennbar durch einen voranstehenden `_`)
3. Kein `console.log()` benutzen (bzw. nur zu Testzwecken) - besser ist `sap.base.Log`
4. Nutzung von JSDoc-Kommentaren

<p align="center">
  <img src="./img/2_1_jsdoc_comment.png" alt="Erstellung eines JSDoc-Kommentar"/>
</p>

Das erzeugte Kommentar sieht wie folgt aus:

<p align="center">
  <img src="./img/2_1_jsdoc_commented.png" alt="JSDoc-Kommentar"/>
</p>

#### 2.2 Variablen

Variablen in SAPUI5 beginnen mit einem kurzen Indikator der auf den Typ der Variablen schließen lässt. Anschließend sind **sprechende** Variablennamen und **CamelCasing** zu verwenden.

Anbei eine Übersicht der verschiedenen Typen.

| Beispiel        | Typ                |
| --------------- | ------------------ |
| **s**Id         | String             |
| **o**DomRef     | Objekt             |
| <b>$</b>DomRef  | jQuery Objekt      |
| **i**Count      | Integer            |
| **m**Parameters | Map                |
| **a**Entries    | Array              |
| **d**Today      | Datum              |
| **f**Decimal    | Float              |
| **b**Enabled    | Boolean            |
| **r**Pattern    | Regular Expression |
| **fn**Function  | Funktion           |
| **v**Variant    | Variant Types      |

Anbei noch Beispiele für gute und schlechte Variablennamen:

_Schlecht:_

```javascript
var name = "Florian"; // kein Typ-Indikator
var sId = 123; // falscher Typ
var a = "Eine nichtssagende Variable";
```

_Gut:_

```javascript
var sFirstName = "Florian";
var iCounter = 1;
var bRequestEdited = true;
```

### 3. Entwicklungskonventionen einer UI5-App

Nachfolgende Entwicklungskonventionen stellen sicher, dass die zu entwickelnde App allgemeinen Gütekriterien der Entwicklung entspricht.
**Wartbarkeit**, **Lesbarkeit**, **Nachvollziehbarkeit** sowie **Sicherheit** sind durch die Einhaltung gegeben.

#### 3.1 Bootstrapping

Bootstrapping bedeutet das Laden und die Initialisierung der SAPUI5 Runtime für die App.

Die Standard-Variante sieht wie folgt aus und wird innerhalb der **_index.html_** Datei eingebunden:

```javascript
<script
  id="sap-ui-bootstrap"
  src="resources/sap-ui-core.js"
  data-sap-ui-theme="sap_belize"
  data-sap-ui-async="true"
  data-sap-ui-compatVersion="edge"
  data-sap-ui-onInit="module:my/app/main"
  data-sap-ui-resourceRoots='{"my.app": "./"}'
></script>
```

Weitere Infos können [hier](https://sapui5.hana.ondemand.com/#/topic/a04b0d10fb494d1cb722b9e341b584ba) nachgelesen werden.

#### 3.2 Verwendung einer Component.js

Um die App später ins SAP Launchpad einbinden zu können, ist die App innerhalb einer Component zu kapseln. Unabhängig, ob das der Fall ist oder nicht, sollte stets eine
Component verwendet werden. Die Alternative hierzu ist die **_index.html_** Datei, über welche die App als Direktlink aufgerufen werden kann. Die unter Punkt [1.2](#12-templates-nutzen) erwähnten Templates erstellen die Component automatisch mit.

Die Component wird innerhalb der `Component.js` Datei erstellt.

#### 3.3 manifest.json pflegen

Die `manifest.json` Datei ist die zentrale Konfigurationsdatei für die App und wird bei der Erstellung der Component geladen und angewendet:

```javascript
	return UIComponent.extend("de.mindsquare.meineApp.Component", {

		metadata: {
			manifest: "json" // Lade manifest.json
		},

    // Weitere Initilisierung der Component

		}
	});
```

Alle Konfigurationen, die hierüber zentral gepflegt werden können, sollten hier auch gepflegt werden. Dazu zählen folgende Punkte:

- Models
- Dependencies (Abhängigkeiten von anderen Libraries - SAPUI5, eigene Libraries, externe Libraries)
- Routing-Konfiguration
- Andere Componenten, welche in der App verwende werden

Die zentrale Pflege erleichtert Wartbarkeit und Performance (weniger Ladezyklen innerhalb der App).

Models können zudem vorgeladen werden, dazu ist folgendes innerhalb der manifest.json zu hinterlegen:

```json
"sap.ui5": {
  ...
  "models": {
      "meinModel": {
          "preload": true,
          ...
```

#### 3.4 MVC - Pattern

Das MVC-Pattern trennt die Darstellung der Informationen innerhalb des UI (View) von der Datenhaltung (Model) und der App-Logik (Controller).

<p align="center">
  <img src="./img/3_2_model_view_controller.png" alt="MVC Pattern"/>
</p>

Durch dieses Pattern kann die App in logische Bestandteile untergliedert werden, was die Übersichtlichkeit erhöht

#### 3.5 MVC Namenskonventionen

**Views**

Die Views einer Anwendung werden nach folgendem Schema benannt:

`<Viewname>.view.xml`

Best Practice ist die Verwendung von XML-Views aufgrund der deklarativen Natur. JSON und JavaScript- Views sind mit steigender Komplexität schlechter wartbar. Wie bei Variablen, sind auch hier **sprechende** Namen zu verwenden.

**Controller**

Controller werden wie folgt benannt:

`<Controllername>.controller.js`

Für eine leichtere Zuordnung zum View ist darauf zu achten, dass Views und der dazugehörige Controller stets **gleich** benannt werden.

Die einzige Außnahme stellt der BaseController dar, welcher wie folgt zu benennen ist:

`BaseController.js`

Sofern die gleiche Funktionalität über mehrere Controller hinweg genutzt wird, ist ein BaseController zu benuzten!

**Models**

**_i18n_**

Variablen im `i18n`-Model sind sprechend zu benennen, beginnen mit einem kleinen Buchstaben und es wird CamelCasing verwendet.

**_Weitere Models_**

Werden innerhalb einer App neben dem `Default`-Model weitere Models benutzt, so sind diese mit sprechenden Namen zu versehen. Der Name muss einen klaren Hinweis auf den Verwendungsbereich des Models geben.

#### 3.6 Data Binding

##### 3.6.1 Binding-Modes

Zunächst ist zu prüfen, welcher Binding-Mode verwendet werden soll:

**One-Way binding:** Änderungen am Model werden an gebundene Controls weitergegeben. Änderungen an den Controls jedoch nicht ans Model.

**Two-Way binding:** Werte in Model und in Cotrols sind immer synchronisiert.

**One-Time binding:** Werte aus dem Model werden einmalig an den View transportiert. Weitere Änderungen werden weder im Model noch im View dargestellt!

Übersicht der Binding-Modes in verschiedenen Modeltypen:

| Modeltyp        | One-Way | Two-Way | One-Time | Default  |
| --------------- | ------- | ------- | -------- | -------- |
| JSON            | X       | X       | X        | Two-Way  |
| XML             | X       | X       | X        | Two-Way  |
| OData (V2 & V4) | X       | X       | X        | One-Way  |
| Resource        | -       | -       | X        | One-Time |

##### 3.6.2 Binding Arten

Folgende Binding-Arten sind je nach Anwendungsfall zu benutzen:

**1. Property Binding**

Bindet Daten aus dem Model direkt an die Attribute eines Controls:

```javascript
// Binding im XML-View
<mvc:View
  controllerName="sap.ui.sample.App"
  xmlns="sap.m"
  xmlns:mvc="sap.ui.core.mvc"
>
  <Input value="{/company/name}" />
</mvc:View>
```

```javascript
// Binding bei Erstellung des Contorls innerhalb des Controllers
var oInput = new sap.m.Input({
  value: "{/company/name}",
});
```

**Zu beachten:** Grundsätzlich sollte immer der `Complex`-BindingMode im Bootstrapping aktiviert werden:

```javascript
<script
  id="sap-ui-bootstrap"
  src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"
  data-sap-ui-theme="sap_belize"
  data-sap-ui-bindingSyntax="complex" // Muss aktiviert sein!
  data-sap-ui-compatVersion="edge" // Alternativ kann auch dieses Attribut gesetzt werden
  data-sap-ui-async="true"
  data-sap-ui-onInit="module:sap/ui/sample/main"
  data-sap-ui-resourceRoots='{"sap.ui.sample": "./"}'
></script>
```

Der Complex-BindingMode erlaubt es weitere Bindings und auch Text hinzuzufügen:

```javascript
// Kombination verschiedener Bindings und Models zur Complex-BindingMode
<ObjectAttribute text="{i18n>title} {LastName}"></ObjectAttribute>
```

**2. Expression Binding**

Expression Binding kann erweiternd zum Property Binding genutzt werden, um basierend auf einem einfachen logischen Ausdruck (`true`/`false`) einen Attribut-Wert zu setzen.

Folgendes Beispiel zeigt, wie das Attribut `numberState` basierend auf dem Preis eines Items entweder den Status `Error` (wenn `true`) oder den Status `Success` (wenn `false`) zugewiesen bekommt:

```javascript
<ObjectListItem
  title="{invoice>Quantity} x {invoice>ProductName}"
  number="{
		  parts: [{path: 'invoice>ExtendedPrice'}, {path: 'view>/currency'}],
		  type: 'sap.ui.model.type.Currency',
		  formatOptions: {
			  showMeasure: false
		  }
		}"
  numberUnit="{view>/currency}"
  numberState="{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }"
/>
```

**3. Context Binding (Element Binding)**

Bindet ein Control an ein spezifisches Objekt innerhalb des Models und erstellt dabei einen sogenannten `BindingContext`. Innerhalb des gebundenen Controls und allen Subcontrols (Children) kann das Binding relativ zu diesem Kontext stattfinden.

Hilfreich in Master-Detail-Szenarien. Aus der Masterliste wird ein Eintrag ausgewählt, der anschließend gegen den Detail-Bereich gebunden wird. Somit wird das ausgewählte Item zum Kontext im Detail-Bereich und es kann auf Informationen relativ zu diesem Item zugegriffen werden.

Folgende Daten:

```json
{
	companies : [
		{
			name : "Acme Inc.",
			city: "Belmont",
			state: "NH",
			county: "Belknap",
			revenue : 123214125.34
		},{
			name : "Beam Hdg.",
			city: "Hancock",
			state: "NH",
			county: "Belknap"
			revenue : 3235235235.23
		},{
			name : "Carot Ltd.",
			city: "Cheshire",
			state: "NH",
			county: "Sullivan",
			revenue : "Not Disclosed"
		}]
}
```

Ein einfacher View:

```javascript
<mvc:View
  controllerName="sap.ui.sample.App"
  xmlns="sap.m"
  xmlns:mvc="sap.ui.core.mvc"
>
  <Input id="companyInput" value="{name}" />
</mvc:View>
```

Binding der ersten Company gegen das Input-Control des Views:

```javascript
var oInput = this.byId("companyInput");
oInput.bindElement("/companies/0"); // Hier binden wir den ersten Eitrag aus dem JSON-Model gegen das Input-Control
```

Hierdurch wird

```javascript
value = "{name}";
```

relativ zu dem gebundenen Modeleintrag aufgelöst und "Acme Inc." in das `value`-Attribut des Input-Feldes geschrieben.

**4. Aggregation Binding (List Binding)**

Diese Art des Bindings wird dann genutzt, wenn aus den Model-Daten mehrere Child-Controls zu einem übergeordneten Control ertellt werden sollen.

Auf die nachfolgende Weise können wir eine Liste von Unternehmen erstellen lassen:

Model-Daten:

```json
{
	companies : [
		{
			name : "Acme Inc.",
			city: "Belmont",
			state: "NH",
			county: "Belknap",
			revenue : "123214125.34"
		},{
			name : "Beam Hdg.",
			city: "Hancock",
			state: "NH",
			county: "Belknap"
			revenue : "3235235235.23"
		},{
			name : "Carot Ltd.",
			city: "Cheshire",
			state: "NH",
			county: "Sullivan",
			revenue : "Not Disclosed"
		}]
}
```

Der XML-View mit dem Binding:

```javascript
<mvc:View controllerName="sap.ui.sample.App" xmlns="sap.m" xmlns:mvc="sap.ui.core.mvc">
	<List id=”companyList” items="{path: '/companies', templateShareable:false}">
		<items>
			<StandardListItem title="{name}" description="{city}"/>
		</items>
	</List>
</mvc:View>
```

**Anmerkung:** `templateShareable` sorgt dafür, dass mit Auflösung des List-Controls seine Aggregationen ebenfalls mit aufgelöst werden. Stünde der Wert auf `true` müsste der Lifecycle der Aggregation manuell gepflegt werden.

#### 3.7 Formatierung & Custom Formatter

Wenn auf komplexere Formatierung von Attributen zurückgegriffen werden muss, dann sind Formatter zu verwenden.  
Hierzu kann eine separate `formatter.js` Datei angelegt werden, welche im `model`-Ordner oder einem separierten `utils`-Ordner abgelegt werden kann.

Die `formatter.js` Datei sieht wie folgt aus:

```javascript
sap.ui.define([], function () {
  "use strict";
  return {
    statusText: function (sStatus) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      switch (sStatus) {
        case "A":
          return resourceBundle.getText("invoiceStatusA");
        case "B":
          return resourceBundle.getText("invoiceStatusB");
        case "C":
          return resourceBundle.getText("invoiceStatusC");
        default:
          return sStatus;
      }
    },
  };
});
```

Um die Formatter-Funktionen im Controller und damit auch im View verfügbar zu machen, muss die `formatter.js`-Datei im Controller geladen werden. Um einfacher auf die Funktionen zuzugreifen, wird das zurückgegebene Objekt innerhalb des `formatter`-Attributs des Controllers gesichert:

```javascript
sap.ui.define(["../model/formatter"], function (formatter) {
  "use strict";
  return Controller.extend("de.mindsquare.DemoApp", {
    formatter: formatter, // Zuweisung des return-Objekts an das formatter-Attribut

    onInit: function () {
      // ...
    },
  });
});
```

Über `.formatter.statusText` können die Formatter-Funktionen nun auch im View genutzt werden. Der `.` meint, dass im Controller des Views nach der angegebenen Funktion gesucht werden soll:

```javascript
<List headerText="Header"
		  sitems="{invoice>/Invoices}">
		<items>
			<ObjectListItem
				title="Titel"
				numberState="{=	${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }">
				<firstStatus>
					<ObjectStatus text="{
						path: 'invoice>Status',
						formatter: '.formatter.statusText'
					}"/>
				</firstStatus>
			</ObjectListItem>
```

#### 3.8 Weiteres zu Models

##### 3.8.1 Modeltypen und Verwendung

Folgende Modeltypen stehen in SAPUI5 zur Verfügung von welchen die rotmarkierten die wichtigsten darstellen:

<p align="center">
  <img src="./img/3_4_model_types.png" alt="Modeltypen"/>
</p>

Client-seitig sollten hauptsächlich JSON- und Resource-Model (i18n - siehe Kapitel [3.9](#39-internationalisierung)) genutzt werden.

Server-seitig wird das ODataV2-Model eingesetzt.

Es spricht nichts dagegen mehrere Models innerhalb einer Anwendung zu benutzen. Jedem Model sollte allerdings eine klare Zuständigkeit zugesprochen werden.

Client-Models können innerhalb des `model`-Ordner der Anwendung angelegt werden. Bspw. ein separates ViewModel zur Steuerung der Sichtbarkeit von UI-Komponenten.

Weitere Modelfunktionalitäten sollten der `models.js` Datei im `model`-Ordner hinzugefügt und bei Bedarf in die Anwendung geladen werden.

##### 3.8.2 Lesen/Ändern von Modeldaten

Um das MVC-Konzept einzuhalten, ist nur über das Model auf die Daten zuzugreifen!

**_Im View_**

Innerhalb eines XML-Views sind die verschiedenen Binding-Arten aus Kapitel [3.6.2](#362-binding-arten). Hier ist abzuwägen, welcher Binding-Typ zu benutzen ist.

**_Im Controller_**

Sofern innerhalb des Controllers Modeldaten gelesen/bearbeitet werden, so ist dies über das Model selbst und den BindingContext zu machen:

```javascript
var oView = this.getView();
var oModel = oView.getModel();
var oCtx = oView.getBindingContext();

// Auslesen von Model-Daten
var sFirstName = oModel.getProperty("FirstName", oCtx);

// Setzen von Model-Daten
oModel.setProperty("LastName", "Müller", oCtx);
```

##### 3.8.3 createKey() benutzen

Zur Aufbereitung von Lesepfaden für das Model stets die Methode `createKey()` benutzen!

_Schlecht:_

```javascript
var oModel = this.getView().getModel();

// Pfadangabe hardgecoded - schlecht
var sPath = "/Products(ProductID1='foo',ProductID2='bar')";

// Lesen des Model-Pfads
oModel.read(sPath, {
  success: function (oData) {
    // Success-Handler
  },
  error: function (oData) {
    // Error-Handler
  },
});
```

_Gut:_

```javascript
var oModel = this.getView().getModel();

// Nutzung der createKey()-Methode
var sPath = oModel.createKey("/Products", {
  ProductID1: "foo",
  ProductID2: "bar",
});

// Lesen des Model-Pfads
oModel.read(sPath, {
  success: function (oData) {
    // Success-Handler
  },
  error: function (oData) {
    // Error-Handler
  },
});
```

#### 3.9 Internationalisierung

Sämtliche Bezeichnungen, Meldungen aller Art (Success, Error, etc.) und sonstige Texte werden in den `i18n`-Dateien gepflegt. Das sorgt dafür, dass Änderungen jederzeit schnell und einfach vorgenommen werden können und die Sprache problemlos gewechselt werden kann.

Für dynamische Texte, können Platzhalter im i18n-Text hinterlegt werden:

```javascript
helloMessage=Hallo {0}
```

Die Platzhalter werden durch einen übergebenen Array an die `getText()`-Methode der Reihenfolge nach befüllt:

```javascript
onShowHello : function () {
         // Lese ResourceBundle
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = "Max Mustermann";
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // Zeige Nachricht in einem MessageToast
         MessageToast.show(sMsg);
      }
```

#### 3.10 Routing

##### 3.10.1 Allgemeine Konventionen

Routing-Funktionalitäten (`getRouter`, `navBack`, etc.) sind in den BaseController zu verlagern, um Code-Dopplungen zu vermeiden.
Routen und Targets innerhalb der `manifest.json` sind sprechend zu benennen!

##### 3.10.2 Abfangen ungültiger Hashes

Ungültige Hashes können über eine zusätzliche Konfiguration innerhalb der `manifest.json`-Datei abgefangen werden:

```javascript
{
  // ...
   "sap.ui5": {
      // ...
      "routing": {
         "config": {
            "routerClass": "sap.m.routing.Router",
            "viewType": "XML",
            "viewPath": "sap.ui.demo.nav.view",
            "controlId": "app",
            "controlAggregation": "pages",
            "transition": "slide",
            "bypassed": { // Abfangen ungültiger Hashes
               "target": "notFound"
            },
            "async": true
         },
         "routes": [{
            "pattern": "",
            "name": "appHome",
            "target": "home"
         }],
         "targets": {
            "home": {
               "viewId": "home",
               "viewName": "Home",
               "viewLevel" : 1
            },
            "notFound": {
               "viewId": "notFound",
               "viewName": "NotFound",
               "transition": "show"
            }
         }
      }
   }
}
```

##### 3.10.3 Nutzung von Parametern beim Routing

Für das Routing können `{Pflichtparameter}` als auch `:optionale Parameter:` spezifiziert werden:

```javascript
{
   // ...
   "sap.ui5": {
      // ...
      "routing": {
         "config": {
            "routerClass": "sap.m.routing.Router",
            "viewType": "XML",
            "viewPath": "sap.ui.demo.nav.view",
            "controlId": "app",
            "controlAggregation": "pages",
            "transition": "slide",
            "bypassed": {
               "target": "notFound"
            },
            "async": true
         },
         "routes": [{
            "pattern": "employeeDetails/{employeeId}", // Pflichtparameter
            "name": "employeeDetails",
            "target": "employeeDetails"
         }],
         "targets": {
            "employeeDetails": {
               "viewId": "employeeDetails",
               "viewName": "EmployeeDetails",
               "viewLevel": 1
            },
            "notFound": {
               "viewId": "notFound",
               "viewName": "NotFound",
               "transition": "show"
            }
         }
      }
   }
}
```

Um aus einem anderen View nun zum EmployeeDetails-View zu navigieren, ist folgender Aufruf zu programmieren:

```javascript
// Im Controller des Quell-Views
this.getRouter().navTo("employee",{
				employeeId : ... // Wie auch immer der Parameter bestimmt wird
			});
```

Innerhalb des EmplyeeDetails-Controllers ist die Navigation nun wie folgt zu bearbeiten:

```javascript
onInit: function () {
			var oRouter = this.getRouter();
			oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);
    },

_onRouteMatched : function (oEvent) {
      // Auslesen der übergebenen Parameter (hier: employeeId)
			var oArgs = oEvent.getParameter("arguments");
			var oView = this.getView();

      // Binden der Employee-Details gegen den View (GET_ENTITY Aufruf)
			oView.bindElement({
				path : "/Employees(" + oArgs.employeeId + ")",
				events : {
					change: this._onBindingChange.bind(this),
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function (oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
```

##### 3.11 Error Handling

Error Handling kann an vielen Stellen relevant werden. Am wichtigsten jedoch, wenn Fehler bei einem OData-Aufruf aufgetreten sind.

Fehlerbehandlung ist sowohl innerhalb der `success`-Handler als auch der `error`-Handler-Callbackfunktion relevant.

```javascript
saveRequest: function () {
			// Abschicken des Requests
			this.getView().getModel().submitChanges({
				success: function (oData, oResponse) {

          // Prüfung der Response
					if (typeof oResponse !== "undefined" && oResponse.statusCode !== "200") {
            // Fehler in Backend aufgetreten
						this.parseErrorMessage(oResponse.body);
					} else {
						// Erfolgreichen Request verarbeiten
					}
				}.bind(this),
				error: function () {
          // Es konnte keine Verbindung zum Backend hergestellt werden - Error Handling
				}.bind(this)
      });
}

parseErrorMessage: function (oResponse) {
      // Response in JSON-Format konvertieren
			var oResponseJSON = JSON.parse(oResponse.body);
      var sMessageError = oResponseJSON.error.message.value;

      // Fehlermeldung weiter bearbeiten
}
```

#### 3.12 Validierung

Hier gibt es keine wirklichen Best Practices.
Für die grundsätzliche Validierung von Feldern, die als `required` gekennzeichnet sind, kann der [**_mindsquare Validator_**](../9_modules/mindsquareValidator.js) genutzt werden. Diesem kann ein Control jeglicher Art übergeben werden, welches anschließend rekursiv alle darin enthaltenen Pflichtfelder auf einen Inhalt bzw. ein Binding validiert.

Custom-Validierungen müssen separat und zusätzlich validiert werden.

Weiterhin ist **unbedingt** auf eine zusätzliche Validierung im SAP-Backend zu achten! Über den Debugger können Werte aus dem Frontend bearbeitet und falsch an das Backend übermittelt werden. Daher sollte in jedem Fall und mindestens im Backend eine Validierung der Werte stattfinden.

#### 3.13 ESLINT Hinweise beachten

Innerhalb der Web IDE können wichtige Hinweise zum Coding eingesehen werden, welche über den "Problems"-Tab in der rechten unteren Ecke aufgerufen werden können (siehe Bild).

<p align="center">
  <img src="./img/3_9_eslint_notes.png" alt="ESLINT remarks"/>
</p>

Die Hinweise werden in drei übergeordnete Kategorien eingeteilt:

- <span style="color:red">Errors</span>
- <span style="color:orange">Warnings</span>
- <span style="color:blue">Infos</span>

Zu jedem Hinweis gibt es eine Verlinkung zur Coding stelle, sowie eine Beschreibung. Über die Beschreibung kann zudem zur `ESLINT-Regel` abgesprungen werden, um mehr über den Hinweis zu erfahren.

Interessant ist zudem die Spalte `Category`. Hier sollte unter anderem auf die Kategorie "Best Practice" geachtet werden, um den Code sauber und strukturiert zu halten.
