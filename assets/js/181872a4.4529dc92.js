"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[516],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=i,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={},p="Line Items",m={unversionedId:"cli/invoices/line-items",id:"cli/invoices/line-items",title:"Line Items",description:"Link to documentation",source:"@site/docs/cli/invoices/line-items.md",sourceDirName:"cli/invoices",slug:"/cli/invoices/line-items",permalink:"/hrvst-cli/cli/invoices/line-items",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invoice Item Categories",permalink:"/hrvst-cli/cli/invoices/item-categories"},next:{title:"Invoice Messages",permalink:"/hrvst-cli/cli/invoices/messages"}},d={},u=[{value:"Update an invoice line item",id:"update-an-invoice-line-item",level:2},{value:"Create an invoice line item",id:"create-an-invoice-line-item",level:2},{value:"Delete an invoice line item",id:"delete-an-invoice-line-item",level:2}],c={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"line-items"},"Line Items"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#the-invoice-line-item-object"},"Link to documentation")),(0,r.kt)("h2",{id:"update-an-invoice-line-item"},"Update an invoice line item"),(0,r.kt)("p",null,"Update an exisitng line item on an invoice. Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#update-an-invoice-line-item"},"Link to documentation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/"},"Invoice item categories")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hrvst invoices line-items update\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that contains the line items you're updating."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the line item you want to update."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]kind")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of an invoice item category."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]description")),(0,r.kt)("td",{parentName:"tr",align:null},"Text description of the line item."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]unit_price")),(0,r.kt)("td",{parentName:"tr",align:null},"The individual price per unit."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"The unit quantity of the item."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]taxed")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the invoice\u2019s tax percentage applies to this line item. Defaults to false."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]taxed2")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the invoice\u2019s tax2 percentage applies to this line item. Defaults to false."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"create-an-invoice-line-item"},"Create an invoice line item"),(0,r.kt)("p",null,"Create a new line item on an invoice. Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#create-an-invoice-line-item"},"Link to documentation")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/"},"Invoice item categories")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hrvst invoices line-items create\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the invoice you're creating the line item for."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]kind")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of an invoice item category."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]description")),(0,r.kt)("td",{parentName:"tr",align:null},"Text description of the line item."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]unit_price")),(0,r.kt)("td",{parentName:"tr",align:null},"The individual price per unit."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]quantity")),(0,r.kt)("td",{parentName:"tr",align:null},"The unit quantity of the item."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]taxed")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the invoice\u2019s tax percentage applies to this line item. Defaults to false."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]taxed2")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the invoice\u2019s tax2 percentage applies to this line item. Defaults to false."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"delete-an-invoice-line-item"},"Delete an invoice line item"),(0,r.kt)("p",null,"Delete a line item from an invoice. Returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/#delete-an-invoice-line-item"},"Link to documentation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hrvst invoices line-items delete\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that contains the line item you're deleting."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the line item you want to delete."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--line_items[0]_destroy")),(0,r.kt)("td",{parentName:"tr",align:null},"Gives the command to delete the line item."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))))}s.isMDXComponent=!0}}]);