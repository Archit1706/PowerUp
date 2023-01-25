import React from 'react';
import { products } from './Products';
import Web from '../../assets/logo/Web.png';
import { Link } from 'react-router-dom';

const Store = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className='text-2xl font-bold tracking-wide'>Power Up Store</h2>
        <p className='text-xl font-semibold'>Our wide range of products.</p>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product) => {
              return (
                <Link className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer" key={product.id} to={`/store/${product.id}`}>
                  <div >
                    <a className="block relative md:h-48 lg:h-60 rounded overflow-hidden">
                      <img
                        alt={product.name}
                        className="object-fit w-full h-full block"
                        src={product.src}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category}
                      </h3>
                      <h3 className="text-gray-700 text-xl">
                        {product.name}
                      </h3>
                      <p className="mt-1 inline-flex text-center items-center gap-2">
                        <img src={Web} className="h-4 w-4" />{product.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>;

    </>
  )
}

export default Store