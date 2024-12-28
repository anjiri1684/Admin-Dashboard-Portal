import React from 'react'
import {  SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend,  ChartComponent,SplineAreaSeries } from '@syncfusion/ej2-react-charts'

import { areaPrimaryXAxis, areaPrimaryYAxis, areaCustomSeries } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../context/ContexProvider'

function Area() {
  const { currentMode } = useStateContext()
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate in Percentage" />
      <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      title='Area'
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373e' : '#fff'}
    
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Area