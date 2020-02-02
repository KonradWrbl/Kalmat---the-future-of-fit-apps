import styled from 'styled-components'

export const AddMealWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    opacity: .6;
    background-color: black;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    top: 0;
`

export const AddMealPopup = styled.div`
    width: calc(100vw - 40px);
    min-height: 10px;
    border-radius: 10px;
    padding: 20px;
    background-color: white;
`