<template>
  <page-title />
  <div class="cart container">
    <div v-if="this.myProducts.length > 0">
      <div class="picked">
        <h2>shopping cart</h2>
        <table>
          <thead>
            <tr>
              <th>remove</th>
              <th>image</th>
              <th>product</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, i) in this.myProducts" :key="i">
              <td class="td-x">
                <font-awesome-icon
                  class="star"
                  :icon="['fas', 'times']"
                  @click="deleteProduct(product.id)"
                />
              </td>
              <td class="td-img">
                <router-link to="/products"
                  ><img :src="require(`@/assets/imgs/${product.img}`)" alt=""
                /></router-link>
              </td>
              <td class="td-details">
                <div>
                  <router-link to="/products">
                    <span>{{ product.title }}</span>
                    <span v-if="product.size">- {{ product.size }}</span>
                    <span v-if="product.color">/ {{ product.color }} </span>
                    <span v-if="product.material"
                      >/ {{ product.material }}
                    </span></router-link
                  >
                </div>
              </td>
              <td class="td-price">
                <span>$ {{ product.price }} </span>
              </td>
              <td class="td-quantity">
                <span> {{ product.count }} </span>
              </td>
              <td class="td-price the-total">
                $
                <span class="product-total"
                  >{{ (product.count * product.price).toFixed(2) }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="buttons-holder">
          <div class="buttons-l">
            <button><router-link to="/">continue shopping</router-link></button>
            <button @click="this.clearProducts">clear cart</button>
          </div>
          <div class="button-r">
            <button>update cart</button>
          </div>
        </div>
        <div class="last-cart-row">
          <div class="seller-holder">
            <h5>Special Instructions For Seller</h5>
            <textarea></textarea>
          </div>
          <div class="cart-coast">
            <h5>Cart Totals</h5>
            <div class="total-coast-holder">
              <div class="total-coast">
                <div>
                  <span>Subtotal</span>
                  <span>$ {{ this.totalPrice.toFixed(2) }}</span>
                </div>
                <div>
                  <span>total</span>
                  <span>$ {{ this.totalPrice.toFixed(2) }} </span>
                </div>
              </div>
              <div class="coast-button">
                <button>proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="empty-cart" v-else>
      <h2>Your cart is currently empty.</h2>
      <p>Continue browsing <router-link to="/products">here</router-link>.</p>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";

export default {
  data: function () {
    return {
      myProducts: [],
      totalPrice: 0,
    };
  },
  components: {
    PageTitle,
  },

  mounted() {
    this.$store.commit("newPageTitle", "YOUR SHOPPING CART");
    this.$store.dispatch("updateCartFromLocalStorage");
    this.myProducts = this.$store.state.myProducts;
    window.scrollTo(0, 0);
    const calcTotal = () => {
      this.totalPrice = this.myProducts.reduce((curr, acc) => {
        return curr + acc.price * acc.count;
      }, 0);
    
    };
          console.log( this.totalPrice);


    calcTotal() ;
   console.log(typeof this.totalPrice)
  },
  updated() {
    this.myProducts = this.$store.state.myProducts;
    console.log(localStorage.getItem("cart"))

  },
  methods: {
    deleteProduct(e) {
      this.$store.commit("deleteProduct", e);
      this.myProducts = this.$store.state.myProducts;
    },
    clearProducts() {
      this.$store.dispatch("clearProducts");
      this.myProducts = [];
    },
  },
};
</script>

<style lang="scss">
.empty-cart {
  padding: 100px 0;
  h2 {
    font-size: 35px;
    font-weight: 400;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #626262;
    margin-bottom: 15px;
    a {
      color: #464646;
    }
  }
}
.picked {
  padding: 100px 0;

  h2 {
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 25px;
  }
  table {
    background: #fff none repeat scroll 0 0;
    border-color: #e5e5e5;
    border-style: solid;
    border-width: 1px 0 0 1px;
    margin: 0 0 50px;
    text-align: center;
    width: 100%;
    border: none;
    border-collapse: collapse;
    max-width: 100%;
    @media (max-width: 576px) {
      overflow-x: scroll;
      display: block;
    }

    thead {
      background-color: #f6f6f6;
      th {
        color: #555;
        font-size: 16px;
        font-weight: 400;
        padding: 15px 10px 12px;
        text-align: center;
        text-transform: uppercase;
        vertical-align: middle;
        white-space: nowrap;
      }
    }
    tbody {
      td {
        padding: 20px 10px;
        max-width: 140px;
        img {
          max-width: 84px;
        }
      }
      .td-x {
        svg {
          color: #919191;
          display: inline-block;
          font-size: 20px;
          height: 18px;
          line-height: 40px;
          text-align: center;
          width: 40px;
          cursor: pointer;
          &:hover {
            color: #555;
          }
        }
      }
      .td-details {
        span {
          color: #6f6f6f;
          font-size: 15px;
          margin-left: 10px;
        }
      }
      .td-price {
        span {
          color: #555;
          font-size: 15px;
          width: 120px;
        }
      }
      .td-quantity {
        span {
          background: #e5e5e5 none repeat scroll 0 0;
          border: medium none;
          border-radius: 3px;
          color: #6f6f6f;
          font-size: 15px;
          font-weight: 400;
          height: 40px;
          padding: 0 5px;
          width: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
        }
      }
    }
  }
  .buttons-holder {
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column;
      gap: 40px;
    }

    .buttons-l {
      display: flex;
      gap: 10px;
    }
    button {
      background-color: #333;
      border: 0 none;
      border-radius: 2px;
      color: #fff;
      display: inline-block;
      font-size: 13px;
      font-weight: 700;
      height: 42px;
      letter-spacing: 1px;
      line-height: 42px;
      padding: 0 25px;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out 0s;
      width: inherit;
      cursor: pointer;
      a {
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 42px;
        text-transform: uppercase;
      }
    }
  }
  .last-cart-row {
    display: flex;
    gap: 15px;
    padding-top: 50px;
    .seller-holder {
      width: 55%;
      h5 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: capitalize;
      }
      textarea {
        height: 154px;
        width: 100%;
        border: 1px solid #ddd;
        outline: none;
      }
    }
    .cart-coast {
      width: 45%;
      h5 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: capitalize;
      }
      .total-coast-holder {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .total-coast {
          border: 1px solid #ddd;
          border-bottom: none;

          div {
            border-bottom: 1px solid #ddd;
            padding: 10px 30px;
            display: flex;
            justify-content: space-between;
            span {
              color: #555;
              font-size: 15px;
              font-weight: 700;
            }
          }
        }
        .coast-button {
          button {
            background-color: #333;
            border: 1px solid #333;
            color: #fff;
            display: inline-block;
            margin-top: 30px;
            padding: 9px 20px;
            text-transform: capitalize;
            transition: all 0.3s ease 0s;
            &:hover {
              color: #464646;
            }
          }
        }
      }
    }
    @media (max-width: 576px) {
      flex-direction: column;
      .seller-holder,
      .cart-coast {
        width: 100%;
      }
    }
  }
}
</style>
