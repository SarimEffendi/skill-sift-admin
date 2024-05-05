import React from 'react'

function pagewrapper({children}:{children:React.ReactNode}) {
    return (
        <div>{children}</div>
    )
}

export default pagewrapper