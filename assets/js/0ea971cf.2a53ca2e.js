"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(a),u=i,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={},l="Invoice Item Categories",o={unversionedId:"cli/invoices/item-categories",id:"cli/invoices/item-categories",title:"Invoice Item Categories",description:"Admin or project manager permissions required.",source:"@site/docs/cli/invoices/item-categories.md",sourceDirName:"cli/invoices",slug:"/cli/invoices/item-categories",permalink:"/hrvst-cli/cli/invoices/item-categories",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invoices",permalink:"/hrvst-cli/cli/invoices/"},next:{title:"Line Items",permalink:"/hrvst-cli/cli/invoices/line-items"}},p={},c=[{value:"List all invoice item categories",id:"list-all-invoice-item-categories",level:2},{value:"Retrieve a specific invoice item category",id:"retrieve-a-specific-invoice-item-category",level:2},{value:"Create an invoice item category",id:"create-an-invoice-item-category",level:2},{value:"Update an invoice item category",id:"update-an-invoice-item-category",level:2},{value:"Delete an invoice item category",id:"delete-an-invoice-item-category",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"invoice-item-categories"},"Invoice Item Categories"),(0,i.kt)("p",null,"Admin or project manager permissions required."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/"},"Link to documentation")),(0,i.kt)("h2",{id:"list-all-invoice-item-categories"},"List all invoice item categories"),(0,i.kt)("p",null,"Returns a list of your invoice item categories. The invoice item categories are returned sorted by creation date, with the most recently created invoice item categories appearing first."),(0,i.kt)("p",null,"The response contains an object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"invoice_item_categories")," property that contains an array of up to ",(0,i.kt)("inlineCode",{parentName:"p"},"per_page")," invoice item categories. Each entry in the array is a separate invoice item category object. If no more invoice item categories are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your invoice item categories."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/"},"Link to documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst invoices item-categories list\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--updated_since")),(0,i.kt)("td",{parentName:"tr",align:null},"Only return invoice item categories that have been updated since the given date and time."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--page")),(0,i.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,i.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,i.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 2000."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fields")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--output")),(0,i.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"retrieve-a-specific-invoice-item-category"},"Retrieve a specific invoice item category"),(0,i.kt)("p",null,"Retrieves the invoice item category with the given ID. Returns an invoice item category object and a ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if a valid identifier was provided."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#retrieve-an-invoice-item-category"},"Link to documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst invoices item-categories get\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--invoice_item_category_id")),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the invoice item category you're retrieving."),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fields")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--output")),(0,i.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"create-an-invoice-item-category"},"Create an invoice item category"),(0,i.kt)("p",null,"Creates a new invoice item category object. Returns an invoice item category object and a ",(0,i.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#create-an-invoice-item-category"},"Link to documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst invoices item-categories create\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the invoice item category."),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fields")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--output")),(0,i.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"update-an-invoice-item-category"},"Update an invoice item category"),(0,i.kt)("p",null,"Updates the specific invoice item category by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns an invoice item category object and a ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#update-an-invoice-item-category"},"Link to documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst invoices item-categories update\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--invoice_item_category_id")),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the invoice item category you're updating."),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--name")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the invoice item category."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fields")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--output")),(0,i.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("h2",{id:"delete-an-invoice-item-category"},"Delete an invoice item category"),(0,i.kt)("p",null,"Delete an invoice item category. Deleting an invoice item category is only possible if ",(0,i.kt)("inlineCode",{parentName:"p"},"use_as_service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"use_as_expense")," are both false. Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/#delete-an-invoice-item-category"},"Link to documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst invoices item-categories delete\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--invoice_item_category_id")),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the invoice item category you're deleting."),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--fields")),(0,i.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--output")),(0,i.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))))}d.isMDXComponent=!0}}]);