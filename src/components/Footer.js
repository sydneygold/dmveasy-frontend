import React from 'react'
export default function Footer() {
    return (
        <div className='footerdiv md:flex-auto h-25 bg-blue-700 pb-1 '>
            <span>
                <ul className='footerLinks flex flex-row justify-center p-8  md:space-x-44'>
                    <h2 className='font-sans Roboto font-semibold'>DMVeasy© 2021</h2>
                    <a className='underline font-semibold' href='https://dmv.colorado.gov/ '>ColoradoDMV</a>
                    <a className='underline font-semibold' href='https://cdor.colorado.gov/advocate'>FAQ</a>
                    <a className='underline font-semibold' href='/'>Contact us</a>
                </ul>
            </span>
        </div>
    )
}