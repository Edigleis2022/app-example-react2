import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api";

type Contact = {
    name: {
        firts: string,
        last: string,

    },
    email: string,
    picture: {
        medium: string
    }
}

export function Contacts() {
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() => {
        async function listContacts() {
            setContacts(await getContacts())
        }
        listContacts()
    },[])

    //test
    return (
        <>
            <header>
                <Title text='Agenda de Contatos' />
            </header>
            <main>
                <ContactList>
                    {
                        contacts.map(contact=>{
                            return <ContactCard contactData={contact}/>
                        })
                    }
                </ContactList>
            </main>
        </>
    )
}