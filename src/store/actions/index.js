let newId = 4;

export const addTodo = (data) => {
    return ({
        type: 'AddTodo',
        payload: {
            ...data,
            status: 'Todo',
            id: newId++
        }
    })
}
export const removeTodo = (data) => {
    return ({
        type: 'RemoveTodo',
        payload: data
    })
}
export const toInProgress = (data) => {
    return ({
        type: 'ToInProgress',
        payload: data
    })
}
export const toDone = (data) => {
    return ({
        type: 'ToDone',
        payload: data
    })
}
export const toTodo = (data) => {
    console.log(typeof data);
    return ({
        type: 'ToTodo',
        payload: data
    })
}