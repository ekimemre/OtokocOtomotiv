import React, { useContext, useState, useEffect } from 'react'
import ItemContext from '../../context/ItemContext';
import styles from './styles.module.css'

const SelectItem = () => {
  
  const { option, setOption, modelNames } = useContext(ItemContext)
  const [car, setCar] = useState('')
  const [model, setModel] = useState([]); // setModel(modelNames.map((item) => item.model))
  const cars = modelNames.map( (item) => item.name).filter((v, i, a) => a.indexOf(v) === i)

  useEffect(() => {
    setModel(modelNames.map((item)=> Object.values(item)).filter(item=> item[0] === car).map(item => item[1]))
  }, [car, modelNames])

  return (
    <div className={styles.container}>
        <select name={"Marka"} onChange={(e) => setCar(e.target.value)}>
        <option disabled selected>{"Marka"}</option>
        {cars.map((item, i) => {
          return (
          <option key={i} value={item}>{item}</option>
          );
        })}
        </select>

        <select name={"Model"} value={option.option} onChange={(e) => setOption({option: e.target.value})}>
        <option disabled selected>{"Model"}</option>
        {model.map((item, i) => {
          return (
          <option key={i} value={item}>{item}</option>
          );
        })}
        </select>
    </div>
  )
}

export default SelectItem
