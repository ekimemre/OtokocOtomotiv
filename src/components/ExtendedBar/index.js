import React, { useContext } from 'react'
import styles from './styles.module.css'
import RightIcon from '../../svg/DuoRightIcon'
import DeleteIcon from '../../svg/DeleteIcon'
import ItemContext from '../../context/ItemContext'

const ExtendedBar = (props) => {

  const { basketItems, setBasketItems } = useContext(ItemContext);
  const { zoomOut} = props;

  const prices = basketItems.map( (part ) => {
    const pri = parseInt(part.itemCost)
    const cou = parseInt(part.itemCount)
    return ( cou * pri )
  });
  const midScore = prices.reduce( (pre, cur) => pre + cur )
  const calcScore = (midScore * 18) / 100;
  const finalScore = midScore + calcScore;

  const handleClick = (itmNo) => {
    const array = [...basketItems];
    const delIndex = array.map( (item) => item.itemNo).indexOf(itmNo);
    array.splice(delIndex,1);
    setBasketItems(array);
  }

  return (
    <div className={styles.container}>

      <div className={styles.basket} onClick={()=> {zoomOut(false)}}>
        <RightIcon/> Detaylı Sepeti Gizle
      </div>
      <h1 className={styles.title}>Sepet</h1>

      <ul className={styles.list}>

        {basketItems.map( (item) => {
          return(
            <li>
              {item.itemNo} <p>{item.itemCount} Ad.</p> {item.itemCost} <p style={{cursor: "pointer"}} onClick={() => handleClick(item.itemNo)}><DeleteIcon/></p> 
            </li>
          )
        })}
      </ul>
      
      <hr style={{border: "1px solid #000000"}}/>
      
      <ul className={styles.price}>
        <li>{"Ara Toplam"} <p>{midScore}</p></li>
        <li>{"KDV"} <p>{"%18"}</p> <p>{calcScore}</p></li>
        <li> <p style={{fontWeight: "900"}}>{"Toplam"}</p> <p>{finalScore}</p></li>
      </ul>

    </div>
  )
}

export default ExtendedBar
