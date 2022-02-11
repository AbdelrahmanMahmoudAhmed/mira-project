<template>
  <div class="scroll-to-top" @click="toTop" ref="scroll">
    <font-awesome-icon class="scroll-chev" :icon="['fas', 'chevron-up']" />
  </div>
</template>

<script>
import { ref  , onMounted } from "vue";
export default {
  setup() {
    const toTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const scroll = ref(null);
onMounted(()=>{
  window.addEventListener("scroll", function(){
    if (window.scrollY > 500) {
          scroll.value.style.opacity = 1;
        } else {
          scroll.value.style.opacity = 0;
        }
  })
})


    return {
      toTop,
      scroll,
    };
  },
};
</script>

<style lang="scss">
.scroll-to-top {
  opacity: 0;
  position: fixed;
  background: #666 none repeat scroll 0 0;
  bottom: 54px;
  color: #fff;
  font-size: 23px;
  height: 40px;
  line-height: 34px;
  right: 32px;
  text-align: center;
  width: 40px;
  transition: 0.3s;
  cursor: pointer;
  z-index: 9999;
  &:hover {
    background-color: #222;
  }
  svg {
    font-size: 14px;
  }
}
</style>
