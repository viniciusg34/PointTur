import whats from '../../assets/images/whats.png'
import face from '../../assets/images/face.png'
import twt from '../../assets/images/twt.png'
import insta from '../..//assets/images/insta.png'
import '../../assets/styles/footer/footer.css'


const Footer = ():JSX.Element =>
{
    return(
        <>
            <div className="rodape">
               <ul>
                   <li>Todos os direitos reservados</li>
               </ul>
               <div className='iconeFooter'>
                   <img src={whats} alt="whatsapp" />
                   <img src={insta} alt="instagram" />
                   <img src={face} alt="facebook" />
                   <img src={twt} alt="twitter" />
               </div>
            </div>
        </>
    )
}

export default Footer;