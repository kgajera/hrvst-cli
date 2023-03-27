"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[748],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=o(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={},i="User Teammates",s={unversionedId:"cli/users/teammates",id:"cli/users/teammates",title:"User Teammates",description:"undefined",source:"@site/docs/cli/users/teammates.md",sourceDirName:"cli/users",slug:"/cli/users/teammates",permalink:"/hrvst-cli/cli/users/teammates",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Project Assignments",permalink:"/hrvst-cli/cli/users/project-assignments"}},p={},o=[{value:"List all assigned teammates",id:"list-all-assigned-teammates",level:2},{value:"Update a user&#39;s assigned teammates",id:"update-a-users-assigned-teammates",level:2}],m={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user-teammates"},"User Teammates"),(0,r.kt)("p",null,"undefined"),(0,r.kt)("h2",{id:"list-all-assigned-teammates"},"List all assigned teammates"),(0,r.kt)("p",null,"Returns a list of assigned teammates for the user identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ID"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ID")," must belong to a user that is a Manager, if not, a ",(0,r.kt)("inlineCode",{parentName:"p"},"422 Unprocessable Entity")," status code will be returned."),(0,r.kt)("p",null,"The response contains an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"teammates")," property that contains an array of up to ",(0,r.kt)("inlineCode",{parentName:"p"},"per_page")," teammates. Each entry in the array is a separate teammate object. If no more teammates are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your teammates."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/users-api/users/teammates/#list-all-assigned-teammates-for-a-specific-user"},"Link to documentation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hrvst users teammates list-by-user\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--user_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the manager you are listing teammates for."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--page")),(0,r.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 2000."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"update-a-users-assigned-teammates"},"Update a user's assigned teammates"),(0,r.kt)("p",null,"Updates the the assigned teammates for a specific user. Returns list of assigned teammates and a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"200 OK"),"\xa0response code if the call succeeded. The\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"USER_ID"),"\xa0must belong to a user that is a Manager, if not, a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"422 Unprocessable Entity"),"\xa0status code will be returned."),(0,r.kt)("p",null,"Adding teammates for the first time will add the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"people_manager"),"\xa0",(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/users-api/users/users/#access-roles"},"access role"),"\xa0to the Manager. Any IDs not included in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"teammate_ids"),"\xa0that are currently assigned will be unassigned from the Manager. Use an empty array to unassign all users. This will also remove the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"people_manager"),"\xa0access role from the Manager."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/users-api/users/teammates/#update-a-users-assigned-teammates"},"Link to documentation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hrvst users teammates update\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--user_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Manager you are listing teammates for."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--teammate_ids[]")),(0,r.kt)("td",{parentName:"tr",align:null},"ID of user you want to assign to the Manager."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--page")),(0,r.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,r.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 2000."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fields")),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))))}u.isMDXComponent=!0}}]);