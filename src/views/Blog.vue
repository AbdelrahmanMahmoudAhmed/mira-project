<template>
  <PageTitle />
  <div class="container">
    <div class="blogs" v-if="blogs">
      <div class="blog" v-for="(blog, i) in blogs" :key="i">
        <div class="blog-img">
          <router-link :to="{ name: 'JustBlog', params: { id: blog.id } }">
            <img :src="require(`@/assets/imgs/blogs/${blog.pic}`)" alt="" />
          </router-link>
        </div>
        <div class="blog-content">
          <span> {{ blog.date }} </span>
          <h3>
            <router-link :to="{ name: 'JustBlog', params: { id: blog.id } }">{{
              blog.title
            }}</router-link>
          </h3>
          <p>{{ blog.brief }}</p>
        </div>
      </div>
    </div>
  </div>
  <Pagination />
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import Pagination from "../components/Pagination.vue";
import { computed, onMounted } from "vue";

import { useStore } from "vuex";

export default {
  components: {
    PageTitle,
    Pagination,
  },
  computed: {},
  setup() {
    const store = useStore();
    const blogs = computed(() => store.getters.blogs);

    onMounted(() => {
      store.dispatch("getAllNews");
      store.commit("newPageTitle", "news");
      window.scrollTo(0, 0);
    });
    return {
      blogs,
    };
  },
};
</script>

<style lang="scss">
.blogs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
  .blog {
    img {
      max-width: 100%;
    }
    .blog-content {
      padding: 20px 115px 0;
      text-align: center;
      @media (max-width: 767px) {
        padding: 20px 15px 0;
      }
      span {
        font-size: 16px;
      }
      h3 {
        a {
          font-size: 25px;
          color: #363636;
        }
      }
      p {
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        color: #626262;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
