import { createStore } from 'vuex'
import axios from "axios";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}
export default createStore({
  state: {
    start: 0,
    end: 11,
    PageTitle: "",
    allProducts: [],
    myProducts: [],
    allNews: [],
    startBlog: 0,
    endBlog: 4,
    tr: [],
    allMembers: [],
  },
  mutations: {
    myProducts(state, payload) {
      if (typeof payload != "number") {
        state.myProducts.push(payload)
      } else {
        console.log(payload)
      }
      updateLocalStorage(state.myProducts)
    },
    deleteProduct(state, payload) {

      const filter = state.myProducts.filter(product => {
        return product.id != payload;
      })
      state.myProducts = filter;
      updateLocalStorage(state.myProducts)
    },
    clearProducts(state) {
      state.myProducts = []
      updateLocalStorage(state.myProducts)

    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      // if (cart !== []) {
      state.myProducts = JSON.parse(cart)
      // }
      state.tr = JSON.parse(cart)
    },
    newPageTitle(state, payload) {
      state.pageTitle = payload
    },
    pageNumber(state, pageNumber) {
      if (pageNumber === "one") {
        state.start = 0;
        state.end = 11;
        state.startBlog = 0;
        state.endBlog = 4;
      } else if (pageNumber === "two") {
        state.start = 11;
        state.end = 22;
        state.startBlog = 4;
        state.endBlog = 8;
      } else if (pageNumber === "three") {
        state.start = 22;
        state.end = 35;
        state.startBlog = 8;
        state.endBlog = 12;
      }
    },


    SET_PRODUCTS(state, products) {
      state.allProducts = products
    },
    SET_NEWS(state, blogs) {
      state.allNews = blogs
    },
    SET_MEMBERS(state, members) {
      state.allMembers = members
    }
  },

  actions: {
    async getAllProducts({ commit }) {
      await axios.get('https://api.npoint.io/849ad64074ed51aee6d0/products')
        .then(response => {
          commit('SET_PRODUCTS', response.data)
        }).catch(err => {
          console.log('Call Failed!');
          console.log(err);
        });
    },
    async getAllNews({ commit }) {
      await axios.get('https://api.npoint.io/849ad64074ed51aee6d0/news')
        .then(response => {
          commit('SET_NEWS', response.data)
        }).catch(err => {
          console.log('Call Failed!');
          console.log(err);
        });
    },
    async getAllMembers({ commit }) {
      await axios.get('https://api.npoint.io/849ad64074ed51aee6d0/members')
        .then(response => {
          commit('SET_MEMBERS', response.data)
        }).catch(err => {
          console.log('Call Failed!');
          console.log(err);
        });
    },

    clearProducts({ commit }) {
      commit("clearProducts")
    },
    updateCartFromLocalStorage({ commit }) {
      commit("updateCartFromLocalStorage")
    }
  },
  getters: {
    products: state => {
      return state.allProducts.slice(state.start, state.end)
    },
    blogs: state => {
      return state.allNews.slice(state.startBlog, state.endBlog)
    },


  },
  modules: {
  }
})
