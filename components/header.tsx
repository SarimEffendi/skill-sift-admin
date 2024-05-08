import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import classNames from 'classnames';
import React, { Dispatch } from 'react'
import { BsList } from 'react-icons/bs'
import UserNav from './usernav';
function header() {

    const {toggleCollapse,invokeToggleCollapse} = useSidebarToggle();
    const sideBarToggle = () => {
        invokeToggleCollapse();
    }
    const headerStyle = classNames("fixed bg-black w-full z-0 px-4 shadow-sm shadow-slate-500/40",{
        ["sm:pl-[20rem]" ]: !toggleCollapse,
        ["sm:pl-[5.6rem]"]: toggleCollapse

    });
    return (
        <header className={headerStyle}>
            <div className='flex items-center justify-between h-16'>
                <button onClick={sideBarToggle} className='order-2 sm:order-1 bg-gray-500 text-black hover:bg-white ml-3 rounded-md h-[30px] w-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center'>
                    <BsList></BsList>
                </button>
                <div className='order-1 sm:order-2 h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-center'>
                    <span className='font-semibold text-sm'>
                        <UserNav>

                        </UserNav>
                    </span>
                </div>
            </div>

        </header>
    )
}

export default header