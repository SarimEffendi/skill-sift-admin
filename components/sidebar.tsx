import Image from 'next/image'
import React from 'react'

function sidebar() {
    return (

        <aside className='fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]'>
            <div>
                <Image alt={"logo"} src='/logo.png' width={200} height={200} />

            </div>

        </aside>
    )
}

export default sidebar