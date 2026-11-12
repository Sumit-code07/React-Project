export default function Card({title,price,id,location,image}){
    return(
        <>
        <section className="card" style={{maxWidth: '320px' , marginBottom:'20px', marginRight: '50px' }} id={id}>
            <img src={image} className="card-img-top" alt="img" style={{height:'169px' , width:'320px'}}/>
            <div className="card-body" style={{padding:'10px'}}>
                <h4 className="card-title">{title}</h4>
                <p className="card-text">&#8377; {price}</p>
                <p className="card-text"><i className="fa-solid fa-location-dot"></i> {location}</p>
            </div>
        </section>
        </>
    )
}