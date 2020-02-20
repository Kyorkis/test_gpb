import React from 'react'

import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner'
import Component from '../component'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './list.css'
class List extends React.Component{
    
    render(){
        const listOfComponents= this.props.data.componentsList.map((component)=>{
            const optionMapFunction=component.options.map((option)=>{
                return(
                    <li key={component.header+option+Math.random()}>{option}</li>
                )
            })
            return(
                <Col  md={12} lg={3} className="component text-center d-flex flex-column justify-content-between bg-primary text-white align-item-center"  key={component.header}>
                    <h2>{component.header}</h2>
                    <ul>
                        {optionMapFunction}   
                    </ul>
                    <p>{component.text}</p>
                </Col>
            )
        })


        return(
            <Row className="justify-content-around mt-2">
                
                {this.props.data.isLoading===true && 
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }
                
                {
                this.props.data.isLoading!==true &&
                 this.props.data.componentsList.length>=1 &&
                  <React.Fragment>
                      {listOfComponents} 
                  </React.Fragment>
                 
                }
               
            </Row>
        )
    }
}

const mapStateToProps=({componentsReducer})=>({
    data:componentsReducer
})
export default connect(mapStateToProps)(List)