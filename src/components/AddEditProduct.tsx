import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

type Product = {
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
};

interface AddEditProductProps {
  product?: Product;
  onSubmit: (product: Product) => void;
  onCancel: () => void;
}

const AddEditProduct = ({
  product,
  onSubmit,
  onCancel,
}: AddEditProductProps) => {
  const [productName, setProductName] = useState(product?.name || "");
  const [productDetail, setProductDetail] = useState(product?.detail || "");
  const [productPrice, setProductPrice] = useState(product?.price || "");
  const [productImage, setProductImage] = useState(product?.imageUrl || "");

  const [validateName, setValidateName] = useState({
    status: false,
    message: "",
    color: "",
  });
  const [validateDetail, setValidateDetail] = useState({
    status: false,
    message: "",
    color: "",
  });
  const [validatePrice, setValidatePrice] = useState({
    status: false,
    message: "",
    color: "",
  });

  // useEffect(() => {
  //   // Perform validation whenever the relevant state variables change
  //   validateFields();
  // }, [productName, productDetail, productPrice]);

  const validateFields = () => {
    let valid = true;

    if (productName.trim() === "") {
      setValidateName({
        status: false,
        message: "Please enter your product name",
        color: "red",
      });
      valid = false;
    } else {
      setValidateName({
        status: true,
        message: "",
        color: "green",
      });
    }

    if (productDetail.trim() === "") {
      setValidateDetail({
        status: false,
        message: "Please enter your product details",
        color: "red",
      });
      valid = false;
    } else {
      setValidateDetail({
        status: true,
        message: "",
        color: "green",
      });
    }

    if (productPrice === "" || productPrice === "0") {
      setValidatePrice({
        status: false,
        message: "Please enter your product price",
        color: "red",
      });
      valid = false;
    } else {
      setValidatePrice({
        status: true,
        message: "",
        color: "green",
      });
    }

    return valid;
  };
  const [imageExists, setImageExists] = useState(false);
  const checkImageExists = () => {
    const img = new Image();
    img.src = productImage;

    img.onerror = () => {
      setImageExists(false);
    };

    img.onload = () => {
      setImageExists(true);
    };
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkImageExists();
    if (validateFields()) {
      const newProduct = {
        name: productName,
        detail: productDetail,
        price: Number(productPrice),
        imageUrl: imageExists
          ? productImage
          : "https://static.vecteezy.com/system/resources/previews/000/702/530/original/hand-holding-shopping-bags-vector.jpg",
      };

      onSubmit(newProduct);

      setProductName("");
      setProductDetail("");
      setProductPrice("");
      setProductImage("");
    }
  };

  const handleCancel = () => {
    setProductName("");
    setProductPrice(0);
    setProductDetail("");
    setProductImage("");
    onCancel();
  };

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{product ? "Update" : "Add"} Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleAddProduct}>
          {/* Name */}
          <div className="form-group">
            <label className="d-block d-flex justify-content-between">
              <div>
                Product:{" "}
                {!validateName.status && (
                  <span style={{ color: "red" }}>*</span>
                )}
              </div>
              <span className="fw-light" style={{ color: "red" }}>
                {validateName.message}
              </span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="input name"
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
              style={{ borderColor: validateName.color }}
            />
          </div>
          {/* Price */}
          <div className="form-group">
            <label className="d-block d-flex justify-content-between">
              <div>
                Price:{" "}
                {!validatePrice.status && (
                  <span style={{ color: "red" }}>*</span>
                )}
              </div>
              <span className="fw-light" style={{ color: "red" }}>
                {validatePrice.message}
              </span>
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="input price"
              className="form-control"
              onChange={(e) => setProductPrice(Number(e.target.value))}
              value={productPrice}
              style={{ borderColor: validatePrice.color }}
            />
          </div>
          {/* Detail */}
          <div className="form-group">
            <label className="d-block d-flex justify-content-between">
              <div>
                Details:{" "}
                {!validateDetail.status && (
                  <span style={{ color: "red" }}>*</span>
                )}
              </div>
              <span className="fw-light" style={{ color: "red" }}>
                {validateDetail.message}
              </span>
            </label>
            <input
              type="text"
              name="detail"
              id="detail"
              placeholder="input details"
              className="form-control"
              onChange={(e) => setProductDetail(e.target.value)}
              value={productDetail}
              style={{ borderColor: validateDetail.color }}
            />
          </div>
          {/* Image url */}
          <div className="form-group">
            <label className="d-block d-flex justify-content-between">
              Image Url:{" "}
            </label>
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="input image url"
              className="form-control"
              onChange={(e) => setProductImage(e.target.value)}
              value={productImage}
            />
          </div>
          <Button
            type="submit"
            variant="dark"
            className="mt-2"
            style={{ marginRight: "1rem" }}>
            {product ? "Update" : "Add"}
          </Button>
          <Button variant="light" onClick={handleCancel} className="mt-2">
            Cancel
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default AddEditProduct;
