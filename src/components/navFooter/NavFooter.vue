<template>
  <div class="footer">
    <div class="complete">已完成{{ isComplete }}/全部{{ list.length }}</div>
    <div v-if="isComplete > 0">
      <button class="clear_btn" @click="clear()">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'NavFooter',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    console.log(props.list);
    let store = useStore();
    let isComplete = computed(() => {
      let completeList = props.list.filter((item) => {
        return item.complete;
      });
      return completeList.length;
    });
    let unComplete = ref([]);
    watchEffect(() => {
      unComplete.value = props.list.filter((item) => {
        return !item.complete;
      });
    });
    watch(props.list, (newData, oldData) => {
      store.commit('setLocal', newData);
      unComplete.value = newData.filter((item) => {
        return !item.complete;
      });
    });
    console.log(unComplete.value);
    let clear = () => {
      store.commit('clear', unComplete.value);
    };
    return {
      isComplete,
      clear,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 30px;
  display: flex;
  font-size: 32px;
  justify-content: start;
  align-items: center;
}
.clear_btn {
  margin-left: 30px;
  height: 40px;
  width: 90px;
  font-size: 14px;
  font-weight: 600;
}
</style>
