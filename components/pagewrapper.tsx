import { useSidebarToggle } from '@/hooks/use-sidebar-toggle';
import classNames from 'classnames'
import React from 'react'

function pagewrapper({children}:{children:React.ReactNode}) {

    const {toggleCollapse} = useSidebarToggle();

    const pageStyle= classNames("bg-slate-50 flex-grow text-black p-2 mt-16",{
        ["sm:pl-[5.6rem]"]: toggleCollapse,
        ["sm:pl-[20.4rem]"]: !toggleCollapse
    }
    )
    return (
        <div className={pageStyle}>
            {children}
            </div>
    )
}

export default pagewrapper