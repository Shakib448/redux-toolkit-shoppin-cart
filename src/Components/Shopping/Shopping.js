import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productList } from "../../redux/slices/cartSlice";
import Cart from "../Cart/Cart";
import "./Shopping.sass";

const Shopping = () => {
  const { product, cart } = useSelector(productList);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [nitTax, setNitTax] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let tax = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
      tax = (price / 100).toFixed(0);
    });

    setTotalItems(items);
    setTotalPrice(price);
    setNitTax(tax);
  }, [
    cart,
    nitTax,
    setNitTax,
    totalPrice,
    totalItems,
    setTotalPrice,
    setTotalItems,
  ]);

  return (
    <section>
      <div className="container">
        <div className="cart">
          <div className="col-md-12 col-lg-10 mx-auto">
            {product.map((item) => (
              <Cart key={item.id} item={item} />
            ))}
            <div className="cart-item">
              <div className="row">
                <div className="col-md-8">
                  <h5>Subtotal: </h5>
                  <h5>Tax:</h5>
                  <h5>Total: {totalPrice} </h5>
                </div>

                <div className="col-md-4 status">
                  <h5 id="total-price">$ {totalPrice} </h5>
                  <h5 id="tax-amount">${nitTax}</h5>
                  <h5 id="grand-total">$1,278</h5>
                </div>
              </div>
            </div>
            <div className="col-md-12 pt-4 pb-4">
              <button type="button" className="btn btn-success check-out">
                Check Out {totalItems}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopping;
