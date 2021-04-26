import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd'

const Appheader = () => {
    return (
        <div className="container">
            <div className="header" style={{paddingLeft:"2%"}}>
                <div className="logo" >
                    <a href="https://mtnptech.com/"><b>Micro Technologies</b></a>
                </div>
                
                <Menu mode="horizontal" defaultSelectedKeys={['home']} style={{paddingRight:"2%"}}>
                    <Menu.Item key="home"><NavLink to="/" ><b>Home</b></NavLink></Menu.Item>
                    <Menu.Item key="about"><NavLink to="/about" ><b>About Us</b></NavLink></Menu.Item>
                    <Menu.Item key="contact"><NavLink to="/contact" ><b>Contact Us</b></NavLink></Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Appheader
