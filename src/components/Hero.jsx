import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/panel.svg'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'> 
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                {/* <p className='text-2xl'>Unique Sequencing & Production</p> */}
                <h1 className='py-3 text-5xl md:text-7xl font-bold '>Oyedex Ventures Limited</h1>
                <p className='text-2xl'>Solving problems, delivering
excellence.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>

            <div>
              <img className='w-full' src={bgImg} alt="/" />
            </div>

            <div className='absolute py-6 min-w-[100%] md:min-w-[1260px] bottom-[-16.5%] md:bottom-[-7%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zince-200 border border-slate-300 rounder-xl text-center shadow-xl'>
              <h3 className='text-xl'>Services</h3>
              <div className='md:grid md:grid-cols-4'>

              <div className='flex justify-between flex-wrap'>
                <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/> Automatic & Control (HV/LV)</p>
              </div>
              <div>
              <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6  text-indigo-600'/> Electrical Installations (Buildings, Machine Installations)</p>

              </div>

              <div>
              <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600 '/> Engineering Consultancy </p>

              </div>

              <div>
              <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600 '/> Engineering Training </p>

              </div>
              </div>
            </div>

        </div>
        
    </div>
  )
}

export default Hero