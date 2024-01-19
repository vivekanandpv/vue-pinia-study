import { defineStore } from "pinia";

export const appStore = defineStore("my-counter", {
  state() {
    return {
      counter: 99,
    };
  },
});
