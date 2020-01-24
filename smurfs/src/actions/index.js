import axios from 'axios';

export const startApp = () => dispatch => {
    dispatch({ type: 'START'})
        axios.get('http://localhost:3333/smurfs') 
            .then((response) => {
                dispatch({ type: 'GET_SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'GET_FAIL', payload: error.message })
            })
}

export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: 'ADD_SMURF', payload: smurf })
    axios.post('http://localhost:3333/smurfs', {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: new Date()
    })
        .then((res) => {
            console.log("This is the response from axios.post request in actions:", res)
            axios.get('http://localhost:3333/smurfs')
                .then((response) => {
                    dispatch({ type: 'GET_SUCCESS', payload: response.data })
                })
                .catch((err) => {
                    dispatch({type: 'GET_FAIL', payload: err.message})
                })
        })
        .catch((error) => {
            console.log("This is the error from axios post request in actions:", error)
        })
}