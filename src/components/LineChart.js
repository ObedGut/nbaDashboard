import React from 'react';
import { Line} from '@ant-design/charts';

function LineChart(props) {

    const dataLine = [
        { player: 'Stephen Curry', votes: 2584623 },
        { player: 'Kevin Durant', votes: 2360435 },
        { player: 'LeBron James', votes: 2018725 },
        { player: 'Giannis Antetokounmpo', votes: 2145835 },
        { player: 'Nikola Jokić', votes: 1649809 }
      ];
    
      const configLine = {
        data: dataLine,
        height: 410,
        xField: 'player',
        yField: 'votes',
        color: '#01B075',
        point: {
          size: 5,
          shape: 'diamond',
          color: '#01B075'
        },
        label: {
          style: {
            fill: '#aaa',
            fontSize: 16,
            stroke: '#01B075'
          },
        },
      };
    
   

    return (
        <Line {...configLine}  style={{ backgroundColor: '#1F263C', padding: '20px'}}/>
    );
}

export default LineChart;