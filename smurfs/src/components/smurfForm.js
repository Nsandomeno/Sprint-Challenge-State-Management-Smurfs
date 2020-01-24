import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index.js';

function SmurfForm(props) {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age:  '',
        height:  '',
        id:  ''
    })

    const handleInput = (event) => {
        console.log("Changing newSmurf values!")
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = (event) => {
        event.preventDefault();
        setNewSmurf({
            name: '',
            age: '',
            height: '',
            id: ''
        })
    }



    return (
        <div>
            {/* {props.isLoading && props.smurfs && setNewSmurf({name: '', age: '', height: '', id: ''})} */}
            {!props.isLoading && 
            <div>
            <form>
                <label>
                    Name:
                    <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={newSmurf.name}
                    />
                </label>
                <label>
                    Age:
                    <input
                    type="text"
                    name="age"
                    onChange={handleInput}
                    value={newSmurf.age}
                    />
                </label>
                <label>
                    Height:
                    <input
                    type="text"
                    name="height"
                    onChange={handleInput}
                    value={newSmurf.height}
                    />
                </label>
            </form>
            <div onClick={resetForm}>
                <button onClick={() => props.addSmurf(newSmurf)}>Add Smurf</button>
            </div>
            </div>}
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        ...state,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);