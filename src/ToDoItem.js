import React, { Component } from 'react'
import { connect } from 'react-redux';

class ToDoItem extends Component {
    createTasks = item => {
        return (
            <li
            className={
                item.completed ? 'complete' : 'pending'
              } 
            key={item.key} onClick={() => {
                this.props.dispatch({
                    type: 'TOGGLE_COMPLETED',
                    key: item.key
                })
            }}>
                {item.text}
            </li>
        )
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
}
    const mapStateToProps = (state) => {
        return {
            entries: state
        }
    }
    export default connect(mapStateToProps)(ToDoItem);
