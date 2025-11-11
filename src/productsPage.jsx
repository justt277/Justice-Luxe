import React, { useState } from "react";
import ProductCard from "./productCard";
import Products from "./products";
import SignIn from "./signin";
import Balance from "./balance";
import Home from "./home";
import Cart from "./cart";
import Help from "./help";
import './productPage.css'

import image3 from './assets/image3.jpg'
import TimberlandUS from './assets/TimberlandUS.gif';
import About from "./about";
import Contact from "./contact";
import Slideshow from "./slideshow";
import justice from "./assets/justice.jpg"
import JUSTICEL from "./assets/JUSTICEL.png";
import Footer from "./footer";

function ProductsPage() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  function AddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function RemoveFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  const shoes = Products.filter((product) => product.category === "Shoes");
  const clothes = Products.filter((product) => product.category === "Clothes");
  const boots = Products.filter((product) => product.category === "Boots");


  let backgroundImage = null;
  if (page === "Boots") backgroundImage = TimberlandUS;
  else if(page ==="Clothes") backgroundImage = image3;

  return (
    <div
      className="d-flex flex-column min-vh-100 min-vw-100 bg-light"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: backgroundImage ? "transparent" : "#fffbfbff",
         
      }}
    >
      
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <span
            className="navbar-brand fw-bold text-light"
            style={{ cursor: "pointer" }}
            onClick={() => setPage("home")}
          >
           <img src={JUSTICEL} alt="logo"  className="logo"/>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {[
                "home",
                "Shoes",
                "Clothes",
                "Boots",
                "About",
                "Contact",
                "Cart",
                "Help",
                "Balance",
                "SignIn",
              ].map((item) => (
                <li key={item} className="nav-item">
                  <span
                    className={`nav-link ${
                      page === item ? "active text-warning" : "text-light"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setPage(item)}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1 container py-5">
        {page === "home" && (
          <div className="ho-section text-center text-light" >
            <Slideshow />
            <Home setPage={setPage} />
          </div>
        )}

        {page === "Shoes" && (
          <>
            <h2 className="text-center mb-4 text-dark fw-bold">
              👟 Shoes Collection
            </h2>
            <div className="row g-4 justify-content-center">
              {shoes.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <ProductCard {...p} product={p} AddToCart={AddToCart} cart={cart}/>
                </div>
              ))}
            </div>
          </>
        )}

        {page === "Clothes" && (
          <>
            <h2 className="text-center mb-4 text-light fw-bold">
              👕 Clothes Collection
            </h2>
            <div className="row g-4 justify-content-center">
              {clothes.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <ProductCard {...p} product={p} AddToCart={AddToCart} cart={cart}/>
                </div>
              ))}
            </div>
          </>
        )}

        {page === "Boots" && (
          <>
            <h2 className="text-center mb-4 text-light fw-bold">
              🥾 Boots Collection
            </h2>
            <div className="row g-4 justify-content-center">
              {boots.map((p) => (
                <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <ProductCard {...p} product={p} AddToCart={AddToCart} cart={cart} />
                </div>
              ))}
            </div>
          </>
        )}

        {page === "About" && <div className="text-center text-light">
          <About />
          </div>}
        {page === "Contact" && <div className="text-center text-light">
          <Contact />
          </div>}
        {page === "Help" && (
          <div className="text-center text-light">
            <Help />
          </div>
        )}
        {page === "Cart" && (
          <div className="text-center text-light">
            <Cart cart={cart} RemoveFromCart={RemoveFromCart}/>
          </div>
        )}
        {page === "Balance" && (
          <div className="text-center text-light">
            <Balance />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center text-light py-3 mt-auto">
        <p className="mb-0">
          <Footer />
          © {new Date().getFullYear()} MyStore. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default ProductsPage;
