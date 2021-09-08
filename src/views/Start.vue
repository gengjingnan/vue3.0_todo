<template>
  <div class="about">
    <button @click="start">开始任务</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
// useRoute() 接受到的是参数 
// useRouter()路由组件
// import router from "../router/index.js";
export default defineComponent({
  name:'Start',
  setup(props) {
    let router = useRouter();
    // console.log(router);
    let start = () => {
      router.push({
        path: '/home',
        query:{
          name:'Jack'
        }
      });
    };
    return {
      start
    };
  },
});
</script>

<style>
</style>
