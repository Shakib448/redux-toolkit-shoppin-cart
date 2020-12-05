import React from "react";
import { useSelector } from "react-redux";
import { productList } from "../../redux/slices/cartSlice";
import Cart from "../Cart/Cart";
import "./Shopping.sass";

const Shopping = () => {
  const { product } = useSelector(productList);

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
                  <h5>Total:</h5>
                </div>

                <div className="col-md-4 status">
                  <h5 id="total-price">$1,278</h5>
                  <h5 id="tax-amount">$0</h5>
                  <h5 id="grand-total">$1,278</h5>
                </div>
              </div>
            </div>
            <div className="col-md-12 pt-4 pb-4">
              <button type="button" className="btn btn-success check-out">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shopping;
