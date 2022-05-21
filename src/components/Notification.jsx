import React from 'react'
import {CheckIcon} from '@heroicons/react/outline'

const Notification = () => {
  return (
    <div className="flex">

        <div>
            <CheckIcon className='w-7 mr-4 text-green-600'/>
        </div>
            <div>
                <h3 className='font-bold text-lg'>Notifications</h3>
                <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit excepturi sapiente pariatur a. Nisi provident quidem, voluptas laboriosam delectus alias blanditiis repellat? Natus sed atque, molestias assumenda porro nihil?</p>
            </div>
    </div>
  )
}

export default Notification