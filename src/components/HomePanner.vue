<template>
  <div class="home-panner container">
    <button>
      <router-link to="/products"> view more </router-link>
    </button>
    <div class="panner">
      <div class="img">
        <router-link to="/products">
          <img src="../assets/imgs/Home2.jpg" alt="" />
        </router-link>
      </div>
      <router-link to="/products"> </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-panner {
  margin-bottom: 100px;
  button {
    background-color: #333;
    border: 1px solid #333;
    display: inline-block;
    transition: all 0.3s ease 0s;
    display: block;
    margin: 80px auto;
    cursor: pointer;
    a {
      color: #fff;
      text-transform: uppercase;
      width: 100%;
      height: 100%;
      padding: 10px 31px 9px;
      display: block;
    }
    &:hover {
      background-color: #fff;
      a {
        color: #333;
      }
    }
  }
  .panner {
    img {
      width: 100%;
      z-index: -1;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>