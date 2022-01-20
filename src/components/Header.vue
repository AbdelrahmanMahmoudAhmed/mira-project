<template>
  <div class="header">
    <div class="logo">
      <img
        src="https://cdn.shopify.com/s/files/1/2213/2375/files/logo_medium.png?v=1500972950"
        alt=""
      />
    </div>
    <div class="nav">
      <router-link to="/">
        HOME
        <font-awesome-icon class="nav-chev" :icon="['fas', 'chevron-down']"
      /></router-link>
      <router-link to="/products"
        >SHOP
        <font-awesome-icon class="nav-chev" :icon="['fas', 'chevron-down']"
      /></router-link>
      <router-link to="/blog">BLOG</router-link>
      <router-link to="/about">ABOUT US</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
    <div class="headr-action">
      <span class="select">
        {{ option }}
        <font-awesome-icon class="option-chev" :icon="['fas', 'chevron-down']"
      /></span>
      <div class="options">
        <span @click="changeVal">USD</span>
        <span @click="changeVal">EUR</span>
        <span @click="changeVal">GBP</span>
        <span @click="changeVal">INR</span>
        <span @click="changeVal">BDT</span>
        <span @click="changeVal">JPY</span>
        <span @click="changeVal">CAD</span>
        <span @click="changeVal">AUD</span>
      </div>

      <font-awesome-icon class="action-icons" :icon="['fas', 'search']" />
      <font-awesome-icon class="action-icons" :icon="['far', 'user']" />
      <router-link to="/cart">
        <font-awesome-icon
          class="action-icons"
          :icon="['fas', 'cart-arrow-down']"
        />
      </router-link>
    </div>

    <div class="media-container" @click="toggleLinks">
      <span class="media-span-one for-c"></span>
      <span class="media-span-two for-c"></span>
      <span class="media-span-three for-c"></span>
      <font-awesome-icon class="close" :icon="['fas', 'times']" />
    </div>
    <div class="nav-toggle">
      <router-link to="/">
        HOME
        <font-awesome-icon class="nav-chev" :icon="['fas', 'chevron-down']"
      /></router-link>
      <router-link to="/products"
        >SHOP
        <font-awesome-icon class="nav-chev" :icon="['fas', 'chevron-down']"
      /></router-link>
      <router-link to="/blog">BLOG</router-link>
      <router-link to="/about">ABOUT US</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Header",
  props: {},

  setup() {
    const option = ref("USD");
    const links = ref(true);
    const changeVal = (e) => {
      option.value = e.target.innerHTML;
    };
    onMounted(() => {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 70) {
          document.querySelector(".header").classList.add("fixed");
        } else {
          document.querySelector(".header").classList.remove("fixed");
        }
      });

      const box = document.querySelector(".nav-toggle");

      window.addEventListener("click", function (e) {
        if (!links.value) {
          if (
            !e.target.closest(".nav-toggle") &&
            e.target != document.querySelector(".media-container") &&
            e.target != box
          ) {
            console.log(links.value);
            let allSpans = document.querySelectorAll("span.for-c");

            document.getElementsByClassName("nav-toggle")[0].style.visibility =
              "hidden";
            document.getElementsByClassName("nav-toggle")[0].style.opacity = 0;
            document.querySelector(".close").style.display = "none";

            for (let j = 0; j < allSpans.length; j++) {
              allSpans[j].style.display = "block";
            }

            links.value = true;
          }
        }
      });
    });

    const toggleLinks = () => {
      let allSpans = document.querySelectorAll("span.for-c");

      if (links.value) {
        document.getElementsByClassName("nav-toggle")[0].style.visibility =
          "visible";
        document.getElementsByClassName("nav-toggle")[0].style.opacity = 1;
        document.querySelector(".close").style.display = "block";

        for (let j = 0; j < allSpans.length; j++) {
          allSpans[j].style.display = "none";
        }

        links.value = false;
      } else {
        document.getElementsByClassName("nav-toggle")[0].style.visibility =
          "hidden";
        document.getElementsByClassName("nav-toggle")[0].style.opacity = 0;
        document.querySelector(".close").style.display = "none";

        for (let j = 0; j < allSpans.length; j++) {
          allSpans[j].style.display = "block";
        }

        links.value = true;
      }
    };

    return {
      option,
      changeVal,
      toggleLinks,
    };
  },
};
</script>

<style scoped lang="scss">
.header.fixed {
  height: 92px;
  // box-shadow: 0px 6px 16px 0px #eee;
  border-bottom: 1px solid #eee;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  height: 120px;
  z-index: 999;
  background-color: #fff;

  // border-bottom: 1px solid #f2f2f2;
  .logo {
    padding: 0 15px;
  }
  .nav {
    padding: 0 35px;
    margin: 8px;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    a {
      font-size: 12px;
      font-weight: 400;
      color: rgb(54, 54, 54);
      transition: 0.3s;
      &:hover {
        color: gray;
      }
    }
    .nav-chev {
      font-size: 6px;
      margin: 3px 0px 3px 9px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  .headr-action {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    position: relative;
    height: 100%;
    cursor: pointer;
    transition: 0.3s;

    .select {
      font-size: 12px;
      font-weight: 400;
      color: rgb(54, 54, 54);
      height: 100%;
      display: flex;
      align-items: center;
      &:hover {
        color: gray;
      }
      &:hover + .options {
        visibility: visible;
        opacity: 1;
      }
    }
    .option-chev {
      font-size: 6px;
      margin: 3px 0px 3px 9px;
    }
    .options {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 60px;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
      left: -10px;
      &:hover {
        visibility: visible;
        opacity: 1;
      }

      @media (max-width: 991px) {
        top: 80px;
        left: -20px;
      }

      &:hover {
        display: flex;
      }
      span {
        color: #fff;
        display: block;
        padding: 7px;
        text-transform: capitalize;
        background-color: #000;
        display: inline-block;
        font-size: 12px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        left: 12px;
        &:hover {
          color: gray;
        }
      }
      span:not(:last-of-type) {
        border-bottom: 1px solid gray;
      }
    }

    @media (max-width: 991px) {
      margin-left: auto;
      margin-right: 10px;
    }
    @media (max-width: 576px) {
      margin-left: auto;
      margin-right: 0px;
      width: 140px;
    }
  }
  .media-container {
    padding: 5px;
    border: 1px solid;
    cursor: pointer;
    display: none;
    margin: 0 15px;
    position: relative;
    height: 34px;
    width: 34px;

    span {
      display: block;
      background-color: #333;
      height: 3px;
      margin-top: 3px;
      width: 22px;
      pointer-events: none;
    }
    .media-span-three {
      margin-bottom: 3px;
    }
    .close {
      position: absolute;
      top: 2px;
      left: 8px;
      font-size: 26px;
      display: none;
    }

    @media (max-width: 991px) {
      display: block;
    }
  }

  .nav-toggle {
    position: absolute;
    width: 100%;
    top: 65px;
    left: -15px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 15px;
    padding: 15px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;

    a {
      font-size: 12px;
      font-weight: 400;
      color: #fff;
      transition: 0.3s;
      background-color: #000;
      border-bottom: 1px solid gray;
      padding: 1em 5%;
      transition: 0.3s;
      &:hover {
        background-color: #222;
      }
    }
    .nav-chev {
      color: #fff;
      font-size: 6px;
      margin: 3px 0px 3px 9px;
    }
  }

  @media (min-width: 992px) {
    padding: 30px 50px;
  }
}
</style>
