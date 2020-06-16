// const iState = {
//     name: "ramesh",
//     // wishes: ['eat', 'code']
//     myinput: ""

// }



export const nameReducer = (state = 'suker', action) => {
    // console.log(action)
    const { type, payload } = action;
    if (type === 'CHANGE_NAME') {
        return payload;
    }



    return state
}


export const inputReducer = (state = 'myname', action) => {
    const { type, payload } = action;
    // if (type === 'CHANGE_NAME') {
    //     return payload;
    // }
    if (type === 'ADD_CHANGE') {
        return payload;
    }


    return state
}


