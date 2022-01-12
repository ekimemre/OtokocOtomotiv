import React from 'react'
import SelectItem from '../../components/SelectItem'
import Input from '../../components/Input'
import styles from './styles.module.css'
import PartItem from '../../components/PartItem';

const index = () => {
  return (
    <div>
      <div className={styles.form}>
        <div className={styles.search}>
          {/* select and search items*/}
          <SelectItem
            name={"Marka"}
            id={"Marka"} 
          />
          <SelectItem
            name={"Model"}
            id={"Model"}
          />
          <Input
            type={"text"}
            name='componentNo'
            placeholder={"Parça No"}
            isSearch={true}
            // value={form.userName}
            // onChange={handleChange}
          />
        </div>

        <p className={styles.titles}>
          <p className={styles.item}>Resim</p>
          <p className={styles.item}>Parça No</p>
          <p className={styles.item}>Parça Adı</p>
          <p className={styles.item}>Tutar</p>
        </p>

        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
        <PartItem partId="10009437" partName="Klima" partCost={"250.0"}/>
          {/* ul li */}
          {/* side bar -> tıklandığında büyüyecek*/}
      </div>
    </div>
  )
}

export default index
