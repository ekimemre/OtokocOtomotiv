import React, { useState, useContext } from 'react'
import ImageIcon from '../../svg/ImageIcon'
import AddIcon from '../../svg/AddIcon'
import Input from '../Input'
import ItemContext from '../../context/ItemContext'
import './index.css'

const PartItem = ( props ) => {

  const { basketItems, setBasketItems } = useContext(ItemContext)
  const { partId, partName, partCost } = props;
  const [count, setCount] = useState("1")

  const handleClick = ( partNo, partCst ) => {
    console.log({itemNo:partNo, itemCount:count, itemCost:partCst})
    setBasketItems([...basketItems, {itemNo:partNo, itemCount:count, itemCost:partCst}])
  }

  const handleChange = (e) => {
    setCount(e.target.value)
  }
  
  return (
    <div className='wrapper'>
      <p className='img'> <ImageIcon /> </p>
      <p>{partId}</p>
      <p>{partName}</p>
      <p>{partCost}</p>

      <p className='operations'>
        <Input 
        placeholder='Adet'
        label={"Sayi"}
        type={"text"}
        name='count'
        value={count}
        onChange={handleChange}
        />
        <span style={{cursor:"pointer"}} onClick={()=> handleClick(partId, partCost)}><AddIcon /></span>
      </p>
      
    </div>
  )
}

export default PartItem
