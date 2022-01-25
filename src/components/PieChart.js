import React from 'react';
import { Pie} from '@ant-design/charts';
import '../css/PieChart.css';

function PieChart() {

    const dataPie = [
        {
          type: 'Los Angeles Lakers',
          value: 17,
        },
        {
          type: 'Boston Celtics',
          value: 17,
        },
        {
          type: 'Golden State Warriors',
          value: 6,
        },
        {
          type: 'Chicago Bulls',
          value: 6,
        },
        {
          type: 'San Antonio Spurs',
          value: 5,
        }
      ];
    
      const configPie = {
        appendPadding: 10,
        data: dataPie,
        angleField: 'value',
        colorField: 'type',
        height: 450,
        radius: 0.8,
        label: {
          type: 'inner',
          offset: '-0.5',
          content: '{name} {value}',
          style: {
            fill: '#fff',
            fontSize: 14,
            textAlign: 'center',
          },
        },
      };

    return (
        <Pie {...configPie} style={{ backgroundColor: '#1F263C'}} />      
    );
}

export default PieChart;