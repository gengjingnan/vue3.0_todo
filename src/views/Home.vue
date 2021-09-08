<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list"></nav-main>
    <nav-footer :list="list"></nav-footer>
  </div>
  <!-- <div>{{num}}===={{obj}}===={{obj.name}}</div>
 <div>{{str}}===={{arr}}===={{arr[0]}}</div>
 <div>{{name}}===={{price}}</div> -->
</template>

<script>
import { defineComponent, ref, reactive, toRefs, computed, watchEffect } from 'vue';
import NavFooter from '@/components/navFooter/NavFooter.vue';
import NavHeader from '@/components/navHeader/NavHeader.vue';
import NavMain from '@/components/navMain/NavMain.vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Home',
  props: {},
  components: {
    NavHeader,
    NavFooter,
    NavMain,
  },
  setup(props, ctx) {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let add = (value) => {
      // console.log(value);
      let flag = list.value.some((item) => {
        return item.title === value;
      });
      if (flag) return alert('该事项已存在,请重新输入');
      // console.log(flag);
      store.commit('addTodo', {
        title: value,
        complete: false,
      })
    };
    // ref() : 定义单个数据
    // let num=ref(1)
    // let str=ref('genggeng')
    // let arr=ref([1,2,4,5,6])
    // let obj=ref({name:'小仙女',age:18})
    // reactive({}) :定义多个数据   通常与toRefs()一起使用  使用toRefs结构出的数据不能与其他数据的名称相同
    // let data=reactive({
    //   name:'Amy',
    //   age:18,
    //   price:{
    //     car:0,
    //     money:'一毛'
    //   },
    //   sex:['女','or','男']
    // })
    return {
      list,
      add,
      // num,
      // str,
      // arr,
      // obj,
      // // data,
      // ...toRefs(data)
    };
  },
});
</script>

<style>
body {
  margin: 100px;
}
</style>
