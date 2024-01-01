<template>
  <div class="client d-flex justify-content-center mt-5">
    <div
      id="maps"
      class="map col-9 row align-items-center shadow-lg rounded"
    ></div>
  </div>
  <div class="client d-flex justify-content-center mt-5 mb-5">
    <div class="contact col-9 row align-items-center shadow-lg rounded">
      <div class="col-7">
        <h2>تماس با ما</h2>
        <p>نام و نام خانوادگی</p>
        <input type="text" placeholder="نام و نام خانوادگی خود را وارد نمایید" />
        <p>آدرس ایمیل</p>
        <input type="text" placeholder="آدرس ایمیل خود را وارد نمایید" />
        <p>تلفن همراه</p>
        <input type="text" placeholder="شماره خود را وارد کنید" />
        <p>پیام شما</p>
        <textarea type="text" placeholder="پیام خود را برای ما بنویسید" />
        <p id="btn">ارسال پیام</p>
      </div>
      <div class="col-5">
        <p>    آدرس ایمیل : hamidreza.eidy1999@gmail.com</p>
        <p>پشتیبانی : 02155225522</p>
        <p>پیشنهادات و انتقادات : داخلی 100</p>
        <p>آدرس دفتر مرکزی : تهران، ولیعصر</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#btn{
  background-color: #00a693 ;
  width: 120px;
  font-size: 20px;
text-align: center;
padding: 5px 15px;
border-radius: 10px;
}
.map {
  height: 30vh;
}
.contact {
padding: 50px 10px;

}
</style>

<script setup>
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
p{
  margin-top: 30px;
}
input {
  width: 450px;
  height: 37px;
  border-radius: 18px;
  border: none;
  padding-right: 17px;
  font-size: 13px;

  font-family: "Yekan";
  background-color: #737373;
}
textarea{
  border-radius: 18px;
  border: none;
  padding-right: 10px;
  font-size: 13px;
  width: 450px;
  font-family: "Yekan";
  background-color: #737373;
}
input:focus{
  outline: none;
}
</style>