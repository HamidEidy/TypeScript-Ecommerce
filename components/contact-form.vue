<template>
  <div class="contact-us">
    <div class="client d-flex justify-content-center mt-5">
      <div
        id="maps"
        class="map col-10 row align-items-center shadow-lg rounded"
      ></div>
    </div>
    <div class="client d-flex justify-content-center mt-5 mb-5">
      <div class="contact mb-4 col-10 row shadow-lg rounded">
        <form id="form" class="col-lg-7 col-sm-12">
          <h2>تماس با ما</h2>
          <p>نام و نام خانوادگی</p>
          <input
            v-model="name"
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد نمایید"
          />
          <p>آدرس ایمیل</p>
          <input
            v-model="email"
            type="text"
            placeholder="آدرس ایمیل خود را وارد نمایید"
          />
          <p>شماره تماس</p>
          <input
            v-model="number"
            type="text"
            placeholder="شماره تماس خود را وارد نمایید"
          />
          <p>پیام شما</p>
          <textarea
            v-model="text"
            type="text"
            placeholder="پیام خود را برای ما بنویسید"
          />
          <p id="btn" @click="sendMessage()">ارسال پیام</p>
        </form>
        <div class="col-lg-5 d-none d-lg-block pt-5">
          <p>آدرس ایمیل: <b class="number"> hamidreza.eidy1999@gmail.com</b></p>
          <p>
            پشتیبانی :
            <b class="number"> 02155225522</b>
          </p>
          <p>
            پیشنهادات و انتقادات :
            <b class="number"> داخلی 100 </b>
          </p>
          <p>
            <b>آدرس دفتر مرکزی : تهران، ولیعصر</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
const name = ref<string>("");
const email = ref<string>("");
const number = ref<string>("");
const text = ref<string>("");
const sendMessage = (): any => name.value && email.value && number.value && text.value ? (name.value = email.value = number.value = text.value = "", toast.success("پیام شما ارسال شد")) : toast.error("تمامی فیلد هارا وارد کنید");



const { $leaflet } = useNuxtApp();
onMounted(() => {
  let map = $leaflet.map("maps").setView([35.700105, 51.400394], 14);

  // let tiles = $leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  //     maxZoom: 18,
  //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  //         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //     id: 'mapbox/streets-v11',
  //     tileSize: 512,
  //     zoomOffset: -1
  // }).addTo(map);

  let tiles = $leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    })
    .addTo(map);

  let marker = $leaflet
    .marker([35.700105, 51.400394], {
      icon: $leaflet.icon({
        popupAnchor: [12, 6],
        iconUrl: "/map/marker-icon.png",
        shadowUrl: "/map/marker-shadow.png",
      }),
    })
    .addTo(map);
});
</script>

<style lang="scss" scoped>
</style>