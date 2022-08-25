import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    increment() {
      //화살표 함수를 쓰면 this. 에 접근할 수가 없다.
      this.counter++;
    },
  },
});
