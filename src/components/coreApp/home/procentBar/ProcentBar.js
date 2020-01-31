import React from 'react';
import { Parent, Child, BarName, ProcentBarWrapper, StatsWrapper, Stats } from './style';

const ProcentBar = ({type}) => (
    <ProcentBarWrapper>
        <BarName>{type}</BarName>
        <Parent>
            <Child />
        </Parent>
        <StatsWrapper>
            <Stats>1500 / 3000 {type==='Calories' ? 'kcal' : type === 'Activity' ? 'min' : 'l'}</Stats>
            <Stats>50 %</Stats>
        </StatsWrapper>
    </ProcentBarWrapper>
);

export default ProcentBar