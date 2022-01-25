import React from 'react';
import {Layout} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../css/Navbar.css';

const { Header } = Layout;

function Navbar() {
    return (
        <div>
            <Header >
    <ul className="ulIzquierda">
      <li><MenuOutlined className="iconoMenu"/></li>
      <li style={{paddingLeft: '20px'}}><span className="tituloNavbar">NBA Dashboard</span></li>
      </ul>

      <ul className="ulDerecha">
      <li><img src={require('../img/i.png')} className="imagenNavbar" /></li>
      </ul>
      </Header>
        </div>
    );
}

export default Navbar;