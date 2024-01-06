<template>
  <div class="subscribe  d-flex justify-content-center">
    <div class="mail shadow-lg col-10 d-flex row align-items-center">
      <div class="col-8 d-flex align-items-center justify-content-between">
        <p>عضویت در خبرنامه</p>
        <i class="bi bi-mailbox"></i>
        <select aria-label="Default select example">
          <option selected>عمومی</option>
          <option value="1">همه</option>
        </select>
        <input
          type="text"
          placeholder="آدرس ایمیل خود را وارد نمایید"
        />
      </div>
      <div class="col-4 d-flex justify-content-evenly">
        <i class="bi bi-youtube"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-threads"></i>
        <i class="bi bi-twitter"></i>
      </div>
    </div>
  </div>
  <div
    class="footer mb-5 d-flex mt-5 pt-5 flex-column text-center justify-content-center"
  >
    <h1 class="mb-4">پیاده سازی توسط حمیدرضا عیدی</h1>
    <div class="mb-5">
      <p>لینکدین </p>
      <p>گیت هاب </p>
      <p>ایمیل </p>
      <p>وبسایت </p>
      <p>بلاگ </p>
    </div>
  </div>
</template>

<style scoped>
p{
  display: inline;
padding: 0px 40px;
}
</style>