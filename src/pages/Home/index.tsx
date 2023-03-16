import { AddressBook } from "phosphor-react";
import {ImagemSquare} from "phosphor-react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { MenuItem } from "../../components/MenuItem";
import { Link} from 'react-router-dom'
export function Home() {
    return (
        <>
            <header>
                <Title text='Bem Vindo' />
            </header>
            <main>
                <Menu>
                <MenuItem icon={<AddressBook/>} text="Agenda"/>

                <Link to='/gallery'>
                <MenuItem icon={<ImagemSquare/>} text="Galeria"/>
                <Link/>
                </Menu>
            </main>
        </>
    )


}