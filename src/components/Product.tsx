import { useState } from "react";
import ProductInfo from "./ProductInfo";
import AddEditProduct from "./AddEditProduct";
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
  const [productUI, isProductUI] = useState(true);
  const [productInfoUI, isProductInfoUI] = useState(false);

  const [editIndex, setEditIndex] = useState<Number>(-1);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const handleClickAdd = () => {
    isAddProductUI(!addProductUI);
    console.log(addProductUI);
  };

  const handleDelete = (index: Number) => {
    const newProducts = products.filter((_, i) => index !== i);
    setProducts(newProducts);
  };

  const handleEditButton = (index: Number) => {
    let productIndex: Number = index;
    setEditIndex(productIndex);
    products.map((products, i) => {
      if (productIndex === i) {
        setCurrentProduct(products);
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

  const handleUpdateProduct = (updatedProduct: Product) => {
    const newProduct = products.map((product, index) =>
      index === editIndex ? updatedProduct : product
    );
    setProducts(newProduct);
    isEditProductUI(!editProductUI);
    isProductUI(!productUI);
    setCurrentProduct(null);
  };

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleProductClick = () => {
    isProductInfoUI(!productInfoUI);
    isProductUI(!productUI);
  };

  const showProductInfo = (index: Number) => {
    products.map((product, i) => {
      if (index === i) {
        setCurrentProduct(product);
        console.log(product);
      }
    });
    isProductInfoUI(!productInfoUI);
    isProductUI(false);
    isAddProductUI(false);
  };
  return (
    <div className="product" id="product">
      <h1>All Products</h1>

      {addProductUI && (
        <AddEditProduct onSubmit={handleAddProduct} onCancel={handleClickAdd} />
      )}

      {!addProductUI && !productInfoUI && (
        <button
          onClick={() => {
            handleClickAdd();
          }}
          className="btn btn-dark"
        >
          Add Product
        </button>
      )}

      {productUI && (
        <div className="container-fluid text-center">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="card col-md-3 col-sm-6">
                <img
                  src={product.imageUrl}
                  onClick={() => {
                    showProductInfo(index);
                  }}
                />
                <div className="card-body">
                  <h2>{product.name}</h2>
                  <p>Detail : {product.detail}</p>
                  <h4>Price : {product.price}</h4>
                  <button
                    onClick={() => {
                      handleEditButton(index);
                    }}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>{" "}
                  <button
                    onClick={() => {
                      handleDelete(index);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  {/*  */}
                </div>
              </div>
            ))}
          </div>
        </div>
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
