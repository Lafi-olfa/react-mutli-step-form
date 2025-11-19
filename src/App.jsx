import Steps from "./components/steps";
import Buttons from "./components/buttons";
import PersonalInfo from "./components/personal-info";
import SelectPlan from "./components/select-plan";
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
    <div className="min-h-screen flex flex-col rounded-none ">
      {/* steps bar */}
    <Steps/>
    {/* cards */}
    {/* {
      renderStep()
    } */}
<SelectPlan/>
    {/* buttons */}
    <Buttons/>
    </div>
  )
}