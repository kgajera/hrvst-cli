"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7881:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},o="Projects",d={unversionedId:"cli/projects/index",id:"cli/projects/index",title:"Projects",description:"Information pertaining to retrieving, creating, editing, and deleting projects. Admin or project manager permissions required.",source:"@site/docs/cli/projects/index.md",sourceDirName:"cli/projects",slug:"/cli/projects/",permalink:"/hrvst-cli/cli/projects/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Login",permalink:"/hrvst-cli/cli/login"},next:{title:"Project Task Assignments",permalink:"/hrvst-cli/cli/projects/task-assignments"}},u={},m=[{value:"List all projects",id:"list-all-projects",level:2},{value:"Retrieve a specific project",id:"retrieve-a-specific-project",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Update a project",id:"update-a-project",level:2},{value:"Delete a project",id:"delete-a-project",level:2}],s={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"projects"},"Projects"),(0,l.kt)("p",null,"Information pertaining to retrieving, creating, editing, and deleting projects. Admin or project manager permissions required."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/"},"Link to documentation")),(0,l.kt)("h2",{id:"list-all-projects"},"List all projects"),(0,l.kt)("p",null,"Returns a list of your projects. The projects are returned sorted by creation date, with the most recently created projects appearing first."),(0,l.kt)("p",null,"The response contains an object with a ",(0,l.kt)("inlineCode",{parentName:"p"},"projects")," property that contains an array of up to ",(0,l.kt)("inlineCode",{parentName:"p"},"per_page projects"),". Each entry in the array is a separate project object. If no more projects are available, the resulting array will be empty. Several additional pagination properties are included in the response to simplify paginating your projects."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/#list-all-projects"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst projects list\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_active")),(0,l.kt)("td",{parentName:"tr",align:null},"Pass true to only return active projects and false to return inactive projects."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--client_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return projects belonging to the client with the given ID."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--updated_since")),(0,l.kt)("td",{parentName:"tr",align:null},"Only return projects that have been updated since the given date and time."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"The page number to use in pagination. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"all")," to retrieve all pages."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--per_page")),(0,l.kt)("td",{parentName:"tr",align:null},"The number of records to return per page. Can range between 1 and 100. (Default: 100)"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"retrieve-a-specific-project"},"Retrieve a specific project"),(0,l.kt)("p",null,"Retrieves the project with the given ID. Returns a project object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if a valid identifier was provided."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/#retrieve-a-project"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst projects get\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project you're retrieving."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"create-a-project"},"Create a project"),(0,l.kt)("p",null,"Creates a new project object. Returns a project object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"201 Created")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/#create-a-project"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst projects create\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--client_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the client to associate this project with."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the project."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_billable")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the project is billable or not."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bill_by")),(0,l.kt)("td",{parentName:"tr",align:null},"The method by which the project is invoiced. Options: Project, Tasks, People, or none."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--budget_by")),(0,l.kt)("td",{parentName:"tr",align:null},"The method by which the project is budgeted. Options, project, project_cost, task, task_fees, person, or none."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_active")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the project is active or archived. Defaults to true"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_fixed_fee")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the project is a fixed-fee project or not."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--hourly_rate")),(0,l.kt)("td",{parentName:"tr",align:null},"Rate for projects billed by Project Hourly Rate."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--budget")),(0,l.kt)("td",{parentName:"tr",align:null},"The budget in hours for the project when budgeting by time."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--budget_is_monthly")),(0,l.kt)("td",{parentName:"tr",align:null},"Option to have the budget reset every month. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--notify_when_over_budget")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether project managers should be notified when the project goes over budget. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--over_budget_notification_percentage")),(0,l.kt)("td",{parentName:"tr",align:null},"Percentage value used to trigger over budget email alerts. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show_budget_to_all")),(0,l.kt)("td",{parentName:"tr",align:null},"Option to show project budget to all employees. Does not apply to Total Project Fee projects. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cost_budget")),(0,l.kt)("td",{parentName:"tr",align:null},"The monetary budget for the project when budgeting by money."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cost_budget_include_expenses")),(0,l.kt)("td",{parentName:"tr",align:null},"Option for budget of Total Project Fees projects to include tracked expenses. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fee")),(0,l.kt)("td",{parentName:"tr",align:null},"The amount you plan to invoice for the project. Only used by fixed-fee projects."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--notes")),(0,l.kt)("td",{parentName:"tr",align:null},"Notes about the project."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--starts_on")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the project was started."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ends_on")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the project will end."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"update-a-project"},"Update a project"),(0,l.kt)("p",null,"Updates the specific project by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Returns a project object and a ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")," response code if the call succeeded."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/#update-a-project"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst projects update\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project you're retrieving."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--client_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the client to associate this project with."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the project."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_billable")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the project is billable or not."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--bill_by")),(0,l.kt)("td",{parentName:"tr",align:null},"The method by which the project is invoiced. Options: Project, Tasks, People, or none."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--budget_by")),(0,l.kt)("td",{parentName:"tr",align:null},"The method by which the project is budgeted. Options, project, project_cost, task, task_fees, person, or none."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_active")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the project is active or archived. Defaults to true"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--is_fixed_fee")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the project is a fixed-fee project or not."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--hourly_rate")),(0,l.kt)("td",{parentName:"tr",align:null},"Rate for projects billed by Project Hourly Rate."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--budget")),(0,l.kt)("td",{parentName:"tr",align:null},"The budget in hours for the project when budgeting by time."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--budget_is_monthly")),(0,l.kt)("td",{parentName:"tr",align:null},"Option to have the budget reset every month. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--notify_when_over_budget")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether project managers should be notified when the project goes over budget. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--over_budget_notification_percentage")),(0,l.kt)("td",{parentName:"tr",align:null},"Percentage value used to trigger over budget email alerts. Example: use 10.0 for 10.0%."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show_budget_to_all")),(0,l.kt)("td",{parentName:"tr",align:null},"Option to show project budget to all employees. Does not apply to Total Project Fee projects. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cost_budget")),(0,l.kt)("td",{parentName:"tr",align:null},"The monetary budget for the project when budgeting by money."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--cost_budget_include_expenses")),(0,l.kt)("td",{parentName:"tr",align:null},"Option for budget of Total Project Fees projects to include tracked expenses. Defaults to false."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fee")),(0,l.kt)("td",{parentName:"tr",align:null},"The amount you plan to invoice for the project. Only used by fixed-fee projects."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--notes")),(0,l.kt)("td",{parentName:"tr",align:null},"Notes about the project."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--starts_on")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the project was started."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ends_on")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the project will end."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"delete-a-project"},"Delete a project"),(0,l.kt)("p",null,"Deletes a project and any time entries or expenses tracked to it. However, invoices associated with the project will not be deleted. If you don\u2019t want the project\u2019s time entries and expenses to be deleted, you should archive the project instead."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/#delete-a-project"},"Link to documentation")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hrvst projects delete\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project_id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the project you're deleting."),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fields")),(0,l.kt)("td",{parentName:"tr",align:null},"Comma separated list of fields to display in the output."),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output")),(0,l.kt)("td",{parentName:"tr",align:null},"The output format: json, table"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}k.isMDXComponent=!0}}]);