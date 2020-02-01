import React from 'react';
import { weight } from '../../../../data/data'
import * as V from 'victory';
import { WeightChartWrapper, ChartHeader } from './style';


const WeightChart = () => (
    <WeightChartWrapper>
        <ChartHeader>Weight:</ChartHeader>
        <V.VictoryChart
            theme={V.VictoryTheme.material}
            containerComponent={<V.VictoryZoomContainer zoomDomain={{x: [1, 4]}} allowZoom={false}/>}
            height={250}
            title="Weight"
        >
            <V.VictoryAxis />
            <V.VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x/1000}kg`)}
            />
            <V.VictoryLine
                interpolation='basis'

                style={{
                    data:{stroke: "c43a31"},
                    parent: {border:"1px solid #ccc"}
                }}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                data={weight}
                x='quarter'
                y='earnings'
            />
        </V.VictoryChart>
    </WeightChartWrapper>

)

export default WeightChart;