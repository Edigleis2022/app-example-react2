import { useState } from 'react';
import { Agendas} from '../components/Agendas/index'
function AgendaLista() {

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