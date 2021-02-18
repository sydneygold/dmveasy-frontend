import React from 'react'
import logo from '../images/colorado-logo.png';
import { Link } from 'react-router-dom';
import questionMarks from '../images/25235.jpg';

export default function Faq() {
    return (
        <div className='h-sceen w-full'>
            <header className="mainpage-header flex justify-between h-1/3">
                <div className="px-12 py-8">
                    <img 
                        src={logo} 
                        alt="Colorado logo"
                        className="h-24"
                        />
                    <h1 className="font-serif Georgia font-black text-3xl">DMVEASY</h1>
                    <p className="font-sans Roboto font-normal text-sm italic">
                        Making going to the DMV easier since 2021
                    </p>
                </div>
                <div className="flex items-center pl-12 pt-8 pb-8 pr-12">
            <Link to='/'>
                <button 
                    className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
                >
                    Home
                </button>
            </Link>
            <Link to='/getstarted'>
                <button 
                    className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
                >
                    Get Started
                </button>
            </Link>
            </div>
            </header>
            <div className='top-most-text flex flex-col px-12 pb-12'>
                <h1 className='faqInfo text-3xl font-extrabold text-center py-4'>
                    Am I Eligibile to Renew Online?
                </h1>
                <div>
                    <div className='py-4'>
                        <p className='font-semibold'>Yes, if:</p>
                    </div>
                    <ul className='pl-16 list-disc'>
                        <li className='font-sans Roboto'>You are a U.S. citizen, Permanent Resident or an applicant who cannot demonstrate Lawful Presence in the U.S.</li>
                        <li className='font-sans Roboto'>You have a commercial driver license, commercial permit, regular adult driver license or ID card that is valid OR expired for less than one year.</li>
                        <li className='font-sans Roboto'>Your name is the same as the name on your current document. (You have not gotten married, divorced, etc., and changed your name.)</li>
                        <li className='font-sans Roboto'>Your SSN OR ITIN is on file with the department.</li>
                        <li className='font-sans Roboto'>You have a good payment record with the department, no bad checks on file.</li>
                        <li className='font-sans Roboto'>You are not enrolled in the Address Confidentiality Program (ACP).</li>
                    </ul>
                </div>
                <div className='renewal-faq'>
                    <div className='flex py-4'>
                        <h2 className='font-semibold'>If you are renewing your </h2>
                        <h2 className='font-extrabold italic pl-1 text-green-700'>driver license:</h2>
                    </div>
                    <ul className='pl-16 list-disc'>
                        <li className='font-sans Roboto'>You are 21 years of age or older.</li>
                        <li className='font-sans Roboto'>All eligible customers are now able to renew online (previously restricted to 21-65 years of age).</li>
                        <li className='font-sans Roboto'>All outstanding tickets are paid.</li>
                        <li className='font-sans Roboto'>There are no pending or final departmental actions on your record.</li>
                        <li className='font-sans Roboto'>Your last driver license was issued in a driver license office, or you have not renewed online the last two times.</li>
                        <li className='font-sans Roboto'>Note: If you are 65 or older you are exempt from this restriction.</li>
                        <li className='font-sans Roboto'>No tests are required (written or road) to renew the driver license or ID.</li>
                        <li className='font-sans Roboto'>You are not enrolled in the ACP.</li>
                        <li className='font-sans Roboto'>Commercial Driver License holders - Your license must be in good standing including:</li>
                        <li className='font-sans Roboto'>Current DOT medical card</li>
                        <li className='font-sans Roboto'>HazMat endorsement only: HazMat endorsements are not eligible for online renewal</li>
                    </ul>
                </div>
                <div>
                    <div className='flex py-4'>
                        <h2 className='font-semibold'>If you are renewing your</h2>
                        <h1 className='font-extrabold italic pl-1 text-green-700'>ID:</h1>
                    </div>
                    <ul className='pl-16 list-disc'>
                        <li className='font-sans Roboto'>Your last ID card was issued in a driver license office or you have not renewed online the last two times.</li>
                        <li className='font-sans Roboto'>Note: If you are 65 or older you are exempt from this restriction.</li>
                        <li className='font-sans Roboto'>Age 60 or older: You can renew for free online.</li>
                        <li className='font-sans Roboto'>You are not enrolled in the ACP.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}