import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const {image, name, oldPrice, actualPrice} = props;
  
  return (
    <div className='product-card'>
      <img className='product-image' src={image}/>
      <h6 className='product-name'>{name}</h6>
      <div className='row w-100'>
        <div className='col-8 product-prices-container p-0'>
          <div className='old-price'>{oldPrice} MDL</div>
          <div className='actual-price'>{actualPrice} MDL</div>
        </div>
        <div className='col-4 p-0 d-flex justify-content-end align-items-center'>
          <div className='add-to-cart-btn'>
            <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff", fontSize: "18px"}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard