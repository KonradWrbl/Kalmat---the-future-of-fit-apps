import React, { useState } from 'react';
import { StyledButton, ButtonWrapper } from './style';

const AddMealButton = () => {
    const [ isVisible, setVisible ] = useState(0);

    return(
        <StyledButton>Add new meal</StyledButton>
    )

}

export default AddMealButton