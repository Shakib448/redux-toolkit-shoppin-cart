import React from "react";
import "./Shopping.sass";
import product1 from "../../images/product-1.png";
import product2 from "../../images/product-2.png";
import remove from "../../images/remove.png";

const Shopping = () => {
  return (
    <section>
      <div class="container">
        <div class="cart">
          <div class="col-md-12 col-lg-10 mx-auto">
            <div class="cart-item">
              <div class="row">
                <div class="col-md-7 center-item">
                  <img src={product1} alt="" />
                  <h5>iPhone 11 128GB Black</h5>
                </div>

                <div class="col-md-5 center-item">
                  <div class="input-group number-spinner">
                    <button class="btn btn-default">
                      <i class="fas fa-minus"></i>
                    </button>
                    <input
                      id="phone-count"
                      type="text"
                      class="form-control text-center"
                      value="1"
                    />
                    <button class="btn btn-default">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <h5>
                    $ <span id="phone-total">1219</span>
                  </h5>
                  <img src={remove} alt="" class="remove-item" />
                </div>
              </div>
            </div>

            <div class="cart-item">
              <div class="row">
                <div class="col-md-7 center-item mx-auto">
                  <img src={product2} alt="" />
                  <h5>iPhone 11 Silicone Case - Black</h5>
                </div>
                <div class="col-md-5 center-item">
                  <div class="input-group number-spinner">
                    <button class="btn btn-default">
                      <i class="fas fa-minus"></i>
                    </button>
                    <input
                      id="case-count"
                      type="text"
                      class="form-control text-center"
                      value="1"
                    />
                    <button class="btn btn-default">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <h5>
                    $ <span id="case-total">59</span>{" "}
                  </h5>
                  <img src={remove} alt="" class="remove-item" />
                </div>
              </div>
            </div>

            <div class="cart-item">
              <div class="row">
                <div class="col-md-8">
                  <h5>Subtotal: </h5>
                  <h5>Tax:</h5>
                  <h5>Total:</h5>
                </div>

                <div class="col-md-4 status">
                  <h5 id="total-price">$1,278</h5>
                  <h5 id="tax-amount">$0</h5>
                  <h5 id="grand-total">$1,278</h5>
                </div>
              </div>
            </div>
            <div class="col-md-12 pt-4 pb-4">
              <button type="button" class="btn btn-success check-out">
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
