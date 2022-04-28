import React from 'react';
import '../App.css';
function Formation(propss){
  const imgstyle = {
        height: "80pt",
        weight: "80pt",
        borderRadius : "10px",
        display: "block",
    }
    return(
        <div>
            <div className="card">
                <img style={imgstyle} src={propss.Persprop.imgurl} ></img>
                <h1>{propss.Persprop.name}</h1>
                
            </div>
        </div>

    )
}
export default Formation