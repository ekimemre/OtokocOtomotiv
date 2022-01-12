import React from 'react'
import styles from './styles.module.css'
import RightIcon from '../../svg/DuoRightIcon'
import DeleteIcon from '../../svg/DeleteIcon'

const basketItems = [{id:"12345632", count:"3", cost:"110,03"},{id:"12345632", count:"3", cost:"110,03"},{id:"12345632", count:"3", cost:"110,03"}]

const ExtendedBar = (props) => {

  const { zoomOut } = props;

  return (
    <div className={styles.container}>

      <div className={styles.basket} onClick={()=> {zoomOut(false)}}>
        <RightIcon/> Detaylı Sepeti Gizle
      </div>
      <h1 className={styles.title}>Sepet</h1>

      <ul className={styles.list}>
        {basketItems.map( (item) => {
          return(
            <li>{item.id} <p>{item.count} Ad.</p> {item.cost} <DeleteIcon/> </li>
          )
        })}
      </ul>
      
      <hr style={{border: "1px solid #000000"}}/>
      
      <ul className={styles.price}>
        <li>{"Ara Toplam"} <p>{"midScore"}</p></li>
        <li>{"KDV"} <p>{"%18"}</p> <p>{"calcScore"}</p></li>
        <li> <p style={{fontWeight: "900"}}>{"Toplam"}</p> <p>{"finalScore"}</p></li>
      </ul>

    </div>
  )
}

export default ExtendedBar
