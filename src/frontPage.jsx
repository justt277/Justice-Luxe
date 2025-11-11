import React from "react";
import { Link } from "react-router-dom";
import './frontPage.css';
import JUSTICEL from './assets/JUSTICEL.png';
import Footer from "./footer";

export default function FrontPage() {
    return (
        <div className="page-container">
            <img src={JUSTICEL} alt="background" className="bg-img" />

            <div className="content-wrapper">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow">
                    <div className="container-fluid">
                        <div className="ms-auto">
                            <Link to="/signin" className="btn btn-outline-warning me-2">Sign In</Link>
                            <Link to="/signup" className="btn btn-outline-warning me-2">Sign Up</Link>
                        </div>
                    </div>
                </nav>

                <h1 className="text-warning">
                    WELCOME TO <strong>JUSTICE LUXE</strong>
                </h1>
            </div>

            <Footer />
        </div>
    );
}
