<template>
  <NuxtLayout />
  <NuxtPage />
<!-- <NuxtLayout class="footerlayout" name="footer"/> -->
</template>

<script setup>
import {useCartStore} from "./store/count"
const state = useCartStore();
// const { path } = useRoute();

// console.log(path);


//  onMounted(() =>{

//   if (path === '/installment') {
//     document.querySelector('.subscribe').style.display = 'none'
// }else{
//   element.style.display = 'block';
// }
//  })


</script>