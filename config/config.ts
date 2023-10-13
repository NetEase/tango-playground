import path from 'path';

export default {
  base: '/designer',
  publicPath: '/designer/',
  outputPath: './dist/designer/',
  title: 'Tango Playground',
  routes: [
    {
      exact: true,
      path: '/',
      component: 'index',
      name: '首页',
    },
    {
      exact: false,
      path: '/:name',
      component: 'index',
      name: '首页',
    },
  ],
  devServer: {
    host: 'local.netease.com',
    port: 8008,
    https: {
      key: path.resolve(__dirname, 'local.netease.com-key.pem'),
      cert: path.resolve(__dirname, 'local.netease.com.pem'),
    },
    headers: { 'Origin-Agent-Cluster': '?0' },
  },
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    moment: 'moment',
    antd: 'antd',
  },
  chainWebpack: (config: any) => {
    // @see https://github.com/graphql/graphql-js/issues/1272#issuecomment-393903706
    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type('javascript/auto');
    return config;
  },
  define: {
    'process.env.SANDBOX_BUNDLER_URL': process.env.SANDBOX_BUNDLER_URL ?? (
      process.env.NODE_ENV === 'development'
        ? `https://${process.env.HOST || 'local.netease.com'}:8443`
        : null
    ),
  }
};
