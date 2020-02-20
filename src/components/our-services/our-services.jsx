import React from 'react'
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {fetchRequest} from '../../actions/fetchRequest'
import { push } from 'connected-react-router';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Spinner from 'react-bootstrap/Spinner'
import TryAgainComponent from '../try-again-component'
import './our-services.css'


import Page from '../page'

class OurServices extends React.Component{
    componentDidMount(){
        this.props.fetchRequest()
    }
    handleNavigate = (link) => {
        this.props.push(link);   
    };
    
    render(){
        
        const listOfServices = this.props.state.componentsReducer.servicesList.map((service)=>{
            return(
                <div className='text-center bg-warning text-white service' key={service.name}> 
                    <h2 style={{cursor:"pointer"}} onClick={()=>this.handleNavigate(`/services/${service.id}`)}>{service.name}</h2>
                    <p>Цена: {service.price} рублей</p>
                </div>
            )
        })
        return(

                <Container fluid="true"style={{height:"100%"}}className="d-flex align-items-center justify-content-center">
                <Row className="w-100 justify-content-around">
                    {this.props.state.componentsReducer.error === true &&
                        <TryAgainComponent getDataFunction={this.props.fetchRequest} />
                    }

                    {this.props.state.componentsReducer.servicesLoading === true &&
                        <Spinner animation="border" role="status"variant="danger">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }

                    {this.props.state.componentsReducer.servicesLoading!==true && this.props.state.componentsReducer.error !==true &&

                        <Col md={10}lg={4}>{listOfServices}</Col>
                    }
                </Row>
            </Container>

            
        )
    }
}
const mapStateToProps=(state)=>({
    state
})
const mapDispatchToProps = dispatch => bindActionCreators({fetchRequest,push},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(OurServices)