<script setup lang="ts">
import Left from './components/Left.vue';
import Right from './components/Right.vue'
</script>

<template>
  <div class="p-5">
    <h2>App Component</h2>

    <hr>

    <div class="row">
      <div class="col">
        <Left />
      </div>
      <div class="col">
        <Right />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
