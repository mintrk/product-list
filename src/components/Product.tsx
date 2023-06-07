import React, { useState } from "react";
import "./Product.css";

type Product = {
  name: string;
  detail: string;
  price: number;
  imageUrl: string;
};

const Product = () => {
  const defaultProduct = [
    {
      name: "Kiss libstick",
      detail: "cosmetic (red, pink, orange)",
      price: 390,
      imageUrl:
        "https://empretty.com/cdn/shop/products/Bella-Lipstick_250x250@2x.jpg?v=1575930788",
    },
    {
      name: "Mac Brush on",
      detail: "cosmetic (red, pink, orange)",
      price: 289,
      imageUrl: "https://cf.shopee.co.th/file/6a048a24a200dc25cb152c2365c263c8",
    },
    {
      name: "Eyeliner",
      detail: "cosmetic (black, brown)",
      price: 199,
      imageUrl:
        "https://www.nongchatmakeup.com/wp-content/uploads/2021/09/new-High-Technique-Duo-Eyeliner-_taupe-brown-20.jpg",
    },
  ];
  const [products, setProducts] = useState<Product[]>(defaultProduct);

  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");

  const [addProductUI, isAddProductUI] = useState(false);
  const [editProductUI, isEditProductUI] = useState(false);
  const [productUI, isProductUI] = useState(true);

  const [editProducts, setEditProducts] = useState<Product[]>([]);
  const [editProductName, setEditProductName] = useState("");
  const [editProductDetail, setEditProductDetail] = useState("");
  const [editProductPrice, setEditProductPrice] = useState(0);
  const [editProductImage, setEditProductImage] = useState("");
  const [editIndex, setEditIndex] = useState<Number>(-1);

  const clickAdd = () => {
    isAddProductUI(!addProductUI);
    console.log(addProductUI);
  };

  const handleDelete = (index: Number) => {
    console.log(index);

    const newProducts = products.filter((product, i) => index !== i);
    console.log(newProducts);
    setProducts(newProducts);
  };

  const handleEditButton = (index: Number) => {
    let productIndex: Number = index;
    setEditIndex(productIndex);
    products.map((products, i) => {
      if (productIndex === i) {
        setEditProductName(products.name);
        setEditProductDetail(products.detail);
        setEditProductPrice(products.price);
        setEditProductImage(products.imageUrl);
      }
    });
    isEditProductUI(!editProductUI);
    isProductUI(!productUI);
    isAddProductUI(false);
  };

  const handleCancleEdit = () => {
    isEditProductUI(!editProductUI);
    isProductUI(!productUI);
    console.log("editIndex (at cancel)-> ", editIndex);
  };

  const handleUpdate = (event: SubmitEvent) => {
    event.preventDefault();
    const newProduct = {
      name: editProductName,
      detail: editProductDetail,
      price: editProductPrice,
      imageUrl:
        editProductImage ||
        "https://static.vecteezy.com/system/resources/previews/000/702/530/original/hand-holding-shopping-bags-vector.jpg",
    };
    console.log(newProduct);
    console.log("editIndex (at cancel)-> ", editIndex);
    console.log("products -> ", products);
    const updatedProduct = products.map((product, index) =>
      index === editIndex ? newProduct : product
    );
    setProducts(updatedProduct);

    isEditProductUI(!editProductUI);
    isProductUI(!productUI);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };
  const handleDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductDetail(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(Number(event.target.value));
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductImage(event.target.value);
  };

  const handleEditNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditProductName(event.target.value);
  };
  const handleEditDetailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditProductDetail(event.target.value);
  };
  const handleEditPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditProductPrice(Number(event.target.value));
  };
  const handleEditImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditProductImage(event.target.value);
  };

  const handleAddProduct = (event: SubmitEvent) => {
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

    setProducts([...products, newProduct]);

    setProductName("");
    setProductDetail("");
    setProductPrice(0);
    setProductImage("");
  };

  return (
    <div className="product">
      <h1>This is Product</h1>

      {addProductUI && (
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
                    onChange={handleNameChange}
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
                    onChange={handlePriceChange}
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
                    onChange={handleDetailChange}
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
                    onChange={handleImageChange}
                    value={productImage}
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

      {productUI && (
        <div className="container-fluid">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="card col-md-3 col-sm-6">
                <img src={product.imageUrl} />
                <div className="card-body">
                  <h2>{product.name}</h2>
                  <p>Detail : {product.detail}</p>
                  <h4>Price : {product.price}</h4>
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      handleEditButton(index);
                    }}
                  >
                    Edit
                  </button>

                  {/*  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {editProductUI && (
        <div>
          <h1>Edit</h1>
          {/*  */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleUpdate}>
                  {/* Name */}
                  <div className="form-group">
                    <label>Product: </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="input name"
                      className="form-control"
                      onChange={handleEditNameChange}
                      value={editProductName}
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
                      onChange={handleEditPriceChange}
                      value={editProductPrice}
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
                      onChange={handleEditDetailChange}
                      value={editProductDetail}
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
                      onChange={handleEditImageChange}
                      value={editProductImage}
                    />
                  </div>
                  <button type="submit">Update</button>
                  <button onClick={handleCancleEdit}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Product;
