import React, { useContext } from 'react'
import ItemContext from '../../context/ItemContext'
import LeftIcon from '../../svg/DuoLeftIcon'
import styles from './styles.module.css'

const Sidebar = (props) => {

  const { basketItems } = useContext(ItemContext)
  const { zoomIn } = props;

  return (
    <div className={styles.container}>

      <div className={styles.basket} onClick={()=> {zoomIn(true)}}>
        <LeftIcon/> Detaylı Sepeti Göster
      </div>
      <h1 className={styles.title}>Sepet Özeti</h1>

      <ul className={styles.list}>
        {basketItems.map((item) => {
          return(
            <li>{item.itemNo} <p>{item.itemCount} Ad.</p></li>
          )
        })}
      </ul>
      
      <hr style={{border: "1px solid #000000",width:"98%"}}/>
    </div>
  )
}

export default Sidebar
