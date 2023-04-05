
import List from '@mui/material/List'
import './style.css'


type ContactListProps = {
    children: React.ReactNode
}

export function ContactList({ children }: ContactListProps) {
    return (
        <>
            <List sx={{}}>
                {children}
            </List>
        </>
    )
}