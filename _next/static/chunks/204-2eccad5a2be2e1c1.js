"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{5993:function(n,e,t){t.d(e,{UQ:function(){return vn},KF:function(){return gn},XE:function(){return yn},Qd:function(){return hn},Hk:function(){return En}});var i=t(894),r=t(6052),a=t(4592),o=t(8554),s=t.n(o),l=t(4441),u=t(1203),d=t(7294);function c(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}function f(){return(f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}var v={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]},m={position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},x={position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},p={position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},h={position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}};function g(n){var e;switch(null!=(e=null==n?void 0:n.direction)?e:"right"){case"right":return x;case"left":return m;case"bottom":return h;case"top":return p;default:return x}}var E={enter:{duration:.2,ease:v.easeOut},exit:{duration:.1,ease:v.easeIn}},y=function(n,e){return f({},n,{delay:(0,a.hj)(e)?e:null==e?void 0:e.enter})},b=function(n,e){return f({},n,{delay:(0,a.hj)(e)?e:null==e?void 0:e.exit})},O=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],N={exit:{height:{duration:.2,ease:v.ease},opacity:{duration:.3,ease:v.ease}},enter:{height:{duration:.3,ease:v.ease},opacity:{duration:.4,ease:v.ease}}},I={exit:function(n){var e,t,i=n.animateOpacity,r=n.startingHeight,a=n.transition,o=n.transitionEnd,s=n.delay;return f({},i&&{opacity:(t=r,null!=t&&parseInt(t.toString(),10)>0?1:0)},{overflow:"hidden",height:r,transitionEnd:null==o?void 0:o.exit,transition:null!=(e=null==a?void 0:a.exit)?e:b(N.exit,s)})},enter:function(n){var e,t=n.animateOpacity,i=n.endingHeight,r=n.transition,a=n.transitionEnd,o=n.delay;return f({},t&&{opacity:1},{height:i,transitionEnd:null==a?void 0:a.enter,transition:null!=(e=null==r?void 0:r.enter)?e:y(N.enter,o)})}},w=d.forwardRef((function(n,e){var t=n.in,i=n.unmountOnExit,r=n.animateOpacity,o=void 0===r||r,v=n.startingHeight,m=void 0===v?0:v,x=n.endingHeight,p=void 0===x?"auto":x,h=n.style,g=n.className,E=n.transition,y=n.transitionEnd,b=c(n,O),N=d.useState(!1),w=N[0],k=N[1];d.useEffect((function(){var n=setTimeout((function(){k(!0)}));return function(){return clearTimeout(n)}}),[]),(0,a.ZK)({condition:Boolean(m>0&&i),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var C=parseFloat(m.toString())>0,T={startingHeight:m,endingHeight:p,animateOpacity:o,transition:w?E:{enter:{duration:0}},transitionEnd:s()(y,{enter:{overflow:"initial"},exit:i?void 0:{display:C?"block":"none"}})},_=!i||t,M=t||i?"enter":"exit";return d.createElement(l.M,{initial:!1,custom:T},_&&d.createElement(u.E.div,f({ref:e},b,{className:(0,a.cx)("chakra-collapse",g),style:f({overflow:"hidden",display:"block"},h),custom:T,variants:I,initial:!!i&&"exit",animate:M,exit:"exit"})))}));a.Ts&&(w.displayName="Collapse");var k=["unmountOnExit","in","className","transition","transitionEnd","delay"],C={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(n){var e,t=void 0===n?{}:n,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:1,transition:null!=(e=null==i?void 0:i.enter)?e:y(E.enter,a),transitionEnd:null==r?void 0:r.enter}},exit:function(n){var e,t=void 0===n?{}:n,i=t.transition,r=t.transitionEnd,a=t.delay;return{opacity:0,transition:null!=(e=null==i?void 0:i.exit)?e:b(E.exit,a),transitionEnd:null==r?void 0:r.exit}}}},T=d.forwardRef((function(n,e){var t=n.unmountOnExit,i=n.in,r=n.className,o=n.transition,s=n.transitionEnd,v=n.delay,m=c(n,k),x=i||t?"enter":"exit",p=!t||i&&t,h={transition:o,transitionEnd:s,delay:v};return d.createElement(l.M,{custom:h},p&&d.createElement(u.E.div,f({ref:e,className:(0,a.cx)("chakra-fade",r),custom:h},C,{animate:x},m)))}));a.Ts&&(T.displayName="Fade");var _=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],M={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(n){var e,t=n.reverse,i=n.initialScale,r=n.transition,a=n.transitionEnd,o=n.delay;return f({opacity:0},t?{scale:i,transitionEnd:null==a?void 0:a.exit}:{transitionEnd:f({scale:i},null==a?void 0:a.exit)},{transition:null!=(e=null==r?void 0:r.exit)?e:b(E.exit,o)})},enter:function(n){var e,t=n.transitionEnd,i=n.transition,r=n.delay;return{opacity:1,scale:1,transition:null!=(e=null==i?void 0:i.enter)?e:y(E.enter,r),transitionEnd:null==t?void 0:t.enter}}}},P=d.forwardRef((function(n,e){var t=n.unmountOnExit,i=n.in,r=n.reverse,o=void 0===r||r,s=n.initialScale,v=void 0===s?.95:s,m=n.className,x=n.transition,p=n.transitionEnd,h=n.delay,g=c(n,_),E=!t||i&&t,y=i||t?"enter":"exit",b={initialScale:v,reverse:o,transition:x,transitionEnd:p,delay:h};return d.createElement(l.M,{custom:b},E&&d.createElement(u.E.div,f({ref:e,className:(0,a.cx)("chakra-offset-slide",m)},M,{animate:y,custom:b},g)))}));a.Ts&&(P.displayName="ScaleFade");var S=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],D={exit:{duration:.15,ease:v.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},A={exit:function(n){var e,t=n.direction,i=n.transition,r=n.transitionEnd,a=n.delay;return f({},g({direction:t}).exit,{transition:null!=(e=null==i?void 0:i.exit)?e:b(D.exit,a),transitionEnd:null==r?void 0:r.exit})},enter:function(n){var e,t=n.direction,i=n.transitionEnd,r=n.transition,a=n.delay;return f({},g({direction:t}).enter,{transition:null!=(e=null==r?void 0:r.enter)?e:y(D.enter,a),transitionEnd:null==i?void 0:i.enter})}},F=d.forwardRef((function(n,e){var t=n.direction,i=void 0===t?"right":t,r=n.style,o=n.unmountOnExit,s=n.in,v=n.className,m=n.transition,x=n.transitionEnd,p=n.delay,h=c(n,S),E=g({direction:i}),y=Object.assign({position:"fixed"},E.position,r),b=!o||s&&o,O=s||o?"enter":"exit",N={transitionEnd:x,transition:m,direction:i,delay:p};return d.createElement(l.M,{custom:N},b&&d.createElement(u.E.div,f({},h,{ref:e,initial:"exit",className:(0,a.cx)("chakra-slide",v),animate:O,exit:"exit",custom:N,variants:A,style:y})))}));a.Ts&&(F.displayName="Slide");var j=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],H={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(n){var e,t=n.offsetX,i=n.offsetY,r=n.transition,a=n.transitionEnd,o=n.delay;return{opacity:0,x:t,y:i,transition:null!=(e=null==r?void 0:r.exit)?e:b(E.exit,o),transitionEnd:null==a?void 0:a.exit}},enter:function(n){var e,t=n.transition,i=n.transitionEnd,r=n.delay;return{opacity:1,x:0,y:0,transition:null!=(e=null==t?void 0:t.enter)?e:y(E.enter,r),transitionEnd:null==i?void 0:i.enter}},exit:function(n){var e,t=n.offsetY,i=n.offsetX,r=n.transition,a=n.transitionEnd,o=n.reverse,s=n.delay,l={x:i,y:t};return f({opacity:0,transition:null!=(e=null==r?void 0:r.exit)?e:b(E.exit,s)},o?f({},l,{transitionEnd:null==a?void 0:a.exit}):{transitionEnd:f({},l,null==a?void 0:a.exit)})}}},K=d.forwardRef((function(n,e){var t=n.unmountOnExit,i=n.in,r=n.reverse,o=void 0===r||r,s=n.className,v=n.offsetX,m=void 0===v?0:v,x=n.offsetY,p=void 0===x?8:x,h=n.transition,g=n.transitionEnd,E=n.delay,y=c(n,j),b=!t||i&&t,O=i||t?"enter":"exit",N={offsetX:m,offsetY:p,reverse:o,transition:h,transitionEnd:g,delay:E};return d.createElement(l.M,{custom:N},b&&d.createElement(u.E.div,f({ref:e,className:(0,a.cx)("chakra-offset-slide",s),custom:N},H,{animate:O},y)))}));a.Ts&&(K.displayName="SlideFade");var R=t(6450);function L(){return(L=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function U(n){return n.sort((function(n,e){var t=n.compareDocumentPosition(e);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function G(n,e,t){var i=n+1;return t&&i>=e&&(i=0),i}function Y(n,e,t){var i=n-1;return t&&i<0&&(i=e),i}var X="undefined"!==typeof window?d.useLayoutEffect:d.useEffect,z=function(){var n=this;this.descendants=new Map,this.register=function(e){var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?n.registerNode(e):function(t){n.registerNode(t,e)}},this.unregister=function(e){n.descendants.delete(e);var t=U(Array.from(n.descendants.keys()));n.assignIndex(t)},this.destroy=function(){n.descendants.clear()},this.assignIndex=function(e){n.descendants.forEach((function(n){var t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))},this.count=function(){return n.descendants.size},this.enabledCount=function(){return n.enabledValues().length},this.values=function(){return Array.from(n.descendants.values()).sort((function(n,e){return n.index-e.index}))},this.enabledValues=function(){return n.values().filter((function(n){return!n.disabled}))},this.item=function(e){if(0!==n.count())return n.values()[e]},this.enabledItem=function(e){if(0!==n.enabledCount())return n.enabledValues()[e]},this.first=function(){return n.item(0)},this.firstEnabled=function(){return n.enabledItem(0)},this.last=function(){return n.item(n.descendants.size-1)},this.lastEnabled=function(){var e=n.enabledValues().length-1;return n.enabledItem(e)},this.indexOf=function(e){var t,i;return e&&null!=(t=null==(i=n.descendants.get(e))?void 0:i.index)?t:-1},this.enabledIndexOf=function(e){return null==e?-1:n.enabledValues().findIndex((function(n){return n.node.isSameNode(e)}))},this.next=function(e,t){void 0===t&&(t=!0);var i=G(e,n.count(),t);return n.item(i)},this.nextEnabled=function(e,t){void 0===t&&(t=!0);var i=n.item(e);if(i){var r=G(n.enabledIndexOf(i.node),n.enabledCount(),t);return n.enabledItem(r)}},this.prev=function(e,t){void 0===t&&(t=!0);var i=Y(e,n.count()-1,t);return n.item(i)},this.prevEnabled=function(e,t){void 0===t&&(t=!0);var i=n.item(e);if(i){var r=Y(n.enabledIndexOf(i.node),n.enabledCount()-1,t);return n.enabledItem(r)}},this.registerNode=function(e,t){if(e&&!n.descendants.has(e)){var i=U(Array.from(n.descendants.keys()).concat(e));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var r=L({node:e,index:-1},t);n.descendants.set(e,r),n.assignIndex(i)}}};var B=(0,R.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),V=B[0],Z=B[1];var $=t(7375);function W(){return(W=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function J(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}var q=["onChange","defaultIndex","index","allowMultiple","allowToggle"],Q=["isDisabled","isFocusable","id"],nn=[V,function(){return Z()},function(){return function(){var n=(0,d.useRef)(new z);return X((function(){return function(){return n.current.destroy()}})),n.current}()},function(n){return function(n){var e=Z(),t=(0,d.useState)(-1),i=t[0],r=t[1],a=(0,d.useRef)(null);X((function(){return function(){a.current&&e.unregister(a.current)}}),[]),X((function(){if(a.current){var n=Number(a.current.dataset.index);i==n||Number.isNaN(n)||r(n)}}));var o=n?e.register(n):e.register;return{descendants:e,index:i,enabledIndex:e.enabledIndexOf(a.current),register:(0,R.lq)(o,a)}}(n)}],en=nn[0],tn=nn[2],rn=nn[3];function an(n){var e=n.onChange,t=n.defaultIndex,i=n.index,r=n.allowMultiple,o=n.allowToggle,s=J(n,q);!function(n){var e=n.index||n.defaultIndex,t=!(0,a.o8)(e)&&!(0,a.kJ)(e)&&n.allowMultiple;(0,a.ZK)({condition:!!t,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof e+","})}(n),function(n){(0,a.ZK)({condition:!(!n.allowMultiple||!n.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(n);var l=tn(),u=(0,d.useState)(-1),c=u[0],f=u[1];(0,$.zq)((function(){f(-1)}));var v=(0,$.Tx)({value:i,defaultValue:function(){return r?null!=t?t:[]:null!=t?t:-1},onChange:e}),m=v[0],x=v[1];return{index:m,setIndex:x,htmlProps:s,getAccordionItemProps:function(n){var e=!1;null!==n&&(e=(0,a.kJ)(m)?m.includes(n):m===n);return{isOpen:e,onChange:function(e){if(null!==n)if(r&&(0,a.kJ)(m)){var t=e?(0,a.jX)(m,n):(0,a.cl)(m,n);x(t)}else e?x(n):o&&x(-1)}}},focusedIndex:c,setFocusedIndex:f,descendants:l}}var on=(0,R.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),sn=on[0],ln=on[1];function un(n){var e=n.isDisabled,t=n.isFocusable,i=n.id,r=J(n,Q),o=ln(),s=o.getAccordionItemProps,l=o.setFocusedIndex,u=(0,d.useRef)(null),c=(0,$.ZS)(i,"accordion-button","accordion-panel"),f=c[0],v=c[1];!function(n){(0,a.ZK)({condition:!(!n.isFocusable||n.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(n);var m=rn({disabled:e&&!t}),x=m.register,p=m.index,h=m.descendants,g=s(-1===p?null:p),E=g.isOpen,y=g.onChange;!function(n){(0,a.ZK)({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:E,isDisabled:e});var b=(0,d.useCallback)((function(){null==y||y(!E),l(p)}),[p,l,E,y]),O=(0,d.useCallback)((function(n){var e={ArrowDown:function(){var n=h.nextEnabled(p);n&&(0,a.T_)(n.node)},ArrowUp:function(){var n=h.prevEnabled(p);n&&(0,a.T_)(n.node)},Home:function(){var n=h.firstEnabled();n&&(0,a.T_)(n.node)},End:function(){var n=h.lastEnabled();n&&(0,a.T_)(n.node)}}[(0,a.uh)(n)];e&&(n.preventDefault(),e(n))}),[h,p]),N=(0,d.useCallback)((function(){l(p)}),[l,p]),I=(0,d.useCallback)((function(n,t){return void 0===n&&(n={}),void 0===t&&(t=null),W({},n,{type:"button",ref:(0,R.lq)(x,u,t),id:f,disabled:!!e,"aria-expanded":!!E,"aria-controls":v,onClick:(0,a.v0)(n.onClick,b),onFocus:(0,a.v0)(n.onFocus,N),onKeyDown:(0,a.v0)(n.onKeyDown,O)})}),[f,e,E,b,N,O,v,x]),w=(0,d.useCallback)((function(n,e){return void 0===n&&(n={}),void 0===e&&(e=null),W({},n,{ref:e,role:"region",id:v,"aria-labelledby":f,hidden:!E})}),[f,E,v]);return{isOpen:E,isDisabled:e,isFocusable:t,onOpen:function(){null==y||y(!0)},onClose:function(){null==y||y(!1)},getButtonProps:I,getPanelProps:w,htmlProps:r}}var dn=["children","reduceMotion"],cn=["htmlProps","descendants"],fn=["htmlProps"],vn=(0,r.Gp)((function(n,e){var t=n.children,i=n.reduceMotion,o=J(n,dn),s=(0,r.jC)("Accordion",o),l=an((0,r.Lr)(o)),u=l.htmlProps,c=l.descendants,f=J(l,cn),v=d.useMemo((function(){return W({},f,{reduceMotion:!!i})}),[f,i]);return d.createElement(en,{value:c},d.createElement(sn,{value:v},d.createElement(r.Fo,{value:s},d.createElement(r.m$.div,W({ref:e},u,{className:(0,a.cx)("chakra-accordion",o.className)}),t))))}));a.Ts&&(vn.displayName="Accordion");var mn=(0,R.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),xn=mn[0],pn=mn[1],hn=(0,r.Gp)((function(n,e){var t=n.children,i=n.className,o=un(n),s=o.htmlProps,l=J(o,fn),u=W({},(0,r.yK)().container,{overflowAnchor:"none"}),c=d.useMemo((function(){return l}),[l]);return d.createElement(xn,{value:c},d.createElement(r.m$.div,W({ref:e},s,{className:(0,a.cx)("chakra-accordion__item",i),__css:u}),(0,a.Pu)(t,{isExpanded:!!l.isOpen,isDisabled:!!l.isDisabled})))}));a.Ts&&(hn.displayName="AccordionItem");var gn=(0,r.Gp)((function(n,e){var t=(0,pn().getButtonProps)(n,e),i=W({display:"flex",alignItems:"center",width:"100%",outline:0},(0,r.yK)().button);return d.createElement(r.m$.button,W({},t,{className:(0,a.cx)("chakra-accordion__button",n.className),__css:i}))}));a.Ts&&(gn.displayName="AccordionButton");var En=(0,r.Gp)((function(n,e){var t=ln().reduceMotion,i=pn(),o=i.getPanelProps,s=i.isOpen,l=o(n,e),u=(0,a.cx)("chakra-accordion__panel",n.className),c=(0,r.yK)();t||delete l.hidden;var f=d.createElement(r.m$.div,W({},l,{__css:c.panel,className:u}));return t?f:d.createElement(w,{in:s},f)}));a.Ts&&(En.displayName="AccordionPanel");var yn=function(n){var e=pn(),t=e.isOpen,o=e.isDisabled,s=ln().reduceMotion,l=(0,a.cx)("chakra-accordion__icon",n.className),u=W({opacity:o?.4:1,transform:t?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center"},(0,r.yK)().icon);return d.createElement(i.JO,W({viewBox:"0 0 24 24","aria-hidden":!0,className:l,__css:u},n),d.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};a.Ts&&(yn.displayName="AccordionIcon")},4651:function(n,e,t){t.d(e,{Ee:function(){return f}});var i=t(6052),r=t(4592),a=t(7294),o=t(7375);function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}function l(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}var u=["htmlWidth","htmlHeight","alt"],d=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],c=a.forwardRef((function(n,e){var t=n.htmlWidth,i=n.htmlHeight,r=n.alt,o=l(n,u);return a.createElement("img",s({width:t,height:i,ref:e,alt:r},o))})),f=(0,i.Gp)((function(n,e){var t=n.fallbackSrc,u=n.fallback,f=n.src,v=n.srcSet,m=n.align,x=n.fit,p=n.loading,h=n.ignoreFallback,g=n.crossOrigin,E=l(n,d),y=null!=p||h||void 0===t&&void 0===u,b=function(n){var e=n.loading,t=n.src,i=n.srcSet,r=n.onLoad,s=n.onError,l=n.crossOrigin,u=n.sizes,d=n.ignoreFallback,c=(0,a.useState)("pending"),f=c[0],v=c[1];(0,a.useEffect)((function(){v(t?"loading":"pending")}),[t]);var m=(0,a.useRef)(),x=(0,a.useCallback)((function(){if(t){p();var n=new Image;n.src=t,l&&(n.crossOrigin=l),i&&(n.srcset=i),u&&(n.sizes=u),e&&(n.loading=e),n.onload=function(n){p(),v("loaded"),null==r||r(n)},n.onerror=function(n){p(),v("failed"),null==s||s(n)},m.current=n}}),[t,l,i,u,r,s,e]),p=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,o.Gw)((function(){if(!d)return"loading"===f&&x(),function(){p()}}),[f,x,d]),d?"loaded":f}(s({},n,{ignoreFallback:y})),O=s({ref:e,objectFit:x,objectPosition:m},y?E:(0,r.CE)(E,["onError","onLoad"]));return"loaded"!==b?u||a.createElement(i.m$.img,s({as:c,className:"chakra-image__placeholder",src:t},O)):a.createElement(i.m$.img,s({as:c,src:f,srcSet:v,crossOrigin:g,loading:p,className:"chakra-image"},O))}));r.Ts&&(f.displayName="Image")}}]);