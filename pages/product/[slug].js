"use client";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { data } from "@/utils/data";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
  // inicializar el estado
  const { state, dispatch } = useContext(Store);

  const router = useRouter();

  const { query } = useRouter();
  const { slug } = query;

  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>product not found</div>;
  }

  // funcion para agregar al carrito
  // donde enviamos a guardar en nuestra variable de estado global
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Product is out of stock");
      return;
    }

    dispatch({ type: "CARD_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };

  return (
    <div>
      <Layout title={"product screen"}>
        <h2 className="text-center mt-5 mb-5">Barkery - Product</h2>
        <div className="container">
          <button
            className="btn btn-secondary mb-4"
            onClick={() => router.push("/")}
          >
            Back to Store
          </button>
          <div className="card mb-3 maximo-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-title">Price: {product.price}$</p>
                  <p className="card-title">Category: {product.category}</p>
                  <p className="card-title">Rating: {product.rating}</p>
                  <p className="card-text">
                    Description: <br /> <br />
                    {product.description}
                  </p>
                  <p>{product.countInStock > 0 ? "In stock" : "Unavailable"}</p>
                  <button
                    className="btn btn-primary"
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
