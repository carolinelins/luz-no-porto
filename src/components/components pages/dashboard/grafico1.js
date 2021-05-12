import React from 'react';
import { Chart } from "react-google-charts";


function grafico1(){
    return(
        <Chart
  width={'500px'}
  height={'300px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
  ]}
  options={{
    // Material design options
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
    )
}

export default grafico1;