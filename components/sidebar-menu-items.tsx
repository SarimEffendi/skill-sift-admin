'use client'
import React, { useState } from 'react'
import { SideNavItem } from '@/types/types'
import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'
import { usePathname } from 'next/navigation'

function sidebarMenuItem({item}:{item:SideNavItem}) {
    const linkStyle = "flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white rounded-md transition duration-200"
    const activeLinkStyle= "rounded-md text-white light:text-black light:bg-[#efefef] bg-[#3a3f48]"
    const ddLinkStyle = linkStyle;
    const navMenuDropdownItem = "text-red-100 py-2 px-4  hover:text-white transition duration-200"
    
    const pathName = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    }


    return (
        <>
    {
        item.submenu ? (<div className='rounded-md mid-w-[18px]'>
            <a className={`${ddLinkStyle} ${pathName.includes(item.path)? activeLinkStyle: ''}`} onClick={toggleSubMenu}>
                {item.icon}
                <span className='ml-3 leading-6 font-semibold'>{item.title}</span>
                <BsChevronRight className='ml-auto stroke-2 text-xs'></BsChevronRight>
            </a>
            {subMenuOpen && <div className='bg-gray-400 border-l-4'>
                <div className='grid gap-y-2 px-10 py-3 leading-5'>
                    {
                        item.subMenuItems.map((subitem, index) => {
                            return(
                                <Link href={subitem.path} key={index} className={`${navMenuDropdownItem} ${subitem.path===pathName?'text-white':''
                                }`}>
                                    {subitem.icon}
                                    <span className='ml-3 leading-6 font-semibold'>{subitem.title}</span>
                                </Link>
                            )
                        })
                        
                        }
                </div>
                
            </div>
            }

        </div>):(<Link href={item.path} className={`${linkStyle} ${item.path===pathName?activeLinkStyle:''}`}>
            {item.icon}
            <span className='ml-3 leading-6 font-semibold'>{item.title}</span>
            
            </Link>)
}
        </>
    )
}

export default sidebarMenuItem