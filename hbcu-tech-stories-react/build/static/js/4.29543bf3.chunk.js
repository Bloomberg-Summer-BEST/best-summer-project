/*! For license information please see 4.29543bf3.chunk.js.LICENSE.txt */
(this["webpackJsonpSummer BEST Project"]=this["webpackJsonpSummer BEST Project"]||[]).push([[4],{498:function(e,a,t){"use strict";function n(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,r=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(t.push(c.value),!a||t.length!==a);n=!0);}catch(o){r=!0,l=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return n(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return r}))},499:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)t.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},500:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return s}));var n,r=t(62),l=t.n(r);function c(e,a){return void 0===e&&(e=""),void 0===a&&(a=n),a?e.split(" ").map((function(e){return a[e]||e})).join(" "):e}function i(e,a){var t={};return Object.keys(e).forEach((function(n){-1===a.indexOf(n)&&(t[n]=e[n])})),t}var o="object"===typeof window&&window.Element||function(){};l.a.oneOfType([l.a.string,l.a.func,function(e,a,t){if(!(e[a]instanceof o))return new Error("Invalid prop `"+a+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},l.a.shape({current:l.a.any})]);var s=l.a.oneOfType([l.a.func,l.a.string,l.a.shape({$$typeof:l.a.symbol,render:l.a.func}),l.a.arrayOf(l.a.oneOfType([l.a.func,l.a.string,l.a.shape({$$typeof:l.a.symbol,render:l.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement},501:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(3),r=t.n(n).a.createContext({})},503:function(e,a,t){"use strict";var n=t(19),r=t(33),l=t(3),c=t.n(l),i=t(62),o=t.n(i),s=t(499),m=t.n(s),u=t(501),b=t(500),p={tag:b.c,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,l=Object(b.b)(this.props,Object.keys(p)),i=Object(b.a)(m()("tab-content",a),t);return c.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(r,Object(n.a)({},l,{className:i})))},a}(l.Component);a.a=E,E.propTypes=p,E.defaultProps={tag:"div"}},504:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(19),r=t(57),l=t(3),c=t.n(l),i=t(62),o=t.n(i),s=t(499),m=t.n(s),u=t(501),b=t(500),p={tag:b.c,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function E(e){var a=e.className,t=e.cssModule,l=e.tabId,i=e.tag,o=Object(r.a)(e,["className","cssModule","tabId","tag"]),s=function(e){return Object(b.a)(m()("tab-pane",a,{active:l===e}),t)};return c.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return c.a.createElement(i,Object(n.a)({},o,{className:s(a)}))}))}E.propTypes=p,E.defaultProps={tag:"div"}},509:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var c=t(498),i=t(503),o=t(504),s=function(e){var a,t=Object(n.useState)("all-pane"),s=Object(c.a)(t,2),m=s[0],u=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"assets/images/techlogo.png",className:"w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"})),r.a.createElement("span",{className:"w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("div",{className:"w3-container"},r.a.createElement("h1",null,r.a.createElement("b",null,"JOURNEY MAPS")),r.a.createElement("div",{className:"w3-section w3-bottombar w3-padding-16"},r.a.createElement("span",{className:"w3-margin-right"},"Category:"),r.a.createElement("button",(l(a={className:"all-pane"===m?"w3-button w3-black":"w3-button w3-white w3-hide-small"},"className","all-pane"===m?"w3-button w3-black":"w3-button w3-white w3-hide-small"),l(a,"onClick",(function(){return u("all-pane")})),a),"ALL"),r.a.createElement("button",{className:"my-stories-pane"===m?"w3-button w3-black":"w3-button w3-white w3-hide-small",onClick:function(){return u("my-stories-pane")}},r.a.createElement("i",{className:"fa fa-diamond w3-margin-right"})," My Stories"),r.a.createElement("button",{className:"saved-storiess-pane"===m?"w3-button w3-black":"w3-button w3-white w3-hide-small",onClick:function(){return u("saved-stories-pane")}},r.a.createElement("i",{className:"fa fa-folder"})," Saved Stories"),r.a.createElement("button",{className:"inbox-pane"===m?"w3-button w3-black":"w3-button w3-white w3-hide-small",onClick:function(){return u("inbox-pane")}}," ",r.a.createElement("i",{className:"fa fa-inbox"})," Inbox "),r.a.createElement("button",{className:"new-category-pane"===m?"w3-button w3-black":"w3-button w3-white w3-hide-small",onClick:function(){return u("new-category-pane")}},r.a.createElement("i",{className:"fa fa-bars"})," New Category ")))),r.a.createElement(i.a,{activeTab:m,className:"w3-row-padding"},r.a.createElement(o.a,{tabId:"inbox-pane"},r.a.createElement("h2",null,"Inbox")),r.a.createElement(o.a,{tabId:"saved-stories-pane"},r.a.createElement("h2",null,"Saved Stories")),r.a.createElement(o.a,{tabId:"my-stories-pane"},r.a.createElement("h2",null,"My Stories")),r.a.createElement(o.a,{tabId:"new-category-pane"},r.a.createElement("h2",null,"New Category")),r.a.createElement(o.a,{tabId:"all-pane"},r.a.createElement("div",{className:"list-grid"},r.a.createElement("div",{className:"w3-third w3-container w3-margin-bottom card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("img",{src:"assets/images/image1.jpg",alt:"John Leroy",className:"w3-hover-opacity image"}),r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",{className:"name"},r.a.createElement("b",null,"John Leroy")),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"Google Developer")),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("em",null,"Alabama State University Alumni"))),r.a.createElement("p",null,"I never thought I could make it this far, but the trials and challenges that faced throughout my journey helped me be the person I am today!"),r.a.createElement("p",null,r.a.createElement("button",{className:"button"},"Explore Story"))))),r.a.createElement("div",{className:"w3-third w3-container w3-margin-bottom card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("img",{src:"assets/images/image2.jpg",alt:"John Leroy",className:"w3-hover-opacity image"}),r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",{className:"name"},r.a.createElement("b",null,"Mark Angel")),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"Facebook Engineer")),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("em",null,"Alcon State University"))),r.a.createElement("p",null,"A journey of a thousand miles begins with a single step! I took that step, and it changed my life!"),r.a.createElement("p",null,r.a.createElement("button",{className:"button"},"Explore Story"))))),r.a.createElement("div",{className:"w3-third w3-container w3-margin-bottom card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("img",{src:"assets/images/image3.jpg",alt:"John Leroy",className:"w3-hover-opacity image"}),r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",{className:"name"},r.a.createElement("b",null,"Precious Oseghale")),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"Computer Science, Junior")),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("em",null,"Alabama State University Alumni"))),r.a.createElement("p",null,"How do you leverage your network to help others achieve their goals?"),r.a.createElement("p",null,r.a.createElement("button",{className:"button"},"Explore Story"))))),r.a.createElement("div",{className:"w3-third w3-container w3-margin-bottom card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("img",{src:"assets/images/image4.jpg",alt:"John Leroy",className:"w3-hover-opacity image"}),r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",{className:"name"},r.a.createElement("b",null,"Terrence Crossdale")),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"Bloomberg Engineer")),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("em",null,"Stony Brook University"))),r.a.createElement("p",null,"Can you take on the challenge to make a difference in your community?"),r.a.createElement("p",null,r.a.createElement("button",{className:"button"},"Explore Story"))))),r.a.createElement("div",{className:"w3-third w3-container w3-margin-bottom card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("img",{src:"assets/images/image5.jpg",alt:"John Leroy",className:"w3-hover-opacity image"}),r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",{className:"name"},r.a.createElement("b",null,"Terrence Crossdale")),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"Biomedical Engineering & Computer Science")),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("em",null,"Alabama State University"))),r.a.createElement("p",null,"Everyday we have a chance to make great decisions about our lives, and our careers!"),r.a.createElement("p",null,r.a.createElement("button",{className:"button"},"Explore Story"))))),r.a.createElement("div",{className:"w3-third w3-container w3-margin-bottom card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("img",{src:"assets/images/image6.jpg",alt:"John Leroy",className:"w3-hover-opacity image"}),r.a.createElement("div",{className:"w3-container w3-white"},r.a.createElement("p",{className:"name"},r.a.createElement("b",null,"Mikel Kengni")),r.a.createElement("p",{className:"title"},r.a.createElement("b",null,"Computer Science, Masters")),r.a.createElement("p",null,r.a.createElement("b",null,r.a.createElement("em",null,"Howard University"))),r.a.createElement("p",null,"You have what it takes to succeed in the tech industry!"),r.a.createElement("p",null,r.a.createElement("button",{className:"button"},"Explore Story")))))))),r.a.createElement("div",{className:"w3-center w3-padding-32"},r.a.createElement("div",{className:"w3-bar"},r.a.createElement("a",{href:"#",className:"w3-bar-item w3-button w3-hover-black"},"\xab"),r.a.createElement("a",{href:"#",className:"w3-bar-item w3-black w3-button"},"1"),r.a.createElement("a",{href:"#",className:"w3-bar-item w3-button w3-hover-black"},"2"),r.a.createElement("a",{href:"#",className:"w3-bar-item w3-button w3-hover-black"},"3"),r.a.createElement("a",{href:"#",className:"w3-bar-item w3-button w3-hover-black"},"4"),r.a.createElement("a",{href:"#",className:"w3-bar-item w3-button w3-hover-black"},"\xbb"))),r.a.createElement("div",{className:"w3-row-padding"}))};a.default=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null))}}}]);
//# sourceMappingURL=4.29543bf3.chunk.js.map