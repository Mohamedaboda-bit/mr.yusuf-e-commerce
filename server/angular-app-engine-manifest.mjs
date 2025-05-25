
export default {
  basePath: 'mr.yusuf-e-commerce',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
