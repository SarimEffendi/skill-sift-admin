import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'
import { SIDEBAR_ITEMS } from '@/SIDEBAR_CONSTANTS'
import SideBarMenuItem from './sidebar-menu-items'

function sidebar() {
    return (

        <aside className='fixed bg-black text-gray-500 z-50 h-full shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]'>
            <div className='flex relative items-center py-5 px-3.5'>
                <Image alt={"logo"} src={logo} width={200} height={200}  className='w-24 mx-3.5 min-h-fit'/>
                <h3 className='pl-2  font-bold text-2xl text-[#e6e9ee] min-w-max'>
                SS Dashboard
                </h3>

            </div>
            <nav className='flex flex-col gap-2 transition duration-300 ease-in-out'>
                <div className='flex flex-col gap-2 px-4'>

                {
                    SIDEBAR_ITEMS.map((item, index) => {
                        return(
                            <SideBarMenuItem key={index} item={item} ></SideBarMenuItem>
                        )
                    })
                }
                </div>
            </nav>

        </aside>
    )
}

export default sidebar