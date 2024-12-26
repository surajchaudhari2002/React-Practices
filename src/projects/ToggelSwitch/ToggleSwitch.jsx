import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
 
const [isOn,setIsOn]=useState(false);

const handleToggleSwitch=()=>{
    setIsOn(!isOn);
}

const checkStatus=isOn ? "on" : "off"
  return (
    <>
      
      <div 
      className="toggle-switch"
      onClick={handleToggleSwitch}
      style={{backgroundColor: isOn?"green":"red"}}
      >
        <div className={`switch ${checkStatus}`}>

         <span className="switch-state">{checkStatus}</span>
        </div>
      </div>
    </>
  );
};