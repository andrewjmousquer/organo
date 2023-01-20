import Colaborador from '../Colaborador'
import './Time.css'

// exemplo utilizando os props com declarativas props.exemplo
// const Time = (props) => {

//     const css = {backgroundColor: props.corSecundaria}

//     return (
//         (props.colaboradores.length > 0) && <section className='time' style={{css}}>
//             <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
//             <div className='colaboradores'>
//              {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
//             </div>
//         </section>

// return (
//     (props.colaboradores.length > 0) ? <section className='time' style={{css}}>
//         <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
//         <div className='colaboradores'>
//          {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
//         </div>
//     </section>
//     : ''
//     ) ponto de interrogação, conhecido como operador ternário. Podendo ser utilizado também nesse modelo.
//     )
// } logo abaixo declarado variavéis com outro exemplo

const Time = ({ time, colaboradores }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: time.corPrimaria }}>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.corSecundaria} />)}
            </div>
        </section>

    )
}

export default Time