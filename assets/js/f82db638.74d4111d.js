"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[687],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,g=u["".concat(m,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(g,i(i({ref:t},o),{},{components:a})):n.createElement(g,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},144:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={},m="Estimate Messages",p={unversionedId:"cli/estimates/messages",id:"cli/estimates/messages",title:"Estimate Messages",description:"Information pertaining to retrieving, creating, and deleting estimate messages, as well as accepting, declining, and re-opening estimates. Admin permissions required.",source:"@site/docs/cli/estimates/messages.md",sourceDirName:"cli/estimates",slug:"/cli/estimates/messages",permalink:"/hrvst-cli/cli/estimates/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Line Items",permalink:"/hrvst-cli/cli/estimates/line-items"},next:{title:"Expenses",permalink:"/hrvst-cli/cli/expenses/"}},o={},d=[{value:"List all messages for an estimate",id:"list-all-messages-for-an-estimate",level:2},{value:"Create an estimate message",id:"create-an-estimate-message",level:2},{value:"Delete an estimate message",id:"delete-an-estimate-message",level:2},{value:"Mark a draft estimate as sent",id:"mark-a-draft-estimate-as-sent",level:2},{value:"Re-open a closed estimate",id:"re-open-a-closed-estimate",level:2}],u={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"estimate-messages"},"Estimate Messages"),(0,l.kt)("p",null,"Information pertaining to retrieving, creating, and deleting estimate messages, as well as accepting, declining, and re-opening estimates. Admin permissions required."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/"},"Link to documentation")),(0,l.kt)("h2",{id:"list-all-messages-for-an-estimate"},"List all messages for an estimate"),(0,l.kt)("p",null,"Returns a list of messages associated with a given estimate. The estimate messages are returned sorted by creation date, with the most recently created messages appearing first."),(0,l.kt)("p",null,"The response contains an object with an ",(0,l.kt)("inlineCode",{parentName:"p"},"estimate_messages")," property that contains an array of up to ",(0,l.kt)("inlineCode",{parentName:"p"},"per_page")," messages. Each entry in the array is a separate message object. If no more messages are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your messages."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#list-all-messages-for-an-estimate"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates messages list-by-estimate\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the estimate that contains the messages you're retrieving."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--updated_since")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return estimate messages that have been updated since the given date and time."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 100."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"create-an-estimate-message"},"Create an estimate message"),(0,l.kt)("p",null,"Creates a new estimate message object. Returns an estimate message object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#create-an-estimate-message"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates messages create\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that you're creating the message for."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--recipients[0]email")),(0,l.kt)("td",{parentName:"tr",align:null},"Email of the message recipient."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--recipients[0]name")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the message recipient."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--subject")),(0,l.kt)("td",{parentName:"tr",align:null},"The message subject."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--body")),(0,l.kt)("td",{parentName:"tr",align:null},"The message body."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--send_me_a_copy")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to email a copy of the message to the current user."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},"If provided, runs an event against the estimate. Options: \u201caccept\u201d, \u201cdecline\u201d, \u201cre-open\u201d, or \u201csend\u201d."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"delete-an-estimate-message"},"Delete an estimate message"),(0,l.kt)("p",null,"Delete an estimate message. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#delete-an-estimate-message"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates messages delete\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that contains the message you are deleting."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--message_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the message you are deleting."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"mark-a-draft-estimate-as-sent"},"Mark a draft estimate as sent"),(0,l.kt)("p",null,"Creates a new estimate message object and marks the estimate as sent. Returns an ",(0,l.kt)("inlineCode",{parentName:"p"},"estimate message")," object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#mark-a-draft-estimate-as-sent"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates messages mark-draft-estimate-as-sent\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimates_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the estimate you're marking as sent."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Pass \u201csend\u201d to mark the estimate as sent."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"re-open-a-closed-estimate"},"Re-open a closed estimate"),(0,l.kt)("p",null,"Creates a new estimate message object and re-opens a closed estimate. Returns an ",(0,l.kt)("inlineCode",{parentName:"p"},"estimate")," message object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/#re-open-a-closed-estimate"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst estimates messages re-open-closed-estimate\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--estimate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the estimate you're re-opening."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},'Pass "re-open" to re-open the estimate'),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}k.isMDXComponent=!0}}]);