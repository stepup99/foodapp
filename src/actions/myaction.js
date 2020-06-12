// const anotherName = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }

// export default anotherName;
const anotherName = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(res2 => {
                dispatch({ type: 'CHANGE_NAME', payload: res2.title })
            })
    }
}

const addWish = () => {
    return {
        type: 'ADD_WISH',
        payload: ''
    }
}

const actionFunc = {
    anotherName,
    addWish
}

export default actionFunc;