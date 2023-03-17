import { AddressBook } from "phosphor-react";
import {ImageSquare} from "phosphor-react";
import { Menu } from "../../components/Menu"
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
                <MenuItem icon={<ImageSquare/>} text="Galeria"/>444444444444444
                </Link>
                </Menu>
            </main>
        </>
    )


}