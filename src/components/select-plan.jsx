import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';
import { useState } from 'react';

export default function SelectPlan() {
  const plans = [
    {
      id: 'arcade',
      image: arcadeIcon,
      title: 'Arcade',
      monthlyPrice: '$9/mo',
      yearlyPrice: '$90/yr',
      yearlyBonus: '2 months free'
    },
    {
      id: 'advanced',
      image: advancedIcon,
      title: 'Advanced',
      monthlyPrice: '$12/mo',
      yearlyPrice: '$120/yr',
      yearlyBonus: '2 months free'
    },
    {
      id: 'pro',
      image: ProIcon,
      title: 'Pro',
      monthlyPrice: '$15/mo',
      yearlyPrice: '$150/yr',
      yearlyBonus: '2 months free'
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);

  const toggleBilling = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="bg-white mx-4 -mt-8 md:mt-8 p-6 z-10  rounded-lg shadow-sm">
      {/* Header */}
      <div className="text-start mb-6">
        <h2 className="font-bold text-2xl text-gray-800 mb-2">Select your plan</h2>
        <p className="text-gray-500 text-lg">You have the option of monthly or yearly billing.</p>
      </div>

      <form className="space-y-6">
        {/* Plan Cards */}
        <div className="space-y-3 flex flex-col md:flex-row md:justify-between gap-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handlePlanSelect(plan.id)}
              className={`border-2 flex flex-row md:flex-col gap-4 rounded-lg px-4 py-4 h-28 md:w-38 md:h-38 cursor-pointer transition-all duration-200 hover:border-purple-500 ${selectedPlan === plan.id
                ? 'border-purple-950 bg-purple-50'
                : 'border-gray-300 bg-white'
                }`}
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-12 h-12 md:w-8 md:h-8"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-marine-blue text-lg">
                  {plan.title}
                </h2>
                <span className="text-gray-500 text-sm">
                  {isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                {isYearlyBilling && (
                  <span className="text-marine-blue text-xs font-medium mt-1">
                    {plan.yearlyBonus}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Billing Toggle */}
        <div className="bg-gray-50 rounded-lg py-3 px-4">
          <div className="flex items-center justify-center gap-6">
            <span
              className={`font-medium text-sm transition-colors ${!isYearlyBilling
                ? 'text-marine-blue'
                : 'text-gray-500'
                }`}
            >
              Monthly
            </span>

            <button
              type="button"
              onClick={toggleBilling}
              className="relative inline-flex items-center h-6 rounded-full w-12 bg-blue-950 transition-colors"
              aria-label={`Switch to ${isYearlyBilling ? 'monthly' : 'yearly'} billing`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ${isYearlyBilling ? 'translate-x-7' : 'translate-x-1'
                  }`}
              />
            </button>

            <span
              className={`font-medium text-sm transition-colors ${isYearlyBilling
                ? 'text-marine-blue'
                : 'text-gray-500'
                }`}
            >
              Yearly
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}