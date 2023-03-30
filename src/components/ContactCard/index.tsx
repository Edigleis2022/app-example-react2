import './style.css'
import { Contact } from '../../Types' 
import { ButtonIU } from '../ButtonUI';

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
        <section className="contactCard">
          <div>
            <img src={picture.medium} alt="" />
          </div>
          <div className='dadosContatos'>
            <div>
              <p>{name.firts}</p>
              <p>{email}</p>
              {/* <Button text="Detalhes" type='primary' /> */}
              <ButtonIU text="Detalhes" />
            </div>
          </div>
        </section>
      </>
    )
  }