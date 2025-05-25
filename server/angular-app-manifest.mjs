
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'mr.yusuf-e-commerce',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5103, hash: '4ab8ff46ca1cd0de0a6f2bb89c04e4b45654c5b156aaa175034d0332959dce52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1075, hash: '11ded6cb72843540df73b06042c72cfa7a56fadb3d0cc4b031e3b3d94c677a25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-EMBJAXFM.css': {size: 315637, hash: 'jx7i+ifeyGg', text: () => import('./assets-chunks/styles-EMBJAXFM_css.mjs').then(m => m.default)}
  },
};
