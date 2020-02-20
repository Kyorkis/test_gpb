import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Button from 'react-bootstrap/Button'

class Header extends React.Component{
    handleNavigate = (link) => {
        this.props.push(link);
        
    };
    render(){
        return(
            <Row className="justify-content-around"style={{paddingBottom:"2rem"}}>
                <Col lg={2} md={12} className='text-center mt-2 '>
                    <Button variant="success" onClick={()=>this.handleNavigate(`/`)}>Список компонентов</Button>
                    
                </Col>
                <Col lg={2} md={12} className='text-center mt-2'>
                    <Button variant="success" onClick={()=>this.handleNavigate(`/services`)}>Список Услуг</Button>
                </Col>                                      
            </Row>
        )
    }
}
const mapStateToProps=(state)=>({
    state
})
const mapDispatchToProps=dispatch=>bindActionCreators({push},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Header)