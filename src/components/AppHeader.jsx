import dcLogo from '../assets/img/dc-logo.png'

export default function AppHeader(){
    return(
        <header>
            <nav className='container dc-nav'>
                <img id='dc-img-logo' src={dcLogo} alt="immagine logo" />
                <ul className='dc-ul-nav'>
                    <li>
                        <a href="">Characters</a>
                    </li>
                    <li>
                        <a href="" className='active'>Comics</a>
                    </li>                       
                    <li>
                        <a href="">Movies</a>
                    </li>                       
                    <li>
                        <a href="">TV</a>
                    </li>
                    <li>
                        <a href="">Games</a>
                    </li>
                    <li>
                        <a href="">Collectibles</a>
                    </li>
                    <li>
                        <a href="">Videos</a>
                    </li>
                    <li>
                        <a href="">Fans</a>
                    </li>
                    <li>
                        <a href="">News</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}