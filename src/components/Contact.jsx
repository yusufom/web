import React, { useRef } from 'react'
// import {CheckIcon} from '@heroicons/react/solid'
import contactImg from '../assets//contact-banner.svg'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fah1nn', 'template_jgbvqfs', form.current, '0mdpejyg5iPwVIUzd')
      .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div name='pricing' className='w-full text-white my-24'>
      <h4>Contact Us</h4>
        <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-700 mt-8">
              Hate forms? Send us an <span className="underline">email</span> instead.
              <p>Or give us a call: 08022338357</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <img src={contactImg} alt="" />
          </div>
        </div>
        <div className="">
          <form ref={form} onSubmit={handleSubmit}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Full Name" name='user_name' id='user_name'></input>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email" placeholder='Email' name='user_email' id='user_email'></input>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder='Message' name='user_message' id='user_message'></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact