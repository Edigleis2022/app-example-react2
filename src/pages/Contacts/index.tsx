
import { useEffect, useState } from "react";
import { Input } from '../../components/Input';
import { ContactCard } from "../../components/ContactCard";
import { ContactList } from "../../components/ContactList";
import { Title } from "../../components/Title";
import { getContacts } from "../../services/api";
import { Contact } from "../../Types";
import './style.css'
import { BaseLayout } from "../../Layout/BaseLayout";
import TextField from "@mui/material/TextField";
import { CircularProgress } from "@mui/material";


export function Contacts() {
    const [search, setSearch] = useState('')
    const [isLoading,setIsloading] = useState(false)
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() => {
        async function listContacts() {
            setContacts(await getContacts())
        }
        listContacts()
    },[])

    //test
    return (
        <BaseLayout appBarTitle="Agenda de Contatos">
           
                <TextField variant="outlined" fullWidth/>
                <CircularProgress/>
                <Input placeholder='Localizar' type='text' />
                <ContactList>
                    {
                        contacts.map(contact => {
                            return <ContactCard contactdata={contact}/>
                        })
                    }
                </ContactList>
           
        </BaseLayout>
    )
}