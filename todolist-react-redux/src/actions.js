let nextToDoId = 1;

export const addToDo = (text) => ({
    type: 'ADD_TODO',
    payload : {
        id: nextToDoId++,
        text,
    },
});

export const removeToDo = (id) => ({
    type: 'REMOVE_TODO',
    payload: {
        id,
    },
});