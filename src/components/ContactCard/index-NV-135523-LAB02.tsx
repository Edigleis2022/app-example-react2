import './style.css'
type ContactCardProps = {
    contactdata:ContactCardProps; 
}
/*export functionContactCard({contactdata}:ContactCardProps){
    const
}*/

export function ContactCard(){
    return(
        <>
            <div className="contactCard">
                <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" />
            </div>
            <div className="contacInformations">
                <h2> Phyliis Shellby</h2>
                <p>
                    Shellby.Phillis@example.com
                </p>
            </div>
        </>
    )
}