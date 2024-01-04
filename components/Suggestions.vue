<template>
  <div class="sugest d-flex justify-content-center mt-5">
    <div class="col-lg-6 col-sm-12 row align-items-center">
      <div class="col-lg-6 col-sm-12 text-center">
        <h1>محصولات پیشنهادی</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف به
        </p>
      </div>
      <div class="col-lg-6 col-sm-12 text-end">
        <swiper-container class="mySwiper" pagination="true" effect="cube" grab-cursor="true" cube-effect-shadow="true"
        cube-effect-slide-shadows="true" cube-effect-shadow-offset="20" cube-effect-shadow-scale="0.94">
        
        <swiper-slide>
          <img src="/suggest/_1a2c1f09-67e0-4152-95b1-d0e707f71dba.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/suggest/_8807530b-4609-4c96-aa40-090fd7a17a46.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/suggest/_8bedd4b3-c1fb-4718-8181-e33c8c3bf3e3.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="/suggest/_9eab0aa9-cc69-4a47-a013-9c48f6045b5a.jpeg" />
        </swiper-slide>
      </swiper-container>
      </div>
    </div>
  </div>
</template>
<style scoped>


</style>


<script setup>
const {data} = await useFetch('https://typeecomapi.hamideidy.ir/api/random-products?count=4');

</script>