import { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu'
import React from 'react'
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

const usernav = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://randomuser.me/api/port" alt="user-avatar"></AvatarImage>
                        <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-2">
                        <p className='text-sm font-semibold'>User Name</p>
                        <p className='text-xs text-muted-foreground'> abc@gmail.com </p>
                    </div>
                </DropdownMenuLabel>
            <DropdownMenuSeparator/>

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Link href="/Dashboard">Logout</Link>
                    </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default usernav