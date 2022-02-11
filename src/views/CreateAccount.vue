<template>
  <page-title />
  <div class="account-sec">
    <h3>Create Account</h3>
    <p>Please Register using account detail bellow.</p>
    <form class="log-in-form">
      <input type="text" placeholder="Firest Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <div class="button-container">
        <input type="submit" value="create" @click.prevent="" />
      </div>
    </form>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  mounted() {
    this.$store.commit("newPageTitle", "create account");
    window.scrollTo(0, 0);
  },
  components: {
    PageTitle,
  },
};
</script>

<style></style>
