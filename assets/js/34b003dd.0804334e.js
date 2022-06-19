"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[303],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1730:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},p="Invoice Messages",s={unversionedId:"cli/invoices/messages",id:"cli/invoices/messages",title:"Invoice Messages",description:"Admin permissions required.",source:"@site/docs/cli/invoices/messages.md",sourceDirName:"cli/invoices",slug:"/cli/invoices/messages",permalink:"/hrvst-cli/cli/invoices/messages",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Line Items",permalink:"/hrvst-cli/cli/invoices/line-items"},next:{title:"Login",permalink:"/hrvst-cli/cli/login"}},d={},m=[{value:"List all messages for an invoice",id:"list-all-messages-for-an-invoice",level:2},{value:"Create an invoice message",id:"create-an-invoice-message",level:2},{value:"Mark a draft invoice as sent",id:"mark-a-draft-invoice-as-sent",level:2},{value:"Mark an open invoice as closed",id:"mark-an-open-invoice-as-closed",level:2},{value:"Re-open a closed invoice",id:"re-open-a-closed-invoice",level:2},{value:"Mark an open invoice as a draft",id:"mark-an-open-invoice-as-a-draft",level:2},{value:"Delete an invoice message",id:"delete-an-invoice-message",level:2}],u={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"invoice-messages"},"Invoice Messages"),(0,l.kt)("p",null,"Admin permissions required."),(0,l.kt)("h2",{id:"list-all-messages-for-an-invoice"},"List all messages for an invoice"),(0,l.kt)("p",null,"Returns a list of messages associated with a given invoice. The invoice messages are returned sorted by creation date, with the most recently created messages appearing first."),(0,l.kt)("p",null,"The response contains an object with an ",(0,l.kt)("inlineCode",{parentName:"p"},"invoice_messages")," property that contains an array of up to ",(0,l.kt)("inlineCode",{parentName:"p"},"per_page")," messages. Each entry in the array is a separate message object. If no more messages are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your messages."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#list-all-messages-for-an-invoice"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages list-by-invoice\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that contains the messages you are listing."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--updated_since")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return invoice messages that have been updated since the given date and time."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 100."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"create-an-invoice-message"},"Create an invoice message"),(0,l.kt)("p",null,"Creates a new invoice message object. Returns an invoice message object and a 201 Created response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#create-an-invoice-message"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages create\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that you're creating the message for."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--recipients[0]email")),(0,l.kt)("td",{parentName:"tr",align:null},"Email of the message recipient."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--recipients[0]name")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the message recipient."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--subject")),(0,l.kt)("td",{parentName:"tr",align:null},"The message subject."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--body")),(0,l.kt)("td",{parentName:"tr",align:null},"The message body."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--include_link_to_client_invoice")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include a link to the client invoice in the message body. Not used when thank_you is true."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--attach_pdf")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to attach the invoice PDF to the message email."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--send_me_a_copy")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to email a copy of the message to the current user."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--thank_you")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether this is a thank you message."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of invoice event that occurred with the message: send, close, draft, re-open, or view."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"mark-a-draft-invoice-as-sent"},"Mark a draft invoice as sent"),(0,l.kt)("p",null,"Creates a new invoice message object and marks the invoice as sent. Returns an invoice message object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#mark-a-draft-invoice-as-sent"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages mark-draft-invoice-as-sent\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice you're sending."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Pass \u201csend\u201d to mark the invoice as sent."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"mark-an-open-invoice-as-closed"},"Mark an open invoice as closed"),(0,l.kt)("p",null,"Creates a new invoice message object and marks the invoice as closed. Returns an invoice message object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#mark-an-open-invoice-as-closed"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages mark-open-invoice-as-closed\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice you're closing."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Pass \u201cclose\u201d to mark the invoice as closed."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"re-open-a-closed-invoice"},"Re-open a closed invoice"),(0,l.kt)("p",null,"Creates a new invoice message object and re-opens a closed invoice. Returns an invoice message object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#re-open-a-closed-invoice"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages re-open-closed-invoice\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice you're closing."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},'Pass "re-open" to re-open the invoice'),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"mark-an-open-invoice-as-a-draft"},"Mark an open invoice as a draft"),(0,l.kt)("p",null,"Creates a new invoice message object and marks an open invoice as a draft. Returns an invoice message object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#mark-an-open-invoice-as-a-draft"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages mark-open-invoice-as-draft\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice you're marking as a draft."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--event_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Pass \u201cdraft\u201d to mark the invoice as a draft."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"delete-an-invoice-message"},"Delete an invoice message"),(0,l.kt)("p",null,"Delete an invoice message. Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/#delete-an-invoice-message"},"Link to Documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst invoices messages delete\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--invoice_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the invoice that contains the message you are deleting."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--message_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the message you are deleting."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}k.isMDXComponent=!0}}]);