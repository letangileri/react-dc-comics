import dcLogoBg from '../assets/img/dc-logo-bg.png'

import dcFb from '../assets/img/footer-facebook.png'
import dcTw from '../assets/img/footer-twitter.png'
import dcYT from '../assets/img/footer-youtube.png'
import dcPinterest from '../assets/img/footer-pinterest.png'
import dcMaps from '../assets/img/footer-periscope.png'

const menu_footer =[
    {
        title: 'dcComics',
        list:[
            {
                id: 1,
                text: "Characters",
                link: '#',
            },
            {
                id: 2,
                text: "Comics",
                link: '#',
            },
            {
                id: 3,
                text: "Movies",
                link: '#',
            },
            {
                id: 4,
                text: "TV",
                link: '#',
            },
            {
                id: 5,
                text: "Games",
                link: '#',
            },
            {
                id: 6,
                text: "Collectibles",
                link: '#',
            },
            {
                id: 7,
                text: "Video",
                link: '#',
            },
            {
                id: 8,
                text: "Fan",
                link: '#',
            },
            {
                id: 9,
                text: "News",
                link: '#',
            }

        ]
    },
    {
        title: 'Shop',
        list:[
            {
                id: 1,
                text: "Shop1",
                link: '#',
            },
            {
                id: 2,
                text: "Shop2",
                link: '#',
            }

        ]
    }
]


export default function AppFooter(){
    return(
        <footer className="dc-footer">
            <div className="container footer-d-flex">
                <div className="row">
                    <div className="colums">
                        {/* <h3>dc Comics</h3> */}

                        <ul className='dc-ul-footer'>
                            {menu_footer.map((menu)=>(
                                <h3>{menu.title}</h3>,
                                console.log(menu.title),
                                
                                menu.list.map(list => (
                                    console.log(menu),
                                    <li>
                                        <a href={list.link}>{list.text}</a>
                                    </li>  
                            ))

                            ))}
                            {/* <li>
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
                            </li> */}
                        </ul>
                        <h3>shop</h3>
                        <ul className='dc-ul-footer'>
                            <li>
                                <a href="">Shop 1</a>
                            </li>
                            <li>
                                <a href="">Shop 2</a>
                            </li>
                        </ul>
                    </div>
                    <div className="colums">
                    <h3>dc</h3>
                    <ul className='dc-ul-footer'>
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
                    </div>
                    <div className="colums">
                    <h3>sites</h3>
                    <ul className='dc-ul-footer'>
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
                    </div>
                </div>
                {/* <img id="dc-logo-bg" src={dcLogoBg} alt="logo dello sfondo" /> */}
            </div>
            <div className='dc-footer-bottom'>
                <div className='container d-flex'>
                    <button>Sign-up now</button>
                    <div className='dc-social'>
                        <h4>follow us</h4>
                        <i><img src={dcFb} alt="" /></i>
                        <i><img src={dcTw} alt="" /></i>
                        <i><img src={dcYT} alt="" /></i>
                        <i><img src={dcPinterest} alt="" /></i>
                        <i><img src={dcMaps} alt="" /></i>
                    </div>
                </div>

            </div>
        </footer>
    )
}