<template>
  <div>
    <div class="blogs-show container" v-if="blogs">
      <div class="blog" v-for="(blog, i) in blogs" :key="i">
        <div class="img">
          <img :src="require(`@/assets/imgs/blogs/${blog.pic}`)" alt="" />
        </div>
        <div class="content">
          <span>{{ blog.date }} </span>
          <h5>
            <router-link :to="{ name: 'JustBlog', params: { id: blog.id } }">
              {{ blog.title }}
            </router-link>
          </h5>
          <router-link :to="{ name: 'JustBlog', params: { id: blog.id } }">
            see more</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const blogs = computed(() => store.getters.blogs);

    onMounted(() => {
      store.dispatch("getAllNews");
    });

    return {
      blogs,
    };
  },
};
</script>

<style lang="scss">
.blogs-show {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  padding-bottom: 70px;
  .blog {
    position: relative;
    height: fit-content;
    &:hover {
      .content {
        visibility: visible;
        opacity: 1;
      }
    }
    .img {
      img {
        width: 100%;
        z-index: 2;
      }
    }
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 30px;
      text-align: center;
      background-color: #fff;
      border: 1px solid rgba(221, 221, 221, 0.898);
      transition: all 0.3s ease 0s;
      visibility: hidden;
      opacity: 0;
      span {
        color: #222;
        font-size: 14px;
      }
      h5 {
        a {
          color: #222;
          font-size: 20px;
          &:hover {
            color: gray;
          }
        }
      }
      a {
        color: #222;
        font-size: 16px;
        font-weight: 400;
        text-transform: capitalize;
        transition: all 0.3s ease 0s;
        &:hover {
          transform: translateX(5px);
          color: gray;
        }
      }
    }
  }
}
</style>
