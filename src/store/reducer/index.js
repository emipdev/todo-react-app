const initialState = [{
    thing: "Try clicking me!",
    description: "Welcome to the description! Here you can change the status of the todos",
    status: "Todo",
    date: "Today",
    id: 0
},{
    thing: "Create this app!",
    description: "Hello! Welcome to the awesome Todo app!",
    status: "Done",
    id: 1
},{
    thing: "Share it on LinkedIn",
    description: "Hello! Welcome to the awesome Todo app!",
    status: "Done",
    id: 2
},{
    thing: "Search for a job",
    description: "Hello! Im locking for a job actually, so if you are interested, contact me!",
    status: "InProgress",
    date: "25/7/21",
    id: 3
}];

export default function rootReducer(state = initialState, action){
    switch(action.type) {
        case 'AddTodo': {
            return (
                state = [...state,action.payload]
            )
        }
        case 'RemoveTodo': {
            return (
                state = state.filter(x => x.id !== action.payload)
            )
        }
        case 'ToTodo': {
            return (
                state = state.map(todo => {
                    if(todo.id === action.payload){
                        todo.status = "Todo";
                    }
                    return todo;
                })
            )
        }
        case 'ToInProgress': {
            return (
                state = state.map(todo => {
                    if(todo.id === action.payload){
                        todo.status = 'InProgress';
                    }
                    return todo;
                })
            )
        }
        case 'ToDone': {
            return (
                state = state.map(todo => {
                    if(todo.id === action.payload){
                        todo.status = 'Done';
                    }
                    return todo;
                })
            )
        }
        default: {
            return state;
        }
    }
}