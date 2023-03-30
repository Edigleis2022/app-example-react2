import { Box } from '@mui/system'
import './style.css'
type ContactListProps = {
    children:React.ReactNode
}

export function ContactList({children}:ContactListProps){
    return(
        <>
        <Box>
            <section className="ContactList">
                {children}
            </section>
        </Box>
        </>
    )
}