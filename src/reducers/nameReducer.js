// const iState = {
//     name: "ramesh",
//     wishes: ['eat', 'code']
// }

const nameReducer = (state = '', action) => {
    // console.log(action)
    const { type, payload } = action;
    if (type === 'CHANGE_NAME') {
        return payload;
    }
    return state
}


export default nameReducer;