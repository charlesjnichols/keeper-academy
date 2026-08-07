import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      darkMode: true,
      fontFamily: 'Inter, sans-serif',
      
      // Node & Background Colors
      background: '#1e293b',
      mainBkg: '#334155',
      primaryColor: '#334155',
      primaryTextColor: '#e2e8f0',
      primaryBorderColor: '#9370DB',
      
      // Lines & Arrows
      lineColor: '#94a3b8',
      textColor: '#e2e8f0',
      
      // Containers & Clusters
      clusterBkg: '#0f172a',
      clusterBorder: '#475569',
      
      // Flowchart / State / Sequence specifics
      secondaryColor: '#1e293b',
      tertiaryColor: '#0f172a',
      edgeLabelBackground: '#1e293b',

      fontSize: '26px',
    },
  }
})