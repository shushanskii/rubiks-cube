import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #root {
        #canvas {
            background: white;
        }
    }
`
