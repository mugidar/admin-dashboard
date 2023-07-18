import SinglePage from "../../components/SinglePage/SinglePage";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  //fetch data
  
  return (
    <div>
      <SinglePage {...singleProduct} />
    </div>
  ) ;
};

export default Product;
