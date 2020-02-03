import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const AddMealWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.2);
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
    z-index: 4;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.16);
    background-color: #F2F2F2;
`

export const BG = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 3;
`
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: #707070;
`

export const StyledInput = styled.input`
    height: 40px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    padding: 0 10px;
    color: #707070;
    font-family: 'Montserrat', sans-serif;
`

export const SubmitButton = styled(Button)`
    color: white !important;
    border-radius: 10px !important;
    background-color: #85D143 !important;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, .16) !important;
    width: calc(100%/2.5) !important;

`

export const SubmitButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`