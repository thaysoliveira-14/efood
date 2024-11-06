import React from 'react';
import logo from '../../../assets/logo.svg'
import { Container, Logo, Titulo } from './Hero.style';

export default function Hero() {
    return(
        <>
            <Container>
            <Logo src={logo} alt="Logo efood" />
                <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
            </Container>
        </>
    )
}
