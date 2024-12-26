import { Fragment } from "react";
import Card from "./components/Card";
import NetflixSeries from "./components/NetflixSeries";
import EventHandling from "./components/EventHandling";
import { EventPropagation } from "./components/Event Propogation";
import { EventProps } from "./components/EventProps";
import { State } from "./hooks/State";
import { DerivedState } from "./components/DerivedState";
import { LiftStateUp } from "./components/LiftStateUp";
import { ToggleSwitch } from "./projects/ToggelSwitch/ToggleSwitch";
import { ToDo } from "./projects/ToDo/ToDo";
import { ShortCircuit } from "./hooks/ShortCircuit";
import { UseStateTask } from "./hooks/useStateTask";
 const App=()=>{
  return (
  <>
    {/* <Card/> */}
    {/* <NetflixSeries/> */}
    {/* <EventHandling/>/ */}
    {/* <EventPropagation/> */}
    {/* <EventProps/> */}
    {/* <State/> */}
    {/* <DerivedState/> */}
    {/* <LiftStateUp/> */}
    {/* <ToggleSwitch/> */}
    {/* <ToDo/> */}
    {/* <ShortCircuit/> */}
    <UseStateTask/>
    </>
  );
};


export default App
