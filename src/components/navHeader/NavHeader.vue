<template>
  <div>
    <input
      ref="input"
      type="text"
      placeholder="请输入任务"
      v-model="value"
      @keyup.enter="enter(value)"
    />
  </div>
</template>

<script>
import { defineComponent, isRef, ref } from 'vue';
export default defineComponent({
  name: 'NavHeader',
  setup(props, ctx) {
    let value = ref('');
    let enter = (val) => {
      // console.log(value);
      // console.log(ctx);
      ctx.emit('add', val);
      value.value=''
    };
    return {
      value,
      enter,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 400px;
  height: 40px;
  border: 3px solid;
  font-size: 20px;
  padding-left: 5px;
}
</style>
