import './style.css'
export function StateExample(){
    console.log('renderizou')
    let name ='Edigleis'

    function handleInput(event){ 
        name = event.target.value
        console.log("Disparou Evento")
    }
    return(
        <>
            <input onInput={handleInput} className='inputName' type="text"/>
            <h1>{name}</h1>
        </>
    )
}