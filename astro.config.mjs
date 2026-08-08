// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import remarkGfm from 'remark-gfm';
import remarkMermaid from './src/remark-mermaid.js';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
  },
  markdown: {
    // 2. Add remarkGfm here so MDX and Astro parse tables correctly
    remarkPlugins: [remarkGfm, remarkMermaid],
  },
  integrations: [
    mermaid({
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
      head: [
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-7EJ4KQRKGV',
          },
        },
        {
          tag: 'script',
          content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7EJ4KQRKGV');`,
        },
      ],
      components: {
        Footer: './src/components/Footer.astro',
      },
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
          label: 'Coaches Toolbox',
          autogenerate: { directory: 'coaches-toolbox' },
        },
        {
          label: 'Expectations Matrix',
          autogenerate: { directory: 'expectations-matrix' },
        },
        {
          label: 'Reference Library',
          autogenerate: { directory: 'reference-library' },
        },
        { label: 'Contact', link: '/contact/' },
      ],
      social: [
        { icon: 'email', label: 'Email', href: 'mailto:charlesjnichols@gmail.com' },
      ],
    }),
  ],
});