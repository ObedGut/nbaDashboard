import React from 'react';
import '../css/NextGame.css';
import {Table} from 'antd';

function NextGames(props) {

    const columns = [
        {
          title: 'Partidos Relevantes',
          dataIndex: 'juegos',
          key: 'juegos',
        },
        {
          title: 'Local',
          dataIndex: 'local',
          key: 'local',
        },
        {
          title: 'Hora',
          dataIndex: 'hora',
          key: 'hora',
        },
      ];
      
        const dataSource = [
          {
            key: '1',
            juegos: 'Brooklyn Nets vs Los Angeles Lakers',
            local: "Barclays Center",
            hora: "6:30pm",
          },
          {
              key: '2',
              juegos: 'Golden State Warriors vs Dallas Mavericks',
              local: "Chase Center",
              hora: "9:00pm",
            },
            {
              key: '3',
              juegos: 'Detroit Pistons vs Denver Nuggerts',
              local: "Little Caesars Arena",
              hora: "6:00pm",
            },
            {
              key: '4',
              juegos: 'Boston Celtics vs Sacramento Kings',
              local: "TD Garden",
              hora: "6:30pm",
            },
        ];

    return (
        <Table dataSource={dataSource} columns={columns} className="nextGames"/>
    );
}

export default NextGames;