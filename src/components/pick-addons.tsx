export default function PickAddons() {
    const addons = [
        {
            checked: false,
            title: "Online service",
            description: 'Access to multiplayer games',
            monthlyPrice: '$1/mo',
            yearlyPrice: '^$10/yr'
        },
        {
            checked: true,
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
    return (
        <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
            {/* Header */}
            <div className="text-start mb-6">
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Pick add-ons</h2>
                <p className="text-gray-500 text-lg">Add-ons help enhance your gaming experience.</p>
            </div>

            <form className="space-y-6">
                {/* Plan Cards */}
                <div className="space-y-3 flex flex-col md:flex-row md:justify-between gap-2">
                    {addons.map((plan, i) => (
                        <div
                            key={i}
                            //   onClick={() => handlePlanSelect(plan.id)}
                            className='border-2 flex flex-row md:flex-col gap-4 rounded-lg px-4 py-4 h-28 md:w-38 md:h-38 cursor-pointer transition-all duration-200 hover:border-purple-500'
                        >
                            {/* <img
                src={plan.image}
                alt={plan.title}
                className="w-12 h-12 md:w-8 md:h-8"
              /> */}
                            <div className="flex flex-row items-center justify-between w-100">
                                <div className="flex flex-row gap-4 items-center">
                                    <input type="checkbox" name=""  id="" className="w-6 h-6" />
                                    <div className="flex flex-col">
                                        <h2 className="font-bold text-marine-blue text-lg">
                                            {plan.title}
                                        </h2>
                                        <span>{plan.description}</span>
                                    </div>
                                </div>
                                <span>
                                    {plan.monthlyPrice}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>


            </form>
        </div>
    )
}