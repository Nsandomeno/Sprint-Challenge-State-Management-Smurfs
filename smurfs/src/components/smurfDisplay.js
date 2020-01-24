import React from 'react';
import { connect } from 'react-redux';

function SmurfDisplay(props) {
    // console.log("Smurf Display props:", props)
    return(
        <div>
        {props.smurfs && !props.isLoading &&
            props.smurfs.map((smurf) => {
                return (
                    <div key={smurf.id}>
                        <h1> {smurf.name} </h1>
                        <h4> {smurf.age} </h4>
                    </div>
                )
            })
        }
        {!props.smurfs && !props.isLoading && <div>Welcome!</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfDisplay);