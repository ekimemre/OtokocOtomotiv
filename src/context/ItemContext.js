import { createContext, useState } from 'react'

const ItemContext = createContext();

const itemList = ([
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
  {itemNo:"10012312", brand:"Mercedes", model:"CLA Serisi", itemName: "Lastik", itemCost: "1100,01"},
  {itemNo:"", brand:"", model:"", itemName: "", itemCost: ""}
]);

const modelList = [
  {name: "Audi", model: "A3"},
  {name: "Audi", model: "A4"},
  {name: "Audi", model: "A5"},
  {name: "Audi", model: "Q7"},
  {name: "BMW", model: "X5"},
  {name: "BMW", model: "3 Serisi"},
  {name: "BMW", model: "4 Serisi"},
  {name: "BMW", model: "7 Serisi"},
  {name: "BMW", model: "M Serisi"},
  {name: "Fiat", model: "Doblo"},
  {name: "Fiat", model: "Egea"},
  {name: "Fiat", model: "Punto"},
  {name: "Ford", model: "Focus"},
  {name: "Ford", model: "Mondeo"},
  {name: "Ford", model: "Tourneo Courier"},
  {name: "Ford", model: "Fiesta"},
  {name: "Ford", model: "Ranger"},
  {name: "Honda", model: "Civic"},
  {name: "Honda", model: "City"},
  {name: "Honda", model: "Accord"},
  {name: "Mercedes", model: "A Serisi"},
  {name: "Mercedes", model: "C Serisi"},
  {name: "Mercedes", model: "E Serisi"},
  {name: "Mercedes", model: "H Serisi"},
  {name: "Opel", model: "Astra"},
  {name: "Opel", model: "Corsa"},
  {name: "Opel", model: "Insignia"},
  {name: "Opel", model: "Astra Sedan"},
  {name: "Peugeout", model: "308"},
  {name: "Peugeout", model: "508"},
  {name: "Peugeout", model: "2008"},
  {name: "Peugeout", model: "3008"},
  {name: "Renault", model: "Clio"},
  {name: "Renault", model: "Fluence"},
  {name: "Renault", model: "Talisman"},
  {name: "Renault", model: "Megane 2"},
  {name: "Renault", model: "Megane 4"},
  {name: "Volkswagen", model: "Polo"},
  {name: "Volkswagen", model: "Golf"},
  {name: "Volkswagen", model: "Passat"},
  {name: "Volkswagen", model: "Jetta"},
  {name: "Volkswagen", model: "Tiguan"},
  {name: "Volkswagen", model: "Arteon"}
];

export const ItemProvider = ({ children }) => {

  const [items, setItems] = useState(itemList);
  const [modelNames, setModelNames] = useState(modelList);
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


// const carList = [
//   {id: "1", name: "Audi"},
//   {id: "2", name: "BMW"},
//   {id: "3", name: "Fiat"},
//   {id: "4", name: "Ford"},
//   {id: "5", name: "Honda"},
//   {id: "6", name: "Mercedes"},
//   {id: "7", name: "Opel"},
//   {id: "8", name: "Peugeot"},
//   {id: "9", name: "Porsche"},
//   {id: "10", name: "Renault"},
//   {id: "11", name: "Volkswagen"}
// ];