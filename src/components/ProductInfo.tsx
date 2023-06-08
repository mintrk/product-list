import "./ProductInfo.css";
type Product = {
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
};

interface Props {
  handleProductClick: () => void;
  productSend: Product;
}

const ProductInfo = ({ handleProductClick, productSend }: Props) => {
  return (
    <div className="container-fluid info-border info-center">
      <img src={productSend.imageUrl} alt="image" style={{ width: "300px" }} />
      <h1>{productSend.name}</h1>
      <p>{productSend.detail}</p>
      <h5>{productSend.price}</h5>
      <button onClick={handleProductClick}>X</button>
    </div>
  );
};

export default ProductInfo;
