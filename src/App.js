import React from 'react'
import Appheader from './Components/Common/Header';

import { Route, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
//import { Layout } from 'antd';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Details from './Components/Details';

//const { Header } = Layout;


const PageNotFound = ()=><h1> Page Not Found </h1>


const App = () => {
    return (
        <>
            <Appheader />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/admin_panel" component={Details} />
                <Route exact path="*" component={PageNotFound} />
              
            </Switch>
            {/* <Layout className="mainLayout">
                <Header>
                </Header>
            </Layout> */}
        </>
    )
}

export default App
