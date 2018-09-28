import React, {Component} from 'react'
import {connect} from 'react-redux'
import Message from './Message'

export class MessageList extends Component {
    
    constructor(props){
        super(props)

    }

    render(){
        return (
            <ul>
                {this.props.list.map( (item, index) => {
                    return <li key={index}><Message message={item}/></li>
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {list:state.Messages}
}


export default connect(mapStateToProps)(MessageList)