<template>
  <Header />
  <scroll-to-top />
  <Footer />
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

export default {
  components: {
    Header,
    Footer,
    ScrollToTop,
  },
  setup() {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
}
#app {
  font-family: "Karla", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(54, 54, 54);
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  font-family: Playfair Display, serif, serif;
}
.container {
  width: 90%;
  margin: 0 auto;
  @media (max-width: 991px) {
    width: 96%;
  }
}
</style>
