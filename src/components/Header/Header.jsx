import './Header.css';

const Header = () => {
    return ( 
        <header className="cabecalhoContainer">
            <h1>Los Santos</h1>
            <nav className='cabecalhoContainer-navegacao'>
                <a href="#">
                    <img src="/imagens/CarrinhoCompras.svg" alt="Carrinho de compras" />
                </a>
                <button>Entrar</button>
            </nav>
        </header>
     );
}
 
export default Header;