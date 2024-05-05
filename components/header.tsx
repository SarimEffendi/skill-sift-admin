import React from 'react'
import { BsList } from 'react-icons/bs'

function header() {
    return (
        <header className='fixed bg-black w-full z-0 px-4 shadow-sm shadow-slate-500/40 pl-[20rem]'>
            <div className='flex items-center justify-between h-16'>
                <button className='bg-gray-500 text-black hover:bg-white ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center'>
                <BsList></BsList>
                </button>
                <div className='h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-center'>
                    <span className='font-semibold text-sm'>SR</span>
                </div>
            </div>

        </header>
    )
}

export default header