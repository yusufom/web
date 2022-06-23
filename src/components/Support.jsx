import React from 'react'

import { PhoneIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'


const Support = () => {
  return (
    <div name='support' className="w-full mt-24">
        
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto text-white relative">

            <div classname="px-4 py-12">
                <h3 className='text-5xl font-bold py-6 text-center'>Who We Are</h3>
                <p className='py-4 text-3xl text-slate-300 text-center'>Oyedex Ventures is committed to achieving full customer satisfaction</p>

            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Vision</h3>
                        <p className='text-gray-600 text-xl'>To be a world-class engineering firm.</p>

                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Core Values</h3>
                        <p className='text-gray-600 text-xl'>▪ Integrity</p>
                        <p className='text-gray-600 text-xl'>▪ Accountability</p>
                        <p className='text-gray-600 text-xl'>▪ Quality</p>
                        <p className='text-gray-600 text-xl'>▪ Customer service</p>

                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Mission</h3>
                        <p className='text-gray-600 text-xl'>Solving engineering problems and delivering Word-class excellence in service.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support