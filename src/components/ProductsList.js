import Product from './Product';
import './ProductsList.css';

function ProductsList(props) {
    const listItems = props.data.map((product) => (
        <div className="col-4" key={product.id}>
            <Product
                name={product.name}
                imageUrl={product.imageUrl}
                description={product.description}
                productUrl={product.productUrl}
            />
        </div>
    ));

    return (
        <div className="wrapper-products row">{listItems}</div>
    );
}

export default ProductsList;