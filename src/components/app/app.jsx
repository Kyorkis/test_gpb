import React from 'react';

import './app.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import initStore from '../../utils/store'
import {Route,Redirect} from'react-router-dom'
import {history} from '../../utils/store'
import { ConnectedRouter } from 'connected-react-router';

import {Provider} from 'react-redux'

import Page from '../page'
import Header from '../header'
import OurServices from '../our-services'
import ServiceDetails from '../service-details'
const store = initStore();


function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>  
      <div className="App" style={{height:"100%"}}>
        <Header/>
        {/* В Page обязательно прокидывать проп urlForData!!*/}
        <Route path='/' exact render={(props)=><Page urlForData={"http://localhost:3000/data.json"}{...props}/>}/>
        <Route path='/services'component={OurServices} exact/>
        <Route path="/services/:id" render={(props)=><ServiceDetails  {...props}/>}/>    
      </div>
      </ConnectedRouter>
    </Provider> 
  );
}

export default App;