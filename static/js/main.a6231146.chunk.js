(this["webpackJsonpexam-tuesday"]=this["webpackJsonpexam-tuesday"]||[]).push([[0],[,function(e,t,a){e.exports={board:"SetBoard_board__1zlHp",inputBlock:"SetBoard_inputBlock__16h2s",inputFire:"SetBoard_inputFire__2sndh",inputBoard:"SetBoard_inputBoard__1niao",inputBoardFire:"SetBoard_inputBoardFire__WIRrf"}},,function(e,t,a){e.exports={board:"CountBoard_board__2rNGb",value:"CountBoard_value__1yeeJ",maxInc:"CountBoard_maxInc__1-n2l",text:"CountBoard_text__1Ainl",errorText:"CountBoard_errorText__3O3yW"}},,function(e,t,a){},,function(e,t,a){e.exports={project:"App_project__3oP_a",counter:"App_counter__3sldz"}},function(e,t,a){e.exports={button:"Button_button__32iPT"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),u=a.n(n),r=a(6),c=a.n(r),l=(a(14),a(2)),o=a(7),i=a.n(o),s=(a(5),a(8)),m=a.n(s),d=function(e){return u.a.createElement("div",null,u.a.createElement("button",{onClick:e.buttonFunction,disabled:e.disabledButton(e.value),className:m.a.button},e.title))},v=a(3),b=a.n(v),x=function(e){return u.a.createElement("div",{className:b.a.board},e.startValue<0||e.maxValue<0||e.activeMaxValue||e.activeMinValue?u.a.createElement("div",{className:"Incorrect value!"===e.text?b.a.errorText:b.a.text}," ",e.text):u.a.createElement("div",{className:e.value===e.maxValue?b.a.maxInc:b.a.value},e.value))},p=a(1),_=a.n(p),B=function(e){0===e.startValue&&e.maximumValue>0||e.maximumValue>0&&e.maximumValue>e.startValue&&e.startValue>=0?e.setText("enter value and press 'set'"):e.setText("Incorrect value!");return u.a.createElement("div",{className:"counter"},u.a.createElement("div",{className:_.a.board},u.a.createElement("div",{className:_.a.inputBlock},u.a.createElement("span",null,"max value: "),u.a.createElement("input",{onFocus:function(){e.setActiveMaxValue(!0)},className:"Incorrect value!"===e.text?"".concat(_.a.inputBoard," ").concat(_.a.inputBoardFire):"".concat(_.a.inputBoard," "),onChange:function(t){!function(t){e.setActiveMaxValue(!0);var a=Number(t.currentTarget.value);e.setMaximumValue(a)}(t)},type:"number",value:e.maximumValue})),u.a.createElement("div",{className:_.a.inputBlock},u.a.createElement("span",null,"start value:"),u.a.createElement("input",{onFocus:function(){e.setActiveMinValue(!0)},className:"Incorrect value!"===e.text?"".concat(_.a.inputBoard," ").concat(_.a.inputBoardFire):"".concat(_.a.inputBoard," "),onChange:function(t){!function(t){e.setActiveMinValue(!0),e.setStartValue(0);var a=Number(t.currentTarget.value);e.setStartValue(a)}(t)},type:"number",value:e.startValue}))),u.a.createElement("div",{className:"buttons"},u.a.createElement(d,{title:"set",buttonFunction:e.setFunc,value:e.value,disabledButton:e.disabledSetButton})))},V=localStorage.getItem("min"),f=localStorage.getItem("max"),E=function(){var e=Object(n.useState)(Number(f)),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(Number(V)),o=Object(l.a)(c,2),s=o[0],m=o[1],v=Object(n.useState)(0),b=Object(l.a)(v,2),p=b[0],_=b[1],E=Object(n.useState)("enter value and press 'set'"),S=Object(l.a)(E,2),N=S[0],j=S[1],F=Object(n.useState)(!0),O=Object(l.a)(F,2),M=O[0],g=O[1],I=Object(n.useState)(!0),T=Object(l.a)(I,2),A=T[0],C=T[1],h=Object(n.useState)(1),k=Object(l.a)(h,2),y=k[0],J=k[1],w=function(){_(s),C(!1),g(!1),localStorage.setItem("max",a.toString()),localStorage.setItem("min",s.toString()),J(1===y?2:1)},z=function(e){return!(a&&s>=0&&a>s&&a!==s&&a>0&&s>=0)};return u.a.createElement("div",{className:i.a.project},1===y?u.a.createElement(B,{value:p,setFunc:w,disabledSetButton:z,maximumValue:a,setMaximumValue:r,startValue:s,setStartValue:m,activeMaxValue:M,setActiveMaxValue:g,activeMinValue:A,setActiveMinValue:C,text:N,setText:j}):u.a.createElement("div",{className:"counter"},u.a.createElement(x,{value:p,maxValue:a,startValue:s,text:N,setText:j,activeMaxValue:M,activeMinValue:A}),u.a.createElement("div",{className:"buttons"},u.a.createElement(d,{title:"inc",buttonFunction:function(){p>=s&&p<=a&&_(p+1)},value:p,disabledButton:function(e){return!(e>=0&&e<a&&e>=s&&!M&&!A)}}),u.a.createElement(d,{title:"reset",buttonFunction:function(){_(0)},value:p,disabledButton:function(e){return e<=0}}),u.a.createElement(d,{title:"set",buttonFunction:w,value:p,disabledButton:z}))))};c.a.render(u.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a6231146.chunk.js.map