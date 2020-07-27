!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=e=>"function"==typeof e&&i.has(e),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${c}--\x3e`,p=new RegExp(`${c}|${d}`),h="$lit$";class u{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:d}}=e;for(;a<d;){const e=n.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)m(t[e].name,h)&&i++;for(;i-- >0;){const t=l[a],s=b.exec(t)[2],i=s.toLowerCase()+h,n=e.getAttribute(i);e.removeAttribute(i);const o=n.split(p);this.parts.push({type:"attribute",index:r,name:s,strings:o}),a+=o.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const i=e.parentNode,n=t.split(p),o=n.length-1;for(let t=0;t<o;t++){let s,o=n[t];if(""===o)s=f();else{const e=b.exec(o);null!==e&&m(e[2],h)&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-h.length)+e[3]),s=document.createTextNode(o)}i.insertBefore(s,e),this.parts.push({type:"node",index:++r})}""===n[o]?(i.insertBefore(f(),e),s.push(e)):e.data=n[o],a+=o}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&r!==o||(r++,t.insertBefore(f(),e)),o=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(s.push(e),r--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const m=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},g=e=>-1!==e.index,f=()=>document.createComment(""),b=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let n,r=0,a=0,l=i.nextNode();for(;r<s.length;)if(n=s[r],g(n)){for(;a<n.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=t.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class y{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===e.indexOf("--\x3e",n+1);const o=b.exec(e);t+=null===o?e+(s?c:d):e.substr(0,o.index)+o[1]+o[2]+h+o[3]+c}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const w=e=>null===e||!("object"==typeof e||"function"==typeof e),_=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(w(e)||!_(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||w(e)&&e===this.value||(this.value=e,n(e)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=f()),e.__insert(this.endNode=f())}insertAfterPart(e){e.__insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):_(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const s=new v(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)void 0===(s=t[i])&&(s=new P(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class A{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class C extends x{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends S{}let k=!1;try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;n(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new class{handleAttributeExpressions(e,t,s,i){const n=t[0];return"."===n?new C(e,t.slice(1),s).parts:"@"===n?[new E(e,t.slice(1),i.eventContext)]:"?"===n?[new A(e,t.slice(1),s)]:new x(e,t,s).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function M(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(c);return void 0===(s=t.keyString.get(i))&&(s=new u(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const R=new Map,z=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const V=(e,...t)=>new y(e,t,"html",U),O=133;function F(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,O,null,!1);let o=q(i),r=i[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const e=n.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,r=i[o=q(i,o)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,O,null,!1);for(;s.nextNode();)t++;return t},q=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(g(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=(e,t)=>`${e}--${t}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const K=e=>t=>{const s=W(t.type,e);let i=R.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},R.set(s,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(c);if(void 0===(n=i.keyString.get(o))){const s=t.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(s,e),n=new u(t,s),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},Y=["html","svg"],B=new Set,H=(e,t,s)=>{B.add(s);const i=e.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const o=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{Y.forEach(t=>{const s=R.get(W(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),F(e,s)})})})(s);const r=t.element.content;!function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const o=document.createTreeWalker(i,O,null,!1);let r=q(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=q(n,r);return}r=q(n,r)}}(t,o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s);const a=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==a)e.insertBefore(a.cloneNode(!0),e.firstChild);else{r.insertBefore(o,r.firstChild);const e=new Set;e.add(o),F(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=(e,t)=>e;const Z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},X=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:Z,reflect:!1,hasChanged:X},D=Promise.resolve(!0),L=1,Q=4,G=8,$=16,ee=32;class te extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const i=this[e];this[s]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=X){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||Z,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||Z.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|ee,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=J){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s._classProperties.get(i)||J;this._updateState=this._updateState|$,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~$}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,n=i._classProperties.get(e)||J;i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||this._updateState&$||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Q;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{e=s,t=i});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&ee}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&L}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&L||(this._updateState=this._updateState|L,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}te.finalized=!0;const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol();class ne{constructor(e,t){if(t!==ie)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const oe=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof ne)return e.cssText;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new ne(s,ie)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const re=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let i=0,n=t.length;i<n;i++){const n=t[i];Array.isArray(n)?e(n,s):s.push(n)}return s}(e);class ae extends te{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){re(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ae.finalized=!0,ae.render=(e,t,s)=>{const i=s.scopeName,n=z.has(t),o=I&&11===t.nodeType&&!!t.host&&e instanceof y,a=o&&!B.has(i),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let i=z.get(t);void 0===i&&(r(t,t.firstChild),z.set(t,i=new P(Object.assign({templateFactory:M},s))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:K(i)},s)),a){const e=z.get(l);z.delete(l),e.value instanceof v&&H(l,e.value.template,i),r(t,t.firstChild),t.appendChild(l),z.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};customElements.define("view-cabezera",class extends ae{static get styles(){return oe`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          h1 {
            font-family: Roboto;
            font-size: 26px;
            font-weight: 500;
            background-color: #7710d9;
            color: whitesmoke;
            text-align:center;
          }
          .red {
            color: red;
          }
          .blue {
            color: blue;
          }
          @media (max-width: 310px) {
            .title {
              padding-bottom: 5px;
              font-size: 20px;
            }
            h1 {
              font-size: 18px;
              padding: 5px;
            }
		      }
          @media (max-width: 210px) {
            .title {
              padding-bottom: 2px;
              font-size: 14px;
            }
            h1 {
              font-size: 12px;             
            }
		      } 
        `}render(){return V`
    <p class="title">      
      <img alt="" src="data:image/png;base64,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" draggable="false" style=" width: 32px; height: 21.44px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">    
      <img alt="" src="data:image/png;base64,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" draggable="false" style=" width: 32px; height: 19.75px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none; opacity: 1;">
    <br>
      gtfs.es
    </p>
    <h1> haciendo fácil la vida de la gente</h1>
    `}});customElements.define("view-footer",class extends ae{static get styles(){return oe`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 3em;
            font-weight: 500;
            background-color: #1E500C;
            color: whitesmoke;
            text-align:center;
            padding-bottom: 30px;
          }
          @media (max-width: 615px) {
            .email {
              font-size: 1em;
            }
            p {
              font-size: 2em;
            }
          }
          @media (max-width: 400px) {
            .email {
              font-size: 0.5em;
              margin-bottom:200px;
            }
            p {
              font-size: 2em;
              margin-bottom:90px;
            }
          }
        `}render(){return V`
    <p>
    <span class="email">hola@gtfs.es</span>
    <br>  
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Quiero%20un%20masaje" @click= ${this.go} name="whatsapp" >
    <img src="whatsapp.jpg" width="50px" height="50px">
    </a>
    650.718.774
    <br><br>
    Ya lo hemos logrado en El Hierro
    <br>
    quieres conseguirlo con tu equipo
    <br>
    ¡vamos a ello !!
    
    </p>
    <!--
    <img src="https://picsum.photos/200/300" alt="imager">
    -->
    <a href="http://www.diarioelhierro.es/t26496/ab02.asp?idweb=26496&idrg=164598" name="crecimiento" >    
    <img src="32-porciento.jpg" alt="">

    <br>
    <a href="http://www.diarioelhierro.es/t26496/ab02.asp?idweb=26496&idrg=165449" name="crecimiento" >
    
    <img src="30-2019.jpg" alt="">


    `}});customElements.define("view-presentacion",class extends ae{static get styles(){return oe`
      .center{
        text-align: center;
        border:solid blueviolet 5px; 
      }      
      p {
        text-align: center;
      }
    `}render(){return V`
    <p >Presentación</p> 
    <div class="center">
      <!--
      <iframe width="700px" height="500px" src="https://www.youtube.com/embed/euFaPByqCnY?start=0" 
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
      -->
      <iframe width="90%" height="500px" src="https://www.youtube-nocookie.com/embed/B4CdBbKvly0" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>      
    </div>
    `}});customElements.define("view-servicios",class extends ae{static get styles(){return oe`
      .center{
        text-align: center;
        border:solid blueviolet 5px;
        /* border-radius:5% 25%; */
        /* margin: 5px; */
      }
      p {
        text-align: center;
      }
    `}render(){return V`    
    <br><br><br><br>
    <div class="center">
    <p >Inserción en Google Maps y Bing Maps</p>
    <p >¡ 100% correcto !</p>
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/Yb4q_3MvfQc" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>
    </div>       
    <div class="center">
    <p >APP Jefes de Tráfico</p> 
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/jt-_Q8tHr8U" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>
    </div>
    <div class="center">
    <p >Reestructuración de Horarios</p>
      <iframe width="90%" height="500px" src="https://www.youtube.com/embed/WEPhp4FZV7M" 
      frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; rel=0; hl=es; cc_lang_pref=es; cc_load_policy=1" allowfullscreen></iframe>
    </div>
    `}});customElements.define("view-contacto",class extends ae{static get styles(){return oe`
          .title {
              color:blue;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }
          p {
            font-family: Roboto;
            font-size: 1.5em;
            font-weight: 500;
            text-align:center;
            padding-bottom: 30px;
          }
          .center{
            text-align: center;
            __width: 90%;
            border:solid blueviolet 5px; 
          }
        `}render(){return V`
    <p >Contacto</p>
    <div class="center">
      <iframe src="https://www.google.com/maps/d/embed?mid=1WYdNYL8Nx6AegTh49Aodr0CAm5YsXvHf" width="90%" height="500px"></iframe>
    </div>
    
    `}});customElements.define("dile-pages",class extends ae{static get properties(){return{attrForSelected:{type:String},selected:{type:String}}}render(){return V`
    <slot></slot>
    `}constructor(){super(),this.transitionTime=1e3,this.selected=0,this._pageInitialization()}static get styles(){return oe`
      :host {
        display: block;
      }
    `}_pageInitialization(){this.pages=[];let e=this.children;for(let t of e)t.style.display="none",t.style.transition=`opacity ${this.transitionTime}ms`,t.style.opacity="0",this.pages.push(t)}initializeExternalPages(e){this.innerHTML=e,this._pageInitialization()}firstUpdated(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display="block")}updated(e){if(this._updatedAndNotUndefined(e,"selected")||this._updatedAndNotUndefined(e,"attrForSelected")){let t=this._getLastValueProperty(e,"selected"),s=this._getLastValueProperty(e,"attrForSelected");this.hidePage(t,s)}this._showCurrentPage()}_selectPage(e,t){let s;if(t){for(let i of this.pages)if(i.getAttribute(t)==e){s=i;break}}else s=this.pages[e];return s}_showCurrentPage(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display="block",setTimeout(()=>{e.style.opacity="1"},50))}hidePage(e,t){let s=this._selectPage(e,t);s&&(s.style.display="none",s.style.opacity="0")}_updatedAndNotUndefined(e,t){return e.has(t)&&null!=e.get(t)}_getLastValueProperty(e,t){return e.has(t)?e.get(t):this[t]}});customElements.define("dile-tab",class extends ae{static get styles(){return oe`
      :host {
        display: inline-block;
        margin: 0 3px;
      }
      article {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: all 0.3s ease;
        color: var(--dile-tab-text-color, #666);
        background-color: var(--dile-tab-background-color, transparent);
        cursor: pointer;
      }
      div.label {
        padding: var(--dile-label-padding, 8px 12px 6px 12px);
        text-transform: uppercase;
        white-space: nowrap;
      }
      .selected {
        background-color: var(--dile-tab-selected-background-color, #039be5);
        color: var(--dile-tab-selected-text-color, #fff);
      }
      span {
        display: block;
        height: var(--dile-tab-selected-line-height, 5px);
        width: 0;
        background-color: var(--dile-tab-selected-line-color, #0070c0);
        transition: width 0.3s ease;
      }
      .markselected {
        width: 100%;
      }
      .line {
        display: flex;
        justify-content: center;
      }
    `}static get properties(){return{selected:{type:Boolean},index:{type:Number}}}constructor(){super(),this.selected=!1}render(){return V`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected?"markselected":""}"></span>
        </div>
      </article>
    `}select(){this.dispatchEvent(new CustomEvent("dile-tab-selected",{bubbles:!0,composed:!0,detail:this}))}});window.customElements.define("dile-tabs",class extends ae{static get styles(){return oe`
      :host {
        display: flex;
      }
    `}static get properties(){return{selected:{type:String},attrForSelected:{type:String}}}constructor(){super(),this.selected=0,this.tabs=[],this.addEventListener("dile-tab-selected",this.tabSelectedChanged.bind(this))}render(){return V`
      <slot></slot>
    `}firstUpdated(){let e=this.children,t=0;for(let s of e)"dile-tab"==s.tagName.toLowerCase()&&(s.index=t,t++,this.tabs.push(s));this.setSelectedTab()}setSelectedTab(){if(this.attrForSelected)for(let e of this.tabs)e.getAttribute(this.attrForSelected)==this.selected?e.selected=!0:e.selected=!1;else{let e=parseInt(this.selected);if(!isNaN(e)&&this.tabs[e])for(let t in this.tabs)this.tabs[t].selected=t==e}}tabSelectedChanged(e){this.attrForSelected?this.selected=e.detail.getAttribute(this.attrForSelected):this.selected=e.detail.index,this.dispatchSelectedChanged()}dispatchSelectedChanged(){this.dispatchEvent(new CustomEvent("dile-tabs-selected-changed",{bubbles:!0,composed:!0,detail:this.selected}))}updated(e){this.setSelectedTab()}});customElements.define("pwa-live",class extends ae{static get styles(){return oe`
			:host {
				display: block;
				
				--primary-color: red;
				--_________primary-color: #673ab7;
				--primary-light-color: #9a67ea;
				--secondary-color: Blue; 
				--____secondary-color: #fbc02d; 
				--secondary-light-color: blue ;
				--_________secondary-light-color: #fbd09d;
				--text-color: #303030;
				--reverse-text-color: #fff;
				--reverse-accent-color: blue;
				--__________reverse-accent-color: #fdd835;
				
				padding: 15px;
				--dile-tab-background-color: transparent;
				--dile-tab-selected-background-color: transparent;
				--dile-tab-selected-line-color: var(--secondary-color);
				--dile-tab-text-color: var(--reverse-color, blueviolet);
				--dile-tab-selected-text-color: var(--reverse-accent-color, #fff);
				background-color: #f9f9f9;
			}
			h1 {
				font-weight: 300;
				flex-grow: 1;
			}
			.menumobile {
        margin-top: 10px;
        padding: 10px 0 20px 5px;
      }
      .menumobile a {
        display: block;
        margin: 10px 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--secondary-light-color);
      }
		.page {
			display: none;
		}
		.page[active] {
			display: block;
		}
		dile-tabs {
			border-bottom: 1px solid #ddd;
			margin-bottom: 15px;
			margin-right: 15px;
		}
		dile-pages {
			padding: 0 10px 10px;
		}
		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: var(--primary-color, #ddd);
			color: var(--reverse-text-color, #303030);
			padding: 10px;
			--eit-icon-size: 32px;
			--eit-icon-color: var(--secondary-color);
		}

		dile-spinner-modal {
			--dile-spinner-color: var(--secondary-color);
		}

		.homelink {
			color: inherit;
			text-decoration: none;
		}
		footer {
			text-align: center;
			padding 10px;
			font-size: 0.8em;
		}
		.center{
			_border: solid #7710d9 5px;
			text-align:center;
		}
		.botonMenu{
			padding:15px;
			border-radius:50%;
			font-style:tahoma;
			font-size: 3em;
			display: inline-block;
			width: 32%;
		}
		.activo{
			background-color:white;
			color:#7710d9;
			border: solid #7710d9 5px; 
			
		}
		.pasivo{
			__background-color:#1E500C;
			background-color:#10d913;
			color:white;		
		}
		.title {
              color:red;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }		
		.responsive { 
			width:7000px;
			height:500px;
		}
		@media (max-width: 1200px) {
			.botonMenu{
			padding:13px;
			font-size: 2.5em;
			}
		}
		@media (max-width: 900px) {
			.botonMenu{
			padding:10px;
			font-size: 1.5em;
			}
		}
		@media (max-width: 600px) {
			.botonMenu{
			padding:7px;
			font-size: 1em;
			}
		}
		@media (max-width: 600px) {
			.botonMenu{
			padding:10px;
			font-size: 1.5em;
			display: block;
			position: relative;
			text-align:center;
			width: 97%;
			}
			.title {
              color:red;
              padding-bottom: 10px;
              text-align:center;
              font-size: 30px;
          }		
		}
		`}static get properties(){return{page:{type:String}}}constructor(){super(),this.page="presentacion"}render(){return V`
	  <view-cabezera></view-cabezera>
	  <!--
	  <a href="#" @click= ${this.go} name="presentacion" >Presentación</a>
      <a href="#" @click=${this.go} name="servicios">Masajes</a>
	  <a href="#" @click=${this.go} name="contacto">contacto</a>
  -->
    <div class="center">
	  ${"presentacion"==this.page?V`<button class="activo botonMenu" @click= ${this.go} name="presentacion"> Presentación</button>`:V`<button class="pasivo botonMenu" @click= ${this.go} name="presentacion"> Presentación</button>`}
	  ${"servicios"==this.page?V`<button class="activo botonMenu" @click= ${this.go} name="servicios">Servicios</button>`:V`<button class="pasivo botonMenu" @click= ${this.go} name="servicios">Servicios</button>`}
	  ${"contacto"==this.page?V`<button class="activo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`:V`<button class="pasivo botonMenu" @click= ${this.go} name="contacto">Contacto</button>`}
	</div>
	  <!--
	  <button class="activo" @click= ${this.go} name="presentacion"> Presentación</button>
	  <button @click= ${this.go} name="servicios">Masajes</button>
	  <button @click= ${this.go} name="contacto">Contacto</button>
	
	  <hr>

	  <dile-tabs selected="${this.page}" attrForSelected="name" @dile-tabs-selected-changed="${this.selectedChanged}">      
		<dile-tab name="presentacion">Presentación</dile-tab>
		<dile-tab name="servicios">Masajes</dile-tab>
		<dile-tab name="contact">Contacto</dile-tab>
	</dile-tabs>
	  <hr>
				
    <dile-pages selected="${this.page}" attrForSelected="name">
		<view-home name="presentacion" ?active=${"presentacion"==this.page}></view-home>
		<view-about name="servicios" ?active=${"servicios"==this.page}></view-about>
		<view-contact name="contacto" ?active=${"contacto"==this.page}></view-contact>
	</dile-pages>
		
	  <view-presentacion name="presentacion" ?active=${"presentacion"==this.page}></view-presentacion>
	  <view-servicios name="servicios" ?active=${"servicios"==this.page}></view-servicios>
	  <view-contacto name="contacto" ?active=${"contacto"==this.page}></view-contacto>
	  -->
	  ${"presentacion"==this.page?V`<view-presentacion name="presentacion" ?active=${"presentacion"==this.page}></view-presentacion>`:""}
	  ${"servicios"==this.page?V`<view-servicios name="servicios" ?active=${"servicios"==this.page}></view-servicios>`:""}
	  ${"contacto"==this.page?V`<view-contacto name="contacto" ?active=${"contacto"==this.page}></view-contacto>`:""}


	  <view-footer></view-footer>
	  <view-whatsapp></view-whatsapp>
    `}go(e){e.preventDefault(),this.page=e.target.getAttribute("name"),console.log(this.page),this.requestUpdate()}selectedChanged(){console.log("estoy dentro de selectedChanged"),this.requestUpdate()}});customElements.define("view-whatsapp",class extends ae{static get styles(){return oe`
                    
            .jc_cta {
                border-style: dotted;
                border-color: #4027cf;
                color: #ffffff;
                background-color: #1a8f14;
                display: block ;
                padding: 15px;
                position: fixed ;	
                right: 5px;
                width:50px;
                z-index:100;
                bottom:0em;
                line-height: 1.6;
                font-size: 14px;
                border-radius: 50px;
            }
        `}render(){return V`
    <a href="https://api.whatsapp.com/send?phone=34650718774&text=Hola!%20Javier%0AQueremos%20mejorar%20el%20transporte%20público%20en...%20" target="_blank">
<div class="jc_cta" >
<img src="whatsapp-fixed.png" alt="icono whatsapp" width="50px" height="50px">

</div></a>
  
    `}})}]);