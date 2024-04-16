export function ListOfProducts ({products}) {
    return (
        <ul className="products">
            {
                products.map(products => (
                    <li className="product" key={products.id}>
                        <h3>{products.title}</h3>
                        <p>{products.price}</p>
                        <img src={products.images[0]} alt={products.title} />
                    </li>
                ))
            }
            
        </ul>
    )
}

export function NoProductsResults () {
    return (
        <p>No se encontraron productos</p>
    )
}

export function Products ( {products} ) {
    
    const hasProduct = products?.length > 0

    return (
        hasProduct
        ? <ListOfProducts products={products}/>
        : <NoProductsResults/>
    )
}