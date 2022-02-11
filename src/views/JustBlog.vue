<template>
	<page-title />

	<div class="just-blog container" v-if="blogDetails">
		<div class="just-blog-img">
			<img :src="require(`@/assets/imgs/blogs/${blogDetails.value.pic}`)" alt="" />
		</div>
		<div class="just-blog-content">
			<h3>{{ blogDetails.value.title }}</h3>
			<p>{{ blogDetails.value.articleOne }}</p>
			<div>
				<p class="quote">{{ blogDetails.value.middleP }}</p>
			</div>
			<p>{{ blogDetails.value.articleTwo }}</p>
		</div>
	</div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import axios from "axios";

export default {
	components: { PageTitle },
	setup() {
		const store = useStore();
		const route = useRoute();
		let blogDetails = ref(null);

		onMounted(async () => {
			await axios
				.get("https://api.npoint.io/849ad64074ed51aee6d0/news")
				.then((response) => {
					const blog = response.data.filter((b) => b.id === parseInt(route.params.id));
					blogDetails.value = ref(blog[0]);
					store.commit("newPageTitle", `news/ ${blog[0].title}`);
				})
				.catch((err) => {
					console.log("Call Failed!");
					console.log(err);
				});
			window.scrollTo(0, 0);
		});
		return {
			blogDetails,
		};
	},
};
</script>

<style lang="scss">
.just-blog {
	width: 804px;
	margin: auto;
	.just-blog-img {
		img {
			width: 100%;
		}
	}
	.just-blog-content {
		padding-top: 85px;
		margin-bottom: 85px;
		h3 {
			font-size: 29px;
			line-height: 45px;
			margin-bottom: 30px;
			text-transform: capitalize;
		}
		p {
			font-size: 15px;
			color: rgb(98, 98, 98);
			margin-bottom: 15px;
		}
		.quote {
			border-left: 3px solid #363636;
			color: #363636;
			font-size: 27px;
			margin: 35px 0;
			padding: 7px 20px 15px;
			font-family: Playfair Display, serif, serif;
			font-style: italic;
		}
	}
	@media (max-width: 991px) {
		width: 96%;
	}
}
</style>
