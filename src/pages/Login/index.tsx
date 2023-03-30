import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { SubTitle } from '../../components/SubTitle'
import { FormLogin } from '../../components/FormLogin'


export function Login(){
    return(
        <>
             <header>
                <Title text='Seja Bem Vindo!' />
            </header>
            <main>
            <SubTitle text='Login' />
                <FormLogin/>
            </main>
        </>
    )
}