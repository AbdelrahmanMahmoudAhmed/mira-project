<template>
  <div class="product">
    {
    <page-title />
    <div class="product-des">
      <h2>Awesome Collection 2019</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
    </div>
    <products-items />

    <pagination />
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import ProductsItems from "../components/ProductsItems.vue";
import Pagination from "../components/Pagination.vue";

export default {
  mounted() {
    this.$store.commit("pageNumber", "one");
    this.$store.commit("newPageTitle", "Products");
    window.scrollTo(0, 0);
  },
  components: {
    PageTitle,
    ProductsItems,
    Pagination,
  },
};
</script>

<style lang="scss">
.product {
  padding-bottom: 100px;
  .product-des {
    padding-bottom: 70px;
    width: 65%;
    text-align: center;
    margin: auto;
    h2 {
      font-size: 36px;
      margin-bottom: 20px;
      text-transform: capitalize;
      font-weight: 400;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 28px;
      color: #626262;
    }
    @media (max-width: 767px) {
      padding-bottom: 30px;
      h2 {
        font-size: 22px;
      }
    }
  }
}
</style>
