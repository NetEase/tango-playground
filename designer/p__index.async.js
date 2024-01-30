"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[866],{43938:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var o=t(27424),s=t.n(o),r=t(87363),a=t(62979),i=t(81821),c=t(14729),l=t(26898),p=t(60532),d=t(65184),m=t(42122),u=t.n(m),f=t(70215),g=t.n(f),x=t(86074),y=["value"];var j=[{filename:"/package.json",code:JSON.stringify({name:"demo",private:!0,dependencies:{"@music163/antd":"0.1.6","@music163/tango-boot":"0.1.3",react:"17.0.2","react-dom":"17.0.2","prop-types":"15.7.2",tslib:"2.5.0"}})},{filename:"/tango.config.json",code:JSON.stringify({packages:{react:{version:"17.0.2",library:"React",type:"dependency",resources:["https://cdn.jsdelivr.net/npm/react@{{version}}/umd/react.development.js"]},"react-dom":{version:"17.0.2",library:"ReactDOM",type:"dependency",resources:["https://cdn.jsdelivr.net/npm/react-dom@{{version}}/umd/react-dom.development.js"]},"react-is":{version:"16.13.1",library:"ReactIs",type:"dependency",resources:["https://cdn.jsdelivr.net/npm/react-is@{{version}}/umd/react-is.production.min.js"]},"styled-components":{version:"5.3.5",library:"styled",type:"dependency",resources:["https://cdn.jsdelivr.net/npm/styled-components@{{version}}/dist/styled-components.min.js"]},moment:{version:"2.29.4",library:"moment",type:"dependency",resources:["https://cdn.jsdelivr.net/npm/moment@{{version}}/moment.js"]},"@music163/tango-boot":{version:"0.2.1",library:"TangoBoot",type:"baseDependency",resources:["https://cdn.jsdelivr.net/npm/@music163/tango-boot@{{version}}/dist/boot.js"],description:"云音乐低代码运行时框架"},"@music163/antd":{version:"0.1.7",library:"TangoAntd",type:"baseDependency",resources:["https://cdn.jsdelivr.net/npm/@music163/antd@{{version}}/dist/index.js","https://cdn.jsdelivr.net/npm/antd@4.24.13/dist/antd.css"],description:"云音乐低代码中后台应用基础物料",designerResources:["https://cdn.jsdelivr.net/npm/@music163/antd@{{version}}/dist/designer.js","https://cdn.jsdelivr.net/npm/antd@4.24.13/dist/antd.css"]}}})},{filename:"/README.md",code:"# readme"},{filename:"/src/index.less",code:"\nbody {\n  font-size: 12px;\n}\n"},{filename:"/src/style.css",code:"\n* {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  color: red;\n}\n"},{filename:"/src/index.js",code:"\nimport { runApp } from '@music163/tango-boot';\nimport routes from './routes';\nimport './services';\nimport './stores';\nimport './index.less';\n\nrunApp({\n  boot: {\n    mountElement: document.querySelector('#root'),\n    qiankun: false,\n  },\n\n  router: {\n    type: 'browser',\n    config: routes,\n  },\n});\n"},{filename:"/src/pages/index.js",code:'\nimport React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Page,\n  Section,\n  Button,\n  Input,\n  FormilyForm,\n} from "@music163/antd";\nimport { Space } from \'@music163/antd\';\nimport { LocalButton } from \'../components\';\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Page title={tango.stores.app.title}>\n       <Section title="Section Title">\n       </Section>\n       <Section>\n       <Space>\n          <LocalButton />\n          <Button>button</Button>\n          <Input />\n          </Space>\n        </Section>\n      </Page>\n    );\n  }\n}\n\nexport default definePage(App);\n'},{filename:"/src/components/button.js",code:"\nimport React from 'react';\nimport { registerComponentPrototype } from '../utils';\n\nexport default function MyButton(props) {\n  return <button {...props}>my button</button>\n}\n\nregisterComponentPrototype({\n  name: 'LocalButton',\n  title: 'Local Button',\n  exportType: 'namedExport',\n  package: '/src/components',\n  props: [\n    { name: 'background', title: '背景色', setter: 'colorSetter'  },\n  ],\n});\n"},{filename:"/src/components/input.js",code:"\nimport React from 'react';\nimport { registerComponentPrototype } from '../utils';\n\nexport default function MyInput(props) {\n  return <input {...props} />;\n}\n\nregisterComponentPrototype({\n  name: 'LocalInput',\n  title: 'Local Input',\n  exportType: 'namedExport',\n  package: '/src/components',\n  props: [\n    { name: 'color', title: '文本色', setter: 'colorSetter'  },\n  ],\n});\n"},{filename:"/src/components/index.js",code:"\nexport { default as LocalButton } from './button';\nexport { default as LocalInput } from './input';\n"},{filename:"/src/routes.js",code:"\nimport Index from \"./pages/index\";\n\nconst routes = [\n  {\n    path: '/',\n    exact: true,\n    component: Index\n  },\n];\n\nexport default routes;\n"},{filename:"/src/stores/index.js",code:"\nexport { default as app } from './app';\nexport { default as counter } from './counter';\n"},{filename:"/src/stores/app.js",code:"\nimport { defineStore } from '@music163/tango-boot';\n\nexport default defineStore({\n\n  title: 'Page Title',\n\n  array: [1, 2, 3],\n\n  test: function() {\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n    console.log('test');\n  }\n}, 'app');\n"},{filename:"/src/stores/counter.js",code:"\nimport { defineStore } from '@music163/tango-boot';\n\nconst counter = defineStore({\n  // state\n  num: 0,\n\n  // action\n  increment: () => counter.num++,\n\n  decrement: () => {\n    counter.num--;\n  },\n}, 'counter');\n\nexport default counter;\n"},{filename:"/src/services/index.js",code:"\nimport { defineServices } from '@music163/tango-boot';\nimport './sub';\n\nexport default defineServices({\n  longLongLongLongLongLongLongLongGet: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/cc974ffbaa7a85c77f30e4ce67deb67f/api/getUserProfile',\n    formatter: res => res.data,\n    headers: {\n      'Content-Type': 'application/json',\n    }\n  },\n  get: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/cc974ffbaa7a85c77f30e4ce67deb67f/api/getUserProfile',\n    formatter: res => res.data,\n    headers: {\n      'Content-Type': 'application/json',\n    }\n  },\n  list: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/anchor-list-normal',\n  },\n  add: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users',\n    method: 'post',\n  },\n  update: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users',\n    method: 'post',\n  },\n  delete: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users?id=1',\n  },\n});\n"},{filename:"/src/services/sub.js",code:"\nimport { defineServices } from '@music163/tango-boot';\n\nexport default defineServices({\n  list: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/anchor-list-normal',\n  },\n}, {\n  namespace: 'sub',\n});\n"},{filename:"/src/utils/index.js",code:"\nexport function registerComponentPrototype(proto) {\n  if (!proto) return;\n  if (!window.localTangoComponentPrototypes) {\n    window.localTangoComponentPrototypes = {};\n  }\n  if (proto.name) {\n    window.localTangoComponentPrototypes[proto.name] = proto;\n  }\n}\n"}],h=[{key:"$helpers",title:"工具函数",children:[{title:"设置变量值",key:'() => tango.setStoreValue("variableName", "variableValue")',type:"function",help:'设置状态值，tango.setStoreValue("variableName", "variableValue")'},{title:"获取变量值",key:'() => tango.getStoreValue("variableName")',type:"function",help:"获取状态值"},{title:"打开弹窗",key:'() => tango.openModal("")',type:"function"},{title:"关闭弹窗",key:'() => tango.closeModal("")',type:"function"},{title:"切换路由",key:'() => tango.navigateTo("/")',type:"function"},{title:"拷贝到剪贴板",key:'() => tango.copyToClipboard("hello")',type:"function"}]}];function v(){return(0,x.jsx)(a.xu,{width:"50px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",children:(0,x.jsx)(p.Z,{})})}function b(e){var n=e.name;return(0,x.jsxs)(a.xu,{display:"flex",alignItems:"center",columnGap:"l",children:[(0,x.jsx)(a.xu,{className:"ProjectName",fontSize:"18px",fontWeight:"bold",children:"Tango Playground"}),(0,x.jsxs)(a.xu,{className:"BranchName",as:"code",fontSize:"14px",children:[(0,x.jsx)(d.Z,{})," ",n||"demo"]})]})}(0,c.qX)({name:"fooSetter",component:function(e){var n=e.value,t=g()(e,y);return(0,x.jsxs)("code",u()(u()({},t),{},{children:["fooSetter: ",n]}))}});var S,w,P,k,I=t(91321),T=t(56466),C=t(50067),L=t(10620),B=t(36027),A=t(40717),E=t(861),z=t.n(E),R=["files"],N={example:(S={title:"Example",files:[{filename:"/src/pages/index.js",code:'import React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Button,\n  Input\n} from "@music163/antd";\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button>Hello World!</Button>\n        <Input placeholder="This is example demo" />\n      </div>\n    );\n  }\n}\nexport default definePage(App);'}]},w=S.files,P=g()(S,R),k=j.filter((function(e){return null==w?void 0:w.every((function(n){return n.filename!==e.filename}))})),k.push.apply(k,z()(w)),u()(u()({},P),{},{files:k}))},D=t(41777),M=new l.j$({entry:"/src/index.js",files:j}),Z=(0,l.r)({workspace:M});window.__workspace__=M;var V=new c.Bz({context:"iframe"});function F(){var e,n=(0,r.useState)(!0),t=s()(n,2),o=t[0],l=t[1],p=(0,r.useState)(!1),d=s()(p,2),m=d[0],u=d[1],f=(0,D.TH)(),g=(0,D.bS)({path:"/:name"}),y=(0,r.useMemo)((function(){var e,n;return null!=g&&null!==(e=g.params)&&void 0!==e&&e.name?null==g||null===(n=g.params)||void 0===n?void 0:n.name:new URLSearchParams(f.search).get("name")||void 0}),[null==g?void 0:g.params,f.search]);return(0,r.useEffect)((function(){var e,n;y&&N[y]&&(null===(e=N[y])||void 0===e||null===(e=e.files)||void 0===e||null===(n=e.forEach)||void 0===n||n.call(e,(function(e){M.addFile(e.filename,e.code)})))}),[y]),(0,x.jsx)(c.lg,{theme:c.Qp,engine:Z,config:{customActionVariables:h,customExpressionVariables:h},sandboxQuery:V,children:(0,x.jsxs)(c.Ab,{logo:(0,x.jsx)(v,{}),description:(0,x.jsx)(b,{name:y&&N[y]&&((null===(e=N[y])||void 0===e?void 0:e.title)||y)}),actions:(0,x.jsx)(a.xu,{px:"l",children:(0,x.jsxs)(c.o8,{children:[(0,x.jsx)(c.o8.Item,{placement:"left"},"routeSwitch"),(0,x.jsx)(c.o8.Item,{placement:"left"},"history"),(0,x.jsx)(c.o8.Item,{placement:"left"},"preview"),(0,x.jsx)(c.o8.Item,{placement:"right"},"modeSwitch"),(0,x.jsx)(c.o8.Item,{placement:"right"},"togglePanel"),(0,x.jsx)(c.o8.Separator,{}),(0,x.jsx)(c.o8.Item,{placement:"right",children:(0,x.jsx)(i.Space,{children:(0,x.jsx)(i.Button,{type:"primary",children:"发布"})})})]})}),children:[(0,x.jsxs)(c.YE,{children:[(0,x.jsx)(c.YE.Item,{label:"组件",icon:(0,x.jsx)(T.Z,{}),widgetProps:{menuData:m,loading:o}},"components"),(0,x.jsx)(c.YE.Item,{label:"结构",icon:(0,x.jsx)(C.Z,{})},"outline"),(0,x.jsx)(c.YE.Item,{label:"变量",icon:(0,x.jsx)(L.Z,{}),isFloat:!0,width:800},"variables"),(0,x.jsx)(c.YE.Item,{label:"接口",icon:(0,x.jsx)(B.Z,{}),isFloat:!0,width:800},"dataSource"),(0,x.jsx)(c.YE.Item,{label:"依赖",icon:(0,x.jsx)(A.Z,{}),isFloat:!0,width:800},"dependency")]}),(0,x.jsxs)(c.qs,{children:[(0,x.jsx)(c.Jd,{mode:"design",children:(0,x.jsx)(c.pv,{bundlerURL:"https://tango-demo.musicfe.com",onMessage:function(e){if("done"===e.type){var n=V.window;n.TangoAntd&&(n.TangoAntd.menuData&&u(n.TangoAntd.menuData),n.TangoAntd.prototypes&&M.setComponentPrototypes(n.TangoAntd.prototypes)),n.localTangoComponentPrototypes&&M.setComponentPrototypes(n.localTangoComponentPrototypes),l(!1)}}})}),(0,x.jsx)(c.Jd,{mode:"code",children:(0,x.jsx)(c.pq,{})})]}),(0,x.jsx)(c.TD,{})]})})}(0,I.Z)({scriptUrl:"//at.alicdn.com/t/c/font_2891794_lzc7rtwuzf.js"})}}]);
//# sourceMappingURL=p__index.async.js.map