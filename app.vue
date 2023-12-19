<template>
  <div>
    <h1>{{ state.coun }}</h1>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "./store/count"
const state = useCartStore();

</script>