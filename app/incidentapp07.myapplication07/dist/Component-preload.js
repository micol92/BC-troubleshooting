//@ui5-bundle incidentapp07/myapplication07/Component-preload.js
sap.ui.require.preload({
	"incidentapp07/myapplication07/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(n){"use strict";return n.extend("incidentapp07.myapplication07.Component",{metadata:{manifest:"json"}})});
},
	"incidentapp07/myapplication07/i18n/i18n.properties":'# This is the resource bundle for incidentapp07.myapplication07\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=My Application07\n\n#YDES: Application description\nappDescription=My SAP application07\n\n#XFLD,48\nflpTitle=My Application07\n',
	"incidentapp07/myapplication07/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"incidentapp07.myapplication07","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.3","toolsId":"58133bc9-060d-4003-b949-0817e210f255"},"dataSources":{"mainService":{"uri":"service/incidentapp07/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"incidentapp07myapplication07-display":{"semanticObject":"incidentapp07myapplication07","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.129.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"incidentapp07.myapplication07.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"IncidentsList","target":"IncidentsList"},{"pattern":"Incidents({key}):?query:","name":"IncidentsObjectPage","target":"IncidentsObjectPage"},{"pattern":"Incidents({key})/conversations({key2}):?query:","name":"ConversationsObjectPage","target":"ConversationsObjectPage"}],"targets":{"IncidentsList":{"type":"Component","id":"IncidentsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Incidents","variantManagement":"Page","navigation":{"Incidents":{"detail":{"route":"IncidentsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"IncidentsObjectPage":{"type":"Component","id":"IncidentsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Incidents","navigation":{"conversations":{"detail":{"route":"ConversationsObjectPage"}}}}}},"ConversationsObjectPage":{"type":"Component","id":"ConversationsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Incidents/conversations"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.incidentapp07"}}'
});
//# sourceMappingURL=Component-preload.js.map
