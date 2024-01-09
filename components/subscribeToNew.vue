<template>
  <div class="subscribe d-flex justify-content-center">
    <div class="mail d-flex flex-row-column row shadow-lg col-10 text-center align-items-center">

 
        <p class="col-lg-2 col-sm-12">عضویت در خبرنامه</p>


<div class="inputcontainer col-lg-6 col-sm-12">
        <input
          type="text"
          placeholder="آدرس ایمیل خود را وارد نمایید"
          v-model="mail"
        />
        <i class="bi bi-mailbox" @click="send()"></i>
        <select aria-label="Default select example">
          <option selected>عمومی</option>
          <option value="1">همه</option>
        </select>
      </div>



        <div class="col-1 d-none d-lg-block"></div>

        <div class=" col-lg-3 col-sm-12 d-flex justify-content-evenly">
          <i class="bi bi-youtube"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-threads"></i>
          <i class="bi bi-twitter"></i>
        </div>


    </div>
  </div>
  <div
    class="footer d-flex mt-2 pt-5 flex-column text-center justify-content-center"
  >
    <h1>پیاده سازی توسط حمیدرضا عیدی</h1>
    <div>
      <a href="https://www.linkedin.com/in/hamidrezaeidy/">لینکدین </a>
      <a href="https://github.com/HamidEidy">گیت هاب </a>
      <a href="mailto:hamidreza.eidy1999@gmail.com">ایمیل </a>
      <a href="http://hamideidy.ir/">وبسایت </a>
      <a href="https://blog.hamideidy.ir/">بلاگ </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
const mail = ref<string>('')
const send = () => mail.value ? (mail.value = '', toast.success("ایمیل شما اضافه شد")) : toast.error("لطفا ایمیل خود را وارد کنید")

</script>
