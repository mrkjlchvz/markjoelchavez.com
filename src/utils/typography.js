import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.baseFontSize = '20px'

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
