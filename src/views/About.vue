<template>
	<PageTitle />

	<div class="about container">
		<div class="sec-one">
			<div class="img">
				<img src="@/assets/imgs/about-us.jpg" alt="" />
			</div>
			<div class="sec-one-content">
				<h3>Welcome To Demo</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit in</p>
			</div>
		</div>
		<div class="sec-two">
			<div class="counter-container">
				<div class="counter-item">
					<span class="num"> {{ numOne }} </span>
					<span class="title">counter demo title</span>
				</div>
				<div class="counter-item">
					<span class="num"> {{ numTwo }} </span>
					<span class="title">counter demo title</span>
				</div>
				<div class="counter-item">
					<span class="num">{{ numThree }}</span>
					<span class="title">counter demo title</span>
				</div>
			</div>
			<div class="sec-two-content">
				<!-- <h3>What People Say?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. U enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dol in reprehenderit
          in
        </p> -->
			</div>
		</div>
		<div class="sec-three" v-if="members.length > 0">
			<div class="item" v-for="(member, i) in members" :key="i">
				<div class="img-holder">
					<div class="img">
						<img :src="require(`@/assets/imgs/team/${member.pic}`)" alt="" />
					</div>
					<div class="transition">
						<h5>{{ member.name }}</h5>
						<p>{{ member.role }}</p>
					</div>
				</div>
				<div class="content-holder">
					<p>{{ member.p }}</p>
					<div class="social-holder">
						<span class="sec-three-social">
							<font-awesome-icon class="about-social-i" :icon="['fab', 'facebook-f']" />
						</span>
						<span class="sec-three-social">
							<font-awesome-icon class="about-social-i" :icon="['fab', 'twitter']" />
						</span>
						<span class="sec-three-social">
							<font-awesome-icon class="about-social-i" :icon="['fab', 'google-plus-g']" />
						</span>
						<span class="sec-three-social">
							<font-awesome-icon class="about-social-i" :icon="['fab', 'linkedin-in']" />
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import { useStore } from "vuex";
import { ref, watchEffect, onUpdated, onMounted, computed } from "vue";

export default {
	components: {
		PageTitle,
	},
	setup() {
		const store = useStore();
		const numOne = ref(0);
		const numTwo = ref(0);
		const numThree = ref(0);
		const members = computed(() => store.state.allMembers);
		const scroll = ref(false);

		onMounted(() => {
			store.dispatch("getAllMembers");
			store.commit("newPageTitle", "about");
			// window.scrollTo(0, 0);
		});

		function timer(num, ref) {
			if (ref.value < num) {
				ref.value = ref.value + 1;
				console.log(ref.value);
			}
		}
		watchEffect(() => {
			if (scroll.value) {
				setInterval(function () {
					timer(20, numOne);
				}, 1500 / 20);
				setInterval(function () {
					timer(200, numTwo);
				}, 1500 / 200);
				setInterval(function () {
					timer(15, numThree);
				}, 1500 / 15);
			}
		});

		window.addEventListener("scroll", function () {
			if (window.scrollY > 500) {
				scroll.value = true;
			}
		});

		return {
			numOne,
			numTwo,
			numThree,
			members,
		};
	},
};
</script>
<style lang="scss">
.about {
	@media (min-width: 1200px) {
		width: 55%;
	}
	.sec-one {
		.img {
			width: 100%;
			margin: auto;
			img {
				width: 100%;
			}
			// @media (max-width: 1199px) {
			//   width: 100%;
			// }
			// @media (max-width: 991px) {
			//   width: 100%;
			// }
		}
		.sec-one-content {
			text-align: center;
			padding-top: 50px;

			h3 {
				font-size: 35px;
				margin-top: 0;
				font-style: normal;
				font-weight: 400;
				padding-bottom: 20px;
			}
			p {
				font-size: 14px;
				font-weight: 400;
				line-height: 24px;
				color: #626262;
				margin-bottom: 15px;
				width: 50%;
				margin: auto;
				@media (max-width: 1199px) {
					width: 85%;
				}
				@media (max-width: 991px) {
					width: 95%;
				}
			}
		}
	}
	.sec-two {
		margin-top: 100px;
		.counter-container {
			display: flex;
			justify-content: space-between;
			width: 65%;
			margin: auto;
			margin-bottom: 70px;

			.counter-item {
				display: flex;
				flex-direction: column;
				.num {
					font-family: "Playfair Display", serif;
					font-weight: 400;
					color: #363636;
					margin-top: 0;
					font-style: normal;
					font-weight: 400;
					margin: auto;
					margin-bottom: 10px;
					font-size: 45px;
				}
				.title {
					font-size: 18px;
					text-transform: capitalize;
				}
			}
		}
	}
	.sec-three {
		padding-bottom: 70px;
		display: flex;
		gap: 30px;

		@media (max-width: 767px) {
			flex-direction: column;
		}
		.item {
			&:hover {
				.img-holder .transition {
					bottom: 0;
				}
			}
			position: relative;
			.img-holder {
				position: relative;
				.img {
					img {
						width: 100%;
					}
				}

				.transition {
					transition: 0.3s;
					bottom: -120px;
					position: absolute;
					width: 100%;
					background-color: #000000a1;
					color: #fff;
					text-align: center;
					padding: 12px 0 0;
					z-index: 2;
					h5 {
						color: #fff;
						font-size: 25px;
						margin-bottom: 5px;
						text-transform: capitalize;
						font-weight: 400;
					}
					.content-holder {
						color: #fff;
						font-size: 15px;
						margin-bottom: 0;
					}
				}
			}

			.content-holder {
				position: relative;
				z-index: 3;
				background-color: #fff;
				padding: 20px 10px 27px;
				text-align: center;
				border-color: #ddd;
				border-style: solid;
				border-width: 0 1px 1px;
				padding: 20px 10px 27px;
				p {
					font-size: 14px;
					font-weight: 400;
					line-height: 24px;
					color: #626262;
					margin-bottom: 15px;
				}
				.social-holder {
					.sec-three-social {
						border: 1px solid #ddd;
						color: #626262;
						display: inline-block;
						height: 30px;
						line-height: 30px;
						margin: 0 5px;
						width: 30px;
						transition: all 0.3s ease 0s;
						background-color: transparent;
						cursor: pointer;
						&:hover {
							color: #fff;
							background-color: #626262;
						}
					}
				}
			}
		}
	}
}
</style>
