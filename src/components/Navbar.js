import React , {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-scroll'
import logo from '../assets/logo.jpg'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }


  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                {/* <h1 className='ml-2 text-3xl font-bold mr-4 sm:text-4xl'>OYEDEX</h1> */}
                <img className=' w-40 ml-2 text-3xl font-bold mr-6 sm:text-4xl' src={logo} alt="" />

                <ul className='hidden md:flex justify-content'>
                
                    <li><Link  to="home"  smooth={true} duration={500}>Home</Link></li>
                    <li><Link  to="about"  smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link  to="support"  smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li><Link  to="platforms"  smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                    <li><Link  to="pricing"  smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            
            <div className='hidden md:flex pr-4'>
                {/* <button className='border-none bg-transparent text-black mr-4'>Sign In</button> */}
                <button className='px-8 py-3'>Contact</button>
            </div>

            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-6' /> : <XIcon className='w-5' />}
                
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'md:hidden absolute bg-zinc-200 w-full px-8' }>
            <li className='border-b-2 border-zinc-300 w-full'><Link  to="home"  smooth={true} duration={500} onClick={handleClick}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link  to="about"  smooth={true} offset={-200} duration={500} onClick={handleClick}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link  to="support"  smooth={true} offset={-50} duration={500} onClick={handleClick}>Support</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link  to="platforms"  smooth={true} offset={-100} duration={500} onClick={handleClick}>Platforms</Link></li>
            <li className='border-b-2 border-zinc-300 w-full'><Link  to="pricing"  smooth={true} offset={-50} duration={500} onClick={handleClick}>Pricing</Link></li>
            

            <div className='flex flex-col my-4'>
                {/* <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button> */}
                <button className='px-8 py-3'>Contact</button>
            </div>
        </ul>

        
    </div>
  )
}

export default Navbar
