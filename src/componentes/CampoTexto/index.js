import './CampoTexto.css'

//const CampoTexto = (props) => {

    // exemplo que podemos utilizar os props do hooks, nesse formato
    // declarando os props e a variavel.
    // const placeholderModificada = `${props.placeholder}...`

    // const aoDigitado = (evento) => {
    //     props.aoAlterado(evento.target.value)
    // }

    // return (
    //     <div className="campo-texto">
    //         <label>
    //             {props.label}
    //         </label>
    //         <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
    //     </div>
    // ) logo abaixo um outro exemplo declarando os props

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-texto'>
        <label>{label}</label>
        <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default CampoTexto