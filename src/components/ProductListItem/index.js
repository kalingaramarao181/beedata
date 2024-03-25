import "./index.css"
import {Link} from "react-router-dom"

const ProductListItem = (props) => {
    const {productDetails, gettingProductItem} = props
    const {productId, productName} = productDetails

    const onClickProductItem = () => {
        gettingProductItem(productId)
    }

    return (
            <Link className="link-1" to={productId}>
                <li className="product-list-item">
                    <button  className="product-item-button"  onClick={onClickProductItem} type="button">{productName}</button>
                </li>
            </Link>
            )
}

export default ProductListItem 