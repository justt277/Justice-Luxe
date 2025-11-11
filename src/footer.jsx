import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

import JUSTICEL from './assets/JUSTICEL.png'

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* Branding */}
          <div className="col-md-2 mb-4">
            <img src={JUSTICEL} alt="Justice Logo" className="mb-2" style={{ width: "120px" }} />
            <p className="small">Justice Apparel - Style that speaks.</p>
            <div className="d-flex gap-2 mt-2">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p className="mb-1">123 Fashion Street, Kigali, Rwanda</p>
            <p className="mb-1">Phone: +250 788 123 456</p>
            <p className="mb-1">Email: info@justiceapparel.com</p>
            <a href="https://goo.gl/maps/example" className="text-decoration-none text-light">View Map</a>
          </div>

          {/* Navigation Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-decoration-none text-light">Home</a></li>
              <li><a href="/about" className="text-decoration-none text-light">About</a></li>
              <li><a href="/services" className="text-decoration-none text-light">Services</a></li>
              <li><a href="/contact" className="text-decoration-none text-light">Contact</a></li>
              <li><a href="/faq" className="text-decoration-none text-light">FAQs</a></li>
              <li><a href="/careers" className="text-decoration-none text-light">Careers</a></li>
              <li><a href="/blog" className="text-decoration-none text-light">Blog</a></li>
              <li><a href="/support" className="text-decoration-none text-light">Support</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-md-3 mb-4">
            <h5>Subscribe</h5>
            <p className="small">Get our latest news and offers.</p>
            <form className="d-flex mb-3">
              <input type="email" placeholder="Your email" className="form-control me-4" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            
            {/* Miscellaneous */}
            <p className="small mb-1">Awards: Best Fashion 2024</p>
            <p className="small mb-1">Payment Methods: Visa, Mastercard, PayPal</p>
            <p className="small">Language: <select className="form-select form-select-sm d-inline w-auto"><option>EN</option><option>FR</option></select></p>
          </div>

        </div>

        {/* Legal Information */}
        <div className="border-top pt-3 mt-3 text-center small">
          <p className="mb-1">© 2025 Justice Luxe. All rights reserved.</p>
          <a href="/terms" className="text-decoration-none text-light me-3">Terms of Service</a>
          <a href="/privacy" className="text-decoration-none text-light me-3">Privacy Policy</a>
          <a href="/cookies" className="text-decoration-none text-light">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
