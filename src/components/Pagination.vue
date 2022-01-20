<template>
  <div class="pagination">
    <ul class="pagination-container">
      <li class="pagination-item" @click.stop="goBack">
        <font-awesome-icon
          class="pagination-icon"
          :icon="['fas', 'chevron-left']"
        />
      </li>
      <li class="pagination-item active" @click="beActive">1</li>
      <li class="pagination-item" @click="beActive">2</li>
      <li class="pagination-item" @click="beActive">3</li>
      <li class="pagination-item" @click.stop="goForward">
        <font-awesome-icon
          class="pagination-icon"
          :icon="['fas', 'chevron-right']"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let lis = document.getElementsByClassName("pagination-item");
    const findPage = () => {
      if (lis[1].classList.contains("active")) {
        store.commit("pageNumber", "one");
      } else if (lis[2].classList.contains("active")) {
        store.commit("pageNumber", "two");
      } else if (lis[3].classList.contains("active")) {
        store.commit("pageNumber", "three");
      }
    };
    const beActive = (e) => {
      Object.keys(lis).map((li) => {
        lis[li].classList.remove("active");
      });
      e.target.classList.add("active");
      if (lis[3].classList.contains("active")) {
        lis[0].style.visibility = "visible";
        lis[4].style.visibility = "hidden";
      } else if (lis[1].classList.contains("active")) {
        lis[0].style.visibility = "hidden";
        lis[4].style.visibility = "visible";
      } else {
        lis[4].style.visibility = "visible";
        lis[0].style.visibility = "visible";
      }
      findPage();
    };

    const goForward = (e) => {
      for (let i = 1; i <= lis.length; i++) {
        if (lis[i].classList.contains("active")) {
          lis[i].classList.remove("active");
          lis[0].style.visibility = "visible";

          lis[i].nextElementSibling.classList.add("active");
          if (lis[3].classList.contains("active")) {
            e.target.style.visibility = "hidden";
          }
          findPage();

          break;
        }
      }
    };
    const goBack = (e) => {
      for (let i = 1; i <= lis.length; i++) {
        if (lis[i].classList.contains("active")) {
          lis[i].classList.remove("active");
          lis[4].style.visibility = "visible";

          lis[i].previousElementSibling.classList.add("active");
          if (lis[1].classList.contains("active")) {
            e.target.style.visibility = "hidden";
          }
          findPage();

          break;
        }
      }
    };
    return {
      beActive,
      goForward,
      goBack,
    };
  },
};
</script>

<style lang="scss">
.pagination {
  visibility: visible;
  justify-content: center;
  margin-top: 50px;
  .pagination-container {
    display: flex;
    justify-content: center;
    .pagination-item {
      font-size: 14px;
      padding: 7px 15px;
      color: #333;
      border: 1px solid #ddd;
      cursor: pointer;
      margin: 1px;
      &:first-of-type {
        visibility: hidden;
      }
      &:hover {
        border-color: #333;
      }
      .pagination-icon {
        pointer-events: none;
      }
    }
    .pagination-item.active {
      border-color: #333;
    }
  }
}
</style>