(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),i=n("ab039aecd4a1d4fedc0e"),c=n("d7dd51e1bf6bfc2c9c3d"),s=n("ab4cb61bcb2dc161defb"),u=n("a28fc3c963a1d4d1a2e5"),l=(n("5ef9de3df8d92ea0e41c"),n("5fa3f8487e09c6182715")),d=n.n(l),f=n("f3b0ff1628e56352bcbf"),p=n.n(f),m=n("a1cf5d6fa4ed65a6ddd5"),b=n.n(m),g=n("6a4f9c383785f9168266"),v=n.n(g),h=n("d3a850c4000d77bccc89"),y=n.n(h),j=n("f2873ecf7390fe7d7c89"),w=n.n(j);function S(e){var t={dispatch:p.a,subscribe:p.a,getState:p.a,replaceReducer:p.a,runSaga:p.a,injectedReducers:y.a,injectedSagas:y.a};v()(w()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var O=n("491cc2e27aa2b4221847");function x(e,t){return function(n,r){t||S(e),v()(d()(n)&&!b()(n)&&p()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(O.a)(e.injectedReducers)))}}function k(e){return S(e),{injectReducer:x(e,!0)}}var P=function(e){var t=e.key,n=e.reducer,r=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){k(r.store).injectReducer(t,n)},[])},C="@@saga-injector/daemon",R="@@saga-injector/once-till-unmount";function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach(function(t){N(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=["@@saga-injector/restart-on-remount",C,R],_=function(e){return v()(d()(e)&&!b()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},A=function(e){var t={saga:p.a,mode:function(e){return d()(e)&&M.includes(e)}};v()(w()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function H(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||S(e);var o=I(I({},r),{},{mode:r.mode||C}),i=o.saga,c=o.mode;_(n),A(o);var s=Reflect.has(e.injectedSagas,n);(!s||s&&c!==C&&c!==R)&&(e.injectedSagas[n]=I(I({},o),{},{task:e.runSaga(i,a)}))}}function $(e,t){return function(n){if(t||S(e),_(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==C&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function F(e){return S(e),{injectSaga:H(e,!0),ejectSaga:$(e,!0)}}var D,z=function(e){var t=e.key,n=e.saga,r=e.mode,o=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){var e=F(o.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])},U=n("c4ec0be7fefbdf794ace"),L=function(e){return e.global||U.b},T=n("0b3cb19af78752326f59"),W=T.b.h2.withConfig({displayName:"H2",componentId:"egphza-0"})(["font-size:1.5em;"]),q=T.b.ul.withConfig({displayName:"Ul",componentId:"mwnq6h-0"})(["list-style:none;margin:0;width:100%;max-height:30em;overflow-y:auto;padding:0 1em;"]),G=T.b.div.withConfig({displayName:"Wrapper",componentId:"sc-1umgotm-0"})(["padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden;"]);function J(e,t,n,r){D||(D="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:D,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var V=J("div",{});var B,X=function(e){var t=e.component,n=V;return n=e.items?e.items.map(function(e){return J(t,{item:e},"item-".concat(e.id))}):J(t,{}),J(G,{},void 0,J(q,{},void 0,n))},K=T.b.div.withConfig({displayName:"Item",componentId:"sc-3y9mie-0"})(["display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;"]),Q=T.b.li.withConfig({displayName:"Wrapper",componentId:"euo0oy-0"})(["width:100%;height:3em;display:flex;align-items:center;position:relative;border-top:1px solid #eee;&:first-child{border-top:none;}"]);function Y(e,t,n,r){B||(B="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:B,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Z,ee=function(e){return Y(Q,{},void 0,Y(K,{},void 0,e.item))},te=n("8e4c85c29cdef1bf8a5f");function ne(e,t,n,r){Z||(Z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:Z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ae=ne("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"});var oe,ie=function(e){return a.a.createElement("svg",re({height:"1em",width:"0.875em",className:e.className},e),ae)},ce=Object(T.b)(ie).withConfig({displayName:"IssueIcon",componentId:"s8m34y-0"})(["fill:#ccc;margin-right:0.25em;"]),se=n("6c074f91ad5b62e00274"),ue=Object(T.b)(se.a).withConfig({displayName:"IssueLink",componentId:"uyzonb-0"})(["height:100%;color:black;display:flex;align-items:center;justify-content:center;white-space:nowrap;"]),le=Object(T.b)(se.a).withConfig({displayName:"RepoLink",componentId:"pvpwpn-0"})(["height:100%;color:black;display:flex;align-items:center;width:100%;"]),de=T.b.div.withConfig({displayName:"Wrapper",componentId:"sc-17s0rao-0"})(["width:100%;height:100%;display:flex;align-items:space-between;"]);function fe(e,t,n,r){oe||(oe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:oe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var pe=fe(ce,{});var me,be=Object(c.connect)(Object(u.b)({currentUser:Object(u.a)(L,function(e){return e.currentUser})}))(function(e){var t=e.item,n="";t.owner.login!==e.currentUser&&(n="".concat(t.owner.login,"/"));var r=fe(de,{},void 0,fe(le,{href:t.html_url,target:"_blank"},void 0,n+t.name),fe(ue,{href:"".concat(t.html_url,"/issues"),target:"_blank"},void 0,pe,fe(i.FormattedNumber,{value:t.open_issues_count})));return fe(ee,{item:r},"repo-list-item-".concat(t.full_name))});function ge(e,t,n,r){me||(me="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:me,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var ve=ge(X,{component:te.a}),he=ge(ee,{item:"Something went wrong, please try again!"});var ye=function(e){var t=e.loading,n=e.error,r=e.repos;if(t)return ve;if(!1!==n)return ge(X,{component:function(){return he}});return!1!==r?ge(X,{items:r,component:be}):null},je=T.b.span.withConfig({displayName:"AtPrefix",componentId:"sc-1suuq8o-0"})(["color:black;margin-left:0.4em;"]),we=T.b.section.withConfig({displayName:"Section",componentId:"sc-1eulrsm-0"})(["margin:3em auto;&:first-child{margin-top:0;}"]),Se=Object(T.b)(we).withConfig({displayName:"CenteredSection",componentId:"sc-6zy0wx-0"})(["text-align:center;"]),Oe=T.b.form.withConfig({displayName:"Form",componentId:"dmhz4x-0"})(["margin-bottom:1em;"]),xe=T.b.input.withConfig({displayName:"Input",componentId:"sc-19rkjmi-0"})(["outline:none;border:none;border-bottom:1px dotted #999;background-color:transparent;"]),ke="boilerplate.containers.HomePage",Pe=Object(i.defineMessages)({startProjectHeader:{id:"".concat(ke,".start_project.header"),defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"".concat(ke,".start_project.message"),defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymeHeader:{id:"".concat(ke,".tryme.header"),defaultMessage:"Try me!"},trymeMessage:{id:"".concat(ke,".tryme.message"),defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"".concat(ke,".tryme.atPrefix"),defaultMessage:"@"}}),Ce=n("fcb99a06256635f70435");function Re(e,t){return{type:Ce.c,repos:e,username:t}}var Ee="boilerplate/Home/CHANGE_USERNAME";var Ie=n("7edf83707012a871cdfb"),Ne={username:""},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return Object(Ie.a)(e,function(e){switch(t.type){case Ee:e.username=t.username.replace(/@/gi,"")}})},_e=function(e){return e.home||Ne},Ae=function(){return Object(u.a)(_e,function(e){return e.username})},He=n("d782b72bc5b680c7122c");function $e(e){return 204===e.status||205===e.status?null:e.json()}function Fe(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function De(e,t){return fetch(e,t).then(Fe).then($e)}var ze,Ue=regeneratorRuntime.mark(Te),Le=regeneratorRuntime.mark(We);function Te(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(He.select)(Ae());case 2:return e=r.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),r.prev=4,r.next=7,Object(He.call)(De,t);case 7:return n=r.sent,r.next=10,Object(He.put)(Re(n,e));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(4),r.next=16,Object(He.put)((a=r.t0,{type:Ce.b,error:a}));case 16:case"end":return r.stop()}var a},Ue,null,[[4,12]])}function We(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.takeLatest)(Ce.a,Te);case 2:case"end":return e.stop()}},Le)}function qe(e,t,n,r){ze||(ze="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:ze,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"HomePage",function(){return Ve}),n.d(t,"mapDispatchToProps",function(){return Xe});var Ge="home",Je=qe(o.Helmet,{},void 0,qe("title",{},void 0,"Home Page"),qe("meta",{name:"description",content:"A React.js Boilerplate application homepage"}));function Ve(e){var t=e.username,n=e.loading,o=e.error,c=e.repos,s=e.onSubmitForm,u=e.onChangeUsername;P({key:Ge,reducer:Me}),z({key:Ge,saga:We}),Object(r.useEffect)(function(){t&&t.trim().length>0&&s()},[]);var l={loading:n,error:o,repos:c};return qe("article",{},void 0,Je,qe("div",{},void 0,qe(Se,{},void 0,qe(W,{},void 0,a.a.createElement(i.FormattedMessage,Pe.startProjectHeader)),qe("p",{},void 0,a.a.createElement(i.FormattedMessage,Pe.startProjectMessage))),qe(we,{},void 0,qe(W,{},void 0,a.a.createElement(i.FormattedMessage,Pe.trymeHeader)),qe(Oe,{onSubmit:s},void 0,qe("label",{htmlFor:"username"},void 0,a.a.createElement(i.FormattedMessage,Pe.trymeMessage),qe(je,{},void 0,a.a.createElement(i.FormattedMessage,Pe.trymeAtPrefix)),qe(xe,{id:"username",type:"text",placeholder:"mxstbr",value:t,onChange:u}))),a.a.createElement(ye,l))))}var Be=Object(u.b)({repos:Object(u.a)(L,function(e){return e.userData.repositories}),username:Ae(),loading:Object(u.a)(L,function(e){return e.loading}),error:Object(u.a)(L,function(e){return e.error})});function Xe(e){return{onChangeUsername:function(t){return e((n=t.target.value,{type:Ee,username:n}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:Ce.a})}}}var Ke=Object(c.connect)(Be,Xe);t.default=Object(s.compose)(Ke,r.memo)(Ve)}}]);