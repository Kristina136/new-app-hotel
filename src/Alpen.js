import { useState } from "react";
import { data2 } from "./data2";

function Alpen() {

  
    //Sekond block with slides
    const [country2, setCountry2]= useState(0);
    const[showText, setShowText] = useState(false);
  const {id, name, description, price, image}=data2[country2];
  
    // const removeItem2 =()=>{
    // const newCountry=data2.length=0;
    // setCountry2(newCountry)
    //  }
    const removeItem2 =()=>{
      document.getElementById("removeAlpen").remove();
    }

    

    const showTextClick=()=>{
      data2[country2].showMore = !data2[country2].showMore
      setShowText(!showText)
    }
  const nextClick = ()=>{
    setCountry2((country2=>{
        country2++;
      if(country2>data2.length-1){country2=0;}
      return country2;
    }))
  }
  const lastClick = ()=>{
    setCountry2((country2=>{
        country2--;
      if(country2<0){return data2.length-1}
      return country2;
    }))
  }
  
    return (
      <div className="App">
        
  
    <div key={id}>
      <div id="removeAlpen" className="hotelContainer ">
      <button onClick={lastClick} className="btn">◁</button>
      <div className="container">
      <h2 className="name">{name}</h2>
      <p>{data2[country2].showMore ? description : description.substring(0, 120)+"..."}
      <button onClick={()=> showTextClick()}>{data2[country2].showMore ? "Show less" : "Show more"}
      </button>
      </p>
      <img src ={image} alt="hotel"/>

      
      <h2 className="">{price}</h2>
      <button className="not" onClick={()=>removeItem2()}>Not interisting</button>
      </div>
       <button onClick={nextClick} className="btn">▷</button>
      </div>
    </div>
  
      </div>
    );
  
  }
  
  export default Alpen;
  