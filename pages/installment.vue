<template>
  <div class="installment">
     <img src="/bg-header.webp" class="bg-img" alt="" />
    <div class="d-flex flex-column align-items-center head">
      <div class="d-flex flex-column col-10 justify-content-between">
        <div class="btns">
          <h4>
            فروش اقساطی محصولات
            <br />
            فروشگاه برای تمام ایران
          </h4>
          <p>با خرید اقساطی #یهویی_نده</p>
          <i class="bi bi-arrow-down-circle-fill"></i>
        </div>
        <div class="content d-flex align-items-center">
          <div class="col-5">
            <img
              id="installpic"
              src="/image-from-rawpixel-id-6262392-png.png"
              alt=""
            />
          </div>
          <div class="col-6">
            <h3>شرایط خرید اقساطی</h3>
            <p class="text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کا نرم افزارها شناخت بیشتری را برای
              طرا که تمام استفاده قرار گیرد.
            </p>
            <button class="number">021-4455</button>
            <button class="call">در تماس باشید</button>
       
          </div>
          
        </div>
          <nuxt-link class="text-center" to="/">بازگشت به صفحه اصلی </nuxt-link>
        </div>

      </div>
   
  </div>
</template>


<style scoped lang="scss">
.bg-img{
  margin-top: -390px;
  position: relative;
}
.head{
  background-color: #fbfbfb;
}
  a{

    font-size: 20px;
    margin-bottom: 100px;
  }

button{
  border: none;
  height: 50px;
  padding: 0px 30px;
  border-radius: 10px;
  margin: 5px
}
.number{
  font-size: 25px;
  color: #fff;
  background-color: #f44485;
}
.call{
  background-color: #fcf2f7;
  color: #f44485 !important;
}
h3{
  font-size: 23px;
  font-weight: 800;
  display: block;
  color: #f44485;
  margin-bottom: 20px;
}
.text{
  font-size: 18px;
  font-weight: 300;
  color: #6c6b6b;
  display: block;
  text-align-last: right;
  text-align: justify;
  line-height: 36px;
  margin-bottom: 20px;
}
.content {
  background-color: #fbfbfb;
}
img {
  margin-top: -300px;
}
#installpic {
  max-width: 100%;
  margin-top: 50px;
}
.btns {
  z-index: 1;
  color: aliceblue;
  margin: 120px 180px 0px 0px;
  position: absolute;
  top: 0;
  h4 {
    font-size: 40px;
    font-weight: 900;
  }
  p {
    margin: 22px 0px;
    background-color: #1fcf8e;
    box-shadow: 0 20px 60px 0 rgba(31, 207, 142, 0.6);
    padding: 10px 50px;
    border-radius: 10px;
    width: fit-content;
    font-size: 25px;
    font-weight: 800;
  }
  i {
    font-size: 60px;
  }
}
</style>

<script>
definePageMeta({
  layout: false,
  
});


</script>