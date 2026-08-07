// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import remarkMermaid from './src/remark-mermaid.js';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
  },
  markdown: {
    // astro-mermaid registers its transform on the markdown processor, which
    // .md files use but @astrojs/mdx does not. Register a top-level remark
    // plugin (coerced into the processor AND read directly by MDX) so mermaid
    // blocks render on both .md and .mdx pages.
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    mermaid({
      // Port of the original Slidev setup/mermaid.ts palette for flowchart 'base' theme
      theme: 'base',
      themeVariables: {
        darkMode: true,
        fontFamily: 'Inter, sans-serif',
        background: '#1e293b',
        mainBkg: '#334155',
        primaryColor: '#334155',
        primaryTextColor: '#e2e8f0',
        primaryBorderColor: '#9370DB',
        lineColor: '#94a3b8',
        textColor: '#e2e8f0',
        clusterBkg: '#0f172a',
        clusterBorder: '#475569',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0f172a',
        edgeLabelBackground: '#1e293b',
        fontSize: '26px',
      },
    }),
    starlight({
      title: 'The Keeper Blueprint',
      description:
        'A phased, long-term athletic development courseware for youth soccer goalkeeper coaches, aligned to physical and cognitive readiness.',
      customCss: ['./src/styles/global.css'],
      sidebar: [
        { label: 'Course Dashboard', link: '/' },
        {
          label: 'Ages 6-9',
          autogenerate: { directory: 'ages-6-9' },
        },
        {
          label: 'Ages 9-12',
          autogenerate: { directory: 'ages-9-12' },
        },
        {
          label: 'Ages 12-14',
          autogenerate: { directory: 'ages-12-14' },
        },
        {
          label: 'Expectations Matrix',
          autogenerate: { directory: 'expectations-matrix' },
        },
        {
          label: 'Reference Library',
          autogenerate: { directory: 'reference-library' },
        },
        {
          label: 'Coaches Toolbox',
          autogenerate: { directory: 'coaches-toolbox' },
        },
        { label: 'Contact', link: '/contact/' },
      ],
      social: [
        { icon: 'email', label: 'Email', href: 'mailto:charlesjnichols@gmail.com' },
      ],
    }),
  ],
});