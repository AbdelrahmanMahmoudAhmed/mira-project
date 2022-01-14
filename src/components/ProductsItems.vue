<template>
  <div class="products container">
    <div class="products-container">
      <div
        v-for="(product, i) in onePageOfProuducts"
        :key="i"
        :class="'num' + i + '  product'"
        :style="{
          backgroundImage: `url(${require(`@/assets/imgs/${product.img}`)})`,
        }"
      >
        <div class="product-link">
          <router-link
            :to="{ name: 'JustProduct', params: { id: product.id } }"
          ></router-link>
        </div>
        <span class="product-sale" v-if="product.sale">sale!</span>
        <div class="products-container-content">
          <div class="content-right">
            <h5>{{ product.productTitle }}</h5>
            <div class="price-holder">
              <span class="current-price">${{ product.currentPrice }} </span>
              <span class="old-price" v-if="product.oldPrice"
                >${{ product.oldPrice }}
              </span>
            </div>
          </div>
          <div class="product-cart">
            <font-awesome-icon
              class="product-cart"
              :icon="['fas', 'cart-arrow-down']"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    onePageOfProuducts() {
      return this.$store.getters.products;
    },
  },

  mounted() {
    this.$store.dispatch("getAllProducts");
  },
};
</script>

<style lang="scss">
.products-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 5px;

  .product {
    height: 250px;
    text-align: center;
    background-size: cover;
    background-position-y: center;
    position: relative;

    &:hover {
      .products-container-content .product-cart {
        opacity: 1;
      }
    }
    .product-link {
      position: absolute;
      width: 100%;
      height: 100%;
      a {
        display: block;
        height: 100%;
        width: 100%;
        z-index: -1;
      }
    }
    .product-sale {
      background-color: #333;
      color: #fff;
      border-radius: 3px;
      text-transform: capitalize;
      position: absolute;
      top: 10px;
      left: 10px;
      padding: 2px 8px;
    }
    .products-container-content {
      position: absolute;
      bottom: 10px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      width: 100%;
      z-index: 9;
      .content-right {
        width: 80%;
        text-align: left;
        h5 {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #333;
          cursor: pointer;
          &:hover {
            margin-left: 5px;
          }
        }
        .price-holder {
          span {
            margin-right: 10px;
          }
          .old-price {
            text-decoration: line-through;
          }
        }
      }
      .product-cart {
        margin-top: 5px;
        opacity: 0;
        cursor: pointer;
        transition: 0.3s;
        font-size: 22px;

        &:hover {
          color: gray;
        }
      }
    }
  }
  @media (min-width: 768px) {
    .num2,
    .num3,
    .num7 {
      grid-column: span 2;
      grid-row: span 2;
      height: 505px;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    .num10 {
      grid-column: span 2;
      grid-row: span 2;
    }
  }
  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    gap: 30px;
    .num10 {
      grid-column: span 1;
      grid-row: span 1;
    }
  }
}
</style>