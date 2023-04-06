
import { ChangeEvent, useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { getContacts } from "../../services/api";
import { Contact } from "../../Types";
import { BaseLayout } from "../../Layout/BaseLayout";

import { TextField, CircularProgress } from "@mui/material";


export function Contacts() {
    console.log('Renderizou o componente')
    const [search, setSearch] = useState('')
    const [isLoading, setIsloading] = useState<Boolean>(false)
    const [contacts, setContacts] = useState<Contact[]>([])

    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

    const filteredContacts = (contact:Contact)=>{
        return contact.name.firts.toLowerCase().includes(search.toLowerCase( ))
    }

    useEffect(() => {
        console.log('Executou useEffect')
        async function listContacts() {
            setIsloading(true)
            setContacts(await getContacts())
            setIsloading(false)
        }
        listContacts()
    }, [])

    
    return (
        <BaseLayout appBarTitle="Agenda de Contatos">
                                
            <TextField variant="outlined" fullWidth label="Pesquisar" onChange={handleChange} />
            {isLoading ? (<CircularProgress />
            ) : (
                <ContactList>{
                    contacts.map((contact) => {
                        return <ContactCard key={contact.login.uuid} contactdata={contact} />
                    })}
                </ContactList>
            )}
        </BaseLayout>
    );
}