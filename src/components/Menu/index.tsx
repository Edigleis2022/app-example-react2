import { ReactNode } from 'react'
import './style.css'

type MenuProps = {
    children:React.ReactNode
}

export function Menu({children}:MenuProps){
    return(
        <>
            <div className="menu">
                children
            </div>
        </>
    )
}