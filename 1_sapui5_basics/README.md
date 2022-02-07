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
