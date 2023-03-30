import './style.css'
import { useEffect, useState } from "react";
import { Input } from '../../components/Input';
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api";
import { Contact } from "../../Types";


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
                <Input placeholder='Localizar' type='text' />
                <ContactList>
                    {
                        contacts.map(contact => {
                            return <ContactCard contactdata={contact}/>
                        })
                    }
                </ContactList>
            </main>
        </>
    )
}