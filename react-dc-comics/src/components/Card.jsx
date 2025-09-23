export default function Card({img, title}){
    console.log(img, title);
    
    return(
        <div>
            <img src={img} alt="immagine card" />
            <p>{title}</p>
        </div>
        
    )
}