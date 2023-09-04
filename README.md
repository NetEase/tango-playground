# `playground`

搭建平台演示示例

## 开发

开发前需先写入 hosts 文件

```hosts
127.0.0.1 local.netease.com
```

此外还需要参考 Tango 的文档 [启动本地沙箱](https://netease.github.io/tango/docs/designer/quick-start#%E5%90%AF%E5%8A%A8%E6%9C%AC%E5%9C%B0%E6%B2%99%E7%AE%B1) 一节在本地运行沙箱（线上版本沙箱因 GitHub Pages 限制，无法返回 http 响应头），启动后确认 https://local.netease.com:8443 能访问到沙箱产物并信任自签证书

若沙箱的地址或端口不一致，请指定 `SANDBOX_BUNDLER_URL` 环境变量或修改 `src/pages/index.tsx` 中 `<Sandbox>` 的 `bundlerURL` 属性

然后安装依赖并启动即可

```sh
npm i
npm start
```

启动后访问 https://local.netease.com:6006/designer 即可看到 playground

## Demo 编写

demo 均放置在 `/src/demo` 目录下，每个目录就是一个 demo 示例

目前暂不支持动态配置，因此如果需要新增 demo，请 **严格按照以下流程初始化**

1.  在 `/src/demo` 目录下创建一个目录，目录名为 demo 的名称（例如 `your-demo`）

2.  在新建的目录下自由创建文件，建议基于现有低代码的格式建立文件树（参考 `/src/mock/project.ts`）  
    新的 demo 模板会默认基于 `/src/mock/project.ts` 扩展。也就是说，你只需要创建你需要修改的文件（一般只需要创建 `src/pages/index.js` 即入口页面）即可。其他的文件如 `tango.config.json` 和 `package.json` 等文件，除非需要修改（例如调整依赖？），一般不需要再复制创建，下面会自动合并默认的模板。

3.  在该目录下创建 `index.ts` 文件，将你使用的文件用 `raw-loader` 给 import 进来，生成 Tango 需要的文件格式，然后 export：
    ```ts
    // @ts-nocheck
    import srcPagesIndex from '!!raw-loader!./src/pages/index.js';
    import srcStoresIndex from '!!raw-loader!./src/stores/index.js';
    import tangoConfigJson from '!!raw-loader!./tango.config.json';

    export default [{
        filename: '/src/pages/index.js', code: srcPagesIndex,
        filename: '/src/stores/index.js', code: srcStoresIndex,
        filename: '/tango.config.json', code: tangoConfigJson,
    }];
    ```

4.  修改 `/src/demo` 目录下的 `index.ts` 文件，将上面的文件夹 import 进来，使用 `mergeDemo()` 包裹，然后在 export default 中导出，导出时填写的 key 就是模板名称：
    ```ts
    import { mergeDemo } from '../utils';
    // ...其他的 demo...
    import yourDemo from './your-demo';

    export default {
        // ...其他的 demo...
        'your-demo': mergeDemo(yourDemo),
    };
    ```

5.  编写完成后，访问 https://local.netease.com:6006/designer/[demo-key] 即可查看效果  
    如果 demo 不存在，会在控制台打出 warning，请确认已按照上述方式编写 demo 模板并正确导出

如果遇到问题，请参考 `/src/demo/example` 确认示例模板
