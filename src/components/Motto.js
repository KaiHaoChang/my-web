import React, {useState} from "react";
import MottoStorage from "./asset/MottoStorage";


const getRandomMotto = MottoStorage[Math.floor(Math.random()*MottoStorage.length)]
console.log(getRandomMotto)


const Motto = () => {
  const [DefaultMotto, setDefaultMotto] = useState(getRandomMotto)
  const {motto, name, from} = DefaultMotto

  const onMottoClick = () => {
    setDefaultMotto(() => MottoStorage[Math.floor(Math.random()*MottoStorage.length)])
  }

  return(

    <div className="motto-containers">
      <div className="motto-container">
        <h2 className="motto-what">{motto}</h2>
        <h3 className="motto-who">{name}_<span>{from}</span></h3>
      </div>
      <button className="motto-btn" onClick={onMottoClick}>來句新的</button>
    </div>
  )
}

export default Motto