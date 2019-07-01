(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(e,t,n){e.exports=n(93)},74:function(e,t,n){},88:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(22),o=n.n(i),l=(n(74),n(5)),c=n(6),s=n(9),u=n(7),m=n(10),d=[{id:1,min:0,max:195850,fixed_tax:0,tax_rate:18},{id:2,min:195851,max:305850,fixed_tax:35253,tax_rate:26},{id:3,min:305851,max:423300,fixed_tax:63853,tax_rate:31},{id:4,min:423301,max:555600,fixed_tax:100263,tax_rate:36},{id:5,min:555601,max:708310,fixed_tax:147891,tax_rate:39},{id:6,min:708311,max:15e5,fixed_tax:207448,tax_rate:41},{id:7,min:1500001,max:1e16,fixed_tax:532041,tax_rate:45}],p=14220,b=35e4,f=33e3;function _(e,t,n){return e.fixed_tax+(t-(e.min-1))*(e.tax_rate/100)-p+function(e){return e>148.72*12?148.72*12:e}(.01*n)}var h=function(e){var t=e.provident_fund,n=e.pension_fund,a=e.ra_fund,r=e.monthly_salary,i=function(e,t,n){var a=12*e+12*t+12*n;return a>b?b:a}(t,n,a),o=12*r,l=o-i,c=d.filter(function(e){e.id;var t=e.min,n=e.max;e.fixed_tax,e.tax_rate;if(o>=t&&o<=n)return e}),s=d.filter(function(e){e.id;var t=e.min,n=e.max;e.fixed_tax,e.tax_rate;if(l>=t&&l<=n)return e}),u=_(c[0],o,o),m=_(s[0],l,o);return{original_paye:u,deduceted_paye:m,original_income_per_month:(o-u)/12,rebate:u-m,retirement_savings_rate:i/o*100}},v=n(8),y=n(23),E=n(112),x=n(113),g=n(109),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.id,a=e.name,i=e.value,o=e.type,l=e.onChange;return r.a.createElement(g.a,{fullWidth:!0,margin:"normal"},r.a.createElement(E.a,{htmlFor:n},t),r.a.createElement(x.a,{id:n,name:a,value:i,type:o,onChange:l}))}}]),t}(a.Component),j=n(111),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=n.props.income_info,n.onChange=function(e){return n.setState(Object(y.a)({},e.target.name,e.target.value))},n.onClick=function(e){e.preventDefault(),n.props.calculate_tax(n.state)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.monthly_salary,n=e.provident_fund,a=e.pension_fund,i=e.ra_fund;return console.log(this.state),r.a.createElement(g.a,{fullWidth:!0},r.a.createElement("div",{className:"card-header"},"Income and Retirement Savings"),r.a.createElement(O,{label:"Enter your monthly gross salary R",id:"monthly_salary",name:"monthly_salary",value:t,type:"number",onChange:this.onChange}),r.a.createElement(O,{label:"Enter your monthly provident fund constribution",id:"provident_fund",name:"provident_fund",value:n,type:"number",onChange:this.onChange}),r.a.createElement(O,{label:"Enter your monthly pension fund constribution",id:"pension_fund",name:"pension_fund",value:a,type:"number",onChange:this.onChange}),r.a.createElement(O,{label:"Enter your monthly retirement annuity fund constribution",id:"ra_fund",name:"ra_fund",value:i,type:"number",onChange:this.onChange}),r.a.createElement(j.a,{onClick:this.onClick,variant:"contained",color:"primary"},"Calculate"))}}]),t}(a.Component),w=Object(v.b)(null,{calculate_tax:function(e){return console.log("about to dispatch action with: ",e),{type:"CALCULATE_TAX_RETURN",payload:e}}})(C),k=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).calculate_tfsa_constribution=function(e){return f-e<0?{tfsa_conrtibution_from_rebate:f,tfsa_conrtibution_remaining:0,excess:e-f}:{tfsa_conrtibution_from_rebate:e,tfsa_conrtibution_remaining:f-e,excess:0}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.income_info_input,t=h(e);this.props.budget_expenses(t),console.log(t);var n=t.original_paye,a=t.deduceted_paye,i=t.original_income_per_month,o=t.rebate,l=t.retirement_savings_rate,c=this.calculate_tfsa_constribution(o),s=c.tfsa_conrtibution_from_rebate,u=c.tfsa_conrtibution_remaining,m=c.excess;return r.a.createElement("div",{style:{paddingTop:"1em"}},r.a.createElement(w,{income_info:e}),r.a.createElement("h2",null,"Tax Calculator"),r.a.createElement(g.a,{fullWidth:!0},r.a.createElement(O,{label:"Net Income: ",id:"net_salary",name:"net_salary",value:i.toFixed(2),type:"number"}),r.a.createElement(O,{label:"Tax Paid + UIF: ",id:"paye_uif",name:"paye_uif",value:n.toFixed(2),type:"number"}),r.a.createElement(O,{label:"Tax Paid + UIF: ",id:"paye_uif",name:"paye_uif",value:n.toFixed(2),type:"number"}),r.a.createElement(O,{label:"Tax Paid + UIF You were supposed to pay: ",id:"deduceted_paye",name:"deduceted_paye",value:a.toFixed(2),type:"number"}),r.a.createElement(O,{label:"Because your retirement savings rate is %",id:"retirement_savings_rate",name:"retirement_savings_rate",value:l.toFixed(2),type:"number"}),r.a.createElement(O,{label:"Your tax rebate will be: ",id:"rebate",name:"rebate",value:o.toFixed(2),type:"number"}),r.a.createElement(O,{label:"TFSA constribution from rebate: ",id:"tfsa_conrtibution_from_rebate",name:"tfsa_conrtibution_from_rebate",value:s.toFixed(2),type:"number"}),r.a.createElement(O,{label:"TFSA constribution allowance you still have remaining monthly: ",id:"tfsa_conrtibution_remaining_pm",name:"tfsa_conrtibution_remaining_pm",value:(u/12).toFixed(2),type:"number"}),"OR",r.a.createElement(O,{label:"For the year: ",id:"tfsa_conrtibution_remaining",name:"tfsa_conrtibution_remaining",value:u.toFixed(2),type:"number"}),r.a.createElement(O,{label:"Excess cash from rebate ",id:"excess",name:"excess",value:m.toFixed(2),type:"number"})))}}]),t}(a.Component),D=Object(v.b)(function(e){return{income_info_input:e.tax.monthly_user_info}},{calculate_tax_bracket:h,budget_expenses:function(e){return console.log("about to dispatch action with: ",e),{type:"BUDGET_EXPENSES",payload:e}}})(k),T=n(45),N=n(30),F=(n(88),n(29)),S=n(64),A=n(47),R=n(36),I={monthly_user_info:{monthly_salary:2e4,provident_fund:500,pension_fund:595,ra_fund:1e3},expenses:[],savings:[],debts:[]},P=Object(F.c)({tax:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CALCULATE_TAX_RETURN":return Object(R.a)({},e,{monthly_user_info:t.payload});case"BUDGET_EXPENSES":return Object(R.a)({},e,{net_income_savings:t.payload});case"ADD_EXPENSE":return Object(R.a)({},e,{expenses:[t.payload].concat(Object(A.a)(e.expenses))});case"ADD_SAVINGS":return Object(R.a)({},e,{savings:[t.payload].concat(Object(A.a)(e.savings))});case"ADD_DEBT":return Object(R.a)({},e,{debts:[t.payload].concat(Object(A.a)(e.debts))});default:return e}}}),U=[S.a],X=Object(F.e)(P,{},Object(F.d)(F.a.apply(void 0,U),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),W=function(){return r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-info mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},"Income manager"),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(T.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home mr-1"}),"Home"))))))},B=(n(90),n(110)),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.expense;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("span",null,r.a.createElement("label",null,e.description),":",r.a.createElement("label",null," R",e.amount)," "))}}]),t}(a.Component),G=Object(v.b)()(L),V=n(35),Y=n.n(V),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.expenses;return console.log("Trying to show these expenses: ",e),r.a.createElement("div",null,e.map(function(e){return r.a.createElement(G,{key:Y()(),expense:e})}))}}]),t}(a.Component),H=Object(v.b)(function(e){return{expenses:e.tax.expenses}})(J),$=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={description:"",amount:0},n.onChange=function(e){return n.setState(Object(y.a)({},e.target.name,e.target.value))},n.onClick=function(e){e.preventDefault();var t=n.state,a={description:t.description,amount:t.amount};n.props.add_expense(a),n.setState({description:"",amount:0})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.description,n=e.amount;return r.a.createElement("div",null,r.a.createElement(g.a,{style:{display:"flex",flexDirection:"row"},fullWidth:!0},r.a.createElement(x.a,{id:"description",name:"description",value:t,placeholder:"Expense Description",type:"text",onChange:this.onChange}),":",r.a.createElement(x.a,{id:"amount",name:"amount",value:n,type:"number",onChange:this.onChange}),r.a.createElement(j.a,{color:"primary",onClick:this.onClick},"Add")))}}]),t}(a.Component),q=Object(v.b)(null,{add_expense:function(e){return console.log("new expense: ",e),{type:"ADD_EXPENSE",payload:e}}})($),z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={description:"",amount:0},n.onChange=function(e){return n.setState(Object(y.a)({},e.target.name,e.target.value))},n.onClick=function(e){e.preventDefault();var t=n.state,a={description:t.description,amount:t.amount};n.props.add_saving(a),n.setState({description:"",amount:0})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.description,n=e.amount;return r.a.createElement("div",null,r.a.createElement(g.a,{style:{display:"flex",flexDirection:"row"},fullWidth:!0},r.a.createElement(x.a,{id:"description",name:"description",value:t,placeholder:"Saving Description",type:"text",onChange:this.onChange}),":",r.a.createElement(x.a,{id:"amount",name:"amount",value:n,type:"number",onChange:this.onChange}),r.a.createElement(j.a,{color:"primary",onClick:this.onClick},"Add")))}}]),t}(a.Component),K=Object(v.b)(null,{add_saving:function(e){return console.log("new expense: ",e),{type:"ADD_SAVINGS",payload:e}}})(z),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.saving;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("span",null,r.a.createElement("label",null,e.description),":",r.a.createElement("label",null," R",e.amount)," "))}}]),t}(a.Component),Q=Object(v.b)()(M),Z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.savings;return console.log("Trying to show these expenses: ",e),r.a.createElement("div",null,e.map(function(e){return r.a.createElement(Q,{key:Y()(),saving:e})}))}}]),t}(a.Component),ee=Object(v.b)(function(e){return{savings:e.tax.savings}})(Z),te=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={description:"",amount:0},n.onChange=function(e){return n.setState(Object(y.a)({},e.target.name,e.target.value))},n.onClick=function(e){e.preventDefault();var t=n.state,a={description:t.description,amount:t.amount};n.props.add_debt(a),n.setState({description:"",amount:0})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.description,n=e.amount;return r.a.createElement("div",null,r.a.createElement(g.a,{style:{display:"flex",flexDirection:"row"},fullWidth:!0},r.a.createElement(x.a,{id:"description",name:"description",value:t,placeholder:"Debt Description",type:"text",onChange:this.onChange}),":",r.a.createElement(x.a,{id:"amount",name:"amount",value:n,type:"number",onChange:this.onChange}),r.a.createElement(j.a,{color:"primary",onClick:this.onClick},"Add")))}}]),t}(a.Component),ne=Object(v.b)(null,{add_debt:function(e){return console.log("new expense: ",e),{type:"ADD_DEBT",payload:e}}})(te),ae=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.debt;return r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("span",null,r.a.createElement("label",null,e.description),":",r.a.createElement("label",null," R",e.amount)," "))}}]),t}(a.Component),re=Object(v.b)()(ae),ie=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.debts;return console.log("Trying to show these expenses: ",e),r.a.createElement("div",null,e.map(function(e){return r.a.createElement(re,{key:Y()(),debt:e})}))}}]),t}(a.Component),oe=Object(v.b)(function(e){return{debts:e.tax.debts}})(ie),le=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"calc_total_expenses",value:function(e){return 0==e.length?0:e.reduce(function(e,t){return e+parseFloat(t.amount,10)},0)}},{key:"sumProperty",value:function(e,t){return e.reduce(function(e,n){return"string"===typeof n[t]?e+parseFloat(n[t],10):e+n[t]},0)}},{key:"render",value:function(){var e=this.props,t=e.net_income_savings,n=e.monthly_user_info,a=e.expenses,i=e.savings,o=e.debts,l=(t.deduceted_paye,t.original_income_per_month),c=(t.original_paye,t.retirement_savings_rate,t.rebate,n.monthly_salary,n.provident_fund),s=n.pension_fund,u=n.ra_fund,m=this.sumProperty(a,"amount").toFixed(2),d=this.sumProperty(i,"amount").toFixed(2),p=this.sumProperty(o,"amount").toFixed(2);console.log("These are the savings so far: ",i);var b=l-(parseFloat(c,10)+parseFloat(s,10)+parseFloat(u,10))-m-d-p;return r.a.createElement(g.a,{style:{paddingTop:"1em"},fullWidth:!0},r.a.createElement(O,{label:"Your available amount for expenses",id:"real_net_income",name:"real_net_income",value:b.toFixed(2),type:"number"}),r.a.createElement("div",null,r.a.createElement("div",{className:"card-header"}," ","Expenses ",r.a.createElement("span",null," Total R",m)," "),r.a.createElement("div",{className:"card-body"},r.a.createElement(q,null)),r.a.createElement("div",null,r.a.createElement(H,null))),r.a.createElement("div",null,r.a.createElement("div",{className:"card-header"}," ","Savings/Investents ",r.a.createElement("span",null," Total R",d)," "),r.a.createElement("div",{className:"card-body"},r.a.createElement(K,null)),r.a.createElement("div",null,r.a.createElement(ee,null))),r.a.createElement("div",null,r.a.createElement("div",{className:"card-header"}," ","Loan repayments ",r.a.createElement("span",null," Total R",p)," "),r.a.createElement("div",{className:"card-body"},r.a.createElement(ne,null)),r.a.createElement("div",null,r.a.createElement(oe,null))))}}]),t}(a.Component),ce=Object(v.b)(function(e){return{net_income_savings:e.tax.net_income_savings,monthly_user_info:e.tax.monthly_user_info,savings:e.tax.savings,debts:e.tax.debts,expenses:e.tax.expenses}},null)(le),se=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{backgroundColor:"#a2b9bc"}},r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{style:{padding:"2em"},item:!0,xs:6},"Tax Calculations",r.a.createElement(D,null)),r.a.createElement(B.a,{style:{padding:"2em"},item:!0,xs:6},"Budget",r.a.createElement(ce,null))))}}]),t}(a.Component),ue=Object(v.b)()(se);var me=function(){return r.a.createElement(v.a,{store:X},r.a.createElement(T.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(W,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:ue}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[69,1,2]]]);
//# sourceMappingURL=main.58144fdc.chunk.js.map