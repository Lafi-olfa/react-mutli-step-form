import { ChangeEventHandler, useState } from "react";

export default function PickAddons() {
    const [addons, setAddons] = useState(
        [
            {
                checked: true,
                title: "Online service",
                description: 'Access to multiplayer games',
                monthlyPrice: '$1/mo',
                yearlyPrice: '^$10/yr'
            },
            {
                checked: false,
                title: "Larger storage",
                description: 'Extra 1TB of cloud save',
                monthlyPrice: '$2/mo',
                yearlyPrice: '^$20/yr'
            },
            {
                checked: true,
                title: "Customizable profile",
                description: 'Custom theme on your profile',
                monthlyPrice: '$2/mo',
                yearlyPrice: '^$20/yr'
            }
        ]

    )

    const handleChange = (index) => {
        setAddons(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
        );
    }
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
                    {addons.map((plan, i) => (
                        <div
                            key={i}
                            className={`border-2 flex flex-row md:flex-col gap-4 rounded-lg px-4 py-4 cursor-pointer hover:border-purple-500 transition-all flex-1 min-w-0 ${plan.checked ? 'border-purple-950 bg-purple-50'
                                : 'border-gray-300 bg-white'}`}>
                            <div className="flex flex-row items-center justify-between w-full ">
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="checkbox" className="w-4 h-4"
                                        checked={plan.checked}
                                        onChange={() => handleChange(i)}
                                    />
                                    <div className="flex flex-col min-w-0">
                                        <h2 className="font-bold text-marine-blue text-lg truncate">
                                            {plan.title}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-gray-500">{plan.monthlyPrice}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    )
}