"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[142],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],a={id:"login"},l="Login",u={unversionedId:"cli/login",id:"cli/login",title:"Login",description:"To authenticate with Harvest's REST API, client side OAuth2 is used. To initiate this, run:",source:"@site/docs/cli/login.md",sourceDirName:"cli",slug:"/cli/login",permalink:"/hrvst-cli/cli/login",draft:!1,tags:[],version:"current",frontMatter:{id:"login"},sidebar:"tutorialSidebar",previous:{title:"Invoice Messages",permalink:"/hrvst-cli/cli/invoices/messages"},next:{title:"Projects",permalink:"/hrvst-cli/cli/projects/"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"login"},"Login"),(0,o.kt)("p",null,"To authenticate with Harvest's REST API, ",(0,o.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#for-client-side-applications"},"client side OAuth2")," is used. To initiate this, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hrvst login\n")),(0,o.kt)("p",null,"You\u2019ll be prompted to launch your browser and log in to Harvest to grant Harvest CLI access to your account."))}m.isMDXComponent=!0}}]);