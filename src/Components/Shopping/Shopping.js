import React from "react";
import "./Shopping.sass";
import remove from "../../images/remove.png";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/slices/cartSlice";

const Shopping = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(productList);

  return (
    <section>
      <div className="container">
        <div className="cart">
          <div className="col-md-12 col-lg-10 mx-auto">
            {product.map(({ id, name, img, price }) => (
              <div key={id} className="cart-item">
                <div className="row">
                  <div className="col-md-7 center-item">
                    <img src={img} alt="" />
                    <h5>{name}</h5>
                  </div>

                  <div className="col-md-5 center-item">
                    <div className="input-group number-spinner">
                      <button className="btn btn-default">
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        id="phone-count"
                        type="text"
                        className="form-control text-center"
                        value="1"
                      />
                      <button className="btn btn-default">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <h5>
                      $ <span id="phone-total">{price}</span>
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
