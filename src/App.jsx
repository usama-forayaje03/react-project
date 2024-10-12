import { useState } from "react"
import FoodCart from "./food-cart/FoodCart"
import { foodData } from "./food-cart/data";


function App() {

  let [index, setIndex] = useState(0);

  let nextBtnClickHandler = () => {
    setIndex( old => {
      if(foodData.length - 1 > old){
        return old + 1;
      }else{
        return old -9;
      }
    })
  }
  let prevBtnClickHandler = () => {
    setIndex( old => {
      if(old === 0 ){
        return +9;
      }else{
        return --old;
      }
    })
  }

  return (
    <>
    <FoodCart onClick={nextBtnClickHandler} prevClick={prevBtnClickHandler} data={foodData[index]} />
    </>
  )
}

export default App
