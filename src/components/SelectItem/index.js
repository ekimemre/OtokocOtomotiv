import React, { useContext } from 'react'
import ItemContext from '../../context/ItemContext';
import './index.css'

const carNames = [
  {id: "1", name: "Audi"},
  {id: "2", name: "BMW"},
  {id: "3", name: "Ferrari"},
  {id: "4", name: "Fiat"},
  {id: "5", name: "Ford"},
  {id: "6", name: "Honda"},
  {id: "7", name: "McLaren"},
  {id: "8", name: "Mercedes"},
  {id: "9", name: "Opel"},
  {id: "10", name: "Peugeot"},
  {id: "11", name: "Porsche"},
  {id: "12", name: "Renault"},
  {id: "13", name: "Seat"},
  {id: "14", name: "Volkswagen"}
];

const modelNames = [
  {id: "1", name: "A3"},
  {id: "1", name: "A4"},
  {id: "1", name: "Q7"},
  {id: "3", name: "Doblo"},
  {id: "3", name: "Egea"},
  {id: "5", name: "Focus"},
  {id: "9", name: "Astra"},
  {id: "9", name: "Corsa"},
  {id: "9", name: "Astra Sedan"},
  {id: "12", name: "Megane 2"},
  {id: "12", name: "Megane 4"},
  {id: "13", name: "Leon"},
  {id: "14", name: "Polo"},
  {id: "14", name: "Golf"}
];


const SelectItem = ( props ) => {
  
  const { option, setOption } = useContext(ItemContext)
  const { name, id, options } = props;

  const handleChange = (e) => {
    setOption({option: e.target.value})
  } 

  return (
    <div className='container'>
        <select name={name} id={id} value={option.option} onChange={handleChange}>
        <option disabled selected>{name}</option>
        {options && carNames.map((item) => {
          return (
          <option key={item.id} value={item.name}>{item.name}</option>
          );
        })}
        {!options && modelNames.map((item) => {
          return (
          <option key={item.id} value={item.name}>{item.name}</option>
          );
        })}
        </select>
    </div>
  )
}

export default SelectItem
