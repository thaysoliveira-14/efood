import { createGlobalStyle } from "styled-components"

const cores = {
    
}

export const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${props => props.theme.fundo};
    }
`

export const theme = {
    vermelho: '#E66767',
    branco: '#fff',
    fundo: '#FFF8F2',
    rosaClaro: '#FFEBD9'
}



