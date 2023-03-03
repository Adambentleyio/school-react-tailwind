import React from 'react'
import school from '../assets/school.jpg'
import { ChevronDownIcon } from '@heroicons/react/24/outline'


const HeroImage = ({ title, buttonText}) => {
  return (
    <div className="relative min-h-[460px] px-4 flex flex-col justify-center">
        <div className="text-center mx-auto space-y-4">
            <h2 className="mx-auto text-3xl md:text-4xl max-w-md">{title}</h2>
            <button className="px-8 py-2 bg-secondary hover:tracking-widest transition-all duration-150">{buttonText}</button>
        </div>
        <ChevronDownIcon className="h-12 absolute bottom-4 right-0 left-0 mx-auto" />

        <img className='absolute brightness-75 inset-0 -z-10 h-full w-full object-cover object-bottom' src={school} alt="" />
    </div>
  )
}

export default HeroImage