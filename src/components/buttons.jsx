import { useContext } from "react"
import AppContext from "../context/AppContext"
import { useFormContext } from "react-hook-form";

export default function Buttons() {
  const { currentStep, setCurrentStep } = useContext(AppContext);
  const {handleSubmit, trigger} = useFormContext();
  const hnadleNext  = async() => {
    let fieldsToValidate= [];
    switch (currentStep) {
      case 1:
        fieldsToValidate= ['name', 'email','phone']
        break;
      case 2 :
        fieldsToValidate= ["plan"]
        break;
      case 3:
        fieldsToValidate= ['addons'];
        break;
      default:
        fieldsToValidate=[];
    }
    const isValidStep = await trigger(fieldsToValidate);
    if(isValidStep && currentStep < 5 ){
      setCurrentStep(currentStep + 1)
    }
  };
    const onSubmit = (data) => {
    console.log("Form data:", data);
    setCurrentStep(5); // Aller à l'étape de remerciement
  };
   const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
  <div className="bg-white p-4 mt-8 flex justify-between">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          className="text-gray-500 font-medium hover:text-gray-700 transition"
        >
          Go Back
        </button>
      )}
      
      <div className="ml-auto">
        {currentStep < 4 ? (
          <button
            type="button"
            onClick={hnadleNext}
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Next Step
          </button>
        ) : (
          // <button
          //   type="button"
          //   onClick={handleSubmit(onSubmit)}
          //   className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
          // >
          //   Confirm
          // </button>
           <button
            type="button"
           onClick={handleSubmit(onSubmit)}
            className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  )

}