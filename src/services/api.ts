import { useState } from 'react';
//import { Agendas} from '../components/Agendas/index'
import { Axios } from 'axios';


const popular = Axios.create({
    baseUrl:'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
})


export function AgendaLista() {

    return (
        <>
        <header>
        <Title text= 'Agenda de Contatos' />
        </header>
        < main >
            <ContactList>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            <ContactList>
        </main>

        < />
  );
}