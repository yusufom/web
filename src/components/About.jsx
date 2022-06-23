import React from 'react'
import aboutImg from '../assets/engineer.svg'

function About() {
  return (
    <div name='about' className="w-full md:my-32 my-56 "> 
        
        <div className='md:grid md:grid-cols-2 md:mx-[150px]'>

            <div className='md:w-[700px]'>
                <img src={aboutImg} alt="" />
            </div>


            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h2 className='text-5xl font-bold'>Trusted by clients across the world</h2>
                    <p className='text-xl py-6 text-gray-500'>We are engineering professionals and experts committed to solving problems and always delivering excellence in service.</p>
                    <p className='text-xl py-6 text-gray-500'>We work with only the best hands and our team is
                                        made up of experts with industry experience to make
                                        sure that our clients are getting only the very best at
                                        all times.</p>

                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Work completion</p>
                    </div>

                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                        <p className='text-gray-400 mt-2'>Delivery</p>
                    </div>

                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default About