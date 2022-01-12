import { createContext, useState } from 'react'

const ItemContext = createContext();

export const ItemProvider = ( { children } ) => {

  const [option, setOption] = useState({option: ""})
  // const [items, setItems] = useState([
  //   {itemNo:"10009436", brand:"Volkswagen", model:"Golf", itemName: "Balata", itemCost: "110,06"},
  //   {itemNo:"10009437", brand:"Ford", model:"Focus", itemName: "Disk", itemCost: "350,05"},
  //   {itemNo:"10002355", brand:"Fiat", model:"Doblo", itemName: "Silecek", itemCost: "80,08"},
  //   {itemNo:"10003462", brand:"Opel", model:"Astra", itemName: "Dikiz Aynası", itemCost: "449,09"},
  //   {itemNo:"10000230", brand:"Renault", model:"Megane 2", itemName: "El Freni", itemCost: "150,02"},
  //   {itemNo:"10013423", brand:"Audi", model:"A4", itemName: "Hayalet Gösterge", itemCost: "2999,03"},
  //   {itemNo:"10002134", brand:"Audi", model:"A3", itemName: "Torpido", itemCost: "123,00"},
  //   {itemNo:"10091231", brand:"Renault", model:"Megane 4", itemName: "Stop Lambası", itemCost: "999,99"},
  //   {itemNo:"10012312", brand:"Seat", model:"Leon", itemName: "Klima", itemCost: "1100,01"},
  // ])

  const values={
    option,
    setOption,
    // items,
    // setItems
  }

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