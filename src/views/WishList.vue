<template>
	<page-title />
	<div class="wish container">
		<h2>Please login your account</h2>
		<router-link to="/account">login</router-link>
	</div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

import { useStore } from "vuex";

import { onMounted } from "vue";

export default {
	components: { PageTitle },
	setup() {
		const store = useStore();
		onMounted(() => {
			store.commit("newPageTitle", "wishlist");
		});
		return {};
	},
};
</script>

<style lang="scss">
.wish {
	padding-bottom: 100px;
	h2 {
		margin-bottom: 20px;
		font-size: 35px;
		font-weight: 400;
	}
	a {
		outline: medium none;
		color: #464646;
	}
}
</style>
