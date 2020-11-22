    import React, { useReducer } from 'react'


    /* build your initial state object that has a list of todos with the following shape:

    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
    Export both the reducer and the initial state object */

    export const initialState =[
    {
        todo: 'Learn about reducers',
    completed: false,
    id: Math.random()
    }
    ];



    export const  reducer = (state, action) => {
    //Write the `case` in your reducer for adding a todo
    switch (action.type) {
        case 'Add Todo':
        return [...state, action.payload];
    //Write the `case` in your reducer for toggling the completed property
        case 'Mark Todo Completed':
        return state.map((item)=> {
            return item.id === action.payload ? {...item, completed: !item.completed} : item;
        })

    //Write the `case` in your reducer for filtering completed todos
        case 'Clear Completed Todo':
        return state.filter((item) => item.completed);
        default:
        return state;
    }
    }

    reducer(initialState, {type: 'Add Todo'});
    reducer(initialState, {type: 'Mark Todo Completed'});
    reducer(initialState, {type: 'Clear Completed Todo'});


