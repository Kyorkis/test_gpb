import React from 'react'
import Button from 'react-bootstrap/Button'
import './try-again-component.css'
const TryAgainComponent=(props)=>{
    return(
        <div className='tryAgainComponent d-flex justify-content-around align-items-center p-3'>
            <div className="ml-3 mr-2">Произошла ошибка!</div>
            <div className="mr-3">
                <Button variant="dark" onClick={props.getDataFunction}>Повторить запрос</Button>
            </div>
            
        </div>
    )
}
export default TryAgainComponent


