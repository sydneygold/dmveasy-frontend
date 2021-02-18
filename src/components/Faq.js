import React from 'react'
import logo from '../images/colorado-logo.png';
import { Link } from 'react-router-dom';

export default function Faq() {
    return (
        <div className='main container h-full pl-12'>
            <header className="mainpage-header flex justify-between h-1/3">
                <div className=" pt-8 pb-8 pr-12">
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
            <Link to='/mainpage'>
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
            <h1 className='faqInfo font-extrabold'>Am I Eligibile to Renew Online?</h1>
            <br></br>
            <h1 className='font-semibold'>Yes, if:</h1>
            <br></br>
            <div>
                <ul className='pl-16 list-disc'>
                    <li className=''>You are a U.S. citizen, Permanent Resident or an applicant who cannot demonstrate Lawful Presence in the U.S.</li>
                    <li className=''>You have a commercial driver license, commercial permit, regular adult driver license or ID card that is valid OR expired for less than one year.</li>
                    <li className=''>Your name is the same as the name on your current document. (You have not gotten married, divorced, etc., and changed your name.)</li>
                    <li className=''>Your SSN OR ITIN is on file with the department.</li>
                    <li className=''>You have a good payment record with the department, no bad checks on file.</li>
                    <li className=''>You are not enrolled in the Address Confidentiality Program (ACP).</li>
                </ul>
            <br></br>
            <div className='flex flex-row '>
                <h2 className='font-semibold'>If you are renewing your </h2><h1 className='font-extrabold italic pl-1'>driver license</h1>
            </div>
            </div>
            <br></br>
            <div className=''>
                <ul className='pl-16 list-disc'>
                    <li className=''>You are 21 years of age or older.</li>
                    <li className=''>All eligible customers are now able to renew online (previously restricted to 21-65 years of age).</li>
                    <li className=''>All outstanding tickets are paid.</li>
                    <li className=''>There are no pending or final departmental actions on your record.</li>
                    <li className=''>Your last driver license was issued in a driver license office, or you have not renewed online the last two times.</li>
                    <li className=''>Note: If you are 65 or older you are exempt from this restriction.</li>
                    <li className=''>No tests are required (written or road) to renew the driver license or ID.</li>
                    <li className=''>You are not enrolled in the ACP.</li>
                    <li className=''>Commercial Driver License holders - Your license must be in good standing including:</li>
                    <li className=''>Current DOT medical card</li>
                    <li className=''>HazMat endorsement only: HazMat endorsements are not eligible for online renewal</li>
                </ul>
            <br></br>
            <div className='flex flex-row'>
                <h2 className='font-semibold'>If you are renewing your</h2><h1 className='font-extrabold italic pl-1'>ID</h1>
            </div>
            </div>
            <br></br>
            <div className=''>
                <ul className='pl-16 list-disc'>
                    <li className=''>Your last ID card was issued in a driver license office or you have not renewed online the last two times.</li>
                    <li className=''>Note: If you are 65 or older you are exempt from this restriction.</li>
                    <li className=''>Age 60 or older: You can renew for free online.</li>
                    <li className=''>You are not enrolled in the ACP.</li>
                </ul>
            </div>
        </div>
    )
}
