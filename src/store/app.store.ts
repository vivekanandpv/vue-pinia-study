import { defineStore } from "pinia";

export const appStore = defineStore("my-counter", {
  state() {
    return {
      counter: 99,
      user: {
        fullName: "John Doe",
        role: ["admin", "manager"],
        avatarUrl:
          "https://gravatar.com/avatar/a79192cd5c9800b2cf6eb190dd00e155?s=400&d=robohash&r=x",
      },
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    changeUserFirstName(newFirstName: string) {
      this.user.fullName = newFirstName;
    },
  },
  getters: {
    // doubleTheCounter(state) {
    //   return state.counter * 2;
    // },
    doubleTheCounter: (state) => state.counter * 2,
  },
});
