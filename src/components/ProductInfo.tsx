import "./ProductInfo.css";
import { Button, Modal } from "react-bootstrap";

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

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductInfo = ({ handleProductClick, productSend }: Props) => {
  return (
    <Modal
      show={true}
      onHide={handleProductClick}
      style={{ textAlign: "center" }}>
      <Modal.Header closeButton>
        <Modal.Title>{productSend.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={productSend.imageUrl}
          alt="image"
          style={{ width: "300px" }}
        />
        <p>Detail : {productSend.detail}</p>
        <h5>Price : {numberWithCommas(productSend.price)} THB</h5>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-dark" onClick={handleProductClick}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductInfo;
