import React from 'react'

const Sort = ({handleSort}) => {
    
    return (
    <div className="Filter">
    <label for="hogs"> Sort </label>
        <select name="sort" onChange={handleSort}>
        <option value="select">Select Sort Type</option> 
        <option value="name-a">Name: Ascending </option> 
        <option value="name-d">Name: Descending </option>
        <option value="weight-a">Weight: Ascending </option>
        <option value="weight-d">Weight: Descending </option>
        </select>
    </div>
    )
}

export default Sort
