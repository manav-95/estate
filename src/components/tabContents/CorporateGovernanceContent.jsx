import React, { useState } from 'react';

import directors from '../../data/DirectorsData'
import managerials from '../../data/KeyManagerialsData'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdOutlineClose } from "react-icons/md";

const CorporateGovernanceContent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setSelectedItem(null);
    setIsOpen(false);
  }

  function openModal(item) {
    setSelectedItem(item);
    setIsOpen(true);
  }


  const buttons = [
    { id: 'Board Of Directors', title: 'Board Of Directors' },
    { id: 'Key Managerial Personnel', title: 'Key Managerial Personnel' },
    { id: 'Board Committees', title: 'Board Committees' },
    { id: 'Codes & Policies', title: 'Codes & Policies' },
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

                {/* BOARD OF DIRECTORS CONTENT */}
                {button.id === 'Board Of Directors' && (
                  <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
                      {directors.map((director) =>
                        <div
                          key={director.id}
                          className='flex flex-col justify-center items-center sm:items-start sm:text-left lg:items-start xl:items-center py-4 lg:py-8 lg:px-8 text-center hover:shadow-md border border-transparent hover:border-black'
                        >

                          <img
                            src={director.image}
                            alt={director.name}
                            className='h-full w-full object-cover object-start mb-2'
                          />

                          <h1 className='text-lg min-[425px]:text-xl sm:text-xl lg:text-lg xl:text-xl font-medium'>{director.name}</h1>
                          <h1 className='text-gray-500 text-base min-[425px]:text-lg sm:text-base md:text-lg lg:text-base xl:text-lg font-medium'>{director.role}</h1>
                          <p className='my-3 lg:my-6 line-clamp-3 text-ellipsis font-medium text-gray-500'>{director.description}</p>
                          <button
                            onClick={() => openModal(director)}
                            className='font-medium uppercase '
                          >
                            Read More
                          </button>
                        </div>

                      )}
                    </div>

                    {/* MODAL */}
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog as="div" className="relative z-50" onClose={closeModal}>
                        {/* BACKDROP */}
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]" />
                        </Transition.Child>

                        {/* MODAL CONTENT */}
                        <div className="fixed inset-0 top-30 flex items-start justify-center p-4">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 relative">
                              {/* CLOSE BUTTON */}
                              <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                              >
                                <MdOutlineClose className="h-6 w-6" />
                              </button>

                              {selectedItem && (
                                <>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.name}
                                  </Dialog.Title>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.role}
                                  </Dialog.Title>

                                  {/* MODAL CONTENT */}
                                  <p p className="mt-2 text-gray-600" >
                                    {selectedItem.description}
                                  </p>
                                </>

                              )}
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition>

                  </>
                )}

                {/* KEY MANAGERIAL PERSONNEL */}
                {button.id === 'Key Managerial Personnel' && (
                  <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
                      {managerials.map((managerial) =>
                        <div
                          key={managerial.id}
                          className='flex flex-col justify-center items-center sm:items-center sm:text-center lg:items-center xl:items-center py-4 lg:py-8 lg:px-8 text-center hover:shadow-lg border border-black'
                        >

                          {/* <img
                            src={managerial.image}
                            alt={managerial.name}
                            className='h-full w-full object-cover object-start mb-2'
                          /> */}

                          <h1 className='text-lg min-[425px]:text-xl sm:text-xl lg:text-lg xl:text-xl font-medium'>{managerial.name}</h1>
                          <h1 className='text-gray-500 text-base min-[425px]:text-lg sm:text-base md:text-lg lg:text-base xl:text-lg font-medium'>{managerial.role}</h1>
                          {/* <p className='my-3 lg:my-6 line-clamp-3 text-ellipsis font-medium text-gray-500'>{managerial.description}</p> */}
                          <button
                            onClick={() => openModal(managerial)}
                            className='font-medium uppercase mt-6'
                          >
                            Read More
                          </button>
                        </div>

                      )}
                    </div>

                    {/* MODAL */}
                    <Transition appear show={isOpen} as={Fragment}>
                      <Dialog as="div" className="relative z-50" onClose={closeModal}>
                        {/* BACKDROP */}
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)]" />
                        </Transition.Child>

                        {/* MODAL CONTENT */}
                        <div className="fixed inset-0 top-30 flex items-start justify-center p-4">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 relative">
                              {/* CLOSE BUTTON */}
                              <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                              >
                                <MdOutlineClose className="h-6 w-6" />
                              </button>

                              {selectedItem && (
                                <Dialog.Panel>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.name}
                                  </Dialog.Title>
                                  <Dialog.Title as="h3" className="text-lg font-semibold">
                                    {selectedItem.role}
                                  </Dialog.Title>

                                  {/* MODAL CONTENT */}
                                  <p p className="mt-2 text-gray-600" >
                                    {selectedItem.description}
                                  </p>
                                </Dialog.Panel>

                              )}
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition>
                  </>
                )}

                {/* BOARD COMMITTEES */}
                {button.id === 'Board Committees' && (
                  <>

                  </>
                )}
                {button.id === 'Codes & Policies' && (
                  <p className="text-gray-700">
                    Our corporate codes and policies ensure ethical business conduct and regulatory compliance.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default CorporateGovernanceContent;
