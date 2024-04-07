import './Products.css';

import PropTypes from 'prop-types';

export function Products ({producto}){
    console.log(producto[0].id)
    return(
        <main className="products">
            <h1>Products</h1>
            <ul>
                {producto.map(product => (
                    <li key={product.id}> 
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

Products.propTypes = {
    producto: PropTypes.array.isRequired
};
                    