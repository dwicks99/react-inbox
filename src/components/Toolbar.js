import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectAllMessages, selectSomeMessages } from '../actions/actions'

export class Toolbar extends Component {
    render() {
        const msgCount = this.props.list.length
        const selectedCount = this.props.list.filter(m => m.selected).length
        let icon = <i onClick={() => { this.props.selectAll() }} className={"fa fa-square-o"}></i>
        if (selectedCount > 0 && selectedCount < msgCount)
            icon = <i onClick={() => { this.props.selectSome() }} className={"fa fa-minus-square-o"}></i>
        return (<div className="row toolbar">
            <button className="btn btn-default">
                {icon}
            </button>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.Messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectAll: () => dispatch(selectAllMessages()),
        selectSome: () => dispatch(selectSomeMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)