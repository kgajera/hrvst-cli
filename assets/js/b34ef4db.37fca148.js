"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[257],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,N=u["".concat(d,".").concat(k)]||u[k]||o[k]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1831:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return o}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},d="Estimates",m={unversionedId:"cli/estimates/index",id:"cli/estimates/index",title:"Estimates",description:"Information pertaining to retrieving, creating, editing, and deleting estimates. Admin permissions required.",source:"@site/docs/cli/estimates/index.md",sourceDirName:"cli/estimates",slug:"/cli/estimates/",permalink:"/hrvst-cli/cli/estimates/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Company",permalink:"/hrvst-cli/cli/company/"},next:{title:"Estimate Item Categories",permalink:"/hrvst-cli/cli/estimates/item-categories"}},s={},o=[{value:"List all estimates",id:"list-all-estimates",level:2},{value:"Retrieve a specific estimate",id:"retrieve-a-specific-estimate",level:2},{value:"Create an estimate",id:"create-an-estimate",level:2},{value:"Update an estimate",id:"update-an-estimate",level:2},{value:"Delete an estimate",id:"delete-an-estimate",level:2}],u={toc:o};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"estimates"},"Estimates"),(0,l.kt)("p",null,"Information pertaining to retrieving, creating, editing, and deleting estimates. Admin permissions required."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/"},"Link to documentation")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/introduction/overview/supported-currencies/"},"Supported currencies")),(0,l.kt)("h2",{id:"list-all-estimates"},"List all estimates"),(0,l.kt)("p",null,"Returns a list of your estimates. The estimates are returned sorted by issue date, with the most recently issued estimates appearing first."),(0,l.kt)("p",null,"The response contains an object with a ",(0,l.kt)("inlineCode",{parentName:"p"},"estimates")," property that contains an array of up to ",(0,l.kt)("inlineCode",{parentName:"p"},"per_page")," estimates. Each entry in the array is a separate estimate object. If no more estimates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your estimates."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#list-all-estimates"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates list\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--client_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return estimates belonging to the client with the given ID."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--updated_since")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return estimates that have been updated since the given date and time."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--from")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return estimates with an issue_date on or after the given date."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--to")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return estimates with an issue_date on or before the given date."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--state")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return estimates with a state matching the value provided. Options: draft, sent, accepted, or declined."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 100."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"retrieve-a-specific-estimate"},"Retrieve a specific estimate"),(0,l.kt)("p",null,"Retrieves the estimate with the given ID. Returns an estimate object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if a valid identifier was provided."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#retrieve-an-estimate"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates get\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the estimate you're retrieving."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"create-an-estimate"},"Create an estimate"),(0,l.kt)("p",null,"Creates a new estimate object. Returns an estimate object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#create-an-estimate"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates create\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--client_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the client this estimate belongs to."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--number")),(0,l.kt)("td",{parentName:"tr",align:null},"If no value is set, the number will be automatically generated."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--purchase_order")),(0,l.kt)("td",{parentName:"tr",align:null},"The purchase order number."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tax")),(0,l.kt)("td",{parentName:"tr",align:null},"This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tax2")),(0,l.kt)("td",{parentName:"tr",align:null},"This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--discount")),(0,l.kt)("td",{parentName:"tr",align:null},"This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--subject")),(0,l.kt)("td",{parentName:"tr",align:null},"The estimate subject."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--notes")),(0,l.kt)("td",{parentName:"tr",align:null},"Any additional notes to include on the estimate."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--currency")),(0,l.kt)("td",{parentName:"tr",align:null},"The currency used by the estimate. If not provided, the client\u2019s currency will be used. See a list of supported currencies"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--issue_date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the invoice was issued. Defaults to today\u2019s date."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line_items[0]kind")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of an estimate item category."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line_items[0]description")),(0,l.kt)("td",{parentName:"tr",align:null},"Text description of the first line item."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line_items[0]unit_price")),(0,l.kt)("td",{parentName:"tr",align:null},"The individual price per unit."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line_items[0]quantity")),(0,l.kt)("td",{parentName:"tr",align:null},"The unit quantity of the item."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line_items[0]taxed")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the estimate\u2019s tax percentage applies to this line item."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--line_items[0]taxed2")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the estimate\u2019s tax2 percentage applies to this line item."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"update-an-estimate"},"Update an estimate"),(0,l.kt)("p",null,"Updates the specific estimate by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an estimate object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#update-an-estimate"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates update\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the estimate you're updating."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--client_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the client this estimate belongs to."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--number")),(0,l.kt)("td",{parentName:"tr",align:null},"If no value is set, the number will be automatically generated."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--purchase_order")),(0,l.kt)("td",{parentName:"tr",align:null},"The purchase order number."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tax")),(0,l.kt)("td",{parentName:"tr",align:null},"This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tax2")),(0,l.kt)("td",{parentName:"tr",align:null},"This percentage is applied to the subtotal, including line items and discounts. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--discount")),(0,l.kt)("td",{parentName:"tr",align:null},"This percentage is subtracted from the subtotal. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--subject")),(0,l.kt)("td",{parentName:"tr",align:null},"The estimate subject."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--notes")),(0,l.kt)("td",{parentName:"tr",align:null},"Any additional notes to include on the estimate."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--currency")),(0,l.kt)("td",{parentName:"tr",align:null},"The currency used by the estimate. If not provided, the client\u2019s currency will be used. See a list of supported currencies"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--issue_date")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the invoice was issued. Defaults to today\u2019s date."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"delete-an-estimate"},"Delete an estimate"),(0,l.kt)("p",null,"Delete an estimate. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/#delete-an-estimate"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates delete\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the estimate you're deleting."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}k.isMDXComponent=!0}}]);