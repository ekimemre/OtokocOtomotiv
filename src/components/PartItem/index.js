import React from 'react'
import './index.css'
import ImageIcon from '../../svg/ImageIcon'
import AddIcon from '../../svg/AddIcon'
import Input from '../Input'

const PartItem = ( props ) => {

  const { partId, partName, partCost } = props;

  return (
    <div className='wrapper'>
      <p className='img'> <ImageIcon /> </p>
      <p>{partId}</p>
      <p>{partName}</p>
      <p>{partCost}</p>

      <p className='operations'>
        <Input placeholder='Adet'/>
        <span><AddIcon /></span>
      </p>
      

    </div>
  )
}

export default PartItem
