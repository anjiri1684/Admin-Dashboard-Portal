import React from 'react'
import {  SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, ChartComponent, LineSeries } from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

import { useStateContext } from '../../context/ContexProvider'

function LineChart() {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      title='Inflation Rate'
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}
    
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart