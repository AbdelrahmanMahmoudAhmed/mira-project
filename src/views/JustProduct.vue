<template>
	<page-title />

	<div class="just-product container" v-if="this.justProduct">
		<div class="product-content">
			<div class="product-content-img">
				<div class="img-container">
					<img :src="productImg.img" />
				</div>
			</div>
			<div class="product-holder-content">
				<h3>{{ this.justProduct.productTitle }}</h3>
				<div class="product-price-container">
					<div class="price">
						<div class="current">$ {{ this.justProduct.currentPrice }}</div>
						<div class="old" v-if="this.justProduct.oldPrice">$ {{ this.justProduct.oldPrice }}</div>
					</div>
					<div class="review">
						<div class="stars"><font-awesome-icon class="star" :icon="['far', 'star']" /><font-awesome-icon class="star" :icon="['far', 'star']" /><font-awesome-icon class="star" :icon="['far', 'star']" /><font-awesome-icon class="star" :icon="['far', 'star']" /><font-awesome-icon class="star" :icon="['far', 'star']" /></div>
						<span> no reviews </span>
					</div>
				</div>
				<div class="quick-review">
					<h4>quick review</h4>
					<p>
						{{ this.justProduct.quickOverview }}
					</p>
				</div>
				<div class="product-var">
					<div v-if="this.justProduct.size.length > 1">
						<h5>size</h5>
						<div class="product-prop-holder">
							<div class="product-size" v-for="(size, i) in this.justProduct.size" :key="i" @click="addActive">
								{{ size }}
							</div>
						</div>
					</div>
				</div>
				<div v-if="this.justProduct.colors.length > 1">
					<div class="product-var">
						<h5>color</h5>
						<div class="product-prop-holder">
							<div class="product-color" v-for="(color, i) in this.justProduct.colors" :key="i" :style="{ backgroundColor: color }" @click="addActive">
								<font-awesome-icon class="product-color-i" :icon="['fas', 'check']" />
							</div>
						</div>
					</div>
				</div>
				<div v-if="this.justProduct.material.length > 1">
					<div class="product-var">
						<h5>material</h5>
						<div class="product-prop-holder">
							<div class="product-material" v-for="(material, i) in this.justProduct.material" :key="i" @click="addActive">
								{{ material }}
							</div>
						</div>
					</div>
				</div>
				<div class="to-cart-container">
					<div class="to-cart-counter">
						<div class="to-cart-counter-i" @click="this.counterDecrease">
							<font-awesome-icon :icon="['fas', 'chevron-left']" />
						</div>
						{{ this.counter }}
						<div class="to-cart-counter-i" @click="this.counterIncrease">
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</div>
					</div>
					<div class="to-cart-button">
						<button @click="this.sendMyProducts">add to cart</button>
					</div>
				</div>
				<div class="product-reactive">
					<div class="reactive-sec">
						<a href="">
							<font-awesome-icon :icon="['fas', 'envelope']" />
						</a>
					</div>
					<div class="reactive-sec">
						<a href="">
							<font-awesome-icon :icon="['fas', 'print']" />
						</a>
					</div>
					<div class="wish">
						<router-link to="/account">
							<font-awesome-icon :icon="['far', 'heart']" />
							<span>WISHLIST</span>
						</router-link>
					</div>
				</div>
				<div class="product-social">
					<span>share:</span>
					<ul class="social">
						<li>
							<a target="blank" href="https://www.facebook.com"><font-awesome-icon class="product-social-i" :icon="['fab', 'facebook-f']" /></a>
						</li>
						<li>
							<a target="blank" href="https://www.twitter.com"><font-awesome-icon class="product-social-i" :icon="['fab', 'twitter']" /></a>
						</li>
						<li>
							<a target="blank" href="https://www.instagram.com/"><font-awesome-icon class="product-social-i" :icon="['fab', 'instagram']" /></a>
						</li>
						<li>
							<a target="blank" href="https://www.pinterest.com/"><font-awesome-icon class="product-social-i" :icon="['fab', 'pinterest']" /></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="popup-holder">
		<div class="popup">
			<div class="close" @click="popupFadeOut">
				<font-awesome-icon class="action-icons" :icon="['fas', 'times']" />
			</div>
			<div class="message-holder">
				<font-awesome-icon class="action-icons" :icon="['far', 'check-square']" />
				<span>Added to cart successfully!</span>
			</div>
			<div class="popup-button">
				<button>
					<router-link to="/cart">view cart</router-link>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import axios from "axios";

export default {
	components: { PageTitle },
	props: ["id"],
	data: function () {
		return {
			justProduct: null,
			productDescription: {
				id: null,
				title: "",
				img: null,
				price: "",
				color: null,
				size: null,
				material: null,
				count: 1,
			},
			counter: 1,
		};
	},

	computed: {
		productImg() {
			return {
				...this.justProduct,
				img: this.justProduct.img && require(`@/assets/imgs/${this.justProduct.img}`),
			};
		},
	},
	methods: {
		addActive(e) {
			const elements = e.target.parentElement.children;
			Object.keys(elements).map((ele) => {
				elements[ele].classList.remove("active");
			});
			e.target.classList.add("active");
			if (e.target.classList.contains("product-color")) {
				this.productDescription.color = e.target.style.backgroundColor;
			}
			if (e.target.classList.contains("product-size")) {
				this.productDescription.size = e.target.innerHTML;
			}
			if (e.target.classList.contains("product-material")) {
				this.productDescription.material = e.target.innerHTML;
			}
		},
		popupFadeOut() {
			const close = document.querySelector(".popup-holder");
			close.style.display = "none";
			close.style.opacity = 0;
		},
		counterIncrease() {
			this.counter++;
			this.productDescription.count = this.counter;
		},
		counterDecrease() {
			if (this.counter > 1) {
				this.counter--;
				this.productDescription.count = this.counter;
			}
		},
		sendMyProducts() {
			const popUp = document.querySelector(".popup-holder");
			popUp.style.opacity = 1;
			popUp.style.display = "block";
			this.productDescription.id = Date.now();
			// must to create a new Obj because of avoid reference problem in ram while updating the "this.productDescription"
			this.$store.commit("myProducts", Object.assign({}, this.productDescription));
		},
	},

	async mounted() {
		await axios
			.get("https://api.npoint.io/849ad64074ed51aee6d0/products")
			.then((response) => {
				const product = response.data.filter((p) => p.id === parseInt(this.$route.params.id));
				this.justProduct = product[0];
				this.$store.commit("newPageTitle", this.justProduct.productTitle);
			})
			.catch((err) => {
				console.log("Call Failed!");
				console.log(err);
			});

		if (this.justProduct) {
			this.productDescription.title = this.justProduct.productTitle;
			this.productDescription.img = this.justProduct.img;
			this.productDescription.price = this.justProduct.currentPrice;
		}
		if (this.justProduct.colors.length > 1) {
			const colors = document.getElementsByClassName("product-color")[0];
			colors.classList.add("active");
			this.productDescription.color = colors.style.backgroundColor;
		}
		if (this.justProduct.size.length > 1) {
			const sizes = document.getElementsByClassName("product-size")[0];
			sizes.classList.add("active");
			this.productDescription.size = sizes.innerHTML;
		}
		if (this.justProduct.material.length > 1) {
			const materials = document.getElementsByClassName("product-material")[0];
			materials.classList.add("active");
			this.productDescription.material = materials.innerHTML;
		}
		window.scrollTo(0, 0);
	},
};
</script>

<style lang="scss">
.product-content {
	display: flex;
	gap: 50px;
	.product-content-img {
		width: 40%;
		img {
			width: 100%;
		}
	}
	.product-holder-content {
		width: 60%;
		padding: 0 20px;
		h3 {
			font-size: 40px;
			color: #565656;
			display: block;
			margin-bottom: 27px;
			text-transform: capitalize;
			line-height: 1;
			font-weight: 500;
		}
		.product-price-container {
			display: flex;
			justify-content: space-between;
			margin-bottom: 38px;
			.price .current {
				margin: 0 15px 0 0;
				display: inline-block;
				line-height: 18px;
				color: #7a7a7a;
				font-size: 20px;
				font-weight: 700;
			}
			.price .old {
				margin: 0 5px 0 0;
				display: inline-block;
				line-height: 18px;
				text-decoration: line-through;
				color: #999;
				font-size: 16px;
			}
		}
		.review {
			display: flex;
			justify-content: space-between;
			.stars {
				.star {
					color: rgb(255, 199, 65);
					margin-right: 10px;
				}
			}
			span {
				color: #b0b0b0;
				display: inline-block;
				font-weight: 400;
				font-style: normal;
				font-size: 14px;
				text-transform: capitalize;
			}
		}
		.quick-review {
			h4 {
				color: #333;
				display: block;
				font-size: 16px;
				line-height: 12px;
				margin-bottom: 15px;
				padding-bottom: 10px;
				position: relative;
				text-transform: uppercase;
				font-weight: 400;

				&::before {
					content: "";
					position: absolute;
					height: 1px;
					width: 30px;
					bottom: 0;
					left: 0;
					background-color: #7a7a7ac2;
				}
			}
			p {
				font-size: 15px;
				font-weight: 300;
				line-height: 24px;
				color: #626262;
				margin: 0 0 10px;
			}
		}
		.product-var {
			h5 {
				color: #5a5a5a;
				display: block;

				font-size: 16px;
				line-height: 13px;
				margin-bottom: 15px;
				padding-bottom: 10px;
				position: relative;
				&::before {
					content: "";
					position: absolute;
					height: 1px;
					width: 30px;
					bottom: 0;
					left: 0;
					background-color: #7a7a7ac2;
				}
			}
			.product-prop-holder {
				display: flex;
				margin-bottom: 35px;
				.product-size {
					background-color: #fff;
					border: 1px solid #3f3f3f;
					color: #3f3f3f;
					border-radius: 50%;
					width: 31px;
					height: 31px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 10px;
					cursor: pointer;
				}
				.product-size.active {
					background-color: #3f3f3f;
					color: #fff;
				}
				.product-color {
					background-color: #999;
					box-shadow: 1px 1px 1px #666;
					color: #3f3f3f;
					border-radius: 50%;
					width: 31px;
					height: 31px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 10px;
					cursor: pointer;
					.product-color-i {
						color: #eee;
						opacity: 0;
						pointer-events: none;
					}
				}
				.product-color.active {
					background-color: #3f3f3f;
					color: #fff;
					.product-color-i {
						opacity: 1;
					}
				}
				.product-material {
					color: #3f3f3f;
					width: 31px;
					height: 31px;
					display: flex;
					align-items: center;
					margin-right: 20px;
					cursor: pointer;
					display: flex;
					justify-content: center;
					align-content: center;
					&:hover {
						color: #222;
					}
				}
				.product-material.active {
					color: #222;
				}
			}
		}
		.to-cart-container {
			display: flex;
			.to-cart-counter {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				border: 1px solid #ddd;
				margin-bottom: 10px;
				margin-right: 22px;
				width: 100px;
				height: 40px;
				.to-cart-counter-i {
					cursor: pointer;
					padding: 5px;
					svg {
						font-size: 10px;
					}
				}
			}
			.to-cart-button {
				button {
					background-color: #414141;
					border: 1px solid #414141;
					color: #fff;
					display: block;
					font-size: 12px;
					font-weight: 400;
					height: 40px;
					letter-spacing: 0.5px;
					line-height: 24px;
					margin-bottom: 10px;
					padding: 6px 40px;
					text-align: center;
					text-transform: uppercase;
					transition: all 0.3s ease 0s;
					cursor: pointer;
					&:hover {
						color: #414141;
						background-color: #fff;
					}
				}
			}
		}
		.product-reactive {
			display: flex;
			height: 40px;
			margin: 20px 0;
			gap: 25px;
			.reactive-sec a svg {
				font-size: 22px;
				color: rgb(102, 102, 102);
				transition: all 0.3s ease 0s;
				&:hover {
					transform: translateY(-5px);
				}
			}
			.wish a {
				font-size: 18px;
				color: rgb(102, 102, 102);
				transition: all 0.3s ease 0s;
				display: flex;
				justify-content: center;
				&:hover {
					color: #333;
				}
				svg {
					margin-right: 7px;
				}
				span {
					font-size: 14px;
					margin-bottom: 2px;
				}
			}
		}
		.product-social {
			display: flex;
			gap: 20px;
			span {
				color: #666;
				font-size: 14px;
				text-transform: uppercase;
			}
			.social {
				display: flex;
				gap: 23px;
				.product-social-i {
					color: #9c9c9c;
					cursor: pointer;
					transition: all 0.3s ease 0s;

					&:hover {
						color: #3f3f3f;
					}
				}
			}
		}
	}
	@media (max-width: 767px) {
		flex-direction: column;
		.product-content-img {
			width: 100%;
		}
		.product-holder-content {
			width: 100%;
		}
	}
}
.popup-holder {
	position: fixed;
	background-color: rgba(51, 51, 51, 0.637);
	top: 0;
	left: 0;
	z-index: 99999;
	height: 100%;
	width: 100%;
	text-align: center;
	display: none;
	opacity: 0;

	.popup {
		margin-top: 30px;
		background: #f5f5f5;
		border: none;
		box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
		width: 300px;
		height: 166px;
		margin: 20px auto;
		position: relative;
		@media (max-width: 767px) {
			width: 95%;
			margin: 10px auto;
		}
		.close {
			border: 1px solid #ddd;
			height: 30px;
			line-height: 30px;
			position: absolute;
			right: 10px;
			top: 10px;
			transition: all 0.3s ease 0s;
			width: 30px;
			z-index: 99999999;
			cursor: pointer;
			&:hover {
				border-color: #222;
			}
			svg {
				font-size: 22px;
				top: 2px;
				position: relative;
				pointer-events: none;
			}
		}
		.message-holder {
			padding: 50px 30px 10px;
			svg {
				color: #333;
				font-size: 26px;
				position: relative;
				top: 5px;
				margin-right: 5px;
			}
			span {
				color: #444;
				margin-left: 5px;
			}
		}
		.popup-button {
			padding: 15px;
			button {
				background-color: #222;
				border: 1px solid #333;
				display: inline-block;
				padding: 10px 25px 10px;
				text-transform: uppercase;
				transition: 0.3s;
				a {
					font-size: 12px;

					color: #fff;
				}
				&:hover {
					background-color: #fff;
					a {
						color: #222;
					}
				}
			}
		}
	}
}
</style>
