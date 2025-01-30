import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';


const FinancialReporting = () => {
  const [activeButton, setActiveButton] = useState(null);


  const buttons = [
    { id: 'Financial Reporting', title: 'Financial Reporting' },
    { id: 'Annual Reporting', title: 'Annual Reporting' },
  ];

  return (
    <div className="max-w-7xl container mx-auto px-4">
      {/* BUTTONS */}
      <div className="flex flex-col justify-start items-center space-y-4 py-12">
        {buttons.map((button) => (
          <div key={button.id} className="w-full">

            {/* BUTTON */}
            <button
              onClick={() => setActiveButton(activeButton === button.id ? null : button.id)} // Toggle content
              className="w-full flex justify-between items-center border-l-6 border-[#4169e1] py-3 px-3 sm:p-4 md:px-6 md:py-4 bg-white cursor-pointer"
            >
              <h1 className="text-sm min-[425px]:text-lg  font-medium uppercase">{button.title}</h1>
              {activeButton === button.id ? (
                <FaMinus className="h-5 w-5 text-[#4169e1]" />
              ) : (
                <FaPlus className="h-5 w-5 text-[#4169e1]" />
              )}
            </button>

            {/* BUTTON CONTENTS */}
            <div
              className={`overflow-hidden transition-all duration-150 ${activeButton === button.id ? 'h-full opacity-100 py-4' : 'max-h-0 opacity-0'
                } mt-4`}
            >
              <div className="px-4">

                {/* FINANCIAL REPORTING */}
                {button.id === 'Financial Reporting' && (
                  <>

                  </>
                )}

                {/* ANNUAL REPORTING */}
                {button.id === 'Annual Reporting' && (
                  <>

                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default FinancialReporting;
