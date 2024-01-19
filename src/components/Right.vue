<template>
    <h3>Right Component</h3>
    <p>Counter: {{ store.counter }}</p>
    <p>Double Counter: {{ store.doubleTheCounter }}</p>

    <hr>
    <button class="btn btn-primary mb-3" @click="changeFirstName">Change User First Name</button>
    <div class="card" style="width: 18rem;">
        <img :src="store.user.avatarUrl" class="card-img-top" alt="Avatar">
        <div class="card-body">
            <h5 class="card-title">{{ store.user.fullName }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { appStore } from '../store/app.store';

const store = appStore();

const changeFirstName = () => {
    store.changeUserFirstName('Mark Matthews');
}
</script>