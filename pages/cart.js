
import React, { useContext } from "react";
import Link from "next/link";

import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";

export default function Cart() {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeCartHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  // Funcion para actualizar el carrito
  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };

  // Función para calcular el total
  const getTotal = () => {
    return cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  };

  return (
    <Layout title={"Shopping Cart"}>
      <h2 className="text-center">Shopping Cart</h2>
      <div className="container">
        {cartItems.length === 0 ? (
          <div>
            Cart is empty. <Link href="/">Go shopping</Link>
          </div>
        ) : (
          <div>
            <table className="table-auto">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} width={150} height={150} alt="" />
                      &nbsp;
                      {item.name}
                    </td>

                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>

                    <td>{item.price}$</td>
                    <td>
                      <button
                        className="text-white text-xl bg-blue-600 rounded-xl"
                        onClick={() => removeCartHandler(item)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <div>
                Subtotal: ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                {getTotal()}
              </div>

              <div className="text-center mt-4">
                {/* Aquí agregamos el botón de Checkout */}
                <Link href="/checkout">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Verificacion de Compra
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
