<template>
  <div class="about">
    <h1>This is an about page</h1>
    <PageTitle />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  mounted() {
    this.$store.commit("newPageTitle", "about");
    window.scrollTo(0, 0);
  },
  components: {
    PageTitle,
  },
};
</script>
<style lang="sass"></style>
