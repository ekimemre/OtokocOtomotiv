import React, { useContext } from 'react'
import SelectItem from '../../components/SelectItem'
import Input from '../../components/Input'
import styles from './styles.module.css'
import PartItem from '../../components/PartItem';
import ItemContext from '../../context/ItemContext';
import { selectOptions } from '@testing-library/user-event/dist/select-options';


const items = ([
  {itemNo:"10009436", brand:"Volkswagen", model:"Golf", itemName: "Balata", itemCost: "110,06"},
  {itemNo:"10009437", brand:"Ford", model:"Focus", itemName: "Disk", itemCost: "350,05"},
  {itemNo:"10002355", brand:"Fiat", model:"Doblo", itemName: "Silecek", itemCost: "80,08"},
  {itemNo:"10003462", brand:"Opel", model:"Astra", itemName: "Dikiz Aynası", itemCost: "449,09"},
  {itemNo:"10000230", brand:"Renault", model:"Megane 2", itemName: "El Freni", itemCost: "150,02"},
  {itemNo:"10013423", brand:"Audi", model:"A4", itemName: "Hayalet Gösterge", itemCost: "2999,03"},
  {itemNo:"10002134", brand:"Audi", model:"A3", itemName: "Torpido", itemCost: "123,00"},
  {itemNo:"10091231", brand:"Renault", model:"Megane 4", itemName: "Stop Lambası", itemCost: "999,99"},
  {itemNo:"10012312", brand:"Seat", model:"Leon", itemName: "Klima", itemCost: "1100,01"},
  {itemNo:"11431153", brand:"Seat", model:"Leon", itemName: "Direksiyon", itemCost: "2200,01"},
  {itemNo:"10012312", brand:"Renault", model:"Megane 4", itemName: "Ekran", itemCost: "5000,01"},
  {itemNo:"10012312", brand:"Mercedes", model:"*", itemName: "Lastik", itemCost: "1100,01"},
]);

const Store = () => {

  const { option, setOption } = useContext(ItemContext);
  const optionName = option.option;

  const filtered = items.filter( (item) => {
    return Object.keys(item).some( (key => {
      return item[key].toString().toLowerCase().includes(optionName.toLowerCase())
    }))
  });

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.search}>
          <SelectItem
            name={"Marka"}
            id={"Marka"}
            options={true}
          />
          <SelectItem
            name={"Model"}
            id={"Model"}
            options={false}
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
          <p className={styles.item}>Resim</p>
          <p className={styles.item}>Parça No</p>
          <p className={styles.item}>Parça Adı</p>
          <p className={styles.item}>Tutar</p>
        </p>

        {filtered.map( (item, i) => {
          return ( 
            <div key={i}>
              <PartItem partId={item.itemNo} partName={item.itemName} partCost={item.itemCost}/>
            </div>
          )
        })}

        {/* <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/> */}

      </div>
    </div>
  )
}

export default Store
