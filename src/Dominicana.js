import { useState } from "react";
import { data } from "./data";

function Dominicana() {

  
    //First block with slides
    const [country, setCountry]= useState(0);
    const[showText, setShowText] = useState(false);
  const {id, name, description, price, image}=data[country];
  
  const removeItem =()=>{
    document.getElementById("removeDominicana").remove();
  }

    const showTextClick=()=>{
      data[country].showMore = !data[country].showMore
      setShowText(!showText)
    }
  const nextClick = ()=>{
    setCountry((country=>{
      country++;
      if(country>data.length-1){country=0;}
      return country;
    }))
  }
  const lastClick = ()=>{
    setCountry((country=>{
      country--;
      if(country<0){return data.length-1}
      return country;
    }))
  }
  
    return (
      <div className="App">
        
  
    <div key={id}>
      <div id="removeDominicana" className="hotelContainer">
      <button onClick={lastClick} className="btn">◁</button>
      <div className="container">
      <h2 className="name">{name}</h2>
      <p>{data[country].showMore ? description : description.substring(0, 120)+"..."}
      <button onClick={()=> showTextClick()}>{data[country].showMore ? "Show less" : "Show more"}
      </button>
      </p>
     
      <img src ={image} alt="hotel"/>
      
      <h2 className="">{price}</h2>
      <button className="not" onClick={()=>removeItem()}>Not interisting</button>
      </div>
      <button onClick={nextClick} className="btn">▷</button>
      </div>
    </div>
  
      </div>
    );
  
  }
  
  export default Dominicana;
  