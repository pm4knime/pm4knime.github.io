(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[856],{8802:function(e){e.exports={reactStrictMode:!0,images:{loader:"akamai",path:"/"},basePath:""}},6244:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var i=t(1788),n=t(7857),a=t(8802),r=t(5675),o=t.n(r),c=t(5893);function l(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{}),(0,c.jsx)("div",{className:"section",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/demo-simple-conformance-check.png",width:"400px",height:"100px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"}),(0,c.jsx)("p",{children:"In this part, the demand to do conformance checking is shown at first. Conformance checking needs a process model and an event log as inputs. In this we will provide a process model and event log to do a fitness and precision evaluation."}),(0,c.jsx)("h1",{children:"Preparations"}),(0,c.jsxs)("div",{className:"new-wrapper",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/demo-simple-conformance-check-wf.png",width:"1280px",height:"720px",alt:"demo-simple-conformance-check-wf",className:"img-fluid img-shadow"}),(0,c.jsxs)("p",{children:[" ","To create a workflow, which evaluates a process model, we first download the dataset Download the"," ",(0,c.jsx)("a",{href:"https://github.com/pm4knime/pm4knime-document/blob/master/dataset/chapter_1.zip",children:"dataset"}),". Extract the xes file ",(0,c.jsx)("code",{children:"running-example.xes"})," from the downloaded dataset."]}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/processDiscovery/XESReaderDialog.jpg",width:"1280px",height:"720px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"}),(0,c.jsx)("p",{children:" Than we read the xes file with the help of the XES Reader"}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/processDiscovery/InspectEventLog.jpg",width:"1280px",height:"720px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"}),(0,c.jsx)("p",{children:'The log should consist of the activities "decide", "check ticket" etc.'}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/reading PNML file.png",width:"1280px",height:"720px",alt:"demo-simple-conformance-check",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ","Than we read to Petri Net from the giving dataset with the help of the PNML Reader."]})]}),"After the preparations we come to the actual conformance checking part. For that we first generate our alignments and feed them to our precision and fitness nodes respectfully. We first start with the fitness view.",(0,c.jsx)("h1",{children:"Fitness"}),(0,c.jsxs)("div",{className:"new-wrapper",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/alignmentbaseReplayer.png",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsx)("p",{children:'With the help of the Alignment-Based Replayer node we can create our alignments. For that example we take as "Classifier Name" "#Event Attribute #concept:name" and select replay strategy "ILP Replayer", with the default values. For further inside the replay results can be checked inside of the node.'}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/fitnessCheckerInformation.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ",'After executing the "Fitness Checker" we should get statistics about the fitness']}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/fitnessCheckerModelView.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ",'With the "Projection View" on the node it is also possible to see the fitness on the model.']})]}),(0,c.jsx)("h1",{children:"Precision"}),(0,c.jsxs)("div",{className:" new-wrapper",children:[(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/precisionCheckerDialog.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsxs)("p",{children:[" ",'The "Precision Checker" node should be run with the ETC Precision option for this example.']}),(0,c.jsx)(o(),{style:{marginBottom:0},src:a.basePath+"/assets/images/conformanceChecking/precisionCheckerInformation.jpg",width:"1280px",height:"720px",alt:"alignmentbaseReplayer",className:"img-fluid img-shadow"})," ",(0,c.jsx)("p",{children:"In the view we can than observe the precision of our process."})]})]})}),(0,c.jsx)(n.Z,{})]})}},7857:function(e,s,t){"use strict";var i=t(5893);s.Z=function(e){return(0,i.jsx)("footer",{className:"footer",children:(0,i.jsxs)("div",{className:"container",style:{display:"flex",justifyContent:"space-between"},children:[(0,i.jsxs)("span",{className:"text-muted float-left",children:["PM4KNIME is a product of the"," ",(0,i.jsx)("a",{href:"https://fit.fraunhofer.de",target:"_blank",children:"Fraunhofer Institute for Applied Information Technology (FIT)"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#DataProtectionModal",children:"Data Protection"}),(0,i.jsx)("span",{className:"float-right ml-1 mr-1 text-muted",children:"|"}),(0,i.jsx)("a",{className:"float-right",href:"#","data-toggle":"modal","data-target":"#ImprintModal",children:"Imprint"})]})]})})}},1788:function(e,s,t){"use strict";t.d(s,{Z:function(){return v}});var i=t(9499),n=t(7294),a=t(8802),r=t.n(a),o=t(4593),c=t(1664),l=t.n(c),h=t(634),d=t(9368),m=t(3210);var p=t(5893);function f(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?f(Object(t),!0).forEach((function(s){(0,i.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var u=function(e){var s=e.style;return(0,p.jsx)(h.Z,{className:"container-fluid",style:s,children:(0,p.jsxs)(h.Z.Brand,{children:[(0,p.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,p.jsx)("img",{src:r().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}})}),(0,p.jsx)(l(),{href:"/",passHref:!0,children:(0,p.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,p.jsx)("img",{src:r().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:""}),"PM4KNIME"]})})]})})},x=function(e){var s=e.style;return(0,p.jsxs)(h.Z,{className:"container-fluid color-nav",style:s,children:[(0,p.jsxs)(h.Z.Brand,{children:[(0,p.jsx)("a",{className:"navbar-brand",href:"https://fit.fraunhofer.de",children:(0,p.jsx)("img",{src:r().basePath+"/assets/fit_logo.svg",width:"auto",height:"30",className:"d-inline-block align-top",alt:""})}),(0,p.jsx)(l(),{href:"/",passHref:!0,children:(0,p.jsxs)("a",{className:"navbar-brand pl-4 pr-4",style:{paddingLeft:"15px"},children:[(0,p.jsx)("img",{src:r().basePath+"/assets/pm4knimeLogo.png",width:"auto",height:"30",className:"d-inline-block align-top",alt:"",style:{alignSelf:"left"}}),"PM4KNIME"]})})]}),(0,p.jsx)(h.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),(0,p.jsxs)(h.Z.Collapse,{id:"responsive-navbar-nav",children:[(0,p.jsx)(d.Z,{children:(0,p.jsx)(l(),{href:"/userDoc/",passHref:!0,children:(0,p.jsx)(d.Z.Link,{children:"Home"})})}),(0,p.jsx)(d.Z,{children:(0,p.jsxs)(m.Z,{title:"Getting Started",id:"collasible-nav-dropdown",children:[(0,p.jsx)(l(),{href:"/userDoc/guides/",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Introduction Guides"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/features",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"PM4KNIME Features"})}),(0,p.jsx)(m.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/installation",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Installation Instructions"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/importantConcepts",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"KNIME Important Concepts"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/bugReport",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Bug Report"})}),(0,p.jsx)(m.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/knimeServer",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"KNIME Server Usage"})})]})}),(0,p.jsx)(d.Z,{children:(0,p.jsxs)(m.Z,{title:"Examples",id:"collasible-nav-dropdown",children:[(0,p.jsx)(l(),{href:"/userDoc/guides/demos",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Introduction Demos"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/processDiscovery",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Process Discovery"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/conformance",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Confromance"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/logManipulation",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Log Manipulation"})}),(0,p.jsx)(m.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/repetiveExecution",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Repetitive Execution of Workflow"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/parameterOptimization",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Parameter Optimization"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/organizationOnWorkflow",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Organization on Workflow"})}),(0,p.jsx)(m.Z.Divider,{}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/knimeNodes",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"KNIME Nodes"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/workWithJava",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Working with Java"})}),(0,p.jsx)(l(),{href:"/userDoc/guides/demos/workWithPython",passHref:!0,children:(0,p.jsx)(m.Z.Item,{children:"Working with Python"})})]})})]})]})},j=function(){return(0,p.jsxs)(o.q,{children:[(0,p.jsx)("meta",{charSet:"UTF-8"}),(0,p.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,p.jsx)("title",{children:"PM4KNIME"}),(0,p.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:r().basePath+"/assets/pm4knimeLogo.png"}),(0,p.jsx)("meta",{name:"description",content:"PM4KNIME implements state-of-the-art process mining algorithms."}),(0,p.jsx)("meta",{name:"google",content:"notranslate"})]})},w=function(){var e=(0,n.useState)(0),s=e[0],t=e[1],i=(0,n.useState)(!0),a=i[0],r=i[1],o=function(e,s,t){var i;return function(){var n=this,a=arguments,r=function(){i=null,t||e.apply(n,a)},o=t&&!i;clearTimeout(i),i=setTimeout(r,s),o&&e.apply(n,a)}}((function(){var e=window.pageYOffset;r(s>e&&s-e>40||e<10),t(e)}),100);(0,n.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[s,a,o]);var c={collapseOnSelect:!0,expand:"lg",variant:"light",transition:"top 0.6s",position:"fixed",width:"100%"};return a?(0,p.jsx)(x,{style:g(g({},c),{},{top:a?"0":"-60px"})}):(0,p.jsx)(u,{style:g(g({},c),{},{top:a?"-60px":"0"})})},v=function(e){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(j,{}),(0,p.jsx)(w,{})]})}},6645:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/userDoc/guides/demos/conformance",function(){return t(6244)}])}},function(e){e.O(0,[917,675,774,888,179],(function(){return s=6645,e(e.s=s);var s}));var s=e.O();_N_E=s}]);