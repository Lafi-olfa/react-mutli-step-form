import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useFormContext } from "react-hook-form";

export default function PickAddons() {

    const { addons,isYearlyBilling } = useContext(AppContext);
  
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
            {/* Header */}
            <div className="text-start mb-6">
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Pick add-ons</h2>
                <p className="text-gray-500 text-lg">Add-ons help enhance your gaming experience.</p>
            </div>

            <form className="space-y-6">
                {/* cards */}
                <div className="flex flex-col md:justify-between gap-4">
                    {addons.map((addon, i) => (
                        <div
                            key={i}
                            className={`border-2 flex flex-row md:flex-col gap-4 rounded-lg px-4 py-4 cursor-pointer hover:border-purple-500 transition-all flex-1 min-w-0 ${addon.checked ? 'border-purple-950 bg-purple-50'
                                : 'border-gray-300 bg-white'}`}>
                            <div className="flex flex-row items-center justify-between w-full ">
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" 
                                    name="addons" 
                                    id="addons"
                                     className="w-4 h-4"
                                     value={addon.id}
                                        {...register('addons', {
                                            required: 'You should select an addon'
                                        })
                                        }

                                    />

                                    <div className="flex flex-col min-w-0">
                                        <h2 className="font-bold text-marine-blue text-lg truncate">
                                            {addon.title}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {addon.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-gray-500">
                                       + {isYearlyBilling? `${addon.yearlyPrice} `: `${addon.monthlyPrice}`}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {errors.addons && (
                    <p className="text-red-600 text-sm mt-1 text-center">
                        {errors.addons.message}
                    </p>
                )}
            </form>
        </div>
    )
}