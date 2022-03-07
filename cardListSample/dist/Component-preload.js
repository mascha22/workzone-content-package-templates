//@ui5-bundle tsys/workzone/card/sample/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"tsys/workzone/card/sample/configuration/configuration.js":function(){sap.ui.define(["sap/ui/integration/Designtime"],function(e){"use strict";var a=e.extend("sap.workzone.cpkg.card.sample.Configuration");a.prototype.create=function(){return{form:{items:{string:{manifestpath:"/sap.card/configuration/parameters/string/value",defaultValue:"StringValue",label:"Fixed Label Text",type:"string"},boolean:{manifestpath:"/sap.card/configuration/parameters/boolean/value",defaultValue:true,label:"Fixed Label Text",type:"boolean"},integer:{manifestpath:"/sap.card/configuration/parameters/integer/value",defaultValue:1,label:"Fixed Label Text",type:"integer"},date:{manifestpath:"/sap.card/configuration/parameters/date/value",defaultValue:"",label:"Fixed Label Text",type:"date"}}},preview:{modes:"Abstract"}}};return a});
},
	"tsys/workzone/card/sample/ext/extension.js":function(){sap.ui.define(["sap/ui/integration/Extension"],function(t){"use strict";var n=t.extend("sap.workzone.cpkg.card.sample.ext.extension");n.prototype.init=function(){t.prototype.init.apply(this,arguments);this.setActions([{type:"Navigation",parameters:{url:"https://training.sap.com/"},icon:"sap-icon://learning-assistant",target:"_blank",text:"External Link"}]);this.setFormatters({toUpperCase:function(t){return t.toUpperCase()}})};n.prototype.getData=function(){};return n});
},
	"tsys/workzone/card/sample/i18n/i18n.properties":'TITLE=Card Template Title\nSUBTITLE=Card Template Subitle\nSHORTTITLE=Card Template Short Title\nINFO=Card Template Info\nDESCRIPTION=Card Template Description\nKEYWORD1=Keyword',
	"tsys/workzone/card/sample/i18n/i18n_en.properties":'TITLE=Card Template Title\nSUBTITLE=Card Template Subitle\nSHORTTITLE=Card Template Short Title\nINFO=Card Template Info\nDESCRIPTION=Card Template Description\nKEYWORD1=Keyword',
	"tsys/workzone/card/sample/manifest.json":'{"_version":"1.18.0","sap.app":{"id":"tsys.workzone.card.sample","type":"card","i18n":"i18n/i18n.properties","title":"{{TITLE}}","subTitle":"{{SUBTITLE}}","applicationVersion":{"version":"1.0.0"},"shortTitle":"{{SHORTTITLE}}","info":"{{INFO}}","description":"{{DESCRIPTION}}","tags":{"keywords":["{{KEYWORD1}}"]}},"sap.card":{"type":"List","data":{"json":{"items":[{"Name":"Comfort Easy","Description":"32 GB Digital Assistant with high-resolution color screen"},{"Name":"ITelO Vault","Description":"Digital Organizer with State-of-the-Art Storage Encryption"},{"Name":"Notebook Professional 15","Description":"Notebook Professional 15 with 2,80 GHz quad core, 15\\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro"},{"Name":"Ergo Screen E-I","Description":"Optimum Hi-Resolution max. 1920 x 1080 @ 85Hz, Dot Pitch: 0.27mm"},{"Name":"Laser Professional Eco","Description":"Print 2400 dpi image quality color documents at speeds of up to 32 ppm (color) or 36 ppm (monochrome), letter/A4. Powerful 500 MHz processor, 512MB of memory"}],"count":115}},"configuration":{"editor":"configuration/configuration","parameters":{"string":{"value":"StringValue"},"boolean":{"value":false},"integer":{"value":1},"date":{"value":"2020-09-02"}},"destinations":{"system":{"name":"name"}}},"header":{"title":"{{TITLE}}","subTitle":"Translation with model. {i18n>SUBTITLE}","icon":{"src":"sap-icon://product"}},"content":{"data":{"path":"/items"},"maxItems":2,"item":{"title":"{Name}","description":"{Description}"}}}}'
}});