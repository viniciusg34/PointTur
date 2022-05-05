import Header from "../../contents/header/header";
import '../../assets/styles/roteiro/roteiro.css'
import Footer from "../../contents/footer/footer";
import Modal from "../../contents/modal/modal";
import { useState } from "react";

const Roteiro = ():JSX.Element =>{
    const [modal, setModal] = useState('hide')
    
    const abrirFecharModal = (estadoAtual:string) =>{
        if(estadoAtual === 'hide'){
            setModal('Show')
        }
        else{
            setModal('hide')
        }
    }

    return(
        <>
            <Modal card={modal} fechar={abrirFecharModal}/>
            <Header/>
            <div className="centralizarRoteiroMain">
                <div className="roteiroMain">
                    <div className="centralizarRoteiro">
                        <h1 className="roteiro">Roteiro</h1>
                    </div>
                    <div className="inputsRoteiro">
                        <label className="LabelsRoteiro">Local</label>
                        <input type="text" className="inputLocal inputsPadrao" />
                        <label className="LabelsRoteiro">Endereço</label>
                        <input type="text" className="inputEndereco inputsPadrao" />
                        <label className="LabelsRoteiro">Descrição</label>
                        <textarea className="inputDescricao inputsGrande"></textarea>
                        <label className="LabelsRoteiro">Funcionamento</label>
                        <input type="text" className="inputFuncionamento inputsPadrao" />
                    </div>
                    <div>
                        <button className="cadastrar">Cadastrar</button>
                    </div>
                    <div className="cardsRoteiro">
                        <div className="quadradoAzul">
                            <p>masp</p>
                        </div>
                        <div className="quadradoBranco">
                            <div className="textoCard">
                                <div className="alinharPRoteiro">
                                    <p className="pRoteiro">
                                        Um dos maiores símbolos da arquitetura moderna, o Museu de Arte de São Paulo é tido como um dos marcos de São Paulo, conhecido no país inteiro e ao redor do mundo. Essa é só um pouco da história do MASP, que tem muito mais a ser contado.                             
                                    </p>
                                </div>
                                <div className="botoesCardRoteiro">
                                    <button className="botaoEditar">Editar</button>
                                    <button className="botaoExcluir">Excluir</button>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => abrirFecharModal(modal)} className="botaoSaibaMais">Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                    <div className="cardsRoteiro">
                        <div className="quadradoAzul">
                            <p>Ibirapuera</p>
                        </div>
                        <div className="quadradoBranco">
                            <div className="textoCard">
                                <div className="alinharPRoteiro">
                                    <p className="pRoteiro">
                                        dias da semana.                                    
                                    </p>
                                </div>
                                <div className="botoesCardRoteiro">
                                    <button className="botaoEditar">Editar</button>
                                    <button className="botaoExcluir">Excluir</button>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => abrirFecharModal(modal)} className="botaoSaibaMais">Saiba Mais</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Roteiro;