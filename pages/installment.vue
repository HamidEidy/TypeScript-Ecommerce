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
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کا نرم افزارها شناخت
              بیشتری را برای طرا که تمام استفاده قرار گیرد.
            </p>
            <button class="number">021-4455</button>
            <button class="call">در تماس باشید</button>
          </div>
        </div>
        <div class="text-center mb-5">
          <h1>فروشگاه موبایل</h1>
          <nuxt-link class="text-center" to="/">بازگشت به صفحه اصلی </nuxt-link>
          <nuxt-link class="text-center" to="/Menu">صفحه فروشگاه </nuxt-link>
          <a class="text-center" href="https://github.com/HamidEidy"
            >درباره ما
          </a>
          <nuxt-link class="text-center" to="/">ورود و عضویت </nuxt-link>
          <nuxt-link class="text-center" to="/contact"> تماس با ما</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: false,
});
</script>