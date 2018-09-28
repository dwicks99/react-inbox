import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleMessageStar, toggleMessageSelected } from '../actions/actions'

export class Message extends Component {

    render() {
        return (
            <div className={'row message' + (this.props.message.read ? ' read' : ' unread') + (this.props.message.selected ? ' selected' : '')} >
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" onClick={() => { this.props.toggleSelected(this.props.message.id) }} checked={this.props.message.selected ? 'checked' : ''} />
                        </div>
                        <div className="col-xs-2">
                            <i onClick={() => { this.props.toggleStar(this.props.message.id) }} className={'star fa fa-star' + (this.props.message.starred ? '' : '-o')}></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    {this.props.message.labels.map((label, index) => {
                        return < span key={index} className="label label-warning">{label}</span>
                    })
                    }
                    {this.props.message.subject}
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSelected: (id) => dispatch(toggleMessageSelected(id)),
        toggleStar: (id) => dispatch(toggleMessageStar(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)