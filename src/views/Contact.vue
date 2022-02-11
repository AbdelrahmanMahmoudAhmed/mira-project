<template>
  contact
  <PageTitle />
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
};
</script>

<style lang="scss"></style>
