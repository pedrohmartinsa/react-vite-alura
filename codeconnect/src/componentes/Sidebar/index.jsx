import Logo from './assets/Logo@2x.svg'
import Feed from './assets/feed.svg';
import Perfil from './assets/account_circle.svg';
import SobreNós from './assets/info.svg';
import Sair from './assets/logout.svg';
import './styles.css';

function Sidebar() {
    return ( 
        <aside>
            <img src={Logo} alt="Logo da Code Connect" />
            <nav>
                <ul className='lista-sidebar'>
                    <li>
                        <a href="#" className='item__link-publicacao'>Publicar</a>
                    </li>
                    <li>
                        <a href="#" className='item__link item__link--ativo'>
                            <img src={Feed} alt="" />
                            <span>Feed</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Perfil} alt="" />
                            <span>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={SobreNós} alt="" />
                            <span>Sobre nós</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='item__link'>
                            <img src={Sair} alt="" />
                            <span>Sair</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
     );
}

export default Sidebar;