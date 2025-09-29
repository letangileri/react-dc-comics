import dcLogoBg from '../assets/img/dc-logo-bg.png'

import dcFb from '../assets/img/footer-facebook.png'
import dcTw from '../assets/img/footer-twitter.png'
import dcYT from '../assets/img/footer-youtube.png'
import dcPinterest from '../assets/img/footer-pinterest.png'
import dcMaps from '../assets/img/footer-periscope.png'

const menu_footer =[
    [{
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
    }],
    [{
        title: 'dc',
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
    }],
    [{
        title: 'site',
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
    }]
]



export default function AppFooter(){
    return(
        <>
        <footer className="dc-footer">
            <div className="container footer-d-flex"> 
                <div className="row"> 
                    {menu_footer[0].map(menu=>(
                        <div className="colums">
                            <h3>{menu.title}</h3>
                            <ul className='dc-ul-footer'>
                            {menu.list.map(list => (
                            <li>
                            <a href={list.link}>{list.text}</a>
                            </li>
                            ))}
                            </ul></div>
                            ))}
                                       
                    {menu_footer[1].map(menu=>(
                        <div className="colums">
                            <h3>{menu.title}</h3>
                            <ul className='dc-ul-footer'>
                            {menu.list.map(list => (
                            <li>
                            <a href={list.link}>{list.text}</a>
                            </li>
                            ))}
                            </ul></div>
                            ))}    
                    {menu_footer[2].map(menu=>(
                        <div className="colums">
                            <h3>{menu.title}</h3>
                            <ul className='dc-ul-footer'>
                            {menu.list.map(list => (
                            <li>
                            <a href={list.link}>{list.text}</a>
                            </li>
                            ))}
                            </ul></div>
                            ))} 
                </div>
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
        </>
    )
}