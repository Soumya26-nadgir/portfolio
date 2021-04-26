import React from 'react'
import {Row, Col} from 'antd';
import HomePic from './Images/HomePic.svg';


function Home() {
    return (
        <>
            <div className="container-fluid" style={{marginLeft:"2%"}}>
                <Row style={{marginTop:"7%"}}>
                    <Col className="main"span={12}>
                        <h1 >One Stop IT Support Managed Service Solution.</h1>
                        <h2>Welcome to <span className="micro">Micro Technologies</span> Bhopal. At Microtechnologies, We continuously follow the latest strategies to enhance your online business from different technologies perspectives</h2>
                        <p>Web APP | Technology Integration | Security Application | IOT Based Application | Electronic Project Development</p>
                    </Col>
                    <Col className="main"span={12}>
                    <img className="image" src={HomePic} alt="MicroTechnology"/>
                    </Col>
                </Row>
            </div>
            <div className="">

            </div>
        </>
    )
}

export default Home
