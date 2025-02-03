import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { BsFiletypePdf } from "react-icons/bs";


const FinancialReporting = () => {
  const [activeButton, setActiveButton] = useState(null);


  const buttons = [
    { id: 'Financial Reporting', title: 'Financial Reporting' },
    { id: 'Annual Reporting', title: 'Annual Reporting' },
  ];

  return (
    <div className="max-w-7xl container mx-auto">
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
                    <div className="w-full px-4">
                      {/* FY 2023-24 */}
                      <div className="mb-6">
                        <h1 className="text-lg mb-2">FY 2023-24</h1>
                        <a href="documents/dummy.pdf" target='_blank'>
                          <button className="flex items-center w-full sm:w-auto text-sm py-2.5 px-4 border rounded-xs text-blue-900 cursor-pointer">
                            <BsFiletypePdf className="h-5 w-5 mr-3 flex-shrink-0" />
                            AGM Notice - FY 2023-24
                          </button>
                        </a>
                      </div>

                      {/* FY 2022-23 */}
                      <div>
                        <h1 className="text-lg mb-2">FY 2022-23</h1>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
                          <a href="documents/dummy.pdf" target='_blank'>
                            <button className="flex items-center w-full sm:w-auto py-2.5 px-4 border rounded-xs text-sm text-blue-900 cursor-pointer">
                              <BsFiletypePdf className="h-5 w-5 mr-3 flex-shrink-0" />
                              Auditors Reports on Financial Statements - FY 2022-23
                            </button>
                          </a>
                          <a href="documents/dummy.pdf" target='_blank'>
                            <button className="flex items-center w-full sm:w-auto py-2.5 px-4 border rounded-xs text-sm text-blue-900 cursor-pointer">
                              <BsFiletypePdf className="h-5 w-5 mr-3 flex-shrink-0" />
                              Standalone Financial Statements - FY 2022-23
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>

                  </>
                )}

                {/* ANNUAL REPORTING */}
                {button.id === 'Annual Reporting' && (
                  <> <div className="mb-6">
                    <a href="documents/dummy.pdf" target='_blank'>
                      <button className="flex items-center w-full sm:w-auto text-sm py-2.5 px-4 border rounded-xs text-blue-900 cursor-pointer">
                        <BsFiletypePdf className="h-5 w-5 mr-3 flex-shrink-0" />
                        Annual Report - FY 2022-23
                      </button>
                    </a>
                  </div>
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
