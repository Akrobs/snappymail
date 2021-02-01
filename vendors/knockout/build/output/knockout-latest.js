/*!
 * Knockout JavaScript library v3.5.1-sm
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(C=>{function F(a,c){return null===a||typeof a in da?a===c:!1}function E(a,c){var e;return()=>{e||(e=b.a.setTimeout(()=>{e=void 0;a()},c))}}function J(a,c){var e;return()=>{clearTimeout(e);e=b.a.setTimeout(a,c)}}function S(a,c){null!==c&&c.o&&c.o()}function V(a,c){var e=this.lc,g=e[D];g.$||(this.Wa&&this.Aa[c]?(e.zb(c,a,this.Aa[c]),this.Aa[c]=null,--this.Wa):g.u[c]||e.zb(c,a,g.v?{V:a}:e.bc(a)),a.ja&&a.fc())}var T=C.document,W={},b="undefined"!==typeof W?W:{};b.l=(a,c)=>{a=a.split(".");for(var e=b,
g=0;g<a.length-1;g++)e=e[a[g]];e[a[a.length-1]]=c};b.Z=(a,c,e)=>{a[c]=e};b.version="3.5.1-sm";b.l("version",b.version);b.a={xa:(a,c)=>{c=a.indexOf(c);0<c?a.splice(c,1):0===c&&a.shift()},extend:(a,c)=>{c&&Object.entries(c).forEach(e=>a[e[0]]=e[1]);return a},N:(a,c)=>a&&Object.entries(a).forEach(e=>c(e[0],e[1])),ib:(a,c,e)=>{if(!a)return a;var g={};Object.entries(a).forEach(l=>g[l[0]]=c.call(e,l[1],l[0],a));return g},$a:a=>{for(;a.firstChild;)b.removeNode(a.firstChild)},Vb:a=>{var c=[...a],e=(c[0]&&
c[0].ownerDocument||T).createElement("div");a.forEach(g=>e.append(b.ea(g)));return e},za:(a,c)=>Array.prototype.map.call(a,c?e=>b.ea(e.cloneNode(!0)):e=>e.cloneNode(!0)),ta:(a,c)=>{b.a.$a(a);c&&a.append(...c)},Ca:(a,c)=>{if(a.length){for(c=8===c.nodeType&&c.parentNode||c;a.length&&a[0].parentNode!==c;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==c;)a.length--;if(1<a.length){c=a[0];var e=a[a.length-1];for(a.length=0;c!==e;)a.push(c),c=c.nextSibling;a.push(e)}}return a},ac:a=>null==a?"":
a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,""),Gc:(a,c)=>{a=a||"";return c.length>a.length?!1:a.substring(0,c.length)===c},oc:(a,c)=>c.contains(1!==a.nodeType?a.parentNode:a),Za:a=>b.a.oc(a,a.ownerDocument.documentElement),Hb:a=>b.onError?function(){try{return a.apply(this,arguments)}catch(c){throw b.onError&&b.onError(c),c;}}:a,setTimeout:(a,c)=>setTimeout(b.a.Hb(a),c),Lb:a=>setTimeout(()=>{b.onError&&b.onError(a);throw a;},0),H:(a,c,e)=>{a.addEventListener(c,b.a.Hb(e),!1)},cc:(a,
c)=>{if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");a.dispatchEvent(new Event(c))},g:a=>b.K(a)?a():a,mb:(a,c)=>a.textContent=b.a.g(c)||""};b.l("utils",b.a);b.l("unwrap",b.a.g);b.a.f=new function(){let a=0,c="__ko__"+Date.now(),e=new WeakMap;return{get:(g,l)=>(e.get(g)||{})[l],set:(g,l,q)=>{if(e.has(g))e.get(g)[l]=q;else{let d={};d[l]=q;e.set(g,d)}return q},cb:function(g,l,q){return this.get(g,l)||this.set(g,l,q)},clear:g=>e.delete(g),X:()=>a++ +c}};b.a.J=new function(){function a(d,
f){var h=b.a.f.get(d,g);void 0===h&&f&&(h=[],b.a.f.set(d,g,h));return h}function c(d){var f=a(d,!1);if(f){f=f.slice(0);for(var h=0;h<f.length;h++)f[h](d)}b.a.f.clear(d);q[d.nodeType]&&e(d.childNodes,!0)}function e(d,f){for(var h=[],n,p=0;p<d.length;p++)if(!f||8===d[p].nodeType)if(c(h[h.length]=n=d[p]),d[p]!==n)for(;p--&&!h.includes(d[p]););}var g=b.a.f.X(),l={1:!0,8:!0,9:!0},q={1:!0,9:!0};return{ma:(d,f)=>{if("function"!=typeof f)throw Error("Callback must be a function");a(d,!0).push(f)},lb:(d,f)=>
{var h=a(d,!1);h&&(b.a.xa(h,f),0==h.length&&b.a.f.set(d,g,void 0))},ea:d=>{b.m.D(()=>{l[d.nodeType]&&(c(d),q[d.nodeType]&&e(d.getElementsByTagName("*")))});return d},removeNode:d=>{b.ea(d);d.parentNode&&d.parentNode.removeChild(d)}}};b.ea=b.a.J.ea;b.removeNode=b.a.J.removeNode;b.l("utils.domNodeDisposal",b.a.J);b.l("utils.domNodeDisposal.addDisposeCallback",b.a.J.ma);b.pb=(()=>{function a(){if(e)for(var d=e,f=0,h;l<e;)if(h=c[l++]){if(l>d){if(5E3<=++f){l=e;b.a.Lb(Error("'Too much recursion' after processing "+
f+" task groups."));break}d=e}try{h()}catch(n){b.a.Lb(n)}}l=e=c.length=0}var c=[],e=0,g=1,l=0,q=(d=>{var f=T.createElement("div");(new MutationObserver(d)).observe(f,{attributes:!0});return()=>f.classList.toggle("foo")})(a);return{Zb:d=>{e||q(a);c[e++]=d;return g++},cancel:d=>{d-=g-e;d>=l&&d<e&&(c[d]=null)}}})();b.l("tasks",b.pb);b.ab={throttle:(a,c)=>{a.throttleEvaluation=c;var e=null;return b.i({read:a,write:g=>{clearTimeout(e);e=b.a.setTimeout(()=>a(g),c)}})},rateLimit:(a,c)=>{if("number"==typeof c)var e=
c;else{e=c.timeout;var g=c.method}var l="function"==typeof g?g:"notifyWhenChangesStop"==g?J:E;a.gb(q=>l(q,e,c))},notify:(a,c)=>{a.equalityComparer="always"==c?null:F}};var da={undefined:1,"boolean":1,number:1,string:1};b.l("extenders",b.ab);class ea{constructor(a,c,e){this.V=a;this.sb=c;this.Fb=e;this.Oa=!1;this.P=this.Sa=null;b.Z(this,"dispose",this.o);b.Z(this,"disposeWhenNodeIsRemoved",this.j)}o(){this.Oa||(this.P&&b.a.J.lb(this.Sa,this.P),this.Oa=!0,this.Fb(),this.V=this.sb=this.Fb=this.Sa=this.P=
null)}j(a){this.Sa=a;b.a.J.ma(a,this.P=this.o.bind(this))}}b.T=function(){Object.setPrototypeOf(this,P);P.Ga(this)};var P={Ga:a=>{a.U={change:[]};a.yb=1},subscribe:function(a,c,e){var g=this;e=e||"change";var l=new ea(g,c?a.bind(c):a,()=>{b.a.xa(g.U[e],l);g.wa&&g.wa(e)});g.na&&g.na(e);g.U[e]||(g.U[e]=[]);g.U[e].push(l);return l},notifySubscribers:function(a,c){c=c||"change";"change"===c&&this.La();if(this.ra(c)){c="change"===c&&this.dc||this.U[c].slice(0);try{b.m.Cb();for(var e=0,g;g=c[e++];)g.Oa||
g.sb(a)}finally{b.m.end()}}},Ea:function(){return this.yb},tc:function(a){return this.Ea()!==a},La:function(){++this.yb},gb:function(a){var c=this,e=b.K(c),g,l,q,d,f;c.va||(c.va=c.notifySubscribers,c.notifySubscribers=function(n,p){p&&"change"!==p?"beforeChange"===p?this.vb(n):this.va(n,p):this.wb(n)});var h=a(()=>{c.ja=!1;e&&d===c&&(d=c.tb?c.tb():c());var n=l||f&&c.Ia(q,d);f=l=g=!1;n&&c.va(q=d)});c.wb=(n,p)=>{p&&c.ja||(f=!p);c.dc=c.U.change.slice(0);c.ja=g=!0;d=n;h()};c.vb=n=>{g||(q=n,c.va(n,"beforeChange"))};
c.xb=()=>{f=!0};c.fc=()=>{c.Ia(q,c.F(!0))&&(l=!0)}},ra:function(a){return this.U[a]&&this.U[a].length},Ia:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:()=>"[object Object]",extend:function(a){var c=this;a&&b.a.N(a,(e,g)=>{e=b.ab[e];"function"==typeof e&&(c=e(c,g)||c)});return c}};b.Z(P,"init",P.Ga);b.Z(P,"subscribe",P.subscribe);b.Z(P,"extend",P.extend);Object.setPrototypeOf(P,Function.prototype);b.T.fn=P;b.vc=a=>null!=a&&"function"==typeof a.subscribe&&"function"==
typeof a.notifySubscribers;b.oa=b.m=(()=>{var a=[],c,e=0;return{Cb:g=>{a.push(c);c=g},end:()=>c=a.pop(),Yb:g=>{if(c){if(!b.vc(g))throw Error("Only subscribable things can act as dependencies");c.ic.call(c.jc,g,g.ec||(g.ec=++e))}},D:(g,l,q)=>{try{return a.push(c),c=void 0,g.apply(l,q||[])}finally{c=a.pop()}},Da:()=>c&&c.i.Da(),bb:()=>c&&c.i.bb(),fb:()=>c&&c.fb,i:()=>c&&c.i}})();const O=Symbol("_latestValue");b.ba=a=>{function c(){if(0<arguments.length)return c.Ia(c[O],arguments[0])&&(c.Ma(),c[O]=arguments[0],
c.ua()),this;b.m.Yb(c);return c[O]}c[O]=a;Object.defineProperty(c,"length",{get:()=>null==c[O]?void 0:c[O].length});b.T.fn.Ga(c);Object.setPrototypeOf(c,Q);return c};var Q={toJSON:function(){let a=this[O];return a&&a.toJSON?a.toJSON():a},equalityComparer:F,F:function(){return this[O]},ua:function(){this.notifySubscribers(this[O],"spectate");this.notifySubscribers(this[O])},Ma:function(){this.notifySubscribers(this[O],"beforeChange")}};Object.setPrototypeOf(Q,b.T.fn);var R=b.ba.P="__ko_proto__";Q[R]=
b.ba;b.K=a=>{if((a="function"==typeof a&&a[R])&&a!==Q[R]&&a!==b.i.fn[R])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");return!!a};b.xc=a=>"function"==typeof a&&(a[R]===Q[R]||a[R]===b.i.fn[R]&&a.Qb);b.l("observable",b.ba);b.l("isObservable",b.K);b.l("observable.fn",Q);b.Z(Q,"valueHasMutated",Q.ua);b.ha=a=>{a=a||[];if("object"!=typeof a||!("length"in a))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
a=b.ba(a);Object.setPrototypeOf(a,b.ha.fn);return a.extend({trackArrayChanges:!0})};b.ha.fn={remove:function(a){for(var c=this.F(),e=[],g="function"!=typeof a||b.K(a)?function(d){return d===a}:a,l=c.length;l--;){var q=c[l];if(g(q)){0===e.length&&this.Ma();if(c[l]!==q)throw Error("Array modified during remove; cannot remove item");e.push(q);c.splice(l,1)}}e.length&&this.ua();return e},removeAll:function(a){if(void 0===a){var c=this.F(),e=c.slice(0);this.Ma();c.splice(0,c.length);this.ua();return e}return a?
this.remove(g=>a.includes(g)):[]}};Object.setPrototypeOf(b.ha.fn,b.ba.fn);Object.getOwnPropertyNames(Array.prototype).forEach(a=>{"function"===typeof Array.prototype[a]&&"constructor"!=a&&("copyWithin fill pop push reverse shift sort splice unshift".split(" ").includes(a)?b.ha.fn[a]=function(...c){var e=this.F();this.Ma();this.Gb(e,a,c);c=e[a](...c);this.ua();return c===e?this:c}:b.ha.fn[a]=function(...c){return this()[a](...c)})});b.Sb=a=>b.K(a)&&"function"==typeof a.remove&&"function"==typeof a.push;
b.l("observableArray",b.ha);b.l("isObservableArray",b.Sb);b.ab.trackArrayChanges=(a,c)=>{function e(){function r(){if(f){var u=[].concat(a.F()||[]);if(a.ra("arrayChange")){if(!l||1<f)l=b.a.Ib(h,u,a.Ua);var x=l}h=u;l=null;f=0;x&&x.length&&a.notifySubscribers(x,"arrayChange")}}g?r():(g=!0,d=a.subscribe(()=>++f,null,"spectate"),h=[].concat(a.F()||[]),l=null,q=a.subscribe(r))}a.Ua={};c&&"object"==typeof c&&b.a.extend(a.Ua,c);a.Ua.sparse=!0;if(!a.Gb){var g=!1,l=null,q,d,f=0,h,n=a.na,p=a.wa;a.na=r=>{n&&
n.call(a,r);"arrayChange"===r&&e()};a.wa=r=>{p&&p.call(a,r);"arrayChange"!==r||a.ra("arrayChange")||(q&&q.o(),d&&d.o(),d=q=null,g=!1,h=void 0)};a.Gb=(r,u,x)=>{function k(G,z,M){return m[m.length]={status:G,value:z,index:M}}if(g&&!f){var m=[],t=r.length,v=x.length,y=0;switch(u){case "push":y=t;case "unshift":for(u=0;u<v;u++)k("added",x[u],y+u);break;case "pop":y=t-1;case "shift":t&&k("deleted",r[y],y);break;case "splice":u=Math.min(Math.max(0,0>x[0]?t+x[0]:x[0]),t);t=1===v?t:Math.min(u+(x[1]||0),t);
v=u+v-2;y=Math.max(t,v);for(var w=[],A=[],I=2;u<y;++u,++I)u<t&&A.push(k("deleted",r[u],u)),u<v&&w.push(k("added",x[I],u));b.a.Ob(A,w);break;default:return}l=m}}}};var D=Symbol("_state");b.i=function(a,c,e){function g(){if(0<arguments.length){if("function"===typeof l)l.apply(q.Ba,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}q.$||b.m.Yb(g);(q.W||q.v&&g.sa())&&g.S();
return q.L}"object"===typeof a?e=a:(e=e||{},a&&(e.read=a));if("function"!=typeof e.read)throw Error("Pass a function that returns the value of the ko.computed");var l=e.write,q={L:void 0,aa:!0,W:!0,Ha:!1,ob:!1,$:!1,kb:!1,v:!1,Xb:e.read,Ba:c||e.owner,j:e.disposeWhenNodeIsRemoved||e.j||null,pa:e.disposeWhen||e.pa,Ya:null,u:{},I:0,Nb:null};g[D]=q;g.Qb="function"===typeof l;b.T.fn.Ga(g);Object.setPrototypeOf(g,U);e.pure?(q.kb=!0,q.v=!0,b.a.extend(g,fa)):e.deferEvaluation&&b.a.extend(g,ha);q.j&&(q.ob=
!0,q.j.nodeType||(q.j=null));q.v||e.deferEvaluation||g.S();q.j&&g.ga()&&b.a.J.ma(q.j,q.Ya=function(){g.o()});return g};var U={equalityComparer:F,Da:function(){return this[D].I},bb:function(){var a=[];b.a.N(this[D].u,(c,e)=>a[e.ka]=e.V);return a},eb:function(a){if(!this[D].I)return!1;var c=this.bb();return c.includes(a)?!0:!!c.find(e=>e.eb&&e.eb(a))},zb:function(a,c,e){if(this[D].kb&&c===this)throw Error("A 'pure' computed must not be called recursively");this[D].u[a]=e;e.ka=this[D].I++;e.la=c.Ea()},
sa:function(){var a,c=this[D].u;for(a in c)if(Object.prototype.hasOwnProperty.call(c,a)){var e=c[a];if(this.ia&&e.V.ja||e.V.tc(e.la))return!0}},Jc:function(){this.ia&&!this[D].Ha&&this.ia(!1)},ga:function(){var a=this[D];return a.W||0<a.I},Kc:function(){this.ja?this[D].W&&(this[D].aa=!0):this.Mb()},bc:function(a){return a.subscribe(this.Mb,this)},Mb:function(){var a=this,c=a.throttleEvaluation;c&&0<=c?(clearTimeout(this[D].Nb),this[D].Nb=b.a.setTimeout(()=>a.S(!0),c)):a.ia?a.ia(!0):a.S(!0)},S:function(a){var c=
this[D],e=c.pa,g=!1;if(!c.Ha&&!c.$){if(c.j&&!b.a.Za(c.j)||e&&e()){if(!c.ob){this.o();return}}else c.ob=!1;c.Ha=!0;try{g=this.qc(a)}finally{c.Ha=!1}return g}},qc:function(a){var c=this[D],e=c.kb?void 0:!c.I;var g={lc:this,Aa:c.u,Wa:c.I};b.m.Cb({jc:g,ic:V,i:this,fb:e});c.u={};c.I=0;var l=this.pc(c,g);c.I?g=this.Ia(c.L,l):(this.o(),g=!0);g&&(c.v?this.La():this.notifySubscribers(c.L,"beforeChange"),c.L=l,this.notifySubscribers(c.L,"spectate"),!c.v&&a&&this.notifySubscribers(c.L),this.xb&&this.xb());e&&
this.notifySubscribers(c.L,"awake");return g},pc:(a,c)=>{try{var e=a.Xb;return a.Ba?e.call(a.Ba):e()}finally{b.m.end(),c.Wa&&!a.v&&b.a.N(c.Aa,S),a.aa=a.W=!1}},F:function(a){var c=this[D];(c.W&&(a||!c.I)||c.v&&this.sa())&&this.S();return c.L},gb:function(a){b.T.fn.gb.call(this,a);this.tb=function(){this[D].v||(this[D].aa?this.S():this[D].W=!1);return this[D].L};this.ia=function(c){this.vb(this[D].L);this[D].W=!0;c&&(this[D].aa=!0);this.wb(this,!c)}},o:function(){var a=this[D];!a.v&&a.u&&b.a.N(a.u,
(c,e)=>e.o&&e.o());a.j&&a.Ya&&b.a.J.lb(a.j,a.Ya);a.u=void 0;a.I=0;a.$=!0;a.aa=!1;a.W=!1;a.v=!1;a.j=void 0;a.pa=void 0;a.Xb=void 0;this.Qb||(a.Ba=void 0)}},fa={na:function(a){var c=this,e=c[D];if(!e.$&&e.v&&"change"==a){e.v=!1;if(e.aa||c.sa())e.u=null,e.I=0,c.S()&&c.La();else{var g=[];b.a.N(e.u,(l,q)=>g[q.ka]=l);g.forEach((l,q)=>{var d=e.u[l],f=c.bc(d.V);f.ka=q;f.la=d.la;e.u[l]=f});c.sa()&&c.S()&&c.La()}e.$||c.notifySubscribers(e.L,"awake")}},wa:function(a){var c=this[D];c.$||"change"!=a||this.ra("change")||
(b.a.N(c.u,(e,g)=>{g.o&&(c.u[e]={V:g.V,ka:g.ka,la:g.la},g.o())}),c.v=!0,this.notifySubscribers(void 0,"asleep"))},Ea:function(){var a=this[D];a.v&&(a.aa||this.sa())&&this.S();return b.T.fn.Ea.call(this)}},ha={na:function(a){"change"!=a&&"beforeChange"!=a||this.F()}};Object.setPrototypeOf(U,b.T.fn);U[b.ba.P]=b.i;b.l("computed",b.i);b.l("computed.fn",U);b.Z(U,"dispose",U.o);b.Cc=a=>{if("function"===typeof a)return b.i(a,void 0,{pure:!0});a=b.a.extend({},a);a.pure=!0;return b.i(a,void 0)};(()=>{b.A=
{O:a=>{switch(a.nodeName){case "OPTION":return!0===a.__ko__hasDomDataOptionValue__?b.a.f.get(a,b.b.options.jb):a.value;case "SELECT":return 0<=a.selectedIndex?b.A.O(a.options[a.selectedIndex]):void 0;default:return a.value}},Na:(a,c,e)=>{switch(a.nodeName){case "OPTION":"string"===typeof c?(b.a.f.set(a,b.b.options.jb,void 0),delete a.__ko__hasDomDataOptionValue__,a.value=c):(b.a.f.set(a,b.b.options.jb,c),a.__ko__hasDomDataOptionValue__=!0,a.value="number"===typeof c?c:"");break;case "SELECT":for(var g=
-1,l=""===c||null==c,q=0,d=a.options.length,f;q<d;++q)if(f=b.A.O(a.options[q]),f==c||""===f&&l){g=q;break}if(e||0<=g||l&&1<a.size)a.selectedIndex=g;break;default:a.value=null==c?"":c}}}})();b.G=(()=>{function a(f){f=b.a.ac(f);123===f.charCodeAt(0)&&(f=f.slice(1,-1));f+="\n,";var h=[],n=f.match(g),p=[],r=0;if(1<n.length){for(var u=0,x;x=n[u];++u){var k=x.charCodeAt(0);if(44===k){if(0>=r){h.push(m&&p.length?{key:m,value:p.join("")}:{unknown:m||p.join("")});var m=r=0;p=[];continue}}else if(58===k){if(!r&&
!m&&1===p.length){m=p.pop();continue}}else if(47===k&&1<x.length&&(47===x.charCodeAt(1)||42===x.charCodeAt(1)))continue;else 47===k&&u&&1<x.length?(k=n[u-1].match(l))&&!q[k[0]]&&(f=f.substr(f.indexOf(x)+1),n=f.match(g),u=-1,x="/"):40===k||123===k||91===k?++r:41===k||125===k||93===k?--r:m||p.length||34!==k&&39!==k||(x=x.slice(1,-1));p.push(x)}if(0<r)throw Error("Unbalanced parentheses, braces, or brackets");}return h}var c=["true","false","null","undefined"],e=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
g=/"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`|\/\*(?:[^*]|\*+[^*/])*\*+\/|\/\/.*\n|\/(?:\\.|[^/])+\/w*|[^\s:,/][^,"'`{}()/:[\]]*[^\s,"'`{}()/:[\]]|[^\s]/g,l=/[\])"'A-Za-z0-9_$]+$/,q={"in":1,"return":1,"typeof":1},d={};return{Ta:[],qb:d,Ac:a,Bc:function(f,h){function n(k,m){if(!x){var t=b.getBindingHandler(k);if(t&&t.preprocess&&!(m=t.preprocess(m,k,n)))return;if(t=d[k]){var v=m;c.includes(v)?v=!1:(t=v.match(e),v=null===t?!1:t[1]?"Object("+t[1]+")"+t[2]:v);t=v}t&&r.push("'"+("string"==typeof d[k]?
d[k]:k)+"':function(_z){"+v+"=_z}")}u&&(m="function(){return "+m+" }");p.push("'"+k+"':"+m)}h=h||{};var p=[],r=[],u=h.valueAccessors,x=h.bindingParams;("string"===typeof f?a(f):f).forEach(k=>n(k.key||k.unknown,k.value));r.length&&n("_ko_property_writers","{"+r.join(",")+" }");return p.join(",")},yc:(f,h)=>-1<f.findIndex(n=>n.key==h),rb:(f,h,n,p,r)=>{if(f&&b.K(f))!b.xc(f)||r&&f.F()===p||f(p);else if((f=h.get("_ko_property_writers"))&&f[n])f[n](p)}}})();(()=>{function a(d){return 8==d.nodeType&&g.test(d.nodeValue)}
function c(d){return 8==d.nodeType&&l.test(d.nodeValue)}function e(d,f){for(var h=d,n=1,p=[];h=h.nextSibling;){if(c(h)&&(b.a.f.set(h,q,!0),n--,0===n))return p;p.push(h);a(h)&&n++}if(!f)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}var g=/^\s*ko(?:\s+([\s\S]+))?\s*$/,l=/^\s*\/ko\s*$/,q="__ko_matchedEndComment__";b.h={ca:{},childNodes:d=>a(d)?e(d):d.childNodes,qa:d=>{if(a(d)){d=e(d);for(var f=0,h=d.length;f<h;f++)b.removeNode(d[f])}else b.a.$a(d)},ta:(d,f)=>{if(a(d)){b.h.qa(d);
d=d.nextSibling;for(var h=0,n=f.length;h<n;h++)d.parentNode.insertBefore(f[h],d)}else b.a.ta(d,f)},prepend:(d,f)=>{if(a(d)){var h=d.nextSibling;d=d.parentNode}else h=d.firstChild;d.insertBefore(f,h)},Rb:(d,f,h)=>{h?(h=h.nextSibling,a(d)&&(d=d.parentNode),d.insertBefore(f,h)):b.h.prepend(d,f)},firstChild:d=>{if(a(d))return!d.nextSibling||c(d.nextSibling)?null:d.nextSibling;if(d.firstChild&&c(d.firstChild))throw Error("Found invalid end comment, as the first child of "+d);return d.firstChild},nextSibling:d=>
{if(a(d)){var f=e(d,void 0);d=f?0<f.length?f[f.length-1].nextSibling:d.nextSibling:null}if(d.nextSibling&&c(d.nextSibling)){f=d.nextSibling;if(c(f)&&!b.a.f.get(f,q))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},sc:a,Hc:d=>(d=d.nodeValue.match(g))?d[1]:null}})();(()=>{const a={};b.Eb=new class{zc(c){switch(c.nodeType){case 1:return null!=c.getAttribute("data-bind");case 8:return b.h.sc(c);default:return!1}}rc(c,e){a:{switch(c.nodeType){case 1:var g=
c.getAttribute("data-bind");break a;case 8:g=b.h.Hc(c);break a}g=null}if(g){var l={valueAccessors:!0};try{var q=g+(l&&l.valueAccessors||""),d;if(!(d=a[q])){var f="with($context){with($data||{}){return{"+b.G.Bc(g,l)+"}}}";var h=new Function("$context","$element",f);d=a[q]=h}var n=d(e,c)}catch(p){throw p.message="Unable to parse bindings.\nBindings value: "+g+"\nMessage: "+p.message,p;}}else n=null;return n}}})();(()=>{function a(k){var m=(k=b.a.f.get(k,x))&&k.C;m&&(k.C=null,m.Wb())}function c(k,m,
t){this.node=k;this.Db=m;this.ya=[];this.B=!1;m.C||b.a.J.ma(k,a);t&&t.C&&(t.C.ya.push(k),this.Pa=t)}function e(k){return b.a.ib(b.m.D(k),(m,t)=>()=>k()[t])}function g(k,m,t){return"function"===typeof k?e(k.bind(null,m,t)):b.a.ib(k,v=>()=>v)}function l(k,m){var t=b.h.firstChild(m);if(t)for(var v;v=t;)t=b.h.nextSibling(v),q(k,v);b.c.notify(m,b.c.B)}function q(k,m){var t=k;if(1===m.nodeType||b.Eb.zc(m))t=f(m,null,k).bindingContextForDescendants;t&&m.matches&&!m.matches("SCRIPT,TEXTAREA,TEMPLATE")&&l(t,
m)}function d(k){var m=[],t={},v=[];b.a.N(k,function A(w){if(!t[w]){var I=b.getBindingHandler(w);I&&(I.after&&(v.push(w),I.after.forEach(G=>{if(k[G]){if(v.includes(G))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+v.join(", "));A(G)}}),v.length--),m.push({key:w,Pb:I}));t[w]=!0}});return m}function f(k,m,t){var v=b.a.f.cb(k,x,{}),y=v.hc;if(!m){if(y)throw Error("You cannot apply bindings multiple times to the same element.");v.hc=!0}y||(v.context=t);v.hb||
(v.hb={});if(m&&"function"!==typeof m)var w=m;else{var A=b.i(()=>{if(w=m?m(t,k):b.Eb.rc(k,t)){if(t[n])t[n]();if(t[r])t[r]()}return w},null,{j:k});w&&A.ga()||(A=null)}var I=t,G;if(w){var z=A?B=>()=>A()[B]():B=>w[B];function M(){return b.a.ib(A?A():w,B=>B())}M.get=B=>w[B]&&z(B)();M.has=B=>B in w;b.c.B in w&&b.c.subscribe(k,b.c.B,()=>{var B=w[b.c.B]();if(B){var H=b.h.childNodes(k);H.length&&B(H,b.Kb(H[0]))}});b.c.Y in w&&(I=b.c.nb(k,t),b.c.subscribe(k,b.c.Y,()=>{var B=w[b.c.Y]();B&&b.h.firstChild(k)&&
B(k)}));d(w).forEach(B=>{var H=B.Pb.init,L=B.Pb.update,K=B.key;if(8===k.nodeType&&!b.h.ca[K])throw Error("The binding '"+K+"' cannot be used with virtual elements");try{"function"==typeof H&&b.m.D(()=>{var N=H(k,z(K),M,I.$data,I);if(N&&N.controlsDescendantBindings){if(void 0!==G)throw Error("Multiple bindings ("+G+" and "+K+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");G=K}}),"function"==typeof L&&b.i(()=>L(k,z(K),M,
I.$data,I),null,{j:k})}catch(N){throw N.message='Unable to process binding "'+K+": "+w[K]+'"\nMessage: '+N.message,N;}})}v=void 0===G;return{shouldBindDescendants:v,bindingContextForDescendants:v&&I}}function h(k,m){return k&&k instanceof b.R?k:new b.R(k,void 0,void 0,m)}var n=Symbol("_subscribable"),p=Symbol("_ancestorBindingInfo"),r=Symbol("_dataDependency");b.b={};b.getBindingHandler=k=>b.b[k];var u={};b.R=function(k,m,t,v,y){function w(){var H=z?G():G,L=b.a.g(H);m?(b.a.extend(A,m),p in m&&(A[p]=
m[p])):(A.$parents=[],A.$root=L,A.ko=b);A[n]=B;I?L=A.$data:(A.$rawData=H,A.$data=L);t&&(A[t]=L);v&&v(A,m,L);if(m&&m[n]&&!b.oa.i().eb(m[n]))m[n]();M&&(A[r]=M);return A.$data}var A=this,I=k===u,G=I?void 0:k,z="function"==typeof G&&!b.K(G),M=y&&y.dataDependency;if(y&&y.exportDependencies)w();else{var B=b.Cc(w);B.F();B.ga()?B.equalityComparer=null:A[n]=void 0}};b.R.prototype.createChildContext=function(k,m,t,v){!v&&m&&"object"==typeof m&&(v=m,m=v.as,t=v.extend);if(m&&v&&v.noChildContext){var y="function"==
typeof k&&!b.K(k);return new b.R(u,this,null,w=>{t&&t(w);w[m]=y?k():k},v)}return new b.R(k,this,m,(w,A)=>{w.$parentContext=A;w.$parent=A.$data;w.$parents=(A.$parents||[]).slice(0);w.$parents.unshift(w.$parent);t&&t(w)},v)};b.R.prototype.extend=function(k,m){return new b.R(u,this,null,t=>b.a.extend(t,"function"==typeof k?k(t):k),m)};var x=b.a.f.X();c.prototype.Wb=function(){this.Pa&&this.Pa.C&&this.Pa.C.nc(this.node)};c.prototype.nc=function(k){b.a.xa(this.ya,k);!this.ya.length&&this.B&&this.Jb()};
c.prototype.Jb=function(){this.B=!0;this.Db.C&&!this.ya.length&&(this.Db.C=null,b.a.J.lb(this.node,a),b.c.notify(this.node,b.c.Y),this.Wb())};b.c={B:"childrenComplete",Y:"descendantsComplete",subscribe:(k,m,t,v,y)=>{var w=b.a.f.cb(k,x,{});w.fa||(w.fa=new b.T);y&&y.notifyImmediately&&w.hb[m]&&b.m.D(t,v,[k]);return w.fa.subscribe(t,v,m)},notify:(k,m)=>{var t=b.a.f.get(k,x);if(t&&(t.hb[m]=!0,t.fa&&t.fa.notifySubscribers(k,m),m==b.c.B))if(t.C)t.C.Jb();else if(void 0===t.C&&t.fa&&t.fa.ra(b.c.Y))throw Error("descendantsComplete event not supported for bindings on this node");
},nb:(k,m)=>{var t=b.a.f.cb(k,x,{});t.C||(t.C=new c(k,t,m[p]));return m[p]==t?m:m.extend(v=>{v[p]=t})}};b.Fc=k=>(k=b.a.f.get(k,x))&&k.context;b.Ra=(k,m,t)=>f(k,m,h(t));b.Ic=(k,m,t)=>{t=h(t);return b.Ra(k,g(m,t,k),t)};b.Bb=(k,m)=>{1!==m.nodeType&&8!==m.nodeType||l(h(k),m)};b.Ab=function(k,m,t){if(2>arguments.length){if(m=T.body,!m)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");}else if(!m||1!==m.nodeType&&8!==m.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
q(h(k,t),m)};b.Kb=k=>(k=k&&[1,8].includes(k.nodeType)&&b.Fc(k))?k.$data:void 0;b.l("bindingHandlers",b.b);b.l("applyBindings",b.Ab);b.l("applyBindingAccessorsToNode",b.Ra);b.l("dataFor",b.Kb)})();(()=>{function a(d,f){return Object.prototype.hasOwnProperty.call(d,f)?d[f]:void 0}function c(d,f){var h=a(l,d);if(h)h.subscribe(f);else{h=l[d]=new b.T;h.subscribe(f);e(d,(p,r)=>{r=!(!r||!r.synchronous);q[d]={definition:p,wc:r};delete l[d];n||r?h.notifySubscribers(p):b.pb.Zb(()=>h.notifySubscribers(p))});
var n=!0}}function e(d,f){g("getConfig",[d],h=>{h?g("loadComponent",[d,h],n=>f(n,h)):f(null,null)})}function g(d,f,h,n){n||(n=b.s.loaders.slice(0));var p=n.shift();if(p){var r=p[d];if(r){var u=!1;if(void 0!==r.apply(p,f.concat(function(x){u?h(null):null!==x?h(x):g(d,f,h,n)}))&&(u=!0,!p.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else g(d,f,h,n)}else h(null)}var l={},q={};b.s={get:(d,f)=>{var h=a(q,
d);h?h.wc?b.m.D(()=>f(h.definition)):b.pb.Zb(()=>f(h.definition)):c(d,f)},kc:d=>delete q[d],ub:g};b.s.loaders=[];b.l("components",b.s)})();(()=>{function a(d,f,h,n){var p={},r=2;f=h.template;h=h.viewModel;f?b.s.ub("loadTemplate",[d,f],u=>{p.template=u;0===--r&&n(p)}):0===--r&&n(p);h?b.s.ub("loadViewModel",[d,h],u=>{p[q]=u;0===--r&&n(p)}):0===--r&&n(p)}function c(d,f,h){if("function"===typeof f)h(p=>new f(p));else if("function"===typeof f[q])h(f[q]);else if("instance"in f){var n=f.instance;h(()=>n)}else"viewModel"in
f?c(d,f.viewModel,h):d("Unknown viewModel value: "+f)}function e(d){if(d.matches("TEMPLATE")&&d.content instanceof DocumentFragment)return b.a.za(d.content.childNodes);throw"Template Source Element not a <template>";}function g(d){return f=>{throw Error("Component '"+d+"': "+f);}}var l={};b.s.register=(d,f)=>{if(!f)throw Error("Invalid configuration for "+d);if(b.s.Tb(d))throw Error("Component "+d+" is already registered");l[d]=f};b.s.Tb=d=>Object.prototype.hasOwnProperty.call(l,d);b.s.unregister=
d=>{delete l[d];b.s.kc(d)};b.s.mc={getConfig:(d,f)=>{d=b.s.Tb(d)?l[d]:null;f(d)},loadComponent:(d,f,h)=>{var n=g(d);a(d,n,f,h)},loadTemplate:(d,f,h)=>{d=g(d);if(f instanceof Array)h(f);else if(f instanceof DocumentFragment)h([...f.childNodes]);else if(f.element)if(f=f.element,f instanceof HTMLElement)h(e(f));else if("string"===typeof f){var n=T.getElementById(f);n?h(e(n)):d("Cannot find element with ID "+f)}else d("Unknown element type: "+f);else d("Unknown template value: "+f)},loadViewModel:(d,
f,h)=>c(g(d),f,h)};var q="createViewModel";b.l("components.register",b.s.register);b.s.loaders.push(b.s.mc)})();(()=>{function a(g,l,q){l=l.template;if(!l)throw Error("Component '"+g+"' has no template");g=b.a.za(l);b.h.ta(q,g)}function c(g,l,q){var d=g.createViewModel;return d?d.call(g,l,q):l}var e=0;b.b.component={init:(g,l,q,d,f)=>{var h,n,p,r=()=>{var x=h&&h.dispose;"function"===typeof x&&x.call(h);p&&p.o();n=h=p=null},u=[...b.h.childNodes(g)];b.h.qa(g);b.a.J.ma(g,r);b.i(()=>{var x=b.a.g(l());
if("string"===typeof x)var k=x;else{k=b.a.g(x.name);var m=b.a.g(x.params)}if(!k)throw Error("No component name specified");var t=b.c.nb(g,f),v=n=++e;b.s.get(k,y=>{if(n===v){r();if(!y)throw Error("Unknown component '"+k+"'");a(k,y,g);var w=c(y,m,{element:g,templateNodes:u});y=t.createChildContext(w,{extend:A=>{A.$component=w;A.$componentTemplateNodes=u}});w&&w.koDescendantsComplete&&(p=b.c.subscribe(g,b.c.Y,w.koDescendantsComplete,w));h=w;b.Bb(y,g)}})},null,{j:g});return{controlsDescendantBindings:!0}}};
b.h.ca.component=!0})();b.b.attr={update:(a,c)=>{c=b.a.g(c())||{};b.a.N(c,function(e,g){g=b.a.g(g);var l=e.indexOf(":");l="lookupNamespaceURI"in a&&0<l&&a.lookupNamespaceURI(e.substr(0,l));var q=!1===g||null===g||void 0===g;q?l?a.removeAttributeNS(l,e):a.removeAttribute(e):g=g.toString();q||(l?a.setAttributeNS(l,e,g):a.setAttribute(e,g));"name"===e&&(a.name=q?"":g)})}};var X=(a,c,e)=>{c&&c.split(/\s+/).forEach(g=>a.classList.toggle(g,e))};b.b.css={update:(a,c)=>{c=b.a.g(c());null!==c&&"object"==typeof c?
b.a.N(c,(e,g)=>{g=b.a.g(g);X(a,e,!!g)}):(c=b.a.ac(c),X(a,a.__ko__cssValue,!1),a.__ko__cssValue=c,X(a,c,!0))}};b.b.enable={update:(a,c)=>{(c=b.a.g(c()))&&a.disabled?a.removeAttribute("disabled"):c||a.disabled||(a.disabled=!0)}};b.b.disable={update:(a,c)=>b.b.enable.update(a,()=>!b.a.g(c()))};b.b.event={init:(a,c,e,g,l)=>{var q=c()||{};b.a.N(q,d=>{"string"==typeof d&&b.a.H(a,d,function(f){var h=c()[d];if(h){try{g=l.$data;var n=h.apply(g,[g,...arguments])}finally{!0!==n&&f.preventDefault()}!1===e.get(d+
"Bubble")&&(f.cancelBubble=!0,f.stopPropagation())}})})}};b.b.foreach={Ub:a=>()=>{var c=a(),e=b.K(c)?c.F():c;if(!e||"number"==typeof e.length)return{foreach:c};b.a.g(c);return{foreach:e.data,as:e.as,noChildContext:e.noChildContext,includeDestroyed:e.includeDestroyed,afterAdd:e.afterAdd,beforeRemove:e.beforeRemove,afterRender:e.afterRender,beforeMove:e.beforeMove,afterMove:e.afterMove}},init:(a,c)=>b.b.template.init(a,b.b.foreach.Ub(c)),update:(a,c,e,g,l)=>b.b.template.update(a,b.b.foreach.Ub(c),e,
g,l)};b.G.Ta.foreach=!1;b.h.ca.foreach=!0;b.b.hasfocus={init:(a,c,e)=>{var g=q=>{a.__ko_hasfocusUpdating=!0;q=a.ownerDocument.activeElement===a;var d=c();b.G.rb(d,e,"hasfocus",q,!0);a.__ko_hasfocusLastValue=q;a.__ko_hasfocusUpdating=!1},l=g.bind(null,!0);g=g.bind(null,!1);b.a.H(a,"focus",l);b.a.H(a,"focusin",l);b.a.H(a,"blur",g);b.a.H(a,"focusout",g);a.__ko_hasfocusLastValue=!1},update:(a,c)=>{c=!!b.a.g(c());a.__ko_hasfocusUpdating||a.__ko_hasfocusLastValue===c||(c?a.focus():a.blur())}};b.G.qb.hasfocus=
!0;b.b.html={init:()=>({controlsDescendantBindings:!0}),update:(a,c)=>{b.a.$a(a);c=b.a.g(c());if(null!=c){"string"!=typeof c&&(c=c.toString());const e=T.createElement("template");e.innerHTML=c;a.appendChild(e.content)}}};(function(){function a(c,e,g){b.b[c]={init:(l,q,d,f,h)=>{var n,p,r={},u;if(e){f=d.get("as");var x=d.get("noChildContext");var k=!(f&&x);r={as:f,noChildContext:x,exportDependencies:k}}var m=(u="render"==d.get("completeOn"))||d.has(b.c.Y);b.i(()=>{var t=b.a.g(q()),v=!g!==!t,y=!p;if(k||
v!==n){m&&(h=b.c.nb(l,h));if(v){if(!e||k)r.dataDependency=b.oa.i();var w=e?h.createChildContext("function"==typeof t?t:q,r):b.oa.Da()?h.extend(null,r):h}y&&b.oa.Da()&&(p=b.a.za(b.h.childNodes(l),!0));v?(y||b.h.ta(l,b.a.za(p)),b.Bb(w,l)):(b.h.qa(l),u||b.c.notify(l,b.c.B));n=v}},null,{j:l});return{controlsDescendantBindings:!0}}};b.G.Ta[c]=!1;b.h.ca[c]=!0}a("if");a("ifnot",!1,!0);a("with",!0)})();var Y={};b.b.options={init:a=>{if(!a.matches("SELECT"))throw Error("options binding applies only to SELECT elements");
for(;0<a.length;)a.remove(0);return{controlsDescendantBindings:!0}},update:(a,c,e)=>{function g(){return Array.from(a.options).filter(k=>k.selected)}function l(k,m,t){var v=typeof m;return"function"==v?m(k):"string"==v?k[m]:t}function q(k,m){u&&n?b.c.notify(a,b.c.B):p.length&&(k=p.includes(b.A.O(m[0])),m[0].selected=k,u&&!k&&b.m.D(b.a.cc,null,[a,"change"]))}var d=a.multiple,f=0!=a.length&&d?a.scrollTop:null,h=b.a.g(c()),n=e.get("valueAllowUnset")&&e.has("value");c={};var p=[];n||(d?p=g().map(b.A.O):
0<=a.selectedIndex&&p.push(b.A.O(a.options[a.selectedIndex])));if(h){"undefined"==typeof h.length&&(h=[h]);var r=h.filter(k=>k||null==k);e.has("optionsCaption")&&(h=b.a.g(e.get("optionsCaption")),null!==h&&void 0!==h&&r.unshift(Y))}var u=!1;c.beforeRemove=k=>a.removeChild(k);h=q;e.has("optionsAfterRender")&&"function"==typeof e.get("optionsAfterRender")&&(h=(k,m)=>{q(k,m);b.m.D(e.get("optionsAfterRender"),null,[m[0],k!==Y?k:void 0])});b.a.$b(a,r,function(k,m,t){t.length&&(p=!n&&t[0].selected?[b.A.O(t[0])]:
[],u=!0);m=a.ownerDocument.createElement("option");k===Y?(b.a.mb(m,e.get("optionsCaption")),b.A.Na(m,void 0)):(t=l(k,e.get("optionsValue"),k),b.A.Na(m,b.a.g(t)),k=l(k,e.get("optionsText"),t),b.a.mb(m,k));return[m]},c,h);if(!n){var x;d?x=p.length&&g().length<p.length:x=p.length&&0<=a.selectedIndex?b.A.O(a.options[a.selectedIndex])!==p[0]:p.length||0<=a.selectedIndex;x&&b.m.D(b.a.cc,null,[a,"change"])}(n||b.oa.fb())&&b.c.notify(a,b.c.B);f&&20<Math.abs(f-a.scrollTop)&&(a.scrollTop=f)}};b.b.options.jb=
b.a.f.X();b.b.style={update:(a,c)=>{c=b.a.g(c()||{});b.a.N(c,(e,g)=>{g=b.a.g(g);if(null===g||void 0===g||!1===g)g="";if(/^--/.test(e))a.style.setProperty(e,g);else{e=e.replace(/-(\w)/g,(q,d)=>d.toUpperCase());var l=a.style[e];a.style[e]=g;g===l||a.style[e]!=l||isNaN(g)||(a.style[e]=g+"px")}})}};b.b.submit={init:(a,c,e,g,l)=>{if("function"!=typeof c())throw Error("The value for a submit binding must be a function");b.a.H(a,"submit",q=>{var d=c();try{var f=d.call(l.$data,a)}finally{!0!==f&&(q.preventDefault?
q.preventDefault():q.returnValue=!1)}})}};b.b.text={init:()=>({controlsDescendantBindings:!0}),update:(a,c)=>b.a.mb(a,c())};b.h.ca.text=!0;b.b.textInput={init:(a,c,e)=>{var g=a.value,l,q,d=()=>{clearTimeout(l);q=l=void 0;var h=a.value;g!==h&&(g=h,b.G.rb(c(),e,"textInput",h))},f=()=>{var h=b.a.g(c());if(null===h||void 0===h)h="";void 0!==q&&h===q?b.a.setTimeout(f,4):a.value!==h&&(a.value=h,g=a.value)};b.a.H(a,"input",d);b.a.H(a,"change",d);b.a.H(a,"blur",d);b.i(f,null,{j:a})}};b.G.qb.textInput=!0;
b.b.textinput={preprocess:(a,c,e)=>e("textInput",a)};b.b.value={init:(a,c,e)=>{var g=a.matches("SELECT"),l=a.matches("INPUT");if(!l||"checkbox"!=a.type&&"radio"!=a.type){var q=[],d=e.get("valueUpdate"),f=null;d&&("string"==typeof d?q=[d]:q=d?d.filter((r,u)=>d.indexOf(r)===u):[],b.a.xa(q,"change"));var h=()=>{f=null;var r=c(),u=b.A.O(a);b.G.rb(r,e,"value",u)};q.forEach(r=>{var u=h;b.a.Gc(r,"after")&&(u=()=>{f=b.A.O(a);b.a.setTimeout(h,0)},r=r.substring(5));b.a.H(a,r,u)});var n=l&&"file"==a.type?()=>
{var r=b.a.g(c());null===r||void 0===r||""===r?a.value="":b.m.D(h)}:()=>{var r=b.a.g(c()),u=b.A.O(a);if(null!==f&&r===f)b.a.setTimeout(n,0);else if(r!==u||void 0===u)g?(u=e.get("valueAllowUnset"),b.A.Na(a,r,u),u||r===b.A.O(a)||b.m.D(h)):b.A.Na(a,r)};if(g){var p;b.c.subscribe(a,b.c.B,()=>{p?e.get("valueAllowUnset")?n():h():(b.a.H(a,"change",h),p=b.i(n,null,{j:a}))},null,{notifyImmediately:!0})}else b.a.H(a,"change",h),b.i(n,null,{j:a})}else b.Ra(a,{checkedValue:c})},update:()=>{}};b.G.qb.value=!0;
b.b.visible={update:(a,c)=>{c=b.a.g(c());var e="none"!=a.style.display;c&&!e?a.style.display="":e&&!c&&(a.style.display="none")}};b.b.hidden={update:(a,c)=>a.hidden=!!b.a.g(c())};(function(a){b.b[a]={init:function(c,e,g,l,q){return b.b.event.init.call(this,c,()=>({[a]:e()}),g,l,q)}}})("click");(()=>{let a=b.a.f.X();class c{constructor(g){this.Xa=g}Ja(...g){let l=this.Xa;if(!g.length)return b.a.f.get(l,a)||(11===this.P?l.content:1===this.P?l:void 0);b.a.f.set(l,a,g[0])}}class e extends c{constructor(g){super(g);
g&&(this.P=g.matches("TEMPLATE")&&g.content?g.content.nodeType:1)}}b.Ka={Xa:e,Qa:c}})();(()=>{function a(d,f){if(d.length){var h=d[0],n=h.parentNode;g(h,d[d.length-1],p=>{1!==p.nodeType&&8!==p.nodeType||b.Ab(f,p)});b.a.Ca(d,n)}}function c(d,f,h,n,p){p=p||{};var r=(d&&(d.nodeType?d:0<d.length?d[0]:null)||h||{}).ownerDocument;if("string"==typeof h){r=r||T;r=r.getElementById(h);if(!r)throw Error("Cannot find template with ID "+h);h=new b.Ka.Xa(r)}else if([1,8].includes(h.nodeType))h=new b.Ka.Qa(h);else throw Error("Unknown template type: "+
h);h=(h=h.Ja?h.Ja():null)?[...h.cloneNode(!0).childNodes]:null;if("number"!=typeof h.length||0<h.length&&"number"!=typeof h[0].nodeType)throw Error("Template engine must return an array of DOM nodes");r=!1;switch(f){case "replaceChildren":b.h.ta(d,h);r=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+f);}r&&(a(h,n),p.afterRender&&b.m.D(p.afterRender,null,[h,n[p.as||"$data"]]),"replaceChildren"==f&&b.c.notify(d,b.c.B));return h}function e(d,f,h){return b.K(d)?d():"function"===
typeof d?d(f,h):d}var g=(d,f,h)=>{var n;for(f=b.h.nextSibling(f);d&&(n=d)!==f;)d=b.h.nextSibling(n),h(n,d)};b.Dc=function(d,f,h,n){h=h||{};var p=p||"replaceChildren";if(n){var r=n.nodeType?n:0<n.length?n[0]:null;return b.i(()=>{var u=f&&f instanceof b.R?f:new b.R(f,null,null,null,{exportDependencies:!0}),x=e(d,u.$data,u);c(n,p,x,u,h)},null,{pa:()=>!r||!b.a.Za(r),j:r})}console.log("no targetNodeOrNodeArray")};b.Ec=(d,f,h,n,p)=>{function r(y,w){b.m.D(b.a.$b,null,[n,y,k,h,m,w]);b.c.notify(n,b.c.B)}var u,
x=h.as,k=(y,w)=>{u=p.createChildContext(y,{as:x,noChildContext:h.noChildContext,extend:A=>{A.$index=w;x&&(A[x+"Index"]=w)}});y=e(d,y,u);return c(n,"ignoreTargetNode",y,u,h)},m=(y,w)=>{a(w,u);h.afterRender&&h.afterRender(w,y);u=null},t=!1===h.includeDestroyed;if(t||h.beforeRemove||!b.Sb(f))return b.i(()=>{var y=b.a.g(f)||[];"undefined"==typeof y.length&&(y=[y]);t&&(y=y.filter(w=>w||null==w));r(y)},null,{j:n});r(f.F());var v=f.subscribe(y=>{r(f(),y)},null,"arrayChange");v.j(n);return v};var l=b.a.f.X(),
q=b.a.f.X();b.b.template={init:(d,f)=>{f=b.a.g(f());if("string"==typeof f||"name"in f)b.h.qa(d);else if("nodes"in f){f=f.nodes||[];if(b.K(f))throw Error('The "nodes" option must be a plain, non-observable array.');let h=f[0]&&f[0].parentNode;h&&b.a.f.get(h,q)||(h=b.a.Vb(f),b.a.f.set(h,q,!0));(new b.Ka.Qa(d)).Ja(h)}else if(f=b.h.childNodes(d),0<f.length)f=b.a.Vb(f),(new b.Ka.Qa(d)).Ja(f);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},
update:(d,f,h,n,p)=>{var r=f();f=b.a.g(r);h=!0;n=null;"string"==typeof f?f={}:(r="name"in f?f.name:d,"if"in f&&(h=b.a.g(f["if"])),h&&"ifnot"in f&&(h=!b.a.g(f.ifnot)),h&&!r&&(h=!1));"foreach"in f?n=b.Ec(r,h&&f.foreach||[],f,d,p):h?(h=p,"data"in f&&(h=p.createChildContext(f.data,{as:f.as,noChildContext:f.noChildContext,exportDependencies:!0})),n=b.Dc(r,h,f,d)):b.h.qa(d);p=n;(f=b.a.f.get(d,l))&&"function"==typeof f.o&&f.o();b.a.f.set(d,l,!p||p.ga&&!p.ga()?void 0:p)}};b.G.Ta.template=d=>{d=b.G.Ac(d);
return 1==d.length&&d[0].unknown||b.G.yc(d,"name")?null:"This template engine does not support anonymous templates nested within its templates"};b.h.ca.template=!0})();b.a.Ob=(a,c,e)=>{if(a.length&&c.length){var g,l,q,d,f;for(g=l=0;(!e||g<e)&&(d=a[l]);++l){for(q=0;f=c[q];++q)if(d.value===f.value){d.moved=f.index;f.moved=d.index;c.splice(q,1);g=q=0;break}g+=q}}};b.a.Ib=(()=>{function a(c,e,g,l,q){var d=Math.min,f=Math.max,h=[],n,p=c.length,r,u=e.length,x=u-p||1,k=p+u+1,m;for(n=0;n<=p;n++){var t=m;
h.push(m=[]);var v=d(u,n+x);for(r=f(0,n-1);r<=v;r++)m[r]=r?n?c[n-1]===e[r-1]?t[r-1]:d(t[r]||k,m[r-1]||k)+1:r+1:n+1}d=[];f=[];x=[];n=p;for(r=u;n||r;)u=h[n][r]-1,r&&u===h[n][r-1]?f.push(d[d.length]={status:g,value:e[--r],index:r}):n&&u===h[n-1][r]?x.push(d[d.length]={status:l,value:c[--n],index:n}):(--r,--n,q.sparse||d.push({status:"retained",value:e[r]}));b.a.Ob(x,f,!q.dontLimitMoves&&10*p);return d.reverse()}return function(c,e,g){g="boolean"===typeof g?{dontLimitMoves:g}:g||{};c=c||[];e=e||[];return c.length<
e.length?a(c,e,"added","deleted",g):a(e,c,"deleted","added",g)}})();(()=>{function a(g,l,q,d,f){var h=[],n=b.i(()=>{var p=l(q,f,b.a.Ca(h,g))||[];if(0<h.length){var r=h.nodeType?[h]:h;if(0<r.length){var u=r[0],x=u.parentNode,k;var m=0;for(k=p.length;m<k;m++)x.insertBefore(p[m],u);m=0;for(k=r.length;m<k;m++)b.removeNode(r[m])}d&&b.m.D(d,null,[q,p,f])}h.length=0;h.push(...p)},null,{j:g,pa:()=>!!h.find(b.a.Za)});return{M:h,Va:n.ga()?n:void 0}}var c=b.a.f.X(),e=b.a.f.X();b.a.$b=(g,l,q,d,f,h)=>{function n(H){z=
{da:H,Fa:b.ba(t++)};k.push(z);x||I.push(z)}function p(H){z=u[H];t!==z.Fa.F()&&A.push(z);z.Fa(t++);b.a.Ca(z.M,g);k.push(z)}function r(H,L){if(H)for(var K=0,N=L.length;K<N;K++)L[K].M.forEach(ia=>H(ia,K,L[K].da))}l=l||[];"undefined"==typeof l.length&&(l=[l]);d=d||{};var u=b.a.f.get(g,c),x=!u,k=[],m=0,t=0,v=[],y=[],w=[],A=[],I=[],G=0;if(x)l.forEach(n);else{if(!h||u&&u._countWaitingForRemove)h=Array.prototype.map.call(u,H=>H.da),h=b.a.Ib(h,l,{dontLimitMoves:d.dontLimitMoves,sparse:!0});for(let H=0,L,K,
N;L=h[H];H++)switch(K=L.moved,N=L.index,L.status){case "deleted":for(;m<N;)p(m++);if(void 0===K){var z=u[m];z.Va&&(z.Va.o(),z.Va=void 0);b.a.Ca(z.M,g).length&&(d.beforeRemove&&(k.push(z),G++,z.da===e?z=null:w.push(z)),z&&v.push.apply(v,z.M))}m++;break;case "added":for(;t<N;)p(m++);void 0!==K?(y.push(k.length),p(K)):n(L.value)}for(;t<l.length;)p(m++);k._countWaitingForRemove=G}b.a.f.set(g,c,k);r(d.beforeMove,A);v.forEach(d.beforeRemove?b.ea:b.removeNode);var M,B;G=g.ownerDocument.activeElement;if(y.length)for(;void 0!=
(l=y.shift());){z=k[l];for(M=void 0;l;)if((B=k[--l].M)&&B.length){M=B[B.length-1];break}for(m=0;v=z.M[m];M=v,m++)b.h.Rb(g,v,M)}for(l=0;z=k[l];l++){z.M||b.a.extend(z,a(g,q,z.da,f,z.Fa));for(m=0;v=z.M[m];M=v,m++)b.h.Rb(g,v,M);!z.uc&&f&&(f(z.da,z.M,z.Fa),z.uc=!0,M=z.M[z.M.length-1])}G&&g.ownerDocument.activeElement!=G&&G.focus();r(d.beforeRemove,w);for(l=0;l<w.length;++l)w[l].da=e;r(d.afterMove,A);r(d.afterAdd,I)}})();C.ko=W})(this);
