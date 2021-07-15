import React, {useState} from 'react'


const Form = props => {

    const[inputstate, setInputState] = useState("")

    const {list, setObjectivelist} = props

    const submitHandler = e => {
        e.preventDefault()
        setObjectivelist([
            ...list, {
            "title" : inputstate,
            "isComplete" : false
        }])
    }

    return(
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    What needs to be done?:
                    <input type="text" name="objective" onChange={ e => setInputState(e.target.value)} />
                </p>
                <button type="submit">Add Objective</button>
            </form>
        </fieldset>
    )
}

export default Form;