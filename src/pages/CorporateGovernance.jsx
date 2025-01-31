import React, { useState } from 'react'

import CorporateGovernanceContent from '../components/tabContents/CorporateGovernanceContent.jsx'
import FinancialReporting from '../components/tabContents/FinancialReporting.jsx'
import CompanyInformation from '../components/tabContents/CompanyInformation.jsx'

import HeroImage from '../assets/hero-images/building-1.jpg'

const CorporateGovernance = () => {

  const [activeTab, setActiveTab] = useState("Corporate Governance")

  const tabs = [
    { id: 'Corporate Governance', component: <CorporateGovernanceContent />, title: 'Corporate Governance' },
    { id: 'Financial Reporting', component: <FinancialReporting />, title: 'Financial Reporting' },
    { id: 'Company Information', component: <CompanyInformation />, title: 'Company Information' },
  ]

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[480px] bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}>
        {/* Overlay using Tailwind 4.0 syntax */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>

        {/* Content on top of the overlay */}
        <div className="relative h-full w-full flex justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            {tabs.map((tab) =>
              activeTab === tab.id ? tab.title : null
            )}
          </h1>
        </div>
      </div>

      {/* TABS BUTTONS */}
      <div className='bg-gradient-to-b from-cyan-500 to-blue-500'>
        <div className='max-w-7xl container mx-auto px-2 md:px-2 xl:px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-0 py-2 md:py-2'>
            {tabs.map((tab) =>
              <div
                key={tab.id}
                className=''
              >
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`${activeTab === tab.id ? 'text-black bg-[#00d8ff] rounded-sm' : 'text-white'} w-full cursor-pointer py-3 px-4 font-semibold text-base lg:text-lg uppercase`}
                >
                  {tab.title}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* TABS CONTENTS */}
      <div className='max-w-7xl container mx-auto px-4'>
        {tabs.map((tab) =>
          activeTab === tab.id ? tab.component : null
        )}
      </div>

    </>
  )
}

export default CorporateGovernance