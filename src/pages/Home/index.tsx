import { AddressBook } from "phosphor-react";
import { ImageSquare } from "phosphor-react";
import { Menu } from "../../components/Menu"
import { MenuItem } from "../../components/MenuItem";
import { Link } from 'react-router-dom'
import { BaseLayout } from "../../Layout/BaseLayout";


export function Home() {
    return (
        <BaseLayout appBarTitle = "Contact List ">
            <Menu>
                <Link to='/contacts'>
                <MenuItem icon={<AddressBook size={24} />} text="Agenda" />
                </Link>
                <Link to='/gallery'>
                    <MenuItem icon={<ImageSquare size={24} />} text="Galeria" />
                </Link>
            </Menu>
        </BaseLayout>
    )
}