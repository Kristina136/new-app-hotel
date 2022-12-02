import { useState } from "react";
import { data4 } from "./data4";

function Alpen() {

  
    //Sekond block with slides
    const [country4, setCountry4]= useState(0);
    const[showText, setShowText] = useState(false);
  const {id, name, description, price, image}=data4[country4];
  
    // const removeItem2 =()=>{
    // const newCountry=data2.length=0;
    // setCountry2(newCountry)
    //  }
    const removeItem4 =()=>{
      document.getElementById("removePoland").remove();
    }

    

    const showTextClick=()=>{
      data4[country4].showMore = !data4[country4].showMore
      setShowText(!showText)
    }
  const nextClick = ()=>{
    setCountry4((country4=>{
        country4++;
      if(country4>data4.length-1){country4=0;}
      return country4;
    }))
  }
  const lastClick = ()=>{
    setCountry4((country4=>{
        country4--;
      if(country4<0){return data4.length-1}
      return country4;
    }))
  }
  
    return (
      <div className="App">
        
  
    <div key={id}>
      <div id="removePoland" className="hotelContainer ">
      <button onClick={lastClick} className="btn">◁</button>
      <div className="container">
      <h2 className="name">{name}</h2>
      <p>{data4[country4].showMore ? description : description.substring(0, 120)+"..."}
      <button onClick={()=> showTextClick()}>{data4[country4].showMore ? "Show less" : "Show more"}
      </button>
      </p>
      <img src ={image} alt="hotel"/>
      <h2 className="">{price}</h2>
      <button className="not" onClick={()=>removeItem4()}>Not interisting</button>
      </div>
       <button onClick={nextClick} className="btn">▷</button>
      </div>
    </div>
  
      </div>
    );
  
  }
  
  export default Alpen;
  