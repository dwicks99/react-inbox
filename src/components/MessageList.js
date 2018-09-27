import React, {Component} from 'react'
import {connect} from 'react-redux'


export class MessageList extends Component {

    render(){
        return (
            <div>Message List!</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {list:state.Messages}
}


export default connect(mapStateToProps)(MessageList)