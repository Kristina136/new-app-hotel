
import "./App.css";
import Dominicana from "./Dominicana";
import Alpen from "./Alpen";
import Bali from "./Bali";
import Poland from "./Poland";


function App() {

  return ( 
    <div className="App">
     <div className="containerHeader">
  <h1 className="header">TOP place for Vacation </h1>
  </div>
  
<Dominicana/>
<Alpen/>
<Bali/>
<Poland/>
    </div>
  )

}

export default App;