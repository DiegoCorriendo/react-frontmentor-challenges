import React from "react";

import SVGCartIcon from "./assets/icon-cart.svg";
import DesktopDesign from "./assets/image-product-desktop.jpg";
import MobileDesign from "./assets/image-product-mobile.jpg";

import "./ProductPreviewCard.css";

const ProductPreviewCard = () => {
	return (
		<div className="product-preview-card">
			<img
				className="product-preview-card__image"
				src={window.innerWidth > 375 ? DesktopDesign : MobileDesign}
				alt="Product Sample"
			/>
			<div className="product-preview-card__content">
				<div className="product-preview-card__category">Perfume</div>
				<div className="product-preview-card__name">
					Gabrielle Essence Eau De Parfum
				</div>
				<div className="product-preview-card__description">
					A floral, solar and voluptuous interpretation composed by
					Olivier Polge, Perfumer-Creator for the House of CHANEL.
				</div>

				<div className="product-preview-card__price">
					<label className="product-preview-card__purchaseprice">
						$149.99
					</label>
					<label className="product-preview-card__oldprice">
						$169.99
					</label>
				</div>
				<button>
					<img src={SVGCartIcon} alt="Cart Icon" />
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductPreviewCard;
