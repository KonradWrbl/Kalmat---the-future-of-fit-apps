import React, { useState } from "react";
import GenderSelectionImg from './GenderSelectionImg'
import { connect } from 'react-redux'

const GenderSelection = () => {
    const [gender, setGender] = useState('none')

    return(
        <div>
            <GenderSelectionImg gender='male'/>
        </div>
    )
}

export default GenderSelection