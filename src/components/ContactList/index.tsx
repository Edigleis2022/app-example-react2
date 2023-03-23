import './style.css'
type ContactListProps = {
    children:React.ReactNode
}

export function ContactList({children}:ContactListProps){
    return(
        <>
            <section className="ContactList">
                {children}
            </section>
        </>
    )
}