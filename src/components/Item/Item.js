import './Item.css'


const Item = ({title,price,image}) => {
    return (
        <div className="card-productos">
                <img src={image} alt={title}/>
                <h2 className="titulo-cards">{title}</h2>
                <h3 className="precio-cards">Precio: ${price}</h3>
                <button className="boton">Ver Detalles</button>
        </div>
    )
}

export default Item