const initialState = {
    isLoading = true,
    smurfs = null,
    error = ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                isLoading: false,
            }
            
        default: 
            return state
    }
}