import styled from 'styled-components'

export const HomeWrapper = styled.div`
    background-color: #F2F2F2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 20px;
`

export const HeaderImage = styled.img`
    width: 40vw;
    height: 40vw;
    margin: 20px;
    z-index: 1;
`

export const HeaderText = styled.h1`
    font-size: 1.7em;
    font-weight: bold;
    z-index: 1;
    color: white;
`

export const BcgImg = styled.img`
    position: absolute;
    width: 100vw;
    top: 0vw;
    right: 0vw;
    z-index: 0;
`