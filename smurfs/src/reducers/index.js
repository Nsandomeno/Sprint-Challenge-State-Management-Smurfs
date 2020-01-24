const initialState = {
    isLoading: false,
    error: "",
    smurfs: [],
    newSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_SUCCESS':
            return {
            isLoading: false,
            error: "",
            smurfs: action.payload,
            newSmurf: {
                name: '',
                age: '',
                height: '',
                id: ''
            }
            }
        case 'GET_FAIL':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case 'ADD_SMURF':
            return {
                ...state,
                isLoading: true,
                smurfs: [...state.smurfs, action.payload]
                }
            
        // case 'ADD_SUCCESS':
        //     return {
        //         ...state,
        //         smurfs: action.payload,
        //         newSmurf: {
        //             name: '',
        //             age: '',
        //             height: '',
        //             id: ''
        //         }
        //     }
        // case 'ADD_FAIL':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.payload
        //     }
        default: 
            return state
    }
}
