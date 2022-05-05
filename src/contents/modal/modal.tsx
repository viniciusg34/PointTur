import '../../assets/styles/modal/modal.css'

export const Modal = (props:any):JSX.Element =>{
    return(
        <>
            <div className={`escurecer ${props.card}`}></div>
            <div className={`centralizarModal ${props.card}`}>
                <div className='modal'>
                    <div className='faixaAzul'>
                        <p onClick={props.fechar} className='fechar'>X</p>
                    </div>
                    <div className='faixaTituloModal'>
                        <p className='tituloModal'>MASP</p>
                    </div>
                    <div>
                        <p className='local'>Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</p>
                    </div>
                    <div>
                        <p className='descricao'>
                            Um dos maiores símbolos da arquitetura moderna, o Museu de Arte de São Paulo é tido como um dos marcos de São Paulo, conhecido no país inteiro e ao redor do mundo. Essa é só um pouco da história do MASP, que tem muito mais a ser contado. 
                        </p>
                    </div>
                    <div>
                        <p className='horario'>Todas as terças das 10 as 20hs</p>
                    </div>
                </div>        
            </div>
        </>
    )
}

export default Modal