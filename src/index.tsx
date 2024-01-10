import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Scene from 'components/Scene'
import { GlobalStyle } from './style'

const root = ReactDOM.createRoot(
  document.getElementById('root')!
)
root.render(
  <StrictMode>
    <GlobalStyle />
    <Scene/>
  </StrictMode>
)
