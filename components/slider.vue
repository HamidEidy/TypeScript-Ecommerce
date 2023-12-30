<template>
  <div class="firstSection">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="slider1">
     
        <swiper-container class="mySwiper" scrollbar-hide="true">
          <swiper-slide><img src="../assets/1.webp" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/2.webp" alt=""></swiper-slide>
          <swiper-slide><img src="../assets/3.webp" alt=""></swiper-slide>

        </swiper-container>
      </div>

  
    </div>
  </div>
  </div>
  <!-- <div class="slider3">
    <swiper-container class="mySwiper" effect="cards" grab-cursor="true">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper-container>
  </div> -->
</template>


<style scoped lang="scss">

.slider1 {
  padding: 20px;
  swiper-container {
    width: 100%;
    height: 70vh;

  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


.slider3 {
  swiper-container {
    width: 240px;
    height: 320px;
  }

  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
  }

  swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
  }

  swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
  }

  swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
  }

  swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
  }

  swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
  }

  swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }

  swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }

  swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }

  swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }
}
</style>