const path = require('node:path');
const remarkShikiTwoslash = require('remark-shiki-twoslash').default;

module.exports = async () => {
  const nodeTypes = await import('@mdx-js/mdx').then(x => x.nodeTypes);
  const rehypeRaw = await import('rehype-raw').then(x => x.default);

  /** @type {import('remark-shiki-twoslash').Options} */
  const shikiOptions = {
    theme: 'dark-plus',
    addTryButton: true
  };

  /** @type {ReturnType<import('@next/mdx')>} */
  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      // If you use remark-gfm, you'll need to use next.config.mjs
      // as the package is ESM only
      // https://github.com/remarkjs/remark-gfm#install
      remarkPlugins: [[remarkShikiTwoslash, { theme: 'dark-plus' }]],
      remarkPlugins: [[remarkShikiTwoslash, shikiOptions]],
      // rehypePlugins: [[rehypeRaw, { passThrough: nodeTypes }]],
      rehypePlugins: [[rehypeRaw]],
      providerImportSource: '@mdx-js/react'
    }
  });

  return withMDX({
    reactStrictMode: true,
    poweredByHeader: false,
    compiler: {
      emotion: true
    },
    pageExtensions: ['ts', 'tsx', 'md', 'mdx']
  });
};
