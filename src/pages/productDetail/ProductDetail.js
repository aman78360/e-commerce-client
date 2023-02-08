import React from "react";
import "./ProductDetail.scss";
import dummyImage from "../../assets/naruto.jpeg";

function ProductDetail() {
	return (
		<div className="ProductDetail">
			<div className="container">
				<div className="product-layout">
					<div className="product-img center">
						<img src={dummyImage} alt="Product Image" />
					</div>
					<div className="product-info">
						<h1 className="heading">This is Title, Wall Poster</h1>
						<h3 className="price">₹ 500</h3>
						<p className="description">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Molestias porro, voluptas voluptatibus
							voluptatum at pariatur autem ad molestiae similique
							magni adipisci esse. Officia commodi magnam aliquam
							praesentium ab atque fuga.
						</p>

						<div className="cart-options">
							<div className="quantity-selector">
								<span className="button decrement">-</span>
								<span className="quantity">5</span>
								<span className="button increment">+</span>
							</div>
							<button className="button-primary add-to-cart">
								add to cart
							</button>
						</div>

						<div className="return-policy">
							<ul>
								<li>
									Discounted items are final and cannot be
									returned or exchanged
								</li>
								<li>
									Returned items must have tags still on and
									be returned in original packaging
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetail;
