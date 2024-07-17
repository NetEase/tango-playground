"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[866],{62662:function(e,n,t){t.d(n,{TR:function(){return x},re:function(){return b},zf:function(){return y},T9:function(){return f},EX:function(){return g}});t(87363);var o=t(62979),i=(t(81821),t(60532)),a=t(65184),r=t(94067),s=t(42122),l=t.n(s),c=t(70215),p=t.n(c),m=t(86074),u=["value"];var d=t(92517),f='\nimport React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Page,\n  Section,\n} from "@music163/antd";\n\nfunction App() {\n  return (<Page title="Detail Page">\n    <Section></Section>\n  </Page>)\n}\n\nexport default definePage(App);\n',g=[{filename:"/package.json",code:JSON.stringify({name:"demo",private:!0,dependencies:{"@music163/antd":"0.2.5","@music163/tango-boot":"0.3.5",react:"17.0.2","react-dom":"17.0.2","prop-types":"15.7.2",tslib:"2.5.0"}})},{filename:"/tango.config.json",code:JSON.stringify({designerConfig:{autoGenerateComponentId:!0},packages:{react:{version:"17.0.2",library:"React",type:"dependency",resources:["https://unpkg.com/react@{{version}}/umd/react.development.js"]},"react-dom":{version:"17.0.2",library:"ReactDOM",type:"dependency",resources:["https://unpkg.com/react-dom@{{version}}/umd/react-dom.development.js"]},"react-is":{version:"16.13.1",library:"ReactIs",type:"dependency",resources:["https://unpkg.com/react-is@{{version}}/umd/react-is.production.min.js"]},"styled-components":{version:"5.3.5",library:"styled",type:"dependency",resources:["https://unpkg.com/styled-components@{{version}}/dist/styled-components.min.js"]},moment:{version:"2.29.4",library:"moment",type:"dependency",resources:["https://unpkg.com/moment@{{version}}/moment.js"]},"@music163/tango-boot":{description:"云音乐低代码运行时框架",version:"0.3.5",library:"TangoBoot",type:"baseDependency",resources:["https://unpkg.com/@music163/tango-boot@{{version}}/dist/boot.js"]},"@music163/antd":{description:"云音乐低代码中后台应用基础物料",version:"0.2.6",library:"TangoAntd",type:"baseDependency",resources:["https://unpkg.com/@music163/antd@{{version}}/dist/index.js","https://unpkg.com/antd@4.24.13/dist/antd.css"],designerResources:["https://unpkg.com/@music163/antd@{{version}}/dist/designer.js","https://unpkg.com/antd@4.24.13/dist/antd.css"]}}})},{filename:"/README.md",code:"# readme"},{filename:"/src/index.less",code:"\nbody {\n  font-size: 12px;\n}\n"},{filename:"/src/style.css",code:"\n* {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  color: red;\n}\n"},{filename:"/src/index.js",code:"\nimport { runApp } from '@music163/tango-boot';\nimport routes from './routes';\nimport './services';\nimport './stores';\nimport './index.less';\n\nrunApp({\n  boot: {\n    mountElement: document.querySelector('#root'),\n    qiankun: false,\n  },\n\n  router: {\n    type: 'browser',\n    config: routes,\n  },\n});\n"},{filename:"/src/pages/index.js",code:'\nimport React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Page,\n  Section,\n  Button,\n  Input,\n  FormilyForm,\n  FormilyFormItem,\n  Table,\n} from "@music163/antd";\nimport { Space } from "@music163/antd";\nimport { LocalButton } from "../components";\nimport { OutButton } from "../components";\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Page title={tango.stores.app.title} subTitle={111}>\n        <Section tid="section0" />\n        <Section tid="section1" title="Section Title">\n          your input: <Input tid="input1" defaultValue="hello" />\n          copy input: <Input value={tango.page.input1?.value} />\n          <Table\n          columns={[\n            { title: "姓名", dataIndex: "name", key: "name" },\n            { title: "年龄", dataIndex: "age", key: "age" },\n            { title: "住址", dataIndex: "address", key: "address" },\n          ]}\n          tid="table1"\n        />\n        </Section>\n        <Section tid="section2">\n          <Space tid="space1">\n            <LocalButton />\n            <OutButton />\n            <Button tid="button1">button</Button>\n          </Space>\n        </Section>\n        <Section title="区块标题" tid="section3">\n          <FormilyForm tid="formilyForm1">\n            <FormilyFormItem name="input1" component="Input" label="表单项" />\n            <FormilyFormItem name="select1" component="Select" label="表单项" />\n          </FormilyForm>\n        </Section>\n        <Section title="原生 DOM" tid="section4">\n          <h1 style={{ ...{ color: "red" }, fontSize: 64 }}>\n            hello world\n          </h1>\n          <div\n            style={{\n              border: "1px solid #ccc",\n              borderRadius: "5px",\n              backgroundColor: "#f4f4f4",\n            }}\n          >\n            <form onSubmit={tango.stores.app.submitForm} style={{\n              padding: "10px",\n            }}>\n              <div>\n                <label>Username:</label>\n                <input\n                  type="text"\n                  id="username"\n                  name="username"\n                  style={{ margin: "5px" }}\n                />\n              </div>\n              <div>\n                <label>Password:</label>\n                <input\n                  type="password"\n                  id="password"\n                  name="password"\n                  style={{ margin: "5px" }}\n                />\n              </div>\n              <div>\n                <label>Role:</label>\n                <select id="role" name="role" style={{ margin: "5px" }}>\n                  <option value="admin">Admin</option>\n                  <option value="user">User</option>\n                </select>\n              </div>\n              <div>\n                <button\n                  type="submit"\n                  style={{\n                    marginTop: \'5px\',\n                    padding: "3px 10px",\n                    backgroundColor: "#007bff",\n                    color: "#fff",\n                    border: "none",\n                    borderRadius: "5px",\n                  }}\n                >\n                  Submit\n                </button>\n              </div>\n            </form>\n          </div>\n        </Section>\n      </Page>\n    );\n  }\n}\nexport default definePage(App);\n'},{filename:"/src/pages/detail.js",code:f},{filename:"/src/components/button.js",code:"\nimport React from 'react';\nimport { registerComponentPrototype } from '../utils';\n\nexport default function MyButton(props) {\n  return <button {...props}>my button</button>\n}\n\nregisterComponentPrototype({\n  name: 'LocalButton',\n  title: 'Local Button',\n  exportType: 'namedExport',\n  package: '/src/components',\n  props: [\n    { name: 'background', title: '背景色', setter: 'colorSetter'  },\n  ],\n});\n"},{filename:"/src/components/out-button.js",code:"\nimport React from 'react';\n\nexport default function OutButton(props) {\n  return <button {...props}>Out button (from other file)</button>\n}\n"},{filename:"/src/components/input.js",code:"\nimport React from 'react';\nimport { registerComponentPrototype } from '../utils';\n\nexport default function MyInput(props) {\n  return <input {...props} />;\n}\n\nregisterComponentPrototype({\n  name: 'LocalInput',\n  title: 'Local Input',\n  exportType: 'namedExport',\n  package: '/src/components',\n  props: [\n    { name: 'color', title: '文本色', setter: 'colorSetter'  },\n  ],\n});\n"},{filename:"/src/components/index.js",code:"\nexport { default as LocalButton } from './button';\nexport { default as LocalInput } from './input';\nexport { default as OutButton } from './out-button';\n"},{filename:"/src/routes.js",code:"\nimport Index from \"./pages/index\";\nimport Detail from \"./pages/detail\";\n\nconst routes = [\n  {\n    path: '/',\n    exact: true,\n    component: Index\n  },\n  {\n    path: '/detail',\n    exact: true,\n    component: Detail\n  },\n];\n\nexport default routes;\n"},{filename:"/src/stores/index.js",code:"\nexport { default as app } from './app';\nexport { default as counter } from './counter';\n"},{filename:"/src/stores/app.js",code:"\nimport { defineStore } from '@music163/tango-boot';\n\nexport default defineStore({\n  title: 'Page Title',\n\n  array: [1, 2, 3],\n\n  test: function() {\n    console.log('test');\n  },\n\n  submitForm: function(event) {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const role = formData.get(\"role\");\n    console.log(\"Submitted Data:\", { username, password, role });\n  }\n}, 'app');\n"},{filename:"/src/stores/counter.js",code:"\nimport { defineStore } from '@music163/tango-boot';\n\nconst counter = defineStore({\n  // state\n  num: 0,\n\n  // action\n  increment: () => counter.num++,\n\n  decrement: () => {\n    counter.num--;\n  },\n}, 'counter');\n\nexport default counter;\n"},{filename:"/src/services/index.js",code:"\nimport { defineServices } from '@music163/tango-boot';\nimport './sub';\n\nexport default defineServices({\n  longLongLongLongLongLongLongLongGet: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/cc974ffbaa7a85c77f30e4ce67deb67f/api/getUserProfile',\n    formatter: res => res.data,\n    headers: {\n      'Content-Type': 'application/json',\n    }\n  },\n  get: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/cc974ffbaa7a85c77f30e4ce67deb67f/api/getUserProfile',\n    formatter: res => res.data,\n    headers: {\n      'Content-Type': 'application/json',\n    }\n  },\n  list: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/anchor-list-normal',\n  },\n  add: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users',\n    method: 'post',\n  },\n  update: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users',\n    method: 'post',\n  },\n  delete: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users?id=1',\n  },\n});\n"},{filename:"/src/services/sub.js",code:"\nimport { defineServices } from '@music163/tango-boot';\n\nexport default defineServices({\n  list: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/anchor-list-normal',\n  },\n}, {\n  namespace: 'sub',\n});\n"},{filename:"/src/utils/index.js",code:"\nexport function registerComponentPrototype(proto) {\n  if (!proto) return;\n  if (!window.localTangoComponentPrototypes) {\n    window.localTangoComponentPrototypes = {};\n  }\n  if (proto.name) {\n    window.localTangoComponentPrototypes[proto.name] = proto;\n  }\n}\n"}],y=[{key:"$helpers",title:"工具函数",children:[{title:"设置变量值",key:'() => tango.setStoreValue("variableName", "variableValue")',type:"function",help:'设置状态值，tango.setStoreValue("variableName", "variableValue")'},{title:"获取变量值",key:'() => tango.getStoreValue("variableName")',type:"function",help:"获取状态值"},{title:"打开弹窗",key:'() => tango.openModal("")',type:"function"},{title:"关闭弹窗",key:'() => tango.closeModal("")',type:"function"},{title:"切换路由",key:'() => tango.navigateTo("/")',type:"function"},{title:"拷贝到剪贴板",key:'() => tango.copyToClipboard("hello")',type:"function"}]}];function x(){return(0,m.jsx)(o.xu,{width:"50px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",children:(0,m.jsx)(d.CO,{shape:"text",items:[{label:"回到首页",key:"home"},{label:"文档",key:"doc"},{label:"设置",key:"setting"}],children:(0,m.jsx)(i.Z,{})})})}function b(e){var n=e.name;return(0,m.jsxs)(o.xu,{display:"flex",alignItems:"center",columnGap:"l",children:[(0,m.jsx)(o.xu,{className:"ProjectName",fontSize:"18px",fontWeight:"bold",children:"Tango Playground"}),(0,m.jsxs)(o.xu,{className:"BranchName",as:"code",fontSize:"14px",children:[(0,m.jsx)(a.Z,{})," ",n||"demo"]})]})}(0,r.qX)({name:"fooSetter",component:function(e){var n=e.value,t=p()(e,u);return(0,m.jsxs)("code",l()(l()({},t),{},{children:["fooSetter: ",n]}))}})},7659:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var o=t(27424),i=t.n(o),a=t(62979),r=t(81821),s=t(94067),l=t(79159),c=t(42122),p=t.n(c),m=t(88734),u={name:"SnippetSuccessResult",title:"成功结果",icon:"icon-tupian",type:"snippet",package:"@music163/antd",initChildren:'\n<Section>\n  <Result\n      status="success"\n      title="Successfully Purchased Cloud Server ECS!"\n      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."\n      extra={[\n        <Button type="primary" key="console">\n          Go Console\n        </Button>,\n        <Button key="buy">Buy Again</Button>,\n      ]}\n    />\n</Section>\n',relatedImports:["Section","Result","Button"]};m.Section.siblingNames=["SnippetButtonGroup","Snippet2ColumnLayout","Snippet3ColumnLayout","SnippetSuccessResult"];var d,f,g,y,x=p()(p()(p()({},["div","span","h1","h2","p","a","img","ul","ol","li","input","button","form","table","tr","td","header","footer","nav","section","article","aside","main","video","audio","label","select","option","textarea","iframe"].reduce((function(e,n){return e[n]={name:n,title:n,hasChildren:!0,package:"",type:"element",props:[{name:"style",title:"样式",group:"style",setter:"expressionSetter"},{name:"className",title:"类名",setter:"textSetter"},{name:"id",title:"ID",setter:"textSetter"},{name:"onClick",title:"点击事件",setter:"actionSetter",group:"event"}]},e}),{})),m),{},{SnippetSuccessResult:u,Snippet2ColumnLayout:{name:"Snippet2ColumnLayout",title:"两列布局",icon:"icon-columns",type:"snippet",package:"@music163/antd",initChildren:"\n  <Columns columns={12}>\n    <Column colSpan={6}></Column>\n    <Column colSpan={6}></Column>\n  </Columns>\n  ",relatedImports:["Columns","Column"]},Snippet3ColumnLayout:{name:"Snippet3ColumnLayout",title:"三列布局",icon:"icon-column-3",type:"snippet",package:"@music163/antd",initChildren:"\n  <Columns columns={12}>\n    <Column colSpan={4}>\n    </Column>\n    <Column colSpan={4}>\n    </Column>\n    <Column colSpan={4}>\n  </Column>\n  </Columns>\n  ",relatedImports:["Columns","Column"]},SnippetButtonGroup:{name:"SnippetButtonGroup",title:"按钮组",icon:"icon-anniuzu",type:"snippet",package:"@music163/antd",initChildren:'\n  <Space>\n    <Button type="primary">按钮1</Button>\n    <Button>按钮2</Button>\n  </Space>\n  ',relatedImports:["Space","Button"]},Box:{name:"Box",title:"盒子",icon:"icon-mianban",type:"container",package:"@music163/antd",hasChildren:!0,siblingNames:["Box"],props:[{name:"aaa",title:"aaa",setter:"textSetter"},{name:"bbb",title:"bbb",setter:"textSetter",deprecated:!0},{name:"ccc",title:"ccc",setter:"textSetter",deprecated:!0},{name:"d",title:"d",setter:"textSetter"}]},Columns:{name:"Columns",type:"container",icon:"icon-column-4",package:"@music163/antd",hasChildren:!0,childrenNames:["Column"]},Column:{name:"Column",type:"container",icon:"icon-juxing",package:"@music163/antd",hasChildren:!0,siblingNames:["Column"]},Text:{name:"Text",type:"element",icon:"icon-wenzi",package:"@music163/antd",initChildren:"文本内容"},Placeholder:{name:"Placeholder",type:"element",package:"@music163/antd"},ButtonGroup:{name:"ButtonGroup",type:"element",package:"@music163/antd",hasChildren:!0,childrenNames:["Button"]}}),b=t(62662),h=t(91321),v=t(24969),S=t(56466),j=t(50067),C=t(10620),k=t(36027),I=t(92517),B=t(87363),w=t(861),P=t.n(w),T=t(70215),F=t.n(T),R=["files"],L={example:(d={title:"Example",files:[{filename:"/src/pages/index.js",code:'import React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Button,\n  Input\n} from "@music163/antd";\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button>Hello World!</Button>\n        <Input placeholder="This is example demo" />\n      </div>\n    );\n  }\n}\nexport default definePage(App);'}]},f=d.files,g=F()(d,R),y=b.EX.filter((function(e){return null==f?void 0:f.every((function(n){return n.filename!==e.filename}))})),y.push.apply(y,P()(f)),p()(p()({},g),{},{files:y}))},E=t(41777),z=t(86074),D={common:[{title:"常用",items:["Button","Section","Columns","Column","Box","Text","Space","Typography","Title","Paragraph","Table","Each"]},{title:"输入",items:["Input","InputNumber","Select"]},{title:"Formily表单",items:["FormilyForm","FormilyFormItem","FormilySubmit","FormilyReset"]},{title:"数据展示",items:["Comment"]}]},N=new l.j$({entry:"/src/index.js",files:b.EX,prototypes:x});window.__workspace__=N;var A=(0,l.r)({workspace:N,menuData:D,defaultActiveView:"design"});window.__workspace__=N;var O=new s.Bz({context:"iframe"});function M(){var e,n=(0,B.useState)(!1),t=i()(n,2),o=t[0],l=t[1],c=r.Form.useForm(),p=i()(c,1)[0],m=(0,E.TH)(),u=(0,E.bS)({path:"/:name"}),d=(0,B.useMemo)((function(){var e,n;return null!=u&&null!==(e=u.params)&&void 0!==e&&e.name?null==u||null===(n=u.params)||void 0===n?void 0:n.name:new URLSearchParams(m.search).get("name")||void 0}),[null==u?void 0:u.params,m.search]);return(0,B.useEffect)((function(){var e,n;d&&L[d]&&(null===(e=L[d])||void 0===e||null===(e=e.files)||void 0===e||null===(n=e.forEach)||void 0===n||n.call(e,(function(e){N.addFile(e.filename,e.code)})))}),[d]),(0,z.jsx)(s.lg,{theme:s.Qp,engine:A,config:{customActionVariables:b.zf,customExpressionVariables:b.zf},sandboxQuery:O,children:(0,z.jsxs)(s.Ab,{logo:(0,z.jsx)(b.TR,{}),description:(0,z.jsx)(b.re,{name:d&&L[d]&&((null===(e=L[d])||void 0===e?void 0:e.title)||d)}),actions:(0,z.jsxs)(a.xu,{px:"l",children:[(0,z.jsxs)(s.o8,{children:[(0,z.jsx)(s.o8.Item,{placement:"left"},"routeSwitch"),(0,z.jsx)(s.o8.Item,{placement:"left",children:(0,z.jsx)(I.aU,{tooltip:"添加页面",shape:"outline",icon:(0,z.jsx)(v.Z,{}),onClick:function(){return l(!0)}})},"addPage"),(0,z.jsx)(s.o8.Item,{placement:"left"},"history"),(0,z.jsx)(s.o8.Item,{placement:"left"},"preview"),(0,z.jsx)(s.o8.Item,{placement:"right"},"modeSwitch"),(0,z.jsx)(s.o8.Item,{placement:"right"},"togglePanel"),(0,z.jsx)(s.o8.Separator,{}),(0,z.jsx)(s.o8.Item,{placement:"right",children:(0,z.jsx)(r.Space,{children:(0,z.jsx)(r.Button,{type:"primary",children:"发布"})})})]}),(0,z.jsx)(r.Modal,{title:"添加新页面",open:o,onCancel:function(){return l(!1)},footer:null,children:(0,z.jsxs)(r.Form,{form:p,onFinish:function(e){N.addViewFile(e.name,b.T9),l(!1)},layout:"vertical",children:[(0,z.jsx)(r.Form.Item,{label:"文件名",name:"name",required:!0,rules:[{required:!0}],children:(0,z.jsx)(r.Input,{placeholder:"请输入文件名"})}),(0,z.jsx)(r.Form.Item,{children:(0,z.jsx)(r.Button,{type:"primary",htmlType:"submit",children:"提交"})})]})})]}),children:[(0,z.jsxs)(s.YE,{children:[(0,z.jsx)(s.YE.Item,{label:"组件",icon:(0,z.jsx)(S.Z,{}),widgetProps:{menuData:D}},"components"),(0,z.jsx)(s.YE.Item,{label:"结构",icon:(0,z.jsx)(j.Z,{})},"outline"),(0,z.jsx)(s.YE.Item,{label:"变量",icon:(0,z.jsx)(C.Z,{}),isFloat:!0,width:800},"variables"),(0,z.jsx)(s.YE.Item,{label:"接口",icon:(0,z.jsx)(k.Z,{}),isFloat:!0,width:800},"dataSource"),(0,z.jsx)(s.YE.Item,{label:"依赖",icon:(0,z.jsx)(I.N8,{}),isFloat:!0,width:800},"dependency")]}),(0,z.jsxs)(s.qs,{children:[(0,z.jsx)(s.Jd,{mode:"code",children:(0,z.jsx)(s.pq,{})}),(0,z.jsx)(s.Jd,{mode:"design",children:(0,z.jsx)(s.pv,{bundlerURL:"https://tango-demo.musicfe.com",onMessage:function(e){if("done"===e.type){var n=O.window;n.localTangoComponentPrototypes&&N.setComponentPrototypes(n.localTangoComponentPrototypes)}},navigatorExtra:(0,z.jsx)(r.Button,{size:"small",children:"hello world"})})})]}),(0,z.jsx)(s.TD,{})]})})}(0,h.Z)({scriptUrl:"//at.alicdn.com/t/c/font_2891794_151xsllxqd7.js"})}}]);
//# sourceMappingURL=p__index.async.js.map