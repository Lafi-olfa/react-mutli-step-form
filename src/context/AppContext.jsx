import React, { createContext, useState } from "react";
import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1)
    
  const plans = [
    {
      id: 'arcade',
      image: arcadeIcon,
      title: "Arcade",
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

  // const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);

  const toggleBilling = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

     const [addons, setAddons] = useState(
        [
            {
                id: 'online service',
                checked: false,
                title: "Online service",
                description: 'Access to multiplayer games',
                monthlyPrice: '$1/mo',
                yearlyPrice: '^$10/yr'
            },
            {
                id:'larger storage',
                checked: false,
                title: "Larger storage",
                description: 'Extra 1TB of cloud save',
                monthlyPrice: '$2/mo',
                yearlyPrice: '^$20/yr'
            },
            { 
                id:'customizable pofile',
                checked: false,
                title: "Customizable profile",
                description: 'Custom theme on your profile',
                monthlyPrice: '$2/mo',
                yearlyPrice: '^$20/yr'
            }
        ]

    )

    
  const value ={ currentStep,isYearlyBilling,setIsYearlyBilling, setCurrentStep, addons,
    plans, toggleBilling
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
