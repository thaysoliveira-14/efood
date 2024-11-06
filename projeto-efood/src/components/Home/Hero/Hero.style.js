import styled from "styled-components"
import imagemFundo from '../../../assets/vetor-hero.svg'

export const Container = styled.div`
    padding: 40px;
    width: 100vw;
    background-image: url(${imagemFundo});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Logo = styled.img`
    width: 125px;
    margin-bottom: 136px;
`

export const Titulo = styled.h1`
    max-width: 539px;
    color: black;
    font-weight: 900;
    font-size: 36px;
    line-height: 42.19px;
    color: ${props => props.theme.vermelho};
`