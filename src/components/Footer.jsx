import React from 'react'
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Data</li>
                    <li>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>

                <p className='font-bold uppercase'>Subscribe to our Newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inox weekly</p>

                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" />
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>

            </div>
        </div>

        <div className='flex flex-col max-2-[1240px] mx-auto justify-between px-2 py-4 sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 workflow, LLC, Allrights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaGithub/>
                <FaTwitch/>
            </div>
        </div>

    </div>
  )
}

export default Footer