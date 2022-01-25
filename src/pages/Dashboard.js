import React from 'react';
import 'antd/dist/antd.css';
import {Col, Row, Statistic} from 'antd';
import '../css/Dashboard.css';
import Navbar from '../components/Navbar';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import VideosTable from '../components/NextGames';

function Dashboard() {
    return (
<>
<Row>
  <Col xs={24}>    
    <Navbar />
    </Col>
    </Row>
<br />
        <div className="contenedor">
    <Row gutter={30}>
      <Col xs={24} sm={12} lg={6}>
        <div className="cardsContenedor" >
        <Statistic title="Mejor record" value="Phoenix Suns" valueStyle={{color: 'white'}} style={{backgroundColor: '#4BA6FE'}} className="cardsContenido"/>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <div className="cardsContenedor">
        <Statistic title="Peor Record" value="Orlando Magic" valueStyle={{color: 'white'}} style={{backgroundColor: '#FF838A'}} className="cardsContenido"/>
        </div>
      </Col>

      <Col xs={24} sm={12} lg={6}>
        <div className="cardsContenedor">
        <Statistic title="All Star Game 2022" value="20 de Febrero" valueStyle={{color: 'white'}} style={{backgroundColor: '#18D0C2'}} className="cardsContenido"/>
        </div>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <div className="cardsContenedor">
        <Statistic title="Lider por el MVP" value="Stephen Curry" valueStyle={{color: 'white'}} style={{backgroundColor: '#847DFC'}} className="cardsContenido"/>
        </div>
      </Col>
    </Row>
<br />
    <Row gutter={20}>
        <Col xs={24} md={12} className="graficaCircular">
        <PieChart />      
        </Col>

        <Col xs={24} md={12}>
        <LineChart />
        </Col>
    </Row>
<br />
    <Row>
        <Col span={24}>
       <VideosTable />
        </Col>
    </Row>
        </div>

        </>
    );
}

export default Dashboard;