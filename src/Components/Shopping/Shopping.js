import React, { useEffect, useState } from "react";
import "./Shopping.sass";
import remove from "../../images/remove.png";
import { useDispatch, useSelector } from "react-redux";
import {
  productList,
  addItemQuantity,
  add,
} from "../../redux/slices/cartSlice";

const Shopping = () => {
  const { product } = useSelector(productList);

  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addItemQuantity({ qty: count }));
  // }, [count]);
  return (
    <section>
      <div className="container">
        <div className="cart">
          <div className="col-md-12 col-lg-10 mx-auto">
            {product.map((pd) => (
              <div key={pd.id} className="cart-item">
                <div className="row">
                  <div className="col-md-7 center-item">
                    <img src={pd.img} alt="" />
                    <h5>{pd.name}</h5>
                  </div>

                  <div className="col-md-5 center-item">
                    <div className="input-group number-spinner">
                      <button
                        onClick={() => setCount(count - 1)}
                        className="btn btn-default"
                        disabled={count === 1 && true}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        id="phone-count"
                        type="number"
                        className="form-control text-center"
                        name="qty"
                        value={count}
                        readOnly
                      />
                      <button
                        onClick={() => dispatch(add(pd))}
                        className="btn btn-default"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>

                    <h5>
                      $ <span id="phone-total">{pd.price}</span>
                    </h5>
                    <img src={remove} alt="" className="remove-item" />
                  </div>
                </div>
              </div>
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
