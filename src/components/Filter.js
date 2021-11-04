import React from 'react'

const Filter = ({handleSelection}) => {

    return (
    <div className="Filter">
        <label for="hogs">Filter by grease status </label>
            <select name="grease" onChange={handleSelection}>
            <option value="All">All Pigs</option> 
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
            </select>
    </div>
    )
}

export default Filter
