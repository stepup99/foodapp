// const iState = {
//     name: "ramesh",
//     wishes: ['eat', 'code']
// }

const wishReducer = (state = [], action) => {
    // console.log(action)
    const { type, payload } = action;
    if (type === 'ADD_WISH') {
        return [...state, 'code']
    }
    return state
}


export default wishReducer;