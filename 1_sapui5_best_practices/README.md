<p align="center">
  <img src="../img/ms_logo.png" alt="mindsquare Logo"/>
</p>

# SAPUI5 Best Practices
Dies ist eine Sammlung von Best Practices in der SAPUI5 Programmierung. Angefangen vom initialen Projektsetup bis hin zu fortgeschrittenen Konzepten findet sich hier alles. Dieser Guide wird im Laufe der Zeit beständig erweitert - also dran bleiben!

## Inhaltsverzeichnis

- [SAPUI5 Best Practices](#sapui5-best-practices)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
    - [1. Projektsetup](#1-projektsetup)
      - [1.1 Ordnerstruktur](#11-ordnerstruktur)
        - [1.1.1 root Ordner](#111-root-ordner)
        - [1.1.2 webapp Ordner](#112-webapp-ordner)
        - [1.1.3 test Ordner](#113-test-ordner)
        - [1.1.4 Weitere Ordner](#114-weitere-ordner)
          - [view Ordner](#view-ordner)
          - [controller Ordner](#controller-ordner)
          - [model Ordner](#model-ordner)
          - [i18n Ordner (Localization)](#i18n-ordner-localization)
          - [localService Ordner](#localservice-ordner)
      - [1.2 Templates nutzen](#12-templates-nutzen)
    - [2. Namenskonventionen](#2-namenskonventionen)
      - [2.1 Variablen](#21-variablen)
      - [2.2. Namespaces](#22-namespaces)
    - [3. Entwicklungskonventionen einer UI5-App](#3-entwicklungskonventionen-einer-ui5-app)
      - [3.1 Bootstrapping](#31-bootstrapping)
      - [3.2 MVC - Pattern](#32-mvc---pattern)
      - [3.3 Data Binding](#33-data-binding)
      - [3.4 Routing](#34-routing)
      - [3.5 Internationalisierung](#35-internationalisierung)
      - [3.6 Formatierung &amp; Custom Formatter](#36-formatierung-amp-custom-formatter)
      - [3.7 Error - Handling](#37-error---handling)
      - [3.8 Modularisierung](#38-modularisierung)
    - [4. Fortgeschrittene Konzepte](#4-fortgeschrittene-konzepte)
      - [4.1 Theming von UI5-Apps](#41-theming-von-ui5-apps)
      - [4.2 Nutzung von Models (z.B. Device Model)](#42-nutzung-von-models-zb-device-model)
      - [4.3 Testmanagement](#43-testmanagement)
      - [4.4 Performanceverbesserung](#44-performanceverbesserung)
        - [4.4.1 Component-preload.js](#441-component-preloadjs)
      - [4.5 Sichere UI5-Apps](#45-sichere-ui5-apps)
      - [4.6 Erweiterungsmanagement](#46-erweiterungsmanagement)
      - [4.7 Eigene Controls Entwickeln](#47-eigene-controls-entwickeln)


### 1. Projektsetup
Beschreibt den grundsätzlichen Aufbau einer UI5-App und wie dieser am besten strukturiert wird.

#### 1.1 Ordnerstruktur
Die nachfolgende Ordnerstruktur ist die Best Practice im Aufbau einer UI5 mit **einer** Component, **einem** OData-Service und **weniger als** 20 Views. 
Sobald diese Anforderungen nicht mehr zutreffen, sollten weitere Unterordner eingeführt werden, um die App noch weiter zu unterteilen.

<p align="center">
  <img src="./img/ui5_bp_folder_structure.png" alt="UI5 Folder Structure"/>
</p>

##### 1.1.1 root Ordner
Enthält Dateien, die **nicht** Teil des Codes sind. Dazu gehören Build-Konfigurationen (**Gruntfile.js**), sowie Dokumentationsdateien (**README.md**).
Kann bei Bedarf noch weiter unterteilt werden.

##### 1.1.2 webapp Ordner
Beinhaltet für die App relevanten Code-Files. Alle Dateien, die lediglich für das Testen der App relevant sind sind im **[test Ordner](#test-ordner)** abzulegen.

Zudem strukturiert der webapp Ordner die Anwendung gemäß dem MVC-Pattern (siehe [weitere Ordner](#weitere-ordner)). 

##### 1.1.3 test Ordner
Hier werden alle Dateien abgelegt, die für automatische Tests notwendig sind, oder um die Anwendung innerhalb der Sandbox auszuführen, um manuelle Tests machen zu können.

##### 1.1.4 Weitere Ordner 
Neben diesen drei Hauptordnern, gibt es folgende weitere Ordner.

###### view Ordner
Beinhaltet alle Views und Fragmente der App. Außer JavaScript Views darf hier **keine JavaScript-Logik** enthalten sein. Die Unterteilung hierbei ist jedem selbst überlassen. Eine Möglichkeit ist, für Fragments einen eigenen Ordner anzulegen. Wenn es sich um eine größere App handelt, dann kann für jeden Bereich der App ein eigener Unterordner angelegt werden (detail, master, etc.). 

###### controller Ordner
Hier werden alle controller Dateien abgelegt, welche von den Views genutzt werden. Auch übergreifend benutzte Dateien (BaseController, externe Libraries, etc.) werden hier abgelegt.

###### model Ordner
Beinhaltet alle Dateien der Model-Generierung und Model-Logik (z.B. Grouping, Formatting und Filtering).

###### i18n Ordner (Localization)
Hier werden die Internationalisierungsdateien abgelegt.

###### localService Ordner
Genutzt, um OData-Services für Tests zu emulieren oder für Preview-Modus der App. Beinhaltet außerdem die **metadata.xml** Datei, welche den angebundenen OData-Service der Anwendung beschreibt.  

#### 1.2 Templates nutzen

### 2. Namenskonventionen
Beschreibt Namenskonventionen für Variablen und Namespaces, die im Rahmen der UI5-Entwicklung verwendet werden.

#### 2.1 Variablen

#### 2.2. Namespaces

### 3. Entwicklungskonventionen einer UI5-App
#### 3.1 Bootstrapping
#### 3.2 MVC - Pattern
#### 3.3 Data Binding
#### 3.4 Routing
#### 3.5 Internationalisierung
#### 3.6 Formatierung & Custom Formatter
#### 3.7 Error - Handling
#### 3.8 Modularisierung

### 4. Fortgeschrittene Konzepte
#### 4.1 Theming von UI5-Apps
#### 4.2 Nutzung von Models (z.B. Device Model)
#### 4.3 Testmanagement
#### 4.4 Performanceverbesserung
##### 4.4.1 Component-preload.js
[Component-preload.js](https://blogs.sap.com/2017/09/16/component-preload.jsminification-and-uglification-for-enhancing-the-performance-of-sapui5-application/)

#### 4.5 Sichere UI5-Apps
#### 4.6 Erweiterungsmanagement
#### 4.7 Eigene Controls Entwickeln


