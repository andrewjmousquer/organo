import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    //Para cada item da lista, ele vai retornar um array manipulado - função do map no caso abaixo retorna um option
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}        
                {/* {props.itens.map(item => {
                    return <option>{item}</option>
                })}   também pode ser utilizado de dessa forma, mas não         
                       */}
            </select>
        </div>
    )

}

export default ListaSuspensa