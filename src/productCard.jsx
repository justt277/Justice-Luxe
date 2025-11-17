import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function ProductCard({product, AddToCart, cart}) {
    const {image, title, description, price} = product;
    const navigate = useNavigate();

    const handleBuy = () =>{
        navigate('/payment', { state:{ product}})
    }

      const inCart = cart.some((item) => item.id === product.id);
    return (
        <div className='card shadow-sm h-100 product-card'>
            <img src={image} className='card-img-top ' alt={title} style={{height: '180px', objectFit: 'cover'}}/>
            <div className='card-body text-center'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text text-muted'>{description}</p>
                <h6 className='text-success fw-bold'>{price}</h6>
                <button className="btn btn-success w-100 mb-2" onClick={handleBuy}>$Buy Now</button>{" "}
                <button className='btn btn-warning w-100' onClick={() => AddToCart(product)} disabled={inCart}>{inCart ? "Added" : "Add to Cart"}</button>
            </div>
        </div>
    )
}