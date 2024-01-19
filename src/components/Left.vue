<template>
    <h3>Left Component</h3>
    <p>Counter: {{ store.counter }}</p>
    <button class="btn btn-primary me-3" @click="handleIncrement">Increment</button>
    <button class="btn btn-primary me-3" @click="handleDecrement">Decrement</button>
</template>

<script setup lang="ts">
import { appStore } from "../store/app.store";

const store = appStore();

const handleIncrement = () => {
    store.increment();
}

const handleDecrement = () => {
    store.decrement();
}
</script>
