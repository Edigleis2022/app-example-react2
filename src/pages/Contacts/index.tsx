
import { useEffect, useState } from "react";
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { getContacts } from "../../services/api";
import { Contact } from "../../Types";
import { BaseLayout } from "../../Layout/BaseLayout";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";


export function Contacts() {
    console.log('Renderizou o componente')
    const [search, setSearch] = useState('')
    const [isLoading, setIsloading] = useState<Boolean>(false)
    const [contacts, setContacts] = useState<Contact[]>([])

    const filteredContacts = ()=>{
        
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

    //test
    return (
        <BaseLayout appBarTitle="Agenda de Contatos">

            <TextField variant="outlined" fullWidth />
            {isLoading ? (<CircularProgress />
            ) : (
                <ContactList>{

                    contacts.map(contact => {
                        return <ContactCard key={contact.login.uuid} contactdata={contact} />
                    })}

                </ContactList>
            )}
        </BaseLayout>
    )
}