import React, { Component } from 'react'

export class Message extends Component {

    render(){       
        return (
            <div className = {'message' + (this.props.message.read ? ' read' : ' unread')} >
                {this.props.message.subject}
            </div>
        )
    }
}

export default Message