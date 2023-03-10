import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import "./Categories.scss";

function Categories() {
	const navigate = useNavigate();
	const params = useParams();
	const [categoryId, setCategoryId] = useState("");

	const categoryList = [
		{
			id: "comics",
			value: "Comics",
		},
		{
			id: "tv-shows",
			value: "TV-Shows",
		},
		{
			id: "sports",
			value: "Sports",
		},
	];

	const updateCategory = (e) => {
		navigate(`/category/${e.target.value}`);
	};

	useEffect(() => {
		setCategoryId(params.categoryId);
		//api call
	}, [params]);

	return (
		<div className="Categories">
			<div className="container">
				<div className="header">
					<div className="info">
						<h2>Explore All Print and Artwork</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolore est dignissimos totam a quaerat
							mollitia eveniet voluptatibus neque fuga blanditiis!
						</p>
					</div>
					<div className="sort-by">
						<div className="sort-by-container">
							<h3 className="sort-by-text">Sort By</h3>
							<select
								className="sort-by-select"
								name="sort-by"
								id="sort-by"
							>
								<option value="relevance">Relevance</option>
								<option value="newest-first">
									Newest First
								</option>
								<option value="price lth">
									Price-Low To High
								</option>
							</select>
						</div>
					</div>
				</div>

				<div className="content">
					<div className="filter-box">
						<div className="category-filter">
							<h3>Category</h3>
							{categoryList.map((item) => (
								<div key={item.id} className="filter-radio">
									<input
										name="category"
										type="radio"
										id={item.id}
										value={item.id}
										onChange={updateCategory}
										checked={item.id === categoryId}
									/>
									<label htmlFor={item.id}>
										{item.value}
									</label>
								</div>
							))}
						</div>
					</div>
					<div className="products-box">
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
						<Product />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Categories;
