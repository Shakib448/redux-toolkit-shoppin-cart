import React, { useEffect, useState } from "react";
import img from "../../images/remove.png";
import { useDispatch, useSelector } from "react-redux";
import {
  quantity,
  add,
  productList,
  remove,
} from "../../redux/slices/cartSlice";

const Cart = ({ item }) => {
  const [count, setCount] = useState(1);
  const { cart } = useSelector(productList);

  const dispatch = useDispatch();

  const findIndex = cart.find((items) => items.id === item.id);

  useEffect(() => {
    dispatch(quantity({ id: item.id, qty: count, uPrice: item.price }));
  }, [dispatch, count, item.id, item.price]);

  return (
    <div className="cart-item">
      <div className="row">
        <div className="col-md-7 center-item">
          <img src={item.img} alt="" />
          <h5>{item.name}</h5>
        </div>

        <div className="col-md-5 center-item">
          {!findIndex ? (
            <button
              onClick={() => dispatch(add({ ...item }))}
              className="addCart__btn"
            >
              {item.price}
            </button>
          ) : (
            <>
              <div className="input-group number-spinner">
                <button
                  onClick={() => setCount(count - 1)}
                  className={`${
                    count === 1 ? "danger btn btn-default" : "btn btn-default"
                  }`}
                  disabled={count === 1 && true}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <input
                  min="1"
                  id="phone-count"
                  type="text"
                  className="form-control text-center"
                  name="qty"
                  value={count}
                  readOnly
                />
                <button
                  onClick={() => setCount(count + 1)}
                  className="btn btn-default"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>

              <h5>
                $ <span id="phone-total">{item.price * count}</span>
              </h5>
              <img
                onClick={() => dispatch(remove(item.id))}
                style={{ cursor: "pointer" }}
                src={img}
                alt=""
                className="remove-item"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
