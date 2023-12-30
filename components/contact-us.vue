<template>
  <div class="sugest d-flex justify-content-center">
    <div class="col-10 row align-items-center">
      <div class="col-5 text-center">
        <h6>ارتباط با ما</h6>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف به</p>
      </div>
      <div class="col-7 text-center">
        <div class="slider2">
          <swiper-container
            class="mySwiper"
            pagination="true"
            effect="cube"
            grab-cursor="true"
            cube-effect-shadow="true"
            cube-effect-slide-shadows="true"
            cube-effect-shadow-offset="20"
            cube-effect-shadow-scale="0.94"
          >
            <swiper-slide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </swiper-slide>
            <swiper-slide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.sugest{
    padding-top: 50px;
}
h6{
    font-size: 30px;
    color: #00a693;
    padding-top: 100px;
}
.slider2 {

  //position: relative;
 // display: flex;
 // justify-content: center;
  swiper-container {
    width: 500px;
    height: 300px;
  //  position: absolute;
    //  left: 50%;
    //  top: 15h;
    //  margin-left: -150px;
    //  margin-top: -150px;
  }

  swiper-slide {
    background-position: center;
    background-size: cover;
  }

  swiper-slide img {
    display: block;
    width: 100%;
  }
  
}
</style>