import path from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
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
    { path: '/docs', component: 'docs' },
  ],
  npmClient: 'yarn',
  mfsu: false,
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    moment: 'moment',
    antd: 'antd',
  },
  headScripts: [
    'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js',
    'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js',
    'https://cdn.jsdelivr.net/npm/react-is@18.2.0/umd/react-is.production.min.js',
    'https://cdn.jsdelivr.net/npm/moment/min/moment-with-locales.js',
    'https://cdn.jsdelivr.net/npm/styled-components@5.3.11/dist/styled-components.js',
    'https://cdn.jsdelivr.net/npm/antd@4.24.13/dist/antd-with-locales.min.js',
    'https://cdn.jsdelivr.net/npm/prettier@2.6.0/standalone.js',
    'https://cdn.jsdelivr.net/npm/prettier@2.6.0/parser-babel.js',
  ],
  https: {
    key: path.resolve(__dirname, 'local.netease.com-key.pem'),
    cert: path.resolve(__dirname, 'local.netease.com.pem'),
  },
  jsMinifier: 'terser',
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
  monorepoRedirect: {},
  define: {
    'process.env.SANDBOX_BUNDLER_URL': process.env.SANDBOX_BUNDLER_URL ?? (
      process.env.NODE_ENV === 'development'
        ? `https://${process.env.HOST || 'local.netease.com'}:8443`
        : null
    ),
  }
});
