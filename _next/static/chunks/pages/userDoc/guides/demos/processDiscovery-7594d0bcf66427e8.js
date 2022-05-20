(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},1796:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var i=t(9600),r=t(7857),n=t(8802),o=t(5675),a=t.n(o),l=t(5893);function c(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{}),(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"section",children:(0,l.jsx)("div",{className:"row-userDoc",children:(0,l.jsx)("div",{className:"Layout-main","data-view-component":"true",children:(0,l.jsx)("div",{id:"wiki-body",className:"gollum-markdown-content",children:(0,l.jsxs)("div",{className:"markdown-body",children:[(0,l.jsx)("h1",{children:"Process Discovery"}),(0,l.jsxs)("p",{children:["In this part, the demand to discover a process model is shown at first. Next, the concrete workflow is provided as one sample to solve a similar problem."," "]}),(0,l.jsx)("p",{children:(0,l.jsx)(a(),{style:{marginBottom:0},src:n.basePath+"/assets/images/processDiscovery/demo-simple-discover.png",width:"400px",height:"100px",alt:"demo-simple-discover.PNG",className:"img-fluid img-shadow"})}),(0,l.jsx)("p",{children:"One example workflow with PM4KNIME is shown below:"}),(0,l.jsx)(a(),{style:{marginBottom:0},src:n.basePath+"/assets/images/processDiscovery/processOfDiscovery.jpg",width:"600px",height:"250px",alt:"processOfDiscovery.jpg",className:"img-fluid img-shadow"}),(0,l.jsx)("p",{children:"The following steps will guide you to accomplish the task and discover a Petri net from an event log."}),(0,l.jsxs)("ol",{children:[(0,l.jsxs)("li",{children:["Download the"," ",(0,l.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip",children:"dataset"}),". Extract the event log ",(0,l.jsx)("code",{children:"running-example.xes"})," ","from the downloaded dataset."]}),(0,l.jsx)("li",{children:'Create a workflow in KNIME called "PM4KNIME-Release-01-WF-Discovery".'}),(0,l.jsxs)("li",{children:["Import the event log running-example.xes",(0,l.jsx)("ul",{children:(0,l.jsxs)("li",{children:["Drag the node ",(0,l.jsx)("strong",{children:"XES Reader"})," from the category ",(0,l.jsx)("strong",{children:"ProcessMining->IO"}),' or by searching the related name, like "Event" in Node Repository.']})})]})]}),(0,l.jsx)("p",{children:(0,l.jsx)(a(),{src:n.basePath+"/assets/images/processDiscovery/SearchXesReader.jpg",width:"500px",height:"250px",alt:"SearchXesReader.jpg",className:"img-fluid img-shadow"})}),(0,l.jsx)("div",{className:"snippet-clipboard-content position-relative overflow-auto",children:(0,l.jsx)("pre",{className:"notranslate",children:(0,l.jsx)("code",{className:"notranslate",children:"* Configure the **XES Reader** with the path to file running-example.xes and click OK to close the dialog."})})}),(0,l.jsx)("p",{children:(0,l.jsx)(a(),{src:n.basePath+"/assets/images/processDiscovery/XESReaderDialog.jpg",width:"600px",height:"250px",alt:"XESReaderDialog.jpg",className:"img-fluid img-shadow"})}),(0,l.jsx)("div",{className:"snippet-clipboard-content position-relative overflow-auto",children:(0,l.jsx)("pre",{className:"notranslate",children:(0,l.jsx)("code",{clasName:"notranslate",children:"* Execute the node by right-clicking the node and choosing **Execute** option. * Inspect the event log by choosing the Output port, which is always located as the last option by right-clicking."})})}),(0,l.jsx)("p",{children:(0,l.jsx)(a(),{src:n.basePath+"/assets/images/processDiscovery/InspectEventLog.jpg",width:"700px",height:"550px",alt:"XESReaderDialog.jpg",className:"img-fluid img-shadow"})}),(0,l.jsx)("ol",{start:"4",children:(0,l.jsxs)("li",{children:["Drag the node ",(0,l.jsx)("strong",{children:"Inductive Miner"})," into the KNIME and connect it with the output port of the event log.",(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:"Configure the settings with the following values."})})]})}),(0,l.jsx)("blockquote",{children:(0,l.jsxs)("p",{children:["Select Inductive Miner Type: Inductive Miner - Infrequent Write the Noise Threshold: 0.2 Select Event Classifier: Event Name"," ",(0,l.jsx)("p",{children:(0,l.jsx)(a(),{src:n.basePath+"/assets/images/processDiscovery/InductiveMinerDialog.jpg",width:"700px",height:"550px",alt:"InductiveMinerDialog.jpg",className:"img-fluid img-shadow"})})]})}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Click OK to close the configuration dialog."}),(0,l.jsx)("li",{children:"Execute the nodes."}),(0,l.jsxs)("li",{children:["Check the generated Process Tree in output port. An Process Tree is given as the result."," ",(0,l.jsx)("p",{children:(0,l.jsx)(a(),{src:n.basePath+"/assets/images/processDiscovery/ProcessTreeResult.jpg",width:"700px",height:"550px",alt:"InductiveMinerDialog.jpg",className:"img-fluid img-shadow"})})]})]}),(0,l.jsx)("ol",{start:"6",children:"Click the run Button on the ProcessTree to Petri Net Converter node."}),(0,l.jsx)("ol",{start:"7",children:(0,l.jsxs)("li",{children:["Export the generate Petri net with node"," ",(0,l.jsx)("strong",{children:"Petrinet Writer"}),".",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["Connect the input port of"," ",(0,l.jsx)("strong",{children:"Petrinet Writer"})," with the output port of node ",(0,l.jsx)("strong",{children:"Inductive Miner"}),"."]})}),(0,l.jsxs)("li",{children:[(0,l.jsx)("p",{children:"Choose the file path, like"}),(0,l.jsx)("p",{children:(0,l.jsx)("code",{children:"\\Generated\\running-im-pn.pnml"})})]}),(0,l.jsx)("li",{children:(0,l.jsx)("p",{children:"Execute the node to save the Petri net."})})]})]})}),(0,l.jsx)("p",{children:'Following those steps, hopefully, you get more familiar with task of process discovery. More miners are found in the category "Process Mining->Discovery". The node and option settings descriptions are listed on the right site if you click the node.'})]})})})})})}),(0,l.jsx)(r.Z,{})]})}},7857:function(e,s,t){"use strict";var i=t(5893);s.Z=function(e){return(0,i.jsx)("footer",{className:"footer",children:(0,i.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,i.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,i.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},9600:function(e,s,t){"use strict";var i=t(9499),r=(t(7294),t(8802)),n=t.n(r),o=t(4593),a=t(1664),l=t.n(a),c=t(634),d=t(9368),h=t(3210),p=t(5893);function x(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?x(Object(t),!0).forEach((function(s){(0,i.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var m=function(e){var s=e.style;return(0,p.jsxs)(c.Z,{className:"container-fluid color-nav",style:s,children:[(0,p.jsxs)(c.Z.Brand,{children:[(0,p.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,p.jsx)("img",{src:n().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,p.jsx)(l(),{href:"/",passHref:!0,children:(0,p.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,p.jsx)("img",{src:n().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,p.jsx)(c.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,p.jsxs)(c.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,p.jsx)(d.Z,{children:(0,p.jsx)(l(),{href:"/userDoc/",passHref:!0,children:(0,p.jsx)(d.Z.Link,{children:"Home"})})}),(0,p.jsx)(d.Z,{children:(0,p.jsxs)(h.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,p.jsx)(l(),{href:"/userDoc/guides/",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Introduction Guides"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/features",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"PM4KNIME Features"})}),(0,p.jsx)(h.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Installation Instructions"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"KNIME Important Concepts"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Bug Report"})}),(0,p.jsx)(h.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,p.jsx)(d.Z,{children:(0,p.jsxs)(h.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,p.jsx)(l(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Introduction Demos"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Process Discovery"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Confromance"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Log Manipulation"})}),(0,p.jsx)(h.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Organization on Workflow"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"KNIME Nodes"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Working with Java"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,p.jsx)(h.Z.Item,{children:"Working with Python"})})]})})]})]})},j=function(){return(0,p.jsxs)(o.q,{children:[(0,p.jsx)("meta",{charSet:"UTF-8"}),(0,p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,p.jsx)("title",{children:"PM4KNIME"}),(0,p.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:n().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:n().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:n().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,p.jsx)("meta",{name:"google",content:"notranslate"})]})},u=function(){return(0,p.jsx)(m,{style:g({},{collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"})})};s.Z=function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{}),(0,p.jsx)(u,{})]})}},7129:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/processDiscovery",function(){return t(1796)}])}},function(e){e.O(0,[917,675,774,888,179],(function(){return s=7129,e(e.s=s);var s}));var s=e.O();_N_E=s}]);