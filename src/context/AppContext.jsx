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
  const value ={ currentStep,
    setCurrentStep,
    plans, selectedPlan, toggleBilling, handlePlanSelect
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
