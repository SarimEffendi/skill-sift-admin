import { SideNavItem } from "./types/types";
import { BsEnvelope, BsGear, BsHouseDoor, BsKanban } from "react-icons/bs";

export const SIDEBAR_ITEMS: SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon:<BsHouseDoor size={20} /> 
    },
    {
        title:'users',
        path:'/users',
        icon:<BsKanban size={20} />,
        submenu:true,
        subMenuItems:[
            {title:"Companies", path:"/users/companies"},
            {title:"Recruiters", path:"/users/Recruiters"},
            {title:"Jobseekers", path:"/users/jobseekers"},
        ],

    },
    {
        title:"Feedbacks",
        path:"/feedbacks",
        icon:<BsEnvelope size={20} />,
    },
    {
        title:"Account",
        path:"/account",
        icon:<BsGear size={20} />,
    },
    {
        title:"Help",
        path:"/Help",
        icon:<BsGear size={20} />,
    },

    
]