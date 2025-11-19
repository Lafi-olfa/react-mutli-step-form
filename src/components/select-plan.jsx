import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';
export default function SelectPlan() {
    const plans = [
        {
            image: arcadeIcon,
            title: 'Arcade',
            price: '$9/mo'
        },
        {
            image: advancedIcon,
            title: 'Advanced',
            price: '$12/mo'
        },
        {
            image: ProIcon,
            title: 'Pro',
            price: '$15/mo'
        }
    ]
    return (
        <div className="bg-white mx-4 -mt-8 p-6 z-10 rounded-none">
            <div className="text-start mb-6">
                <h2 className="font-bold text-2xl text-gray-800 mb-2">Select your plan</h2>
                <p className="text-gray-500 text-lg">You have the option of monthly or yearly billing.</p>
            </div>
            <form className="space-y-4">
                {
                    plans.map((plan) => (
                        <div className="border-purple-600 flex border-2 gap-2 rounded-lg items-center px-2">
                            <img src={plan.image} alt={plan.title} />
                            <div className="flex flex-col">
                                <h2 className="font-bold">{plan.title}</h2>
                                <span> {plan.price} </span>
                            </div>
                        </div>
                    ))
                }
                {/* <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="e.g. Stephen King" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="e.g. stephenking@lorem.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="e.g. +1 234 567 890" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 outline-none"
            />
          </div> */}
            </form>
        </div>)
}