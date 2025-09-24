import style from './Card.module.css';

export default function Card({img, title}){
    console.log(img, title);
    
    return(
        <div>
            <img className={style.img} src={img} alt="immagine card" />
            <p className={style.pCard}>{title}</p>
        </div>
        
    )
}