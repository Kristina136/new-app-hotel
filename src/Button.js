function Button({filterPlace}){
    return(
        <div className="container-about">
<button className="btn-term" onClick={()=>filterPlace("city")}>Cities </button>
<button className="btn-term" onClick={()=>filterPlace("island")}>Islands</button>
<button className="btn-term" onClick={()=>filterPlace("mountain")}>Mountain</button>
<button className="btn-term" onClick={()=>filterPlace("park")}>Park</button>
<button className="btn-term" onClick={()=>filterPlace("bridge")}>Bridges</button>
<button className="btn-term" onClick={()=>filterPlace("beach")}>Beaches</button>
<button className="btn-term" onClick={()=>filterPlace("cave")}>Caves</button>
<button className="btn-term" onClick={()=>filterPlace("waterfall")}>Waterfalls</button>
<button className="btn-term" onClick={()=>filterPlace("hotel")}>Hotels</button>
<button className="btn-term" onClick={()=>filterPlace("palace")}>Palaces</button>

        </div>
    )
}
export default Button