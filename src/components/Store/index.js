import React, { useContext, useEffect } from 'react'
import SelectItem from '../../components/SelectItem'
import Input from '../../components/Input'
import styles from './styles.module.css'
import PartItem from '../../components/PartItem';
import ItemContext from '../../context/ItemContext';

const Store = () => {

  const { items, modelNames, option, setOption } = useContext(ItemContext);
  const optionName = option.option;

  const filtered = items.filter((item) => {
    return Object.keys(item).some((key => {
      return item[key].toString().toLowerCase().includes(optionName.toLowerCase())
    }))
  });

  const cars = modelNames.map( (item) => item.name).filter((v, i, a) => a.indexOf(v) === i)
  const models = modelNames.map( (item) => item.model)
  //Select boxlara Araba ve Modeller ayrı olarak yollanıyor. Daha doğru bir logic için Seçilen arabanın modelleri listelenmeli. TODO: Tek bir component haline getirilip içeride kontrol sağlanabilir.

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.search}>
          <SelectItem
            name={"Marka"}
            type={true}
            list={cars}
          />
          <SelectItem
            name={"Model"}
            type={false}
            list={models}
          />
          <Input
            type={"text"}
            name='componentNo'
            placeholder={"Parça No"}
            isSearch={true}
            onChange={(e) => { setOption({option: e.target.value}) }}
          />
        </div>

        <p className={styles.titles}>
          <p className={styles.item} style={{width: "18%"}}>Resim</p>
          <p className={styles.item} style={{width: "27%"}}>Parça No</p>
          <p className={styles.item} style={{width: "28%"}}>Parça Adı</p>
          <p className={styles.item}>Tutar</p>
        </p>

        {filtered.map( (item, i) => {
          return ( 
            <div key={i}>
              <PartItem partId={item.itemNo} partName={item.itemName} partCost={item.itemCost}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Store
