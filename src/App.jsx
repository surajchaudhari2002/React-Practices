import { Fragment } from "react";
import Card from "./components/Card";
import NetflixSeries from "./components/NetflixSeries";
import EventHandling from "./components/EventHandling";
import { EventPropagation } from "./components/Event Propogation";
import { EventProps } from "./components/EventProps";
import { State } from "./hooks/UseState/State";
import { DerivedState } from "./components/DerivedState";
import { LiftStateUp } from "./components/LiftStateUp";
import { ToggleSwitch } from "./projects/ToggelSwitch/ToggleSwitch";
import { ToDo } from "./projects/ToDo/ToDo";
import { ShortCircuit } from "./hooks/UseState/ShortCircuit";
import { Registration } from "./hooks/UseState/Registration";
import { RegistrationFormReact } from "./hooks/UseState/RegistrationReact";
import { LoginForm } from "./hooks/UseState/LoginForm";
import { ContactForm } from "./hooks/UseState/ContactForm";
import { EffectChallenge } from "./hooks/UseEffect/EffectChallenge";
import { Pokemon } from "./hooks/UseEffect/Pokemon";
import { Propsdriling } from "./components/PropsDrilling";
import { BioProvider } from "./hooks/ContextAPI";
import { Home } from "./hooks/ContextAPI/Home";
import { About } from "./hooks/ContextAPI/About";
import { UseRef } from "./hooks/useRef/";
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
    {/* <UseStateTask/> */}
    {/* <Registration/> */}
    {/* <RegistrationFormReact/> */}
    {/* <LoginForm/> */}
    {/* <ContactForm/> */}
    {/* <EffectChallenge/> */}
    {/* <Pokemon/> */}
    {/* <Propsdriling/>/ */}
    {/* <BioProvider>
      <Home/>
      <About/>
    </BioProvider> */}
    <UseRef/>
  



    </>
  );
};


export default App
