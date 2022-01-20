<template>
  <div class="page-title">
    <h2>{{ $store.state.pageTitle }}</h2>
    <div class="page-title-content">
      <router-link to="/">HOME</router-link> /
      <span class="page-title-dir">{{ $store.state.pageTitle }} </span>
    </div>
  </div>
</template>

<script>
// import { useRoute, useStore } from "vue-router";
export default {
  setup() {},
};
</script>

<style lang="scss">
.page-title {
  width: 90%;
  margin: 130px auto 100px;
  background: #f6f6f6;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1199px) {
    width: 96%;
  }

  h2 {
    font-size: 30px;
    color: #464646;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-weight: 400;
  }
  a {
    color: #464646;
    font-size: 14px;
  }
  span {
    color: #464646;
    font-size: 14px;
    text-transform: capitalize;
  }
}
</style>