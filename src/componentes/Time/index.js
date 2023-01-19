import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return (
        (props.colaboradores.length > 0) && <section className='time' style={{css}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
            <div className='colaboradores'>
             {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>

// return (
//     (props.colaboradores.length > 0) ? <section className='time' style={{css}}>
//         <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
//         <div className='colaboradores'>
//          {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
//         </div>
//     </section>
//     : ''
//     ) ponto de interrogação, conhecido como operador ternário. Podendo ser utilizado também nesse modelo.
    )
}

export default Time