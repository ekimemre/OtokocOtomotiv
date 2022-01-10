import React from 'react'
import './index.css'

const SelectItem = ( props ) => {

  const { name, id } = props;

  return (
    <div className='container'>
        <select name={name} id={id}>
        <option disabled selected>{name}</option>

        </select>
    </div>
  )
}

export default SelectItem
