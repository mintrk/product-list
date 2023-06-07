import React, { useState } from "react";

type Product = {
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
};

interface Props {
  handleEditButton: () => void;
  products: Product;
}

const Update = ({ handleEditButton, products }: Props) => {
  const [editProducts, setEditProducts] = useState(products);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form>
            {/* Name */}
            <div className="form-group">
              <label>Product: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="input name"
                className="form-control"
                //   onChange={handleNameChange}
                //   value={productName}
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
                //   onChange={handlePriceChange}
                //   value={productPrice}
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
                //   onChange={handleDetailChange}
                //   value={productDetail}
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
                //   onChange={handleImageChange}
                //   value={productImage}
              />
            </div>
            <button type="submit">Add</button>
            <button onClick={handleEditButton}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
