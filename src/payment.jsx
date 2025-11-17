import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './payement.css'; 

export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};

    const [quantity, setQuantity] = useState(1);

    const price = Number(product?.price) || 0;

    if (!product) {
        return <p>No product selected. Go back to shop.</p>;
    }

    const handlePayment = () => {
        alert(`Payment successful for ${quantity} x ${product.title}! Total: $${price * quantity}`);
        navigate('/products'); 
    }

    return (
        <div className="payment-page">
            <div className="payment-container">
                <h2>Complete Payment</h2>
                <div className="payment-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <h4 className="product-title">{product.title}</h4>
                    <p className="product-description">{product.description}</p>
                    <h5 className="product-price">Price: ${price}</h5>

                    <div className="form-group">
                        <label>Quantity:</label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="form-control"
                 />
                </div>

                <h5 className="total">Total: ${price * quantity}</h5>

                <button className="btn-pay" onClick={handlePayment}>Pay Now</button>
                </div>
            </div>
        </div>
    );
}
