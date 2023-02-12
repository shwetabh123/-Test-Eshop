import React from 'react'
import styles from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";
import Card from "../../card/Card";
import { Link } from "react-router-dom";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
} from "../../../redux/slice/cartSlice";
import { selectProducts } from "../../../redux/slice/productSlice";

//const ProductItem = ({ product, grid, id, name, price,size, desc, imageURL }) => {


  const ProductItem = ({  grid,id, name, price,size, desc, imageURL }) => {

 

  const [ setProduct] = useState(() => {
    const newState = detectForm(id, { ...initialState });
    return newState;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

  };



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

          <select
              required
              name="size"
              value={size}
              onChange={(e) => handleInputChange(e)}
            >
              <option value="" disabled>
                -- Choose product size --
              </option>
              {size.map((cat) => {
                return (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                );
              })}
            </select>



          <h4>{shortenText(name, 18)}</h4>
        </div>
        {!grid && <p className={styles.desc}>{shortenText(desc, 200)}</p>}

<button className="--btn --btn-danger"   onClick={() => addToCart(product)} >Add To Cart</button>
</div>

</Card>
  )
}

export default ProductItem