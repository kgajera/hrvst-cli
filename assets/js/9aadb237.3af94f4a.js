"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"tracking-time"},p="Tracking Time",s={unversionedId:"guides/tracking-time",id:"guides/tracking-time",title:"Tracking Time",description:"There are two different ways to track time:",source:"@site/docs/guides/tracking-time.md",sourceDirName:"guides",slug:"/guides/tracking-time",permalink:"/hrvst-cli/guides/tracking-time",draft:!1,tags:[],version:"current",frontMatter:{id:"tracking-time"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/hrvst-cli/"},next:{title:"Alias",permalink:"/hrvst-cli/cli/alias"}},c={},m=[{value:"Log time",id:"log-time",level:2},{value:"Timer",id:"timer",level:2},{value:"Starting a timer",id:"starting-a-timer",level:3},{value:"Appending notes to a timer",id:"appending-notes-to-a-timer",level:3},{value:"Stopping a timer",id:"stopping-a-timer",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tracking-time"},"Tracking Time"),(0,i.kt)("p",null,"There are two different ways to track time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#log-time"},"Log time")," - create a time entry specifying the number of hours to log"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#timer"},"Timer")," - create a time entry that is a running timer")),(0,i.kt)("p",null,"For a full list of commands and their options, view the ",(0,i.kt)("a",{parentName:"p",href:"/cli/time-tracking"},"Time Tracking")," CLI reference."),(0,i.kt)("h2",{id:"log-time"},"Log time"),(0,i.kt)("p",null,"Create a new time entry specifying the number of hours to log:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst log <hours> [alias]\n")),(0,i.kt)("p",null,"You will be prompted to pick a project and task assignment or you can use an ",(0,i.kt)("a",{parentName:"p",href:"/cli/alias"},"alias"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/cli/alias#create-an-alias"},"Create an alias")," to skip the project and task assignment prompts!"))),(0,i.kt)("p",null,"Add notes to the time entry by using one of the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the string ",(0,i.kt)("inlineCode",{parentName:"li"},"--notes")," option to pass your notes"),(0,i.kt)("li",{parentName:"ul"},"Use the boolean ",(0,i.kt)("inlineCode",{parentName:"li"},"--editor")," option to launch an editor to write your notes")),(0,i.kt)("h2",{id:"timer"},"Timer"),(0,i.kt)("p",null,"Below are commands to track time via a timer."),(0,i.kt)("h3",{id:"starting-a-timer"},"Starting a timer"),(0,i.kt)("p",null,"Create a new time entry that is a running timer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst start [alias]\n")),(0,i.kt)("p",null,"You will be prompted to pick a project and task assignment or you can use an ",(0,i.kt)("a",{parentName:"p",href:"/cli/alias"},"alias"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/cli/alias#create-an-alias"},"Create an alias")," to skip the project and task assignment prompts!"))),(0,i.kt)("p",null,"Add notes to the time entry by using one of the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the string ",(0,i.kt)("inlineCode",{parentName:"li"},"--notes")," option to pass your notes"),(0,i.kt)("li",{parentName:"ul"},"Use the boolean ",(0,i.kt)("inlineCode",{parentName:"li"},"--editor")," option to launch an editor to write your notes")),(0,i.kt)("h3",{id:"appending-notes-to-a-timer"},"Appending notes to a timer"),(0,i.kt)("p",null,"Append notes to a running time entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst note\n")),(0,i.kt)("p",null,"You will be prompted to launch your editor."),(0,i.kt)("h3",{id:"stopping-a-timer"},"Stopping a timer"),(0,i.kt)("p",null,"Stop a running time entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrvst stop\n")))}d.isMDXComponent=!0}}]);