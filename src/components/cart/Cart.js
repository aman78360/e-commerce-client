import React from "react";
import "./Cart.scss";
function Cart({ onClose }) {
	return (
		<div className="Cart">
			<div className="overlay" onClick={onClose}></div>
			<div className="cart-content">
				<button className="button-primary" onClick={onClose}>
					Close{" "}
				</button>
			</div>
		</div>
	);
}

export default Cart;
