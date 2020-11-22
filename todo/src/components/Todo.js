import React from "react";


export function Todo (props) {

    return (
        <div>
            <h2 className={props.item.completed ? 'complete' : ''}
// Invoke handleComplete when you click on a todo
// Style your todo to somehow show that it is completed
                onClick={(e) => {
                e.preventDefault()
                props.handleComplete(props.item.id)
            }} > {props.item.todo} </h2>
        </div>
    )
}