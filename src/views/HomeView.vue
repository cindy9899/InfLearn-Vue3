<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
</template>

<script setup>
import router from '../router';

const goAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
