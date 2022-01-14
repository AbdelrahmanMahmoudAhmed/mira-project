<template>
  <PageTitle />

  <div v-if="toggle">
    <login @togglee="toggleComponent" />
  </div>
  <div v-else>
    <rest-password @togglee="toggleComponent" />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import PageTitle from "../components/PageTitle.vue";
import RestPassword from "../components/RestPassword.vue";
import { ref } from "vue";

export default {
  mounted() {
    this.$store.commit("newPageTitle", "account");
    window.scrollTo(0, 0);
  },

  components: {
    PageTitle,
    Login,
    RestPassword,
  },

  setup() {
    const toggle = ref(true);
    const toggleComponent = () => {
      toggle.value = !toggle.value;
      console.log(toggle.value);
    };

    return {
      toggle,
      toggleComponent,
    };
  },
};
</script>

<style lang="scss"></style>
