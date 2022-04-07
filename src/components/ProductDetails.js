import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <p>
        This is the <b>{productId}</b> details
      </p>
      <Link to="/" className="underline">
        Back to List
      </Link>
    </div>
  );
};

export default ProductDetails;
