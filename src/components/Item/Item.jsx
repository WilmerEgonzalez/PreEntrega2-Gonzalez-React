import '../Item/Item.css'

const Item = ({id, nombre, precio, imagen, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
                </section> 
                <footer className='ItemFooter'>
                    <link to={`/item/${id}`} className='Option'>Ver detalles</link>
                </footer>
        </article>
    )
}

export default Item;