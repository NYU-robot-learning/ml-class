"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[422],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3574:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"logistics",title:"Class Logistics"},l=void 0,c={unversionedId:"logistics",id:"logistics",title:"Class Logistics",description:"Course Overview",source:"@site/../docs/logistics.md",sourceDirName:".",slug:"/logistics",permalink:"/ml-class/docs/logistics",draft:!1,tags:[],version:"current",lastUpdatedAt:1660047351,formattedLastUpdatedAt:"Aug 9, 2022",frontMatter:{id:"logistics",title:"Class Logistics"}},u={},p=[{value:"Course Overview",id:"course-overview",level:2},{value:"Target Audience",id:"target-audience",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"CS/Data Science students",id:"csdata-science-students",level:3},{value:"For non-DS/CS Students",id:"for-non-dscs-students",level:3},{value:"Logistical Overview",id:"logistical-overview",level:2},{value:"Lecture",id:"lecture",level:3},{value:"Grading",id:"grading",level:3},{value:"Assignments",id:"assignments",level:3},{value:"Final Project",id:"final-project",level:3},{value:"Course Textbook",id:"course-textbook",level:3},{value:"Course Staff",id:"course-staff",level:3},{value:"Office Hours",id:"office-hours",level:3},{value:"Remarks",id:"remarks",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"course-overview"},"Course Overview"),(0,i.kt)("p",null,"Deep Reinforcement Learning (RL) has made massive strides in the last decade for sequential decision making problems such as playing Atari games, mastering GO, and continuous control of robots. This course serves as a graduate-level introduction to RL, with an emphasis on applications and recent research. Students will be introduced to a broad set of topics in RL: Basic formalisms; Exploration vs exploitation; Imitation learning; Model-free RL; Model-based control and planning; Unsupervised learning for RL; Applications to games, robotics, industry; Current frontiers. This course will involve several coding home-works where you will implement various algorithms, and a final project. Other alternative titles for this course are ",(0,i.kt)("em",{parentName:"p"},"Adaptive control and learning"),", ",(0,i.kt)("em",{parentName:"p"},"Dynamic optimization"),"."),(0,i.kt)("h3",{id:"target-audience"},"Target Audience"),(0,i.kt)("p",null,"This course is aimed at MSc and PhD level students in computer science / data science."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"csdata-science-students"},"CS/Data Science students"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is NOT a basic course in reinforcement learning, deep learning or AI. If you are unsure about whether you are ready to take the class, go through ",(0,i.kt)("a",{parentName:"p",href:"assignments"},"Assignment 0")," to test yourself.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Graduate level knowledge of ",(0,i.kt)("strong",{parentName:"li"},"machine learning, computer vision, and deep learning")," is assumed. "),(0,i.kt)("li",{parentName:"ul"},"Proficiency in ",(0,i.kt)("strong",{parentName:"li"},"Python and PyTorch")," is assumed, and will be necessary to complete the ",(0,i.kt)("a",{parentName:"li",href:"assignments"},"assignments"),".")),(0,i.kt)("h3",{id:"for-non-dscs-students"},"For non-DS/CS Students"),(0,i.kt)("p",null,"Please contact Rosemary Amico ",(0,i.kt)("a",{parentName:"p",href:"mailto:amico@cs.nyu.edu"},"amico@cs.nyu.edu"),"."),(0,i.kt)("h2",{id:"logistical-overview"},"Logistical Overview"),(0,i.kt)("h3",{id:"lecture"},"Lecture"),(0,i.kt)("p",null,"5.10pm-7.00pm on Fridays at 60FA 110 (",(0,i.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0?cid=Y19kYmFlNzlzYjM2cWplN2UxNWpwaDM0aWhpY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"},"Class calendar"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each week consists of a lecture."),(0,i.kt)("li",{parentName:"ul"},"Lectures will be held in person."),(0,i.kt)("li",{parentName:"ul"},"The class will be recorded, we will post the link to the recorded lectures to the ",(0,i.kt)("a",{parentName:"li",href:"https://campuswire.com/c/G7204E992/"},"class campuswire"),".")),(0,i.kt)("h3",{id:"grading"},"Grading"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"assignments"},"Homeworks")," (60%)"),(0,i.kt)("li",{parentName:"ol"},"Discussions, both in class and in ",(0,i.kt)("a",{parentName:"li",href:"https://campuswire.com/c/G7204E992/"},"campuswire")," (10%)"),(0,i.kt)("li",{parentName:"ol"},"Final Project (30%)")),(0,i.kt)("h3",{id:"assignments"},"Assignments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assignments will use Python 3 and PyTorch; we will provide you a conda environment to install all dependencies."),(0,i.kt)("li",{parentName:"ul"},"To complete the assignemnt, you would need GPU access. Use ",(0,i.kt)("a",{parentName:"li",href:"https://sites.google.com/a/nyu.edu/nyu-hpc/systems/greene-cluster"},"Greene")," if you need access to one."),(0,i.kt)("li",{parentName:"ul"},"We strongly recommended using Python for the project as well.")),(0,i.kt)("h3",{id:"final-project"},"Final Project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Project proposals (1 page) will be due on 10/9."),(0,i.kt)("li",{parentName:"ul"},"Maximum (and recommended) team size is 2."),(0,i.kt)("li",{parentName:"ul"},"Final presentations of all projects will take place on 12/10/2021.")),(0,i.kt)("h3",{id:"course-textbook"},"Course Textbook"),(0,i.kt)("p",null,"We highly recommend the following e-book: ",(0,i.kt)("strong",{parentName:"p"},"Sutton and Barto. ",(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"http://incompleteideas.net/book/RLbook2020.pdf"},"Reinforcement Learning."))),". Reading materials for each class is posted in the ",(0,i.kt)("a",{parentName:"p",href:"lectures"},"schedule"),"."),(0,i.kt)("h3",{id:"course-staff"},"Course Staff"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instructor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.lerrelpinto.com/"},"Lerrel Pinto")),(0,i.kt)("li",{parentName:"ul"},"Assistant: ",(0,i.kt)("a",{parentName:"li",href:"https://mahis.life"},"Mahi Shafiullah"))),(0,i.kt)("h3",{id:"office-hours"},"Office Hours"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lerrel: TBD"),(0,i.kt)("li",{parentName:"ul"},"Mahi: TBD")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A student in this course is expected to act professionally. Please also follow the GSAS regulations on academic integrity found here: ",(0,i.kt)("a",{parentName:"li",href:"http://gsas.nyu.edu/page/academic.integrity"},"http://gsas.nyu.edu/page/academic.integrity")),(0,i.kt)("li",{parentName:"ul"},"Academic accommodations are available for students with disabilities. Please contact the Moses Center for Students with Disabilities (212-998-4980 or ",(0,i.kt)("a",{parentName:"li",href:"mailto:mosescsd@nyu.edu"},"mosescsd@nyu.edu"),") for further information. Students who are requesting academic accommodations are advised to reach out to the Moses Center as early as possible in the semester for assistance.")))}m.isMDXComponent=!0}}]);