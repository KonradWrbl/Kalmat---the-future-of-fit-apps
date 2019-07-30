import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import styled from 'styled-components'

const data = [
  {
    name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
  },

];

const style = {
  top: 0,
  left: 0,
  lineHeight: '24px',
};

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const Chart = () => {
    return (
    <ChartWrapper>
        <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={100}
            outerRadius={100}
            barSize={50}
            data={data}>
            <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="uv" />
        </RadialBarChart>
    </ChartWrapper>
    );
}

export default Chart
