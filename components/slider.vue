<template>
  <div class="firstSection d-flex justify-content-center">
    <div class="col-10 row">
      <div class="row mt-4">
          <div class="slider1 col-8">
            <swiper-container class="mySwiper" scrollbar-hide="true">
              <swiper-slide><img src="../assets/1.webp" alt="" /></swiper-slide>
              <swiper-slide><img src="../assets/2.webp" alt="" /></swiper-slide>
              <swiper-slide><img src="../assets/3.webp" alt="" /></swiper-slide>
            </swiper-container>
          </div>
          <div class="mini col-4">
            <img id="img1" src="../assets/mini1.webp" alt="" />
            <img id="img2" src="../assets/mini2.webp" alt="" />
          </div>
        </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.slider1 {
  swiper-container {
    width: 100%;
    height: 50vh;
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
.mini {
  img {
    width: 100%;
    height: 23.5vh;
  }
  #img1 {
    margin-bottom: 3vh;
  }
}
img {
  border-radius: 10px;
}
</style>