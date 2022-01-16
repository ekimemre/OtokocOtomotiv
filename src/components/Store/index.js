import React, { useContext, useState } from 'react'
import ReactPaginate from 'react-paginate'
import SelectItem from '../../components/SelectItem'
import Input from '../../components/Input'
import styles from './styles.module.css'
import PartItem from '../../components/PartItem';
import ItemContext from '../../context/ItemContext';

const Store = () => {

  const { items, option, setOption } = useContext(ItemContext);
  const optionName = option.option;

  const [pageNumber, setPageNumber] = useState(0)
  const itemPerPage = 6
  const pagesVisited = pageNumber * itemPerPage

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  const filtered = items.filter((item) => {
    return Object.keys(item).some((key => {
      return item[key].toString().toLowerCase().includes(optionName.toLowerCase())
    }))
  });

  const pageCount = Math.ceil(filtered.length / itemPerPage)

  const displayItems = filtered.slice(pagesVisited, pagesVisited + itemPerPage).map((item, i) => {
    return ( 
      <div key={i}>
        <PartItem partId={item.itemNo} partName={item.itemName} partCost={item.itemCost}/>
      </div>
    )
  })

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.search}>
          
          <p className={styles.boxs}> <SelectItem/> </p>
          
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

        {displayItems}
        <div className={styles.pagination}>
          <ReactPaginate 
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousLinkClassName={styles.previousBttn}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisable}
            activeClassName={styles.paginationActive}
          />
        </div>
      </div>
    </div>
  )
}

export default Store



// {/* {filtered.map( (item, i) => {
//   return ( 
//     <div key={i}>
//       <PartItem partId={item.itemNo} partName={item.itemName} partCost={item.itemCost}/>
//     </div>
//   )
// })} */}