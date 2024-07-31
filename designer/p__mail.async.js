"use strict";(self.webpackChunkplayground=self.webpackChunkplayground||[]).push([[709],{62662:function(n,e,t){t.d(e,{TR:function(){return x},re:function(){return b},zf:function(){return y},T9:function(){return f},EX:function(){return g}});t(87363);var o=t(62979),r=(t(81821),t(60532)),a=t(65184),i=t(94067),s=t(42122),c=t.n(s),p=t(70215),l=t.n(p),m=t(86074),d=["value"];var u=t(92517),f='\nimport React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Page,\n  Section,\n} from "@music163/antd";\n\nfunction App() {\n  return (<Page title="Detail Page">\n    <Section></Section>\n  </Page>)\n}\n\nexport default definePage(App);\n',g=[{filename:"/package.json",code:JSON.stringify({name:"demo",private:!0,dependencies:{"@music163/antd":"0.2.5","@music163/tango-boot":"0.3.5",react:"17.0.2","react-dom":"17.0.2","prop-types":"15.7.2",tslib:"2.5.0"}})},{filename:"/tango.config.json",code:JSON.stringify({designerConfig:{autoGenerateComponentId:!0},packages:{react:{version:"17.0.2",library:"React",type:"dependency",resources:["https://unpkg.com/react@{{version}}/umd/react.development.js"]},"react-dom":{version:"17.0.2",library:"ReactDOM",type:"dependency",resources:["https://unpkg.com/react-dom@{{version}}/umd/react-dom.development.js"]},"react-is":{version:"16.13.1",library:"ReactIs",type:"dependency",resources:["https://unpkg.com/react-is@{{version}}/umd/react-is.production.min.js"]},"styled-components":{version:"5.3.5",library:"styled",type:"dependency",resources:["https://unpkg.com/styled-components@{{version}}/dist/styled-components.min.js"]},moment:{version:"2.29.4",library:"moment",type:"dependency",resources:["https://unpkg.com/moment@{{version}}/moment.js"]},"@music163/tango-boot":{description:"云音乐低代码运行时框架",version:"0.3.5",library:"TangoBoot",type:"baseDependency",resources:["https://unpkg.com/@music163/tango-boot@{{version}}/dist/boot.js"]},"@music163/antd":{description:"云音乐低代码中后台应用基础物料",version:"0.2.6",library:"TangoAntd",type:"baseDependency",resources:["https://unpkg.com/@music163/antd@{{version}}/dist/index.js","https://unpkg.com/antd@4.24.13/dist/antd.css"],designerResources:["https://unpkg.com/@music163/antd@{{version}}/dist/designer.js","https://unpkg.com/antd@4.24.13/dist/antd.css"]}}})},{filename:"/README.md",code:"# readme"},{filename:"/src/index.less",code:"\nbody {\n  font-size: 12px;\n}\n"},{filename:"/src/style.css",code:"\n* {\n  margin: 0;\n  padding: 0;\n}\n\np {\n  color: red;\n}\n"},{filename:"/src/index.js",code:"\nimport { runApp } from '@music163/tango-boot';\nimport routes from './routes';\nimport './services';\nimport './stores';\nimport './index.less';\n\nrunApp({\n  boot: {\n    mountElement: document.querySelector('#root'),\n    qiankun: false,\n  },\n\n  router: {\n    type: 'browser',\n    config: routes,\n  },\n});\n"},{filename:"/src/pages/index.js",code:'\nimport React from "react";\nimport { definePage } from "@music163/tango-boot";\nimport {\n  Page,\n  Section,\n  Button,\n  Input,\n  FormilyForm,\n  FormilyFormItem,\n  Table,\n} from "@music163/antd";\nimport { Space } from "@music163/antd";\nimport { LocalButton } from "../components";\nimport { OutButton } from "../components";\n\nclass App extends React.Component {\n  render() {\n    return (\n      <Page title={tango.stores.app.title} subTitle={111}>\n        <Section tid="section0" />\n        <Section tid="section1" title="Section Title">\n          your input: <Input tid="input1" defaultValue="hello" />\n          copy input: <Input value={tango.page.input1?.value} />\n          <Table\n          columns={[\n            { title: "姓名", dataIndex: "name", key: "name" },\n            { title: "年龄", dataIndex: "age", key: "age" },\n            { title: "住址", dataIndex: "address", key: "address" },\n          ]}\n          tid="table1"\n        />\n        </Section>\n        <Section tid="section2">\n          <Space tid="space1">\n            <LocalButton />\n            <OutButton />\n            <Button tid="button1">button</Button>\n          </Space>\n        </Section>\n        <Section title="区块标题" tid="section3">\n          <FormilyForm tid="formilyForm1">\n            <FormilyFormItem name="input1" component="Input" label="表单项" />\n            <FormilyFormItem name="select1" component="Select" label="表单项" />\n          </FormilyForm>\n        </Section>\n        <Section title="原生 DOM" tid="section4">\n          <h1 style={{ ...{ color: "red" }, fontSize: 64 }}>\n            hello world\n          </h1>\n          <div\n            style={{\n              border: "1px solid #ccc",\n              borderRadius: "5px",\n              backgroundColor: "#f4f4f4",\n            }}\n          >\n            <form onSubmit={tango.stores.app.submitForm} style={{\n              padding: "10px",\n            }}>\n              <div>\n                <label>Username:</label>\n                <input\n                  type="text"\n                  id="username"\n                  name="username"\n                  style={{ margin: "5px" }}\n                />\n              </div>\n              <div>\n                <label>Password:</label>\n                <input\n                  type="password"\n                  id="password"\n                  name="password"\n                  style={{ margin: "5px" }}\n                />\n              </div>\n              <div>\n                <label>Role:</label>\n                <select id="role" name="role" style={{ margin: "5px" }}>\n                  <option value="admin">Admin</option>\n                  <option value="user">User</option>\n                </select>\n              </div>\n              <div>\n                <button\n                  type="submit"\n                  style={{\n                    marginTop: \'5px\',\n                    padding: "3px 10px",\n                    backgroundColor: "#007bff",\n                    color: "#fff",\n                    border: "none",\n                    borderRadius: "5px",\n                  }}\n                >\n                  Submit\n                </button>\n              </div>\n            </form>\n          </div>\n        </Section>\n      </Page>\n    );\n  }\n}\nexport default definePage(App);\n'},{filename:"/src/pages/detail.js",code:f},{filename:"/src/components/button.js",code:"\nimport React from 'react';\nimport { registerComponentPrototype } from '../utils';\n\nexport default function MyButton(props) {\n  return <button {...props}>my button</button>\n}\n\nregisterComponentPrototype({\n  name: 'LocalButton',\n  title: 'Local Button',\n  exportType: 'namedExport',\n  package: '/src/components',\n  props: [\n    { name: 'background', title: '背景色', setter: 'colorSetter'  },\n  ],\n});\n"},{filename:"/src/components/out-button.js",code:"\nimport React from 'react';\n\nexport default function OutButton(props) {\n  return <button {...props}>Out button (from other file)</button>\n}\n"},{filename:"/src/components/input.js",code:"\nimport React from 'react';\nimport { registerComponentPrototype } from '../utils';\n\nexport default function MyInput(props) {\n  return <input {...props} />;\n}\n\nregisterComponentPrototype({\n  name: 'LocalInput',\n  title: 'Local Input',\n  exportType: 'namedExport',\n  package: '/src/components',\n  props: [\n    { name: 'color', title: '文本色', setter: 'colorSetter'  },\n  ],\n});\n"},{filename:"/src/components/index.js",code:"\nexport { default as LocalButton } from './button';\nexport { default as LocalInput } from './input';\nexport { default as OutButton } from './out-button';\n"},{filename:"/src/routes.js",code:"\nimport Index from \"./pages/index\";\nimport Detail from \"./pages/detail\";\n\nconst routes = [\n  {\n    path: '/',\n    exact: true,\n    component: Index\n  },\n  {\n    path: '/detail',\n    exact: true,\n    component: Detail\n  },\n];\n\nexport default routes;\n"},{filename:"/src/stores/index.js",code:"\nexport { default as app } from './app';\nexport { default as counter } from './counter';\n"},{filename:"/src/stores/app.js",code:"\nimport { defineStore } from '@music163/tango-boot';\n\nexport default defineStore({\n  title: 'Page Title',\n\n  array: [1, 2, 3],\n\n  test: function() {\n    console.log('test');\n  },\n\n  submitForm: function(event) {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    const username = formData.get(\"username\");\n    const password = formData.get(\"password\");\n    const role = formData.get(\"role\");\n    console.log(\"Submitted Data:\", { username, password, role });\n  }\n}, 'app');\n"},{filename:"/src/stores/counter.js",code:"\nimport { defineStore } from '@music163/tango-boot';\n\nconst counter = defineStore({\n  // state\n  num: 0,\n\n  // action\n  increment: () => counter.num++,\n\n  decrement: () => {\n    counter.num--;\n  },\n}, 'counter');\n\nexport default counter;\n"},{filename:"/src/services/index.js",code:"\nimport { defineServices } from '@music163/tango-boot';\nimport './sub';\n\nexport default defineServices({\n  longLongLongLongLongLongLongLongGet: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/cc974ffbaa7a85c77f30e4ce67deb67f/api/getUserProfile',\n    formatter: res => res.data,\n    headers: {\n      'Content-Type': 'application/json',\n    }\n  },\n  get: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/cc974ffbaa7a85c77f30e4ce67deb67f/api/getUserProfile',\n    formatter: res => res.data,\n    headers: {\n      'Content-Type': 'application/json',\n    }\n  },\n  list: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/anchor-list-normal',\n  },\n  add: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users',\n    method: 'post',\n  },\n  update: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users',\n    method: 'post',\n  },\n  delete: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/api/users?id=1',\n  },\n});\n"},{filename:"/src/services/sub.js",code:"\nimport { defineServices } from '@music163/tango-boot';\n\nexport default defineServices({\n  list: {\n    url: 'https://nei.hz.netease.com/api/apimock-v2/c45109399a1d33d83e32a59984b25b00/anchor-list-normal',\n  },\n}, {\n  namespace: 'sub',\n});\n"},{filename:"/src/utils/index.js",code:"\nexport function registerComponentPrototype(proto) {\n  if (!proto) return;\n  if (!window.localTangoComponentPrototypes) {\n    window.localTangoComponentPrototypes = {};\n  }\n  if (proto.name) {\n    window.localTangoComponentPrototypes[proto.name] = proto;\n  }\n}\n"}],y=[{key:"$helpers",title:"工具函数",children:[{title:"设置变量值",key:'() => tango.setStoreValue("variableName", "variableValue")',type:"function",help:'设置状态值，tango.setStoreValue("variableName", "variableValue")'},{title:"获取变量值",key:'() => tango.getStoreValue("variableName")',type:"function",help:"获取状态值"},{title:"打开弹窗",key:'() => tango.openModal("")',type:"function"},{title:"关闭弹窗",key:'() => tango.closeModal("")',type:"function"},{title:"切换路由",key:'() => tango.navigateTo("/")',type:"function"},{title:"拷贝到剪贴板",key:'() => tango.copyToClipboard("hello")',type:"function"}]}];function x(){return(0,m.jsx)(o.xu,{width:"50px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",children:(0,m.jsx)(u.CO,{shape:"text",items:[{label:"回到首页",key:"home"},{label:"文档",key:"doc"},{label:"设置",key:"setting"}],children:(0,m.jsx)(r.Z,{})})})}function b(n){var e=n.name;return(0,m.jsxs)(o.xu,{display:"flex",alignItems:"center",columnGap:"l",children:[(0,m.jsx)(o.xu,{className:"ProjectName",fontSize:"18px",fontWeight:"bold",children:"Tango Playground"}),(0,m.jsxs)(o.xu,{className:"BranchName",as:"code",fontSize:"14px",children:[(0,m.jsx)(a.Z,{})," ",e||"demo"]})]})}(0,i.qX)({name:"fooSetter",component:function(n){var e=n.value,t=l()(n,d);return(0,m.jsxs)("code",c()(c()({},t),{},{children:["fooSetter: ",e]}))}})},48263:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var o=t(27424),r=t.n(o),a=t(87363),i=t(62979),s=t(81821),c=t(94067),p=t(79159),l=t(62662),m=t(91321),d=t(56466),u=t(50067),f=t(1413),g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 680h-54V540H546v-92h238c8.8 0 16-7.2 16-16V168c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16h238v92H190v140h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8h-54v-72h220v72h-54c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8V688c0-4.4-3.6-8-8-8zM256 805.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zm288 0c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM288 384V216h448v168H288zm544 421.3c0 1.5-1.2 2.7-2.7 2.7h-58.7c-1.5 0-2.7-1.2-2.7-2.7v-58.7c0-1.5 1.2-2.7 2.7-2.7h58.7c1.5 0 2.7 1.2 2.7 2.7v58.7zM360 300a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"cluster",theme:"outlined"},y=t(84089),x=function(n,e){return a.createElement(y.Z,(0,f.Z)((0,f.Z)({},n),{},{ref:e,icon:g}))};x.displayName="ClusterOutlined";var b=a.forwardRef(x),h=[{filename:"/package.json",code:JSON.stringify({name:"demo",private:!0,dependencies:{"@music163/tango-mail":"0.2.4","@music163/tango-boot":"0.2.5",react:"17.0.2","react-dom":"17.0.2","prop-types":"15.7.2",tslib:"2.5.0"}})},{filename:"/tango.config.json",code:JSON.stringify({designerConfig:{autoGenerateComponentId:!0},packages:{react:{version:"17.0.2",library:"React",type:"dependency",resources:["https://unpkg.com/react@{{version}}/umd/react.development.js"]},"react-dom":{version:"17.0.2",library:"ReactDOM",type:"dependency",resources:["https://unpkg.com/react-dom@{{version}}/umd/react-dom.development.js"]},"react-is":{version:"16.13.1",library:"ReactIs",type:"dependency",resources:["https://unpkg.com/react-is@{{version}}/umd/react-is.production.min.js"]},"@music163/tango-boot":{description:"云音乐低代码运行时框架",version:"0.2.5",library:"TangoBoot",type:"baseDependency",resources:["https://unpkg.com/@music163/tango-boot@{{version}}/dist/boot.js"]},"@music163/tango-mail":{description:"TangoMail 基础物料",version:"0.2.4",library:"TangoMail",type:"baseDependency",resources:["https://unpkg.com/@music163/tango-mail@{{version}}/dist/index.js"],designerResources:["https://unpkg.com/@music163/tango-mail@{{version}}/dist/designer.js"]}}})},{filename:"/README.md",code:"# readme"},{filename:"/src/index.js",code:"\nimport { runApp } from '@music163/tango-boot';\nimport routes from './routes';\n\nrunApp({\n  boot: {\n    mountElement: document.querySelector('#root'),\n    qiankun: false,\n  },\n\n  router: {\n    type: 'browser',\n    config: routes,\n  },\n});\n"},{filename:"/src/pages/mail.js",code:"\nimport React from 'react';\nimport {\n  Body,\n  Button,\n  Container,\n  Head,\n  Hr,\n  Html,\n  Preview,\n  Section,\n  Text,\n} from '@music163/tango-mail';\n\nconst WelcomeEmail = () => (\n  <Html>\n    <Head />\n    <Preview>The sales intelligence platform that helps you uncover qualified leads.</Preview>\n    <Body style={main}>\n      <Container style={container}>\n        <Text style={paragraph}>Hi wells,</Text>\n        <Text style={paragraph}>\n          Welcome to Koala, the sales intelligence platform that helps you uncover qualified leads\n          and close deals faster.\n        </Text>\n        <Section style={btnContainer}>\n          <Button style={button} href=\"https://getkoala.com\">\n            Get started\n          </Button>\n        </Section>\n        <Text style={paragraph}>\n          Best,\n          The Koala team\n        </Text>\n        <Hr style={hr} />\n        <Text style={footer}>470 Noor Ave STE B #1148, South San Francisco, CA 94080</Text>\n      </Container>\n    </Body>\n  </Html>\n);\n\nconst main = {\n  backgroundColor: '#ffffff',\n  fontFamily:\n    '-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif',\n};\n\nconst container = {\n  margin: '0 auto',\n  padding: '20px 0 48px',\n};\n\nconst paragraph = {\n  fontSize: '16px',\n  lineHeight: '26px',\n};\n\nconst btnContainer = {\n  textAlign: 'center',\n};\n\nconst button = {\n  backgroundColor: '#5F51E8',\n  borderRadius: '3px',\n  color: '#fff',\n  fontSize: '16px',\n  textDecoration: 'none',\n  textAlign: 'center',\n  display: 'block',\n  padding: '12px',\n};\n\nconst hr = {\n  borderColor: '#cccccc',\n  margin: '20px 0',\n};\n\nconst footer = {\n  color: '#8898aa',\n  fontSize: '12px',\n};\n\nexport default WelcomeEmail;\n"},{filename:"/src/routes.js",code:"\nimport Mail from \"./pages/mail\";\n\nconst routes = [\n  {\n    path: '/',\n    exact: true,\n    component: Mail,\n  },\n];\n\nexport default routes;\n"}],v=t(86074),j=new p.j$({entry:"/src/index.js",files:h}),S=(0,p.r)({workspace:j});window.__mailWorkspace__=j;var k=new c.Bz({context:"iframe"});function T(){var n=(0,a.useState)(!0),e=r()(n,2),t=e[0],o=e[1],p=(0,a.useState)(!1),m=r()(p,2),f=m[0],g=m[1];return(0,v.jsx)(c.lg,{theme:c.Qp,engine:S,config:{customActionVariables:l.zf,customExpressionVariables:l.zf},sandboxQuery:k,children:(0,v.jsxs)(c.Ab,{logo:(0,v.jsx)(l.TR,{}),description:(0,v.jsx)(l.re,{}),actions:(0,v.jsx)(i.xu,{px:"l",children:(0,v.jsxs)(c.o8,{children:[(0,v.jsx)(c.o8.Item,{placement:"left"},"history"),(0,v.jsx)(c.o8.Item,{placement:"left"},"preview"),(0,v.jsx)(c.o8.Item,{placement:"right"},"modeSwitch"),(0,v.jsx)(c.o8.Item,{placement:"right"},"togglePanel"),(0,v.jsx)(c.o8.Separator,{}),(0,v.jsx)(c.o8.Item,{placement:"right",children:(0,v.jsx)(s.Space,{children:(0,v.jsx)(s.Button,{type:"primary",children:"发布"})})})]})}),children:[(0,v.jsxs)(c.YE,{children:[(0,v.jsx)(c.YE.Item,{label:"组件",icon:(0,v.jsx)(d.Z,{}),widgetProps:{menuData:f,loading:t}},"components"),(0,v.jsx)(c.YE.Item,{label:"结构",icon:(0,v.jsx)(u.Z,{})},"outline"),(0,v.jsx)(c.YE.Item,{label:"依赖",icon:(0,v.jsx)(b,{}),isFloat:!0,width:800},"dependency")]}),(0,v.jsxs)(c.qs,{children:[(0,v.jsx)(c.Jd,{mode:"design",children:(0,v.jsx)(c.pv,{onMessage:function(n){if("done"===n.type){var e=k.window;e.TangoMail&&(e.TangoMail.menuData&&(g(e.TangoMail.menuData),S.designer.setMenuData(e.TangoMail.menuData)),e.TangoMail.prototypes&&j.setComponentPrototypes(e.TangoMail.prototypes)),o(!1)}},navigatorExtra:(0,v.jsx)(s.Button,{size:"small",children:"hello world"})})}),(0,v.jsx)(c.Jd,{mode:"code",children:(0,v.jsx)(c.pq,{})})]}),(0,v.jsx)(c.TD,{})]})})}(0,m.Z)({scriptUrl:"//at.alicdn.com/t/c/font_2891794_151xsllxqd7.js"})}}]);
//# sourceMappingURL=p__mail.async.js.map