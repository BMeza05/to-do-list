import React, { useState} from 'react';
import Objective from './Objective';
import Form from './Form';

const List = props => {


    const [list, setObjectivelist] = useState([])

    const handleDelete = idx =>{
        const filteredList = list.filter((objective, i) => i != idx)
        setObjectivelist(filteredList)
    }

    const handleChange = idx => {
        const copy = [...list]
        copy[idx].isComplete = !copy[idx].isComplete
        setObjectivelist(copy)
    }

    return(
        <fieldset>
            <legend>List.jsx</legend>
            <Form list={list} setObjectivelist={setObjectivelist} />
            {
                list.map((objective, i) => {
                    return < Objective key ={i} 
                    index={i}
                    objective={objective}
                    handleDelete={handleDelete}
                    handleChange={handleChange}/>
                })
            }
        </fieldset>
    )
}
export default List;