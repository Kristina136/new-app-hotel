import { useState } from "react";
import { data3 } from "./data3";

function Alpen() {

  
    const [country3, setCountry3]= useState(0);
    const[showText, setShowText] = useState(false);
  const {id, name, description, price, image}=data3[country3];
  
    
    const removeItem3 =()=>{
      document.getElementById("removeBali").remove();
    }

    

    const showTextClick=()=>{
      data3[country3].showMore = !data3[country3].showMore
      setShowText(!showText)
    }
  const nextClick = ()=>{
    setCountry3((country3=>{
        country3++;
      if(country3>data3.length-1){country3=0;}
      return country3;
    }))
  }
  const lastClick = ()=>{
    setCountry3((country3=>{
        country3--;
      if(country3<0){return data3.length-1}
      return country3;
    }))
  }
  
    return (
      <div id="removeBali" className="App">
        
  
    <div key={id}>
      <div className="hotelContainer ">
      <button onClick={lastClick} className="btn">◁</button>
      <div className="container">
      <h2 className="name">{name}</h2>
      <p>{data3[country3].showMore ? description : description.substring(0, 120)+"..."}
      <button onClick={()=> showTextClick()}>{data3[country3].showMore ? "Show less" : "Show more"}
      </button>
      </p>
      <img src ={image} alt="hotel"/>
      <h2 className="">{price}</h2>
      <button className="not" onClick={()=>removeItem3()}>Not interisting</button>
      </div>
       <button onClick={nextClick} className="btn">▷</button>
      </div>
    </div>
  
      </div>
    );
  
  }
  
  export default Alpen;
  