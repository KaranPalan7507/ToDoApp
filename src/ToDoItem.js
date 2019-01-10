import React, { Component } from 'react'
import { connect } from 'react-redux';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './ToDoItem.css';

fontawesome.library.add(faCheck, faTimes);

class ToDoItem extends Component {
    filterItems = (items, filter) => {
        switch (filter) {
            case 'SHOW_COMPLETED':
                return items.filter(t => t.completed);
            case 'SHOW_PENDING':
                return items.filter(t => !t.completed);
            default:
                return items;
        }
    }
    createTasks = (item) => {
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
                {item.text}&nbsp;&nbsp;
                <FontAwesomeIcon icon={item.completed ? "check" : "times"} />
            </li>
        )
    }
    render() {
        let todoEntries = this.props.entries;
        todoEntries = this.filterItems(todoEntries, this.props.filter);
        const listItems = todoEntries.map(this.createTasks)

        return <ul className="theList">{listItems}</ul>
    }
}

const mapStateToProps = (state) => {
    return {
        entries: state
    }
}
export default connect(mapStateToProps
)(ToDoItem);
