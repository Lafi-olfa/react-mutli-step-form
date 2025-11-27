import Steps from "./components/steps";
import Buttons from "./components/buttons";
import PersonalInfo from "./components/personal-info";
import SelectPlan from "./components/select-plan";
import PickAddons from "./components/pick-addons";
import Finishing from "./components/finishing";
import ThankYou from "./components/thank-you";
// import { useState } from "react";

export default function App() {
  //   const [currentStep, setCurrentStep] = useState(2)
  //  const renderStep=()=>{
  //   switch(currentStep){
  //     case 1: 
  //     return <PersonalInfo/>
  //     case 2:
  //       return <SelectPlan/>
  //   }
  //  }
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col rounded-none md:flex-row ">
      {/* steps bar */}
      <Steps  />
      {/* cards */}
      {/* {
      renderStep()
    } */}
      <div className="d-flex flex-row w-full">
        {/* <PersonalInfo/> */}
        {/* <SelectPlan /> */}
        {/* <PickAddons/> */}
          {/* <Finishing/> */}
          <ThankYou/>
        {/* buttons */}
        <Buttons />
      </div>
    </div>
  )
}