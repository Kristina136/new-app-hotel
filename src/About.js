import { useState } from "react";
import { data0 } from "./data0";
import Button from "./Button";

function About(){
   const [object, setObject] =useState(data0);
   const filterPlace =(term)=>{
const newPlace=data0.filter(element=>element.term===term);
setObject(newPlace);
   };
      return (
        <div>
         <h1 className="header"> Top { data0.length } beautiful Place in the word</h1>
            <Button filterPlace={filterPlace}/>
            { object.map((element=>
    {const{id,name,place,image,term}=element;
 return (
    <div key={id} className="container-about">
        <div className="place">
           <p>{name}</p>
           <p>{place}</p>
        <img src={image} alt="natur"/> 
        <button></button>
        </div>
        
    </div>
 );
}
    
    ))}
        </div>
      )
    
  }

  
export default About