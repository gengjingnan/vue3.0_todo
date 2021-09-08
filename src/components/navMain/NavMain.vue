<template>
  <div v-if="list.length">
    <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button class="btn" @click="del(item,index)">删除</button>
    </div>
  </div>
  </div>
  <div v-else>
    暂无数据
  </div>
</template>

<script>
import { defineComponent, ref ,watchEffect} from 'vue';
import {useStore} from 'vuex'
export default defineComponent({
  name: 'NavMain',
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  setup(props, ctx) {
    let store=useStore()
    let del = (item,index) => {
      // console.log(item);
      store.commit('delTodo',index)
    };
    return {
      del,
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  font-size: 30px;
}
.item {
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 30px;
  input {
    height: 30px;
    width: 30px;
    margin: 0 10px;
  }
  .btn {
    height: 40px;
    width: 70px;
    margin-left: 40px;
    display: none;
    z-index: 99;
    font-size: 14px;
    font-weight: 600;
  }
  &:hover {
    background: #ddd;
    .btn {
      display: inline-block;
    }
  }
}
</style>
