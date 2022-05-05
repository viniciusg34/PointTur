import { Link } from 'react-router-dom';
import '../../assets/styles/header/header.css'

const Header = ():JSX.Element =>
{
    return(
        <>
            <div className="cabecalho">
               <ul>
                   <button className='pointTour'><Link className='links' to={'/'}>PointTour</Link></button>
                   <button className='roteiro'><Link className='links' to={'/roteiro'}>Roteiro</Link></button>
               </ul>
            </div>
        </>
    )
}

export default Header;