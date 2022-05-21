import React from 'react'
import Notification from './Notification'

const AllinOne = () => {
  return (
    <div name='platforms' className="w-full my-32">
        
        <div className="max-w-[1240px] mx-auto px-2">

            <h2 className="text-5xl font-bold text-center">All-in-One Platform</h2>
            <p className="text-2xl py-8 text-gray-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui similique nam necessitatibus quidem accusamus consequuntur voluptas dolorum totam aspernatur quia! Quisquam fuga a quas ab quasi voluptates quae laborum cupiditate.</p>
        

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">

                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </div>

        </div>
    </div>
  )
}

export default AllinOne