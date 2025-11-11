import React from "react";
import './PageStyle.css';

function Balance(){
    return(
        <div className="balance-section">
            <h2 className="fw-bold mb-3 text-warning mt-4">💰 Your Balance</h2>
            <p className="lead text-info">Your current balance is <strong className="text-danger">$0.00</strong>.</p>
            <button className="btn btn-success btn-outline-warning mt-3 mt-4 ">Add Funds</button>| {""}
            <div>
                <button className="btn btn-success btn-outline-warning text-light ms-100">Deposit</button> {""}
                <button className="btn btn-success btn-outline-warning text-light ms-100">Withdraw</button>
            </div>
        </div>
    )
}

export default Balance;