import { ReactNode } from 'react'

type ListProps = {
    ContactList:React.ReactNode
}
export function Menu({ContactList}:ListProps){
        return(
            <>
                <div className="menu">
                    ContactList
                </div>
            </>
        )
    }