import React, { useRef, useEffect } from 'react';
import { HomeWrapper, HeaderImage, HeaderText, BcgImg, } from './style';
import strong from '../../../images/strong.svg'
import bcg from '../../../images/back.svg'
import ProcentBar from './procentBar/ProcentBar';
import WeightChart from './weightChart/WeightChart';
import gsap from 'gsap'



const Home = props => {

    const wrapper = useRef(null);

    useEffect(() => {
        const elements = wrapper.current.children;

        gsap.set([...elements], {autoAlpha: 0});

        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

        tl.to(elements, {duration: 1, autoAlpha: 1, stagger: 0.1})

    }, [])

    return(

        <HomeWrapper ref={wrapper}>
            <BcgImg src={bcg} alt="BcgImg"></BcgImg>
            <HeaderImage src={strong} alt='header'></HeaderImage>
            <HeaderText>Welcome back fit bro!</HeaderText>
            <ProcentBar type='Calories'/>
            <ProcentBar type='Activity'/>
            <ProcentBar type='Hydration'/>
            <WeightChart />
            <WeightChart />
            <WeightChart />
        </HomeWrapper>

    )
}

export default Home