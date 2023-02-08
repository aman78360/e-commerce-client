import React from "react";
import "./Product.scss";
import dummyImage from "../../assets/naruto.jpeg";
function Product() {
	return (
		<div className="Product">
			<div className="product-container">
				<div className="product-img">
					<div className="img-container">
						<img src={dummyImage} alt="" id="img" />
					</div>
				</div>
				<div className="product-info">
					<p className="title">Lorem ipsum dolor sit amet.</p>
					<p className="price">₹ 500</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
