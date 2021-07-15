import React,{useState} from 'react';

const Objective = props => {

    const {index, objective, handleDelete} = props
    console.log(objective)

    return(
        <fieldset>
            <legend>Objective</legend>
            <h1>{objective.title} @ index {index} </h1>
            <button onClick={ () => handleDelete(index) }>Delete</button>
        </fieldset>
    )

}
export default Objective;