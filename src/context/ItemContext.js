import { createContext, useState, useEffect } from 'react'

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {

  const [option, setOption] = useState({option: ''})
  const [basketItems, setBasketItems] = useState([]) //{itemNo:'', itemCount:'', itemCost:''}

  const values={
    option,
    setOption,
    basketItems,
    setBasketItems,
  }

  useEffect( () => {
    console.log(basketItems)
  },[basketItems])

  return (
    <ItemContext.Provider value={values}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContext;


  // const [carNames, setCarNames] = useState([
  //   {id: "1", name: "Audi"},
  //   {id: "2", name: "BMW"},
  //   {id: "3", name: "Ferrari"},
  //   {id: "4", name: "Fiat"},
  //   {id: "5", name: "Ford"},
  //   {id: "6", name: "Honda"},
  //   {id: "7", name: "McLaren"},
  //   {id: "8", name: "Mercedes"},
  //   {id: "9", name: "Opel"},
  //   {id: "9", name: "Peugeot"},
  //   {id: "9", name: "Porsche"},
  //   {id: "9", name: "Renault"},
  //   {id: "9", name: "Seat"},
  //   {id: "9", name: "Volkswagen"}
  // ]);