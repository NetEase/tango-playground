(this.csbJsonP=this.csbJsonP||[]).push([["vue-template-compiler"],{"./src/sandbox/eval/transpilers/vue/v2/template-compiler/loader.ts":function(e,r,n){"use strict";n.r(r);var t=n("../../node_modules/@babel/runtime/regenerator/index.js"),o=n.n(t),i=n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=n.n(i),a=n("../../node_modules/vue-template-es2015-compiler/index.js"),c=n.n(a),u=n("../../node_modules/vue-template-compiler/browser.js"),l=n("../../node_modules/raw-loader/index.js!../../node_modules/vue-hot-reload-api/dist/index.js"),p=n.n(l),d=n("../../node_modules/@babel/runtime/helpers/defineProperty.js"),m=n.n(d);function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){m()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var v={img:"src",image:"xlink:href"},b=function(e,r){var n=e?h(h({},v),{},{userOptions:e}):v;return{postTransformNode:function(e){return function(e,r,n){for(var t in r)if(e.tag===t&&e.attrs){var o=r[t];"string"==typeof o?e.attrs.some((function(e){return g(e,o,n)})):Array.isArray(o)&&o.forEach((function(r){return e.attrs.some((function(e){return g(e,r,n)}))}))}}(e,n,r)}}};function g(e,r,n){if(e.name===r){var t=e.value;if(!('"'===t.charAt(0)&&'"'===t.charAt(t.length-1)))return;var o=t.charAt(1);return"."!==o&&"~"!==o||("~"===o&&(t='"'+t.slice(2)),e.value="require(".concat(t,")"),n(JSON.parse(t))),!0}}var j=n("../../node_modules/@babel/runtime/helpers/slicedToArray.js"),y=n.n(j),O=function(){return{postTransformNode:function(e){return function(e){-1!==["img","source"].indexOf(e.tag)&&e.attrs&&e.attrs.forEach((function(e){if("srcset"===e.name){var r=e.value;if(!('"'===r.charAt(0)&&'"'===r.charAt(r.length-1)))return;var n=/( |\\t|\\n|\\f|\\r)+/g,t=r.substr(1,r.length-2).split(",").map((function(e){var r=e.replace(n," ").trim().split(" ",2),t=y()(r,2),o=t[0],i=t[1];return{require:_(o),descriptor:i}})),o="";t.forEach((function(e,r,n){o+=e.require+' + " '+e.descriptor+(r<n.length-1?', " + ':'"')})),e.value=o}}))}(e)}}};function _(e){var r=e.charAt(0);if("."===r||"~"===r){if("~"===r){var n=e.charAt(1);e='"'+e.slice("/"===n?2:1)}return'require("'.concat(e,'")')}}var w="!noop-loader!/node_modules/vue-hot-reload-api.js";r.default=function(e,r){return x.apply(this,arguments)};function x(){return(x=s()(o.a.mark((function e(r,n){var t,i,s,a,l,d,m,f,h,v,g,j,y,_;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.emitModule(w,p.a,"/",!1,!1),t=n.options,i=t.vueOptions||{},!0,s=[],a=function(e){s.push(n.addDependency(e))},l=[b(t.transformRequire,a),O()],d=i.compilerModules||t.compilerModules,m={preserveWhitespace:t.preserveWhitespace,modules:l.concat(d||[]),directives:i.compilerDirectives||t.compilerDirectives||{},comments:t.hasComment,scopeId:t.hasScoped?t.id:null},(f=u.compile(r,m)).tips&&f.tips.length&&f.tips.forEach((function(e){n.emitWarning({name:"vue-warning",message:"string"==typeof e?e:"",fileName:n._module.module.parent?n._module.module.parent.path:n.path,lineNumber:1,columnNumber:1,source:"vue-template-compiler"})})),f.errors&&f.errors.length?(n.emitError(new Error("\n  Error compiling template:\n".concat(A(r),"\n")+f.errors.map((function(e){return"  - ".concat(e)})).join("\n")+"\n")),h="module.exports={render:function(){},staticRenderFns:[]}"):(v=t.buble,g=!1!==v.transforms.stripWith,j=v.transforms.stripWithFunctional,y=f.staticRenderFns.map((function(e){return P(e,j)})),h=c()("var render = "+P(f.render,j)+"\nvar staticRenderFns = ["+y.join(",")+"]",v)+"\n",g&&(h+="render._withStripped = true\n"),"{ render: render, staticRenderFns: staticRenderFns }",h+="module.exports = ".concat("{ render: render, staticRenderFns: staticRenderFns }")),_=i.esModule?"esExports":"module.exports",h+='\nif (module.hot) {\n  module.hot.accept()\n  if (module.hot.data) {\n    require("'+w+'")      .rerender("'+t.id+'", '+_+")\n  }\n}",e.next=15,Promise.all(s);case 15:return e.abrupt("return",h);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,r){return"function ("+(r?"_h,_vm":"")+") {"+e+"}"}function A(e){return e.split(/\r?\n/).map((function(e){return"  ".concat(e)})).join("\n")}}}]);
//# sourceMappingURL=vue-template-compiler.4cf3c603f.chunk.js.map