import './Product.css';

function Product(props){
    return(
        <div className="box-product">
            <div className="product-header">
              <a className="product-link" href={props.productUrl}>
                <img className="product-image" src={props.imageUrl} alt="Product" />
              </a>
            </div>
            <div className="product-body">
              <h3 className="product-title">
                <a className="product-link" href={props.productUrl}>{props.name}</a>
              </h3>
              <p className="product-description">{props.description}</p>
              <a className="btn btn-product" href={props.productUrl}>Read more</a>
            </div>
        </div>
    );
}
export default Product;