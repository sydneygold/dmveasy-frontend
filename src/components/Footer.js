import React from 'react'

export default function Footer() {
    return (
        <div className='footerdiv md:flex-auto h-25 bg-blue-700 pb-1  mt-8'>
            <span>
                <ul className='footerLinks flex flex-row justify-center p-8  md:space-x-44'>
                    <h2 className='font-sans Roboto text-white font-semibold'>DMVeasy© 2021</h2>
                    <a className='font-sans Roboto text-white underline font-semibold' href='https://dmv.colorado.gov/ '>ColoradoDMV</a>
                    <a className='font-sans Roboto text-white underline font-semibold' href='https://cdor.colorado.gov/advocate'>FAQ</a>
                    <a className='font-sans Roboto text-white underline font-semibold' href='/faq'>Contact us</a>
                </ul>
            </span>
        </div>
    )
}
