import { defineStore } from "pinia";

export const appStore = defineStore("my-counter", {
  state() {
    return {
      counter: 99,
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
  getters: {
    // doubleTheCounter(state) {
    //   return state.counter * 2;
    // },
    doubleTheCounter: (state) => state.counter * 2,
  },
});
