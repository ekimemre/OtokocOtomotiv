import React, { useState, useContext, useEffect } from 'react'
import styles from './styles.module.css'
import RightIcon from '../../svg/DuoRightIcon'
import DeleteIcon from '../../svg/DeleteIcon'
import ItemContext from '../../context/ItemContext'

const ExtendedBar = (props) => {

  const [priceList, setPriceList] = useState({subTotal: 0, KDV: 0, amount: 0})
  const { basketItems, setBasketItems } = useContext(ItemContext);
  const { zoomOut} = props;

  useEffect( () => {
    const prices = basketItems.map( (part ) => {
      const pri = parseInt(part.itemCost)
      const cou = parseInt(part.itemCount)
      return ( cou * pri )
    });
    //Eger sepet boş olursa, atama işlemleri eksik kaldığı için uygulama patlayabilir. Bu neden bir kontrol yapılması gerekli. TODO: Daha generics yazılabilir.
    const subTotal = (basketItems.length === 0) ? 0 : prices.reduce( (pre, cur) => pre + cur )
    const KDV = (basketItems.length === 0) ? 0 : (subTotal * 18) / 100;
    const amount = (basketItems.length === 0) ? 0 : subTotal + KDV;
    setPriceList({subTotal: subTotal, KDV: KDV, amount: amount})

  }, [basketItems])

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
        {basketItems.map((item) => {
          return(
            <li>
              {item.itemNo} <p>{item.itemCount} Ad.</p> {item.itemCost} <p style={{cursor: "pointer"}} onClick={() => handleClick(item.itemNo)}><DeleteIcon/></p> 
            </li>
          )
        })}
      </ul>
      
      <hr style={{border: "1px solid #000000"}}/>
      
      <ul className={styles.price}>
        <li>{"Ara Toplam"} <p>{priceList.subTotal}</p></li>
        <li>{"KDV"} <p>{"%18"}</p> <p>{priceList.KDV}</p></li>
        <li> <p style={{fontWeight: "900"}}>{"Toplam"}</p> <p>{priceList.amount}</p></li>
      </ul>

    </div>
  )
}

export default ExtendedBar
