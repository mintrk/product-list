import React, { useState } from "react";

type Product = {
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
};

type AddProductProps = {
  product?: Product;
  onSubmit: (product: Product) => void;
  onCancel: () => void;
};

const AddProduct: React.FC<AddProductProps> = ({
  product,
  onSubmit,
  onCancel,
}) => {
  const [productName, setProductName] = useState(product?.name || "");
  const [productDetail, setProductDetail] = useState(product?.detail || "");
  const [productPrice, setProductPrice] = useState(product?.price || 0);
  const [productImage, setProductImage] = useState(product?.imageUrl || "");

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newProduct = {
      name: productName,
      detail: productDetail,
      price: productPrice,
      imageUrl:
        productImage ||
        "https://static.vecteezy.com/system/resources/previews/000/702/530/original/hand-holding-shopping-bags-vector.jpg",
    };
    console.log(newProduct);

    onSubmit(newProduct);

    setProductName("");
    setProductDetail("");
    setProductPrice(0);
    setProductImage("");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleAddProduct}>
            {/* Name */}
            <div className="form-group">
              <label>Product: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="input name"
                className="form-control"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
                required
              />
            </div>
            {/* Price */}
            <div className="form-group">
              <label>Price: </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="input price"
                className="form-control"
                onChange={(e) => setProductPrice(Number(e.target.value))}
                value={productPrice}
                required
              />
            </div>
            {/* Detail */}
            <div className="form-group">
              <label>Details: </label>
              <input
                type="text"
                name="detail"
                id="detail"
                placeholder="input details"
                className="form-control"
                onChange={(e) => setProductDetail(e.target.value)}
                value={productDetail}
                required
              />
            </div>
            {/* Image url */}
            <div className="form-group">
              <label>Image Url: </label>
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
            <button type="submit">{product ? "Update" : "Add"}</button>
            <button onClick={onCancel}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
