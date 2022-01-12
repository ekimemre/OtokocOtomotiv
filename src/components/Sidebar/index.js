import React, { useContext } from 'react'
import ItemContext from '../../context/ItemContext'
import LeftIcon from '../../svg/DuoLeftIcon'
import styles from './styles.module.css'

const basketItems = [{id:"12345632", count:"3", cost:"110,03"},{id:"12345632", count:"3", cost:"110,03"},{id:"12345632", count:"3", cost:"110,03"}]

const Sidebar = (props) => {

  const { option } = useContext(ItemContext)
  const { zoomIn } = props;

  return (
    <div className={styles.container}>

      <div className={styles.basket} onClick={()=> {zoomIn(true)}}>
        <LeftIcon/> Detaylı Sepeti Göster
      </div>
      <h1 className={styles.title}>Sepet Özeti</h1>

      <ul className={styles.list}>
        {basketItems.map( (item) => {
          return(
            <li>{item.id} <p>{item.count} Ad.</p></li>
          )
        })}
      </ul>
      
      <hr style={{border: "1px solid #000000",width:"98%"}}/>

      <div>{JSON.stringify(option)}</div>
      
    </div>
  )
}

export default Sidebar
