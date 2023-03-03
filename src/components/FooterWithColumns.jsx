import React from 'react'
import FooterBar from './FooterBar'
import map from '../assets/csi-school-map.jpg'

const FooterWithColumns = () => {
  return (
    <>
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 bg-black">
            {/* Content columns */}
        <div className="mt-4 ml-4 sm:m-8 sm:pb-8">
            <h3 className="text-2xl mb-2">Useful Links</h3>
            <div className="flex flex-col lg:flex-row gap-x-6">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
            <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Vacancy</a></li>
                <li><a href="#">Portal</a></li>
            </ul>
            </div>
        </div>
        {/* Contact columns */}
        <div className="mt-4 ml-4 sm:m-8 sm:pb-8">
            <h3 className="text-2xl mb-2">Contact Informaton</h3>
            <div className='flex flex-col lg:flex-row gap-x-6'>
                <address>
                    <p>School Main Street</p>
                    <p>Heart of the city</p>
                    <p>Countryshire</p>
                    <p>England</p>
                </address>
                <address>
                    <p>
                        TEL:
                    </p>
                        <a href="tel:123-456-7890">123-456-7890</a>
                    <p>
                        EMAIL:
                    </p>
                        <a href="mailto:hello@school.ac.uk">Hello@school.ac.uk</a>
                </address>
            </div>
        </div>
        <div className="sm:col-span-2 md:col-span-1">
            <img className='w-full h-full' src={map} alt="" />
        </div>
        </div>
    </div>
    <FooterBar />
    </>
  )
}

export default FooterWithColumns