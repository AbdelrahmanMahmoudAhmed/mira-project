<template>
  <div>
    <div class="home container">
      <div class="intro">
        <img src="../assets/imgs/Home.jpg" alt="" />
        <div class="layer"></div>
        <div class="intro-content">
          <h2>Summer Collection 2022</h2>
          <h3>A Good Looking, Comfortable Traditional Collection</h3>
          <button>
            <router-link to="/products">Shop The Collection</router-link>
          </button>
        </div>
      </div>
    </div>
    <div class="middel-sec container">
      <h3>Featured Collections</h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
    </div>
    <products-items />
    <home-panner />
    <div class="middel-sec container">
      <h3>Latest News</h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
    </div>
    <blogs-show />
  </div>
</template>

<script>
import HomePanner from "../components/HomePanner.vue";
import ProductsItems from "../components/ProductsItems.vue";
import BlogsShow from "../components/BlogsShow.vue";

export default {
  name: "Home",
  components: { ProductsItems, HomePanner, BlogsShow },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style lang="scss">
.home {
  .intro {
    margin-top: 130px;
    position: relative;
    height: 100vh;
    text-align: center;
    padding-bottom: 100px;
    img {
      width: 100%;
      z-index: -1;
      height: 100%;
      object-fit: cover;
    }
    .layer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.37);
    }
    .intro-content {
      background-color: #fff;
      padding: 40px 120px 50px;
      z-index: 9;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: fit-content;
      h2 {
        color: #222;
        font-size: 50px;
        font-weight: 400;
        line-height: 1.3;
        text-transform: capitalize;
        @media (max-width: 767px) {
          font-size: 22px;
        }
      }
      h3 {
        margin: 20px 0 35px;
        text-transform: capitalize;
      }

      button {
        background-color: #222;
        border: 1px solid #333;
        display: inline-block;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
        cursor: pointer;
        a {
          color: #fff;
          font-size: 14px;
          padding: 14px 20px 13px;
          display: block;
        }
        &:hover {
          background-color: #fff;
          a {
            color: #333;
          }
        }
      }
    }
  }
}
.middel-sec {
  width: 65%;
  margin: 0 auto 48px;
  text-align: center;
  h3 {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 400;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #626262;
  }
  @media (max-width: 991px) {
    width: 85%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
}
</style>
