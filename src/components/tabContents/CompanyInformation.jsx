import React from 'react'

import companyInfo from '../../data/CompanyInformationData'

const CompanyInformation = () => {
  return (
    <>
      <div className='max-w-7xl container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 py-12'>
          {companyInfo.map((info, index) => (
            <div
              key={index}
              className=' flex flex-col border border-gray-300 rounded-xs'
            >
              <div className='border-b border-gray-300 bg-gray-100 px-6 py-3'>
                <h1 className='text-xl md:text-2xl '>{info.officeType}</h1>
              </div>
              <div className='px-6 py-5'>
                <p className='text-lg font-semibold'>{info.companyName}</p>
                <div className='flex flex-col justify-center items-start space-y-1 my-3'>
                  <p>{info.unitNo}</p>
                  <p>{info.landmark}</p>
                  <p>{info.location}</p>
                </div>
                <p className='mb-2'><b>Contact No:</b> {info.contact}</p>
                <p className=''><b>Email:</b> {info.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CompanyInformation