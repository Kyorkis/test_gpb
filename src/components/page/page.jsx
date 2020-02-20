import React from 'react'
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {startLoading} from '../../actions/startLoad'
import List from '../list'
import Container from 'react-bootstrap/Container'
import './page.css'

class Page extends React.Component{
    componentDidMount(){
        this.props.startLoading(this.props.urlForData)
    }
    render(){
        return(
            <Container className="page" fluid="true">
                <List/>
            </Container>
            
        )
    }
}

const mapStateToProps=(state)=>({
    state
})
const mapDispatchToProps = dispatch => bindActionCreators({startLoading},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Page) 