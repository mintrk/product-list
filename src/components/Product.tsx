import { useState } from "react";
import ProductInfo from "./ProductInfo";
import AddEditProduct from "./AddEditProduct";
import ConfirmDelete from "./ConfirmDelete";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
    {
      name: "Palette",
      detail: "cosmetic (brown theme)",
      price: 499,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1583/0411/products/eyeshadow2020_1_1024x.jpg?v=1662647787",
    },
  ];
  const [products, setProducts] = useState<Product[]>(defaultProduct);

  const [addProductUI, isAddProductUI] = useState(false);
  const [editProductUI, isEditProductUI] = useState(false);
  const [productInfoUI, isProductInfoUI] = useState(false);
  const [confirmModal, isConfirmModal] = useState(false);

  const [currentIndex, setCurrentIndex] = useState<Number>(-1);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleClickAdd = () => {
    isAddProductUI(!addProductUI);
    console.log(addProductUI);
  };

  const handleDelete = () => {
    const newProducts = products.filter((_, i) => currentIndex !== i);
    setCurrentProduct(null);
    setProducts(newProducts);
    isConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setCurrentProduct(null);
    isConfirmModal(false);
  };

  const handelConfirmDelete = (index: Number) => {
    let productIndex: Number = index;
    setCurrentIndex(productIndex);
    products.map((products, i) => {
      if (productIndex === i) {
        setCurrentProduct(products);
        isConfirmModal(true);
      }
    });
  };

  const handleEditButton = (index: Number) => {
    let productIndex: Number = index;
    setCurrentIndex(productIndex);
    products.map((products, i) => {
      if (productIndex === i) {
        setCurrentProduct(products);
      }
    });
    isEditProductUI(!editProductUI);
    isAddProductUI(false);
  };

  const handleCancleEdit = () => {
    isEditProductUI(!editProductUI);
    setCurrentProduct(null);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    const newProduct = products.map((product, index) =>
      index === currentIndex ? updatedProduct : product
    );
    setProducts(newProduct);
    isEditProductUI(!editProductUI);
    setCurrentProduct(null);
  };

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
    isAddProductUI(!addProductUI);
  };

  const handleProductClick = () => {
    isProductInfoUI(!productInfoUI);
  };

  const showProductInfo = (index: Number) => {
    products.map((product, i) => {
      if (index === i) {
        setCurrentProduct(product);
        console.log(product);
      }
    });
    isProductInfoUI(!productInfoUI);
    isAddProductUI(false);
  };

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="product" id="product">
      <div className="container-fluid mt-4">
        <div className="row justify-content-between">
          <div className="col d-flex align-items-center position-relative">
            <h1
              style={{ marginLeft: "1rem" }}
              className="top-50 start-0 fw-bold">
              Products List
            </h1>
          </div>
          <div className="col d-flex align-items-center position-relative">
            <button
              onClick={() => {
                handleClickAdd();
              }}
              className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
              style={{ marginRight: "1rem" }}>
              Add Product{" "}
              <FontAwesomeIcon icon={faPlus} style={{ marginLeft: "0.5rem" }} />
            </button>
          </div>
        </div>
      </div>

      {addProductUI && (
        <AddEditProduct onSubmit={handleAddProduct} onCancel={handleClickAdd} />
      )}

      <div className="container-fluid text-center">
        <div className="row ">
          {products.map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6 my-3">
              <div className="card product-card h-100 ">
                <img
                  src={product.imageUrl}
                  onClick={() => {
                    showProductInfo(index);
                  }}
                  style={{
                    margin: "0.5rem",
                  }}
                  className="img-fluid rounded h-100"
                />
                <div className="card-body">
                  <h3>{product.name}</h3>
                  <p>Detail : {product.detail}</p>
                  <h5>Price : {numberWithCommas(product.price)} THB</h5>
                  <button
                    onClick={() => {
                      handleEditButton(index);
                    }}
                    className="btn btn-warning">
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => {
                      handelConfirmDelete(index);
                    }}
                    className="btn btn-danger">
                    Delete
                  </button>
                  {/*  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {confirmModal && currentProduct && (
        <ConfirmDelete
          handleDelete={handleDelete}
          onCancel={handleCancelDelete}>
          Product : {currentProduct.name}
        </ConfirmDelete>
      )}

      {productInfoUI && !editProductUI && currentProduct && (
        <ProductInfo
          handleProductClick={handleProductClick}
          productSend={currentProduct}
        />
      )}

      {editProductUI && currentProduct && (
        <AddEditProduct
          product={currentProduct}
          onSubmit={handleUpdateProduct}
          onCancel={handleCancleEdit}
        />
      )}
      {/*  */}
    </div>
  );
};
export default Product;
