import './style.css'
import { Contact } from '../../Types'
import { ButtonIU } from '../ButtonUI';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

type ContactCardProps = {
    contactdata: Contact,
    
}
/*export functionContactCard({contactdata}:ContactCardProps){
    const
}*/

export function ContactCard({ contactdata }: ContactCardProps) {
    const { name, email, picture } = contactdata;
    return (
        <>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={picture.medium} />
                    </ListItemAvatar>
                    <ListItemText primary={<Typography>{name.firts}</Typography>} secondary={
                        <Typography>{email}</Typography>
                    }>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </>
    )
}