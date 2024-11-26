
import React, { useContext } from "react";
import { Store } from "@/utils/Store";
import Layout from "@/components/Layout";
import Link from "next/link";

export default function Checkout() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const getTotal = () => {
    return cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
  };

  return (
    <Layout title="Checkout">
      <h2 className="text-center">Verificacion de Compra</h2>
      <div className="container">
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty. <Link href="/cart">Go to Cart</Link>
          </div>
        ) : (
          <div>
            <h3>Resumen de Compra</h3>
            <table className="table-auto">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}$</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <div>
                Total: ${getTotal()}
              </div>
              <div className="mt-4">
                {/* Aquí puedes agregar la lógica para el pago */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Proceder al Pago
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
