import { createContext } from 'react';
import { useState } from 'react';


////////// Cart Items //////////
let initialCartState=[
  {
    id: '0',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 2000,
    quantity: 0,
  },
  {
    id: '1',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 1550,
    quantity: 0,
  },
]

export const cartContext = createContext(initialCartState);

////////// All Shop Information //////////
  let initialShopState={
  cardHolderName:"",
  cardNumber:"",
  cardGoodThru:"",
  cardCvc:"",
  totalPrice:""
}

////////// Context //////////
export const myShopContext = createContext();
export default function ShopContextProvider ({children}){

const [shopState,setShopState] = useState(initialShopState) //useState

////////////// 函式：輸入信用卡資料能夠更新 shopState //////////
const handleInputChange = (event) => {
  const { id, value } = event.target;
    setShopState(prevState => ({ ...prevState, [id]: value }));
    
};

////////////// 函式：Console.log 出 shopState //////////
const printAllInfo = ()=>{console.log(shopState)}

  return (
    <myShopContext.Provider value={{ handleInputChange, printAllInfo }}>
      {children}
    </myShopContext.Provider>
  );
}







