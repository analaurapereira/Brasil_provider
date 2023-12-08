import styled from 'styled-components'
import '../assets/fonte.css'

export const StyledTitle = styled.h1`
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif;
    font-size: 20pt;
    margin-top: -40%;
    margin-left: 150px;
`

export const Sombra = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101vh;
    z-index: -1; 
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 0, 0, 0.6529783788515406) 35%,
        rgba(0, 0, 0, 0.07874868697478987) 100%
    );
`

export const Sombra2 = styled.div`
    position: absolute;
    top: 2318px;
    left: 0;
    width: 100%;
    height: 101vh;
    z-index: -1; 
    background: linear-gradient(90deg, rgba(0,0,0,0.4) 8%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 89%);
`

export const StyledName = styled.h2`
    color: orange;
    margin-top: -40px;
    font-style: none;
    font-family: 'Montserrat', sans-serif;
    margin-left: 150px;
`

export const Paragraph = styled.div`
    margin-top: -400px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin-left: 150px;
    width: 40%;
    text-align: justify;
    line-height: 1.8;
`

export const ParagraphTytle = styled.div`
    font-size: 30px;
    font-weight: 700;

`

export const Text = styled.div`

`