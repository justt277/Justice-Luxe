import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageStyle.css";

function Cart({ cart, RemoveFromCart }) {
  return (
    <div className="cart-section container py-5">
      <h1 className="text-center mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="d-flex flex-column align-items-center gap-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="card shadow-sm"
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <img src={item.image} alt={item.title} className="card-img-top" style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-success fw-bold">{item.price}</p>
                <button className="btn btn-success  btn-sm w-100">buy$</button>
                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => RemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
