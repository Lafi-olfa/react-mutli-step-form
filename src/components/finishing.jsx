// import { useContext } from "react";
import { useFormContext } from "react-hook-form";
// import AppContext from "../context/AppContext";


export default function Finishing() {
    //   const { plans } = useContext(AppContext);
  const { watch } = useFormContext();

  const selectedPlanId = watch('plan');
  const selectedAddonsIds = watch('addons') || [];
  
  console.log('Plan ID sélectionné:', selectedPlanId);
  console.log('Add-ons IDs sélectionnés:', selectedAddonsIds);

    return (
        <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
            {/* Header */}

            <div className="text-start mb-6">
               
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Finishing up</h2>
                <p className="text-gray-500 text-lg">Double-check everything looks OK before confirming.</p>
            </div>

            <div className="space-y-6">
                {/*Cards */}
                <div className="space-y-3 flex flex-col  md:justify-between gap-2">
                    <div className="flex flex-row justify-between">
                        <div>
                            <p className="text-blue-950 font-medium">Arcade (Monthly)</p>
                            <span className="text-gray-500 underline">Change</span>
                        </div>
                        <span className="text-blue-950  font-bold">$90/yr</span>
                    </div>
                    <hr className="text-gray-200 h-1" />
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-500 font-medium">Online service</p>
                        <span className="text-blue-950 ">$10/yr</span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-gray-500 font-medium">Larger storage</p>
                        <span className="text-blue-950 ">$20/yr</span>
                    </div>
                </div>


            </div>
            <div className="flex flex-row justify-between mt-9">
                <span className="text-gray-500">Total (per year)</span>
                <span className="text-blue-800 font-bold">$120/yr</span>
            </div>
        </div>
    )
}