import React from 'react'
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {startLoadDetail} from '../../actions/startLoadDetail'
import TryAgainComponent from '../try-again-component'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ServiceDetails extends React.Component{

    componentDidMount(){
        this.props.startLoadDetail(this.props.history.location.pathname)
    }

    render(){
        const DataDetail=(props)=>{
            return(
                <Col lg={6} md={11} className="text-center bg-success text-white p-3">
                    <h1>{props.name}</h1>
                    <p style={{fontSize:"1.5rem"}}>Стоимость работ: {props.price} рублей</p>
                    <p style={{fontSize:"1.5rem"}}>{props.content}</p>
                </Col>
            )
        }
        return(
            <Container className="h-100 d-flex align-items-center justify-content-center">
                <Row className="justify-content-around w-100">
                    {this.props.state.componentsReducer.errorDetail===true &&
                        <TryAgainComponent getDataFunction={()=>this.props.startLoadDetail(this.props.history.location.pathname)} />
                    }
                    {this.props.state.componentsReducer.isDetailLoading===true &&
                        <Spinner animation="border" role="status"variant="danger">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {this.props.state.componentsReducer.isDetailLoading!==true && this.props.state.componentsReducer.errorDetail!==true&&          
                        <DataDetail name={this.props.state.componentsReducer.detail.name} price={this.props.state.componentsReducer.detail.price} content={this.props.state.componentsReducer.detail.content} />
                    }
                </Row> 
            </Container>
            
        )
    }
}

const mapStateToProps=(state)=>({
    state
})
const mapDispatchToProps = dispatch => bindActionCreators({startLoadDetail},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(ServiceDetails)
