import Steps from "./components/steps";
import Buttons from "./components/buttons";
import PersonalInfo from "./components/personal-info";
import SelectPlan from "./components/select-plan";
import PickAddons from "./components/pick-addons";
import Finishing from "./components/finishing";
import ThankYou from "./components/thank-you";
import { useContext } from "react";
import AppContext from "./context/AppContext";

export default function App() {
  const { currentStep } = useContext(AppContext);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <SelectPlan />
      case 3:
        return <PickAddons />
      case 4:
        return <Finishing />
      case 5:
        return <ThankYou />
      default:
        <PersonalInfo />
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col rounded-none md:flex-row ">
      <Steps />

      <div className="d-flex flex-row w-full">
        {
          renderStep()
        }
        <Buttons />
      </div>
    </div>
  )
}