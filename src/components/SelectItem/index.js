import React, { useContext } from 'react'
import ItemContext from '../../context/ItemContext';
import './index.css'

const SelectItem = ( props ) => {
  
  const { option, setOption } = useContext(ItemContext)
  const { name, list } = props;

  const handleChange = (e) => {
    setOption({option: e.target.value})
  } 

  return (
    <div className='container'>
        <select name={name} value={option.option} onChange={handleChange}>
        <option disabled selected>{name}</option>
        {list.map((item, i) => {
          return (
          <option key={i}>{item}</option>
          );
        })}

        </select>
    </div>
  )
}

export default SelectItem
