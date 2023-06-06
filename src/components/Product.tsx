import { useState } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([
    {
      name: "Shirt",
      detail: "This is shirt that you can wear in everday life.",
      price: 290,
      imageUrl:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
  ]);

  const [addProductUI, isAddProductUI] = useState(false);

  const clickAdd = () => {
    isAddProductUI(!addProductUI);
    console.log(addProductUI);
  };

  return (
    <div className="product">
      <h1>This is Product</h1>

      {addProductUI && (
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
                    // onChange={handleChange}
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
                    // onChange={handleChange}
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
                    // onChange={handleChange}
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
                    // onChange={handleChange}
                  />
                </div>
                <button type="submit">Add</button>
                <button onClick={clickAdd}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {!addProductUI && (
        <button
          onClick={() => {
            clickAdd();
          }}
        >
          Add Product
        </button>
      )}

      {/*  */}
    </div>
  );
};

export default Product;
