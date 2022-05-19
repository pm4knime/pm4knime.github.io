(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},1362:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return c}});var n=r(9600),i=r(7857),t=r(8802),o=r(5675),a=r.n(o),l=r(5893);function c(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"section",children:(0,l.jsxs)("div",{className:"row-userDoc",children:[(0,l.jsx)("h1",{children:"KNIME Important Concepts"}),(0,l.jsx)("p",{children:"This section briefly introduces concepts from KNIME which are related and important to PM4KNIME usage. More information about those concepts can be found on the given links from KNIME."}),(0,l.jsx)("h2",{children:"\xa0"}),(0,l.jsx)("h2",{children:"How to create a workflow"}),(0,l.jsxs)("p",{children:["The exact information can be found with this"," ",(0,l.jsx)("a",{href:"https://www.knime.com/getting-started",rel:"nofollow",children:"link"}),"."]}),(0,l.jsx)("h2",{children:"\xa0"}),(0,l.jsx)("h2",{children:"States of nodes in KNIME"}),(0,l.jsx)("p",{children:"There are four types states of nodes in KNIME."}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Not Configured in Red light: Usually after adding a new node to Workflow Editor"}),(0,l.jsx)("li",{children:'Configured in Yellow light: After configuration, it changes from red to yellow. Some nodes have the status "configured" when they are created, or left from last configuration.'}),(0,l.jsx)("li",{children:"Executed in Green light: State after execution is successful."}),(0,l.jsx)("li",{children:"Error in Red Cross: Some errors show during execution."})]}),(0,l.jsx)("div",{className:"image-container",children:(0,l.jsx)("p",{children:(0,l.jsx)(a(),{src:t.basePath+"/assets/images/importantConcept/KNIME-states.PNG",height:"200",width:"500",alt:"KNIME-states",className:"img-fluid img-shadow"})})}),(0,l.jsxs)("p",{children:["Cancel the execution of node by ",(0,l.jsx)("strong",{children:"Reset"}),", the node changes from"," ",(0,l.jsx)("em",{children:(0,l.jsx)("strong",{children:"Executed"})})," ","into"," ",(0,l.jsx)("em",{children:(0,l.jsx)("strong",{children:"configured"})}),"."]}),(0,l.jsx)("h2",{children:"\xa0"}),(0,l.jsx)("h2",{children:"Ports of Nodes"}),(0,l.jsx)("p",{children:"There are input ports and output ports for one node. The types of them are:"}),(0,l.jsxs)("ol",{children:[(0,l.jsx)("li",{children:"Data of Table in Black Triangle:"}),(0,l.jsx)("li",{children:"Model in Blue Rectangle:"}),(0,l.jsx)("li",{children:"An image in Green Rectangle:"}),(0,l.jsx)("li",{children:"Flow Variable in Red Circle:"}),(0,l.jsx)("li",{children:"Database Connection in Red Rectangle:"}),(0,l.jsx)("li",{children:"Database Query in Maroon Rectangle:"})]}),(0,l.jsx)("h2",{children:"\xa0"}),(0,l.jsx)("h2",{children:"FlowVariable"}),(0,l.jsx)("p",{children:"Flow Variable is shown as one red circle in KNIME and usually used to configure parameters automatically."}),(0,l.jsx)("h4",{children:"\xa0"}),(0,l.jsx)("h4",{children:"Usage"}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{children:"https://www.knime.com/knime-introductory-course/chapter7/section1/creation-and-usage-of-flow-variables"})}),(0,l.jsx)("h5",{children:"\xa0"}),(0,l.jsx)("h5",{children:"Goal: Try to parameterize the automation of workflow."}),(0,l.jsx)("h5",{children:"\xa0"}),(0,l.jsx)("h5",{children:"Types: There are two kinds of flow variables,"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"global flow variable"})," for the whole workflow"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"local flow variable"})," with explicit port to connect to node, it has effect on the"," ",(0,l.jsx)("strong",{children:"all nodes after the port connection"}),". We can also transfer data value into flow variable by using node"," ",(0,l.jsx)("em",{children:(0,l.jsx)("strong",{children:"Table Row to Variable"})})," ","is used to define new flow variables. The names of flow variables are defined by the column names."]})]}),(0,l.jsx)("h2",{children:"\xa0"}),(0,l.jsx)("h2",{children:"Loop Structure"}),(0,l.jsxs)("p",{children:["The detailed information can be found in"," ",(0,l.jsx)("a",{href:"https://www.knime.com/nodeguide/control-structures/loops",rel:"nofollow",children:"KNIME Loop"}),". ",(0,l.jsx)("br",{})," ",(0,l.jsx)("div",{className:"image-container",children:(0,l.jsx)(a(),{src:t.basePath+"/assets/images/importantConcept/KNIME-loop.PNG",height:"300",width:"500",alt:"KNIME Loop",className:"img-fluid img-shadow"})})]}),(0,l.jsx)("p",{children:"Most important things to remember are:"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["In KNIME, it requires two nodes in pair to explicitly represent the loop start and loop end. The format for the pair is"," ",(0,l.jsx)("code",{children:"XXX Loop Start"})," and ",(0,l.jsx)("code",{children:"XXX Loop End"}),"."]}),(0,l.jsxs)("li",{children:["After execution Loop, the result from each iteration is summarized at the ",(0,l.jsx)("code",{children:"XXX Loop End"}),"."]}),(0,l.jsx)("li",{children:"Loop is usually used with Flow Variable to modify the node's settings."})]})]})})}),(0,l.jsx)(i.Z,{})]})}},7857:function(e,s,r){"use strict";var n=r(5893);s.Z=function(e){return(0,n.jsx)("footer",{className:"footer",children:(0,n.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,n.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,n.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,n.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,n.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,r){"use strict";var n=r(9499),i=(r(7294),r(8802)),t=r.n(i),o=r(4593),a=r(1664),l=r.n(a),c=r(634),d=r(9368),h=r(3210),f=r(5893);function x(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?x(Object(r),!0).forEach((function(s){(0,n.Z)(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}var j=function(e){var s=e.style;return(0,f.jsxs)(c.Z,{className:"container-fluid color-nav",style:s,children:[(0,f.jsxs)(c.Z.Brand,{children:[(0,f.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,f.jsx)("img",{src:t().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,f.jsx)(l(),{href:"/",passHref:!0,children:(0,f.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,f.jsx)("img",{src:t().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,f.jsx)(c.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,f.jsxs)(c.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,f.jsx)(d.Z,{children:(0,f.jsx)(l(),{href:"/userDoc/",passHref:!0,children:(0,f.jsx)(d.Z.Link,{children:"Home"})})}),(0,f.jsx)(d.Z,{children:(0,f.jsxs)(h.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,f.jsx)(l(),{href:"/userDoc/guides/",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Introduction Guides"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/features",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"PM4KNIME Features"})}),(0,f.jsx)(h.Z.Divider,{}),(0,f.jsx)(l(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Installation Instructions"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"KNIME Important Concepts"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Bug Report"})}),(0,f.jsx)(h.Z.Divider,{}),(0,f.jsx)(l(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,f.jsx)(d.Z,{children:(0,f.jsxs)(h.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,f.jsx)(l(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Introduction Demos"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Process Discovery"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Confromance"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Log Manipulation"})}),(0,f.jsx)(h.Z.Divider,{}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Repetitive Execution of Workflow (Legacy does not work)"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Parameter Optimization (Legacy does not work)"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Organization on Workflow"})}),(0,f.jsx)(h.Z.Divider,{}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"KNIME Nodes"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Working with Java"})}),(0,f.jsx)(l(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,f.jsx)(h.Z.Item,{children:"Working with Python"})})]})})]})]})},p=function(){return(0,f.jsxs)(o.q,{children:[(0,f.jsx)("meta",{charSet:"UTF-8"}),(0,f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,f.jsx)("title",{children:"PM4KNIME"}),(0,f.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:t().basePath+"/assets/pm4knimeLogo.png"}),(0,f.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:t().basePath+"/assets/pm4knimeLogo.png"}),(0,f.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:t().basePath+"/assets/pm4knimeLogo.png"}),(0,f.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,f.jsx)("meta",{name:"google",content:"notranslate"})]})},m=function(){return(0,f.jsx)(j,{style:u({},{collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"})})};s.Z=function(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{}),(0,f.jsx)(m,{})]})}},7457:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/importantConcepts",function(){return r(1362)}])}},function(e){e.O(0,[917,675,774,888,179],(function(){return s=7457,e(e.s=s);var s}));var s=e.O();_N_E=s}]);