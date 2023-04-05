
import axios from 'axios'

const popular = axios.create({
    baseURL: 'https://randomuser.me/api/',
    timeout: 4000,
});


export async function getContacts() {
    const contacts = await popular.get('?results=10&nat=br')
    return contacts.data.results
}
