import { createContext, useState } from 'react'
import ItemData from '../json/ItemList.json'
import CarData from '../json/CarList.json'

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {

  const [items, setItems] = useState(ItemData.slice(0,29));
  const [modelNames, setModelNames] = useState(CarData.slice(0,43));
  const [option, setOption] = useState({option: ''})
  const [basketItems, setBasketItems] = useState([]) //{itemNo:'', itemCount:'', itemCost:''}

  const values={
    items,
    setItems,
    modelNames,
    setModelNames,
    option,
    setOption,
    basketItems,
    setBasketItems,
  }

  return (
    <ItemContext.Provider value={values}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;
