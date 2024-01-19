<template>
    <h3>Right Component</h3>
    <p>Counter: {{ store.counter }}</p>
    <p>Double Counter: {{ store.doubleTheCounter }}</p>
</template>

<script setup lang="ts">
import { appStore } from '../store/app.store';

const store = appStore();
</script>