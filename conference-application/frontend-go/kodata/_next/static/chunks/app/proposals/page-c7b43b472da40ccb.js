(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{902:function(e,n,t){Promise.resolve().then(t.bind(t,749))},749:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(9268),s=t(3648),a=t.n(s),r=t(6006),l=t(2506);function c(){let[e,n]=(0,r.useState)(),[t,s]=(0,r.useState)(),[c,o]=(0,r.useState)(),[d,u]=(0,r.useState)(),[h,x]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1),[j,S]=(0,r.useState)(!1),[b,g]=(0,r.useState)(!1),[f,v]=(0,r.useState)(null),P=new l.Ap({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:4}});return(0,i.jsxs)("main",{className:a().main,children:[(0,i.jsx)("h1",{children:"Proposals"}),(0,i.jsx)("h2",{children:"Submit your Proposal"}),(0,i.jsxs)("div",{children:[!b&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Title"}),(0,i.jsx)("input",{type:"text",id:"title",name:"title",value:e})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Description"}),(0,i.jsx)("textarea",{id:"description",name:"description",value:d})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Author"}),(0,i.jsx)("input",{type:"text",id:"author",name:"author",value:t})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Email"}),(0,i.jsx)("input",{type:"text",id:"email",name:"email",value:c})]}),j&&(0,i.jsx)("small",{className:"mt-3 d-inline-block text-danger",children:"Something went wrong. Please try again later."}),!h&&(0,i.jsx)("button",{main:!0,inline:!0,onClick:function(){u(P.generateParagraphs(2)),n(P.generateWords(5)),s(P.generateWords(2)),o(P.generateWords(1)+"@mail.com"),x(!0)},disabled:h,children:"Generate"}),h&&(0,i.jsx)("button",{type:"submit",onClick:()=>{p(!0),S(!1);let i={title:e,author:t,email:c,description:d};console.log("Sending Post!"+JSON.stringify(i));try{fetch("/api/c4p/",{method:"POST",body:JSON.stringify(i),headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{v(e),n(""),s(""),o(""),u(""),p(!1),g(!0)})}catch(e){p(!1),S(!0)}},children:"Send Proposal"})]}),b&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{children:"Thanks!"}),(0,i.jsx)("button",{main:!0,onClick:()=>{g(!1)},children:"Back"})]})]})]})}},3648:function(e){e.exports={main:"proposals_main__GEIB4"}}},function(e){e.O(0,[106,253,488,744],function(){return e(e.s=902)}),_N_E=e.O()}]);