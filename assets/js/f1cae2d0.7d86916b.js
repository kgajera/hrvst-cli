"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=o(a),m=l,c=b["".concat(s,".").concat(m)]||b[m]||d[m]||n;return a?r.createElement(c,i(i({ref:t},u),{},{components:a})):r.createElement(c,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const n={},i="User Billable Rates",p={unversionedId:"cli/users/billable-rates",id:"cli/users/billable-rates",title:"User Billable Rates",description:"Admin permissions required.",source:"@site/docs/cli/users/billable-rates.md",sourceDirName:"cli/users",slug:"/cli/users/billable-rates",permalink:"/hrvst-cli/cli/users/billable-rates",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/hrvst-cli/cli/users/"},next:{title:"User Cost Rates",permalink:"/hrvst-cli/cli/users/cost-rates"}},s={},o=[{value:"List all billable rates for a specific user",id:"list-all-billable-rates-for-a-specific-user",level:2},{value:"Retrieve a specific billable rate",id:"retrieve-a-specific-billable-rate",level:2},{value:"Create a billable rate",id:"create-a-billable-rate",level:2}],u={toc:o};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-billable-rates"},"User Billable Rates"),(0,l.kt)("p",null,"Admin permissions required."),(0,l.kt)("h2",{id:"list-all-billable-rates-for-a-specific-user"},"List all billable rates for a specific user"),(0,l.kt)("p",null,"Returns a list of billable rates for the user identified by ",(0,l.kt)("inlineCode",{parentName:"p"},"USER_ID"),". The billable rates are returned sorted by ",(0,l.kt)("inlineCode",{parentName:"p"},"start_dat"),"e, with the oldest starting billable rates appearing first."),(0,l.kt)("p",null,"The response contains an object with a ",(0,l.kt)("inlineCode",{parentName:"p"},"billable_rates")," property that contains an array of up to ",(0,l.kt)("inlineCode",{parentName:"p"},"per_page")," billable rates. Each entry in the array is a separate billable rate object. If no more billable rates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your billable rates."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/users-api/users/billable-rates/#list-all-billable-rates-for-a-specific-user"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst users billable-rates list-by-user\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--user_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the user whose billable rates you're listing."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 100."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"retrieve-a-specific-billable-rate"},"Retrieve a specific billable rate"),(0,l.kt)("p",null,"Retrieves the billable rate with the given ID. Returns a billable rate object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if a valid identifier was provided."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/users-api/users/billable-rates/#retrieve-a-billable-rate"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst users billable-rates get\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--user_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the user whose billable rate you're retrieving."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--billable_rate_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the billable rate you're retrieving."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"create-a-billable-rate"},"Create a billable rate"),(0,l.kt)("p",null,"Creates a new billable rate object. Returns a billable rate object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Creating a billable rate with no start_date will replace a user\u2019s existing rate(s)."),(0,l.kt)("li",{parentName:"ul"},"Creating a billable rate with a start_date that is before a user\u2019s existing rate(s) will replace those billable rates with the new one.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/users-api/users/billable-rates/#create-a-billable-rate"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst users billable-rates create\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--user_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the user that you're creating a billable rate for."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--amount")),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of the billable rate."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--start_date")),(0,l.kt)("td",{parentName:"tr",align:null},"The date the billable rate is effective. Cannot be a date in the future."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}d.isMDXComponent=!0}}]);