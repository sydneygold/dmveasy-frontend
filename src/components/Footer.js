import React from 'react'
export default function Footer() {
    return (
        <div className='footerdiv md:flex-auto h-25 bg-blue-700 pb-1 '>
            <span>
                <ul className='footerLinks flex flex-row justify-center p-8  md:space-x-44'>
                    <h2 className='font-serif Georgia font-semibold text-white'>DMVeasy© 2021</h2>
                    <a className='text-white underline font-semibold font-sans Roboto' href='https://dmv.colorado.gov/ '>ColoradoDMV</a>
                    <a className='text-white underline font-semibold font-sans Roboto' href='/faq'>FAQ</a>
                    <a className='text-white underline font-semibold font-sans Roboto' href='/'>Contact us</a>
                </ul>
            </span>
        </div>
    )
}