<template>
	<PageTitle />

	<div class="contact container">
		<div class="contact-holder">
			<div class="form-contact">
				<input type="text" class="text-form" placeholder="Your name here" />
				<input type="email" class="email-form" placeholder="Your email here" />
				<textarea class="textaria-form" placeholder="Message"></textarea>
				<input type="submit" class="submit-form" />
			</div>
			<ul class="contact-ul" v-if="data.length">
				<li v-for="(item, i) in data" :key="i">
					<div class="li-icon"><font-awesome-icon class="about-social-i" :icon="['fa', item.logo]" /></div>
					<div class="li-content">
						<h4 class="item-title">{{ item.title }}</h4>
						<span class="item-ans">{{ item.content }}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
	mounted() {
		this.$store.commit("newPageTitle", "contact");
		window.scrollTo(0, 0);
	},
	components: {
		PageTitle,
	},
	setup() {
		const data = [
			{
				title: "Address:",
				content: "Your address goes here, demo address here",
				logo: "house",
			},
			{
				title: "Phone:",
				content: "0123 456 789 - 15 2368 4597",
				logo: "phone",
			},
			{
				title: "Fax:",
				content: "0123 456 789 - 15 2368 4597",
				logo: "fax",
			},
			{
				title: "Email:",
				content: "info@example.com",
				logo: "envelope-open-text",
			},
		];

		return {
			data,
		};
	},
};
</script>

<style lang="scss">
.contact-holder {
	display: flex;
	justify-content: space-between;
	padding-bottom: 100px;
	.form-contact {
		display: flex;
		flex-direction: column;
		width: 57%;
		background-color: #f6f6f6;
		padding: 30px;
		> input,
		> textarea {
			background-color: #fff;
			border: medium none;
			color: #aaa;
			font-size: 14px;
			font-weight: 400;
			margin-bottom: 24px;
			padding: 16px 20px;
			width: 100%;
			outline: none;
			&::placeholder {
				color: #aaa;
			}
		}
		> input[type="submit"] {
			background-color: #333;
			color: #fff;
			cursor: pointer;
			transition: all 0.3s ease 0s;
			&:hover {
				background-color: #666;
			}
		}
		> textarea {
			resize: vertical;
			height: 114px;
		}
	}
	.contact-ul {
		display: flex;
		flex-direction: column;
		width: 40%;
		background-color: #f6f6f6;
		padding: 30px 0;
		> li {
			display: flex;
			justify-content: space-around;
			margin-bottom: 24px;
			.li-icon {
				border: 1px solid #666;
				border-radius: 50%;
				color: #666;
				font-size: 24px;
				height: 64px;
				line-height: 64px;
				text-align: center;
				width: 64px;
				display: inline-block;

				i {
				}
			}
			.li-content {
				width: 67%;
				.item-title {
					color: #222;
					font-size: 15px;
					font-weight: 400;
					margin-bottom: 10px;
					text-transform: capitalize;
				}
				.item-ans {
					color: #464646;
					font-size: 14px;
					font-weight: 400;
					text-transform: capitalize;
				}
			}
		}
	}
	@media (max-width: 992px) {
		flex-direction: column;

		.form-contact,
		.contact-ul {
			width: 100%;
			margin-bottom: 40px;
		}
	}
}
</style>
