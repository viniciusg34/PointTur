import imagen from '../../assets/images/image.png'
import Footer from '../../contents/footer/footer';
import Header from '../../contents/header/header';
import '../../assets/styles/pointTur/pointTur.css'

const PointTour = ():JSX.Element =>
{
    return(
        <>
            <Header/>
            <div className="pointMain">
                <div className='centralizarPointTur'>
                    <div className="centralizarTituloPoint">
                        <h1 className="tituloPoint">PointTour</h1>
                    </div>
                    <div className="imgPoint">
                        <img src={imagen} alt="" />
                    </div>
                    <div className='textoPoint'>
                        <p>
                            São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.
                            <br />                            
                            <br />
                            A PointTour é um site que te ajuda a economizar na hora de visitar os  pontos turisticos de São Paulo.Existem centenas de sites de turismo com diferentes preços e promoções Encontre o melhor roteiro com preços atraentes
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PointTour;