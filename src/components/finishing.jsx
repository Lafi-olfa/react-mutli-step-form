import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import AppContext from "../context/AppContext";
import ThankYouIcon from '../assets/images/icon-thank-you.svg';

export default function Finishing() {

  const { plans, addons, isYearlyBilling, finish} = useContext(AppContext);
  const { watch } = useFormContext();

  const selectedPlanId = watch("plan");
  const selectedAddonsIds = watch("addons") || [];

  const selectedPlan = plans.find(p => p.id === selectedPlanId);
  const selectedAddons = addons.filter(a => selectedAddonsIds.includes(a.id));

  const getAddonPrice = (addon) => 
    isYearlyBilling ? addon.yearlyPrice : addon.monthlyPrice;

  const getPlanPrice = () =>
    isYearlyBilling ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice;

  const totalPrice = () => {
    const planPrice = parseInt(getPlanPrice().replace(/\D/g, ""));
    const addonsPrice = selectedAddons.reduce((sum, addon) => {
      return sum + parseInt(getAddonPrice(addon).replace(/\D/g, ""));
    }, 0);
    return planPrice + addonsPrice;
  };
if(finish){
    return(
         <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
                    <div className="flex items-center flex-col gap-4 mb-6">
                       <img src={ThankYouIcon}
                       className='w-12 h-12'
                       alt="thank you icon" />
                        <h2 className="font-bold text-2xl text-gray-800 mb-2">Thank you!</h2>
                        <p className="text-gray-500">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                    </div>       
                </div>
    )
} else{
    return(
  <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 rounded-lg shadow-sm">
      
      <h2 className="font-bold text-2xl text-gray-800 mb-2">Finishing up</h2>
      <p className="text-gray-500 text-lg mb-6">Double-check everything looks OK before confirming.</p>

      <div className="space-y-4">

        {/* Selected Plan */}
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-blue-900">
              {selectedPlan.title} ({isYearlyBilling ? "Yearly" : "Monthly"})
            </p>
            <span className="text-gray-500 underline cursor-pointer">Change</span>
          </div>
          <span className="font-bold text-blue-900">{getPlanPrice()}</span>
        </div>

        <hr />

        {/* Selected Addons */}
        {selectedAddons.map(addon => (
          <div key={addon.id} className="flex justify-between">
            <p className="text-gray-500">{addon.title}</p>
            <span className="text-blue-900 font-medium">
              +{getAddonPrice(addon)}
            </span>
          </div>
        ))}

      </div>

      {/* Total */}
      <div className="flex justify-between mt-6">
        <span className="text-gray-500">
          Total (per {isYearlyBilling ? "year" : "month"})
        </span>
        <span className="text-blue-800 font-bold">
          ${totalPrice()}/{isYearlyBilling ? "yr" : "mo"}
        </span>
      </div>

    </div>
    )
}
 
}
