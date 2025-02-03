import { Link } from 'react-router-dom'
import './Header.css'
function Header(){
    return(
        <header>
            <Link to="/"><h1>MangaLivre</h1></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/cadastro-produto">Cadastrar produto</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link to="/cadastro-usuario">Cadastrar Usuário</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;