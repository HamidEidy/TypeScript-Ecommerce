<template>
  <NuxtLayout />
  <NuxtPage />
<NuxtLayout name="footer" />
</template>

<script setup lang="ts">
import {useCartStore} from "./store/count"
const state = useCartStore();

</script>