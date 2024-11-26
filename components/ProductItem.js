import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }) {
  return (
    <div className="col">
      <div className=" bg-blue-500">
        <Image
          src={product.image}
          alt=""
          className=" border-lime-100 p-5"
          width={700}
          height={900}
        />
        <div className="card-body">
          <h5 className="flex justify-center items-center text-yellow-400 font-bold">
            {product.name}
          </h5>
          <p className="flex justify-center items-center text-blue-800 font-bold">
            {product.category}
          </p>
          <p className="flex justify-center items-center text-white font-bold">
            ${product.price}
          </p>
          <Link
            href={`/product/${product.slug}`}
            className="flex justify-around p-2"
          >
            <button className="rounded-xl text-blue-600 bg-yellow-400 font-bold p-2">
              COMPRAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
