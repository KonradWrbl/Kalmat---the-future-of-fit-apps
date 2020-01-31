import React from 'react';
import { HomeWrapper, HeaderImage, HeaderText, BcgImg, } from './style';
import strong from '../../../images/strong.svg'
import bcg from '../../../images/back.svg'
import ProcentBar from './procentBar/ProcentBar';





const Home = props => {
    return(
        <HomeWrapper>
            <BcgImg src={bcg} alt="BcgImg"></BcgImg>
            <HeaderImage src={strong} alt='header'></HeaderImage>
            <HeaderText>Welcome back fit bro!</HeaderText>
            <ProcentBar type='Calories'/>
            <ProcentBar type='Activity'/>
            <ProcentBar type='Hydration'/>
        </HomeWrapper>
    )
}

export default Home