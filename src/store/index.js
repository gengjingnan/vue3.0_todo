import { createStore } from 'vuex';

export default createStore({
  // state:定义所需要的状态
  state: {
    list: JSON.parse(localStorage.getItem('todo')) || [
      {
        title: '吃饭',
        complete: false,
      },
      {
        title: '敲代码',
        complete: false,
      },
      {
        title: '睡觉',
        complete: true,
      },
      {
        title: '发呆',
        complete: true,
      },
    ],
  },
  // mutations:同步修改state 都是方法
  // 第一个参数state是修改的参数,第二个参数是需要修改的值
  mutations: {
    addTodo(state, payload) {
      // 添加任务  payload为需要添加的数据
      state.list.push(payload);
      localStorage.setItem('todo', JSON.stringify(state.list));
    },
    delTodo(state, payload) {
      // 删除任务  payload为需要删除的下标
      state.list.splice(payload, 1);
      localStorage.setItem('todo', JSON.stringify(state.list));
    },
    clear(state, payload) {
      // 过滤后的数组传进来
      state.list = payload;
      localStorage.setItem('todo', JSON.stringify(state.list));
    },
    setLocal(state, payload) {
      localStorage.setItem('todo', JSON.stringify(payload));
    }
  },
  // actions异步提交mutation
  // 第一个参数是store,第二个参数是需要修改的值
  actions: {},
  // modules:模块化
  modules: {},
});
