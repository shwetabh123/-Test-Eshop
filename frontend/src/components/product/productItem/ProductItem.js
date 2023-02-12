import React from 'react'
import styles from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";
import Card from "../../card/Card";
import { Link } from "react-router-dom";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
} from "../../../redux/slice/cartSlice";

const ProductItem = ({ product, grid, id, name, price,size, desc, imageURL }) => {

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const addToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };


  return (
    
<Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>

    <Link to={`/product-details/${id}`}>
        <div className={styles.img}>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{`Rs ${price}`}</p>

          <p>{` ${size}`}</p>



          <ul >

<li className="_3V2wfe _31hAvz" id="swatch-0-size">
    <a className="_1fGeJ5 _2UVyXR _31hAvz" href="/mast-harbour-printed-men-round-neck-yellow-t-shirt/p/itma32b4b7739d93?pid=TSHGMMA5MCZHXATC&lid=LSTTSHGMMA5MCZHXATCG8C0LY&marketplace=FLIPKART&sattr[]=size&st=size">S
    </a>
  </li>
  <li className="_3V2wfe _31hAvz" id="swatch-1-size">
    <a className="_1fGeJ5 _2UVyXR _31hAvz" href="/mast-harbour-printed-men-round-neck-yellow-t-shirt/p/itma32b4b7739d93?pid=TSHGMMA5MCZHXATC&lid=LSTTSHGMMA5MCZHXATCG8C0LY&marketplace=FLIPKART&sattr[]=size&st=size">M
    </a>
  </li>
  <li className="_3V2wfe _31hAvz" id="swatch-2-size">
    <a className="_1fGeJ5 _2UVyXR _31hAvz" href="/mast-harbour-printed-men-round-neck-yellow-t-shirt/p/itma32b4b7739d93?pid=TSHGMMA5MCZHXATC&lid=LSTTSHGMMA5MCZHXATCG8C0LY&marketplace=FLIPKART&sattr[]=size&st=size">L
    </a>
  </li>
  <li className="_3V2wfe _31hAvz" id="swatch-3-size">
    <a className="_1fGeJ5 _2UVyXR _31hAvz" href="/mast-harbour-printed-men-round-neck-yellow-t-shirt/p/itma32b4b7739d93?pid=TSHGMMA5MCZHXATC&lid=LSTTSHGMMA5MCZHXATCG8C0LY&marketplace=FLIPKART&sattr[]=size&st=size">XL
    </a>
  </li>

  </ul >


          <h4>{shortenText(name, 18)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}

<button className="--btn --btn-danger"   onClick={() => addToCart(product)} >Add To Cart</button>
</div>

</Card>
  )
}

export default ProductItem